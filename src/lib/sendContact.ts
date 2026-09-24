import { contacts, getProduct, purposeLabel, settingLabel, trackLabel } from '@/content/site'
import type { ContactData } from './contactSchema'

/**
 * Sends a validated contact submission straight from the browser to Formspree.
 * The site is static (no server of its own), and Formspree is built for this.
 * See FORMS.md.
 */

const formId = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID || contacts.formspreeFormId

/** Local development: set NEXT_PUBLIC_CONTACT_DRY_RUN=1 in .env.local to log instead of send. */
const dryRun = process.env.NEXT_PUBLIC_CONTACT_DRY_RUN === '1'

/** Builds the subject line and the labelled fields that appear in the email. */
export function composeContact(data: ContactData): { subject: string; fields: Record<string, string> } {
  const product = data.product ? getProduct(data.product) : undefined
  const forLabel = data.track ? trackLabel(data.track) : undefined
  const subject = ['[Tetradapt]', purposeLabel(data.purpose), forLabel, product?.name].filter(Boolean).join(' – ')

  const fields: Record<string, string> = {
    name: data.name,
    email: data.email, // Formspree uses this as the reply-to address
    Reason: purposeLabel(data.purpose),
    For: forLabel ?? 'Not specified',
  }
  if (data.setting) fields['Facility type'] = settingLabel(data.setting)
  if (data.track === 'home') fields['For a family member'] = data.forFamilyMember ? 'Yes' : 'No'
  if (product) fields.Product = product.name
  if (data.phone) fields.Phone = data.phone
  if (data.organization) fields[data.track === 'home' ? 'Who will use it' : 'Organization'] = data.organization
  if (data.source) fields['Source page'] = data.source
  fields.message = data.message

  return { subject, fields }
}

/** Resolves when Formspree accepts the submission; throws with a visitor-friendly message otherwise. */
export async function sendContact(data: ContactData): Promise<void> {
  const { subject, fields } = composeContact(data)

  if (dryRun) {
    console.info('[contact] dry run, not sent', { subject, ...fields })
    return
  }
  if (!formId) throw new Error('The contact form is not configured yet.')

  let response: Response
  try {
    response = await fetch(`https://formspree.io/f/${encodeURIComponent(formId)}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({ _subject: subject, ...fields }),
    })
  } catch {
    throw new Error('We could not reach our form service. Please check your connection and try again.')
  }

  if (!response.ok) {
    const body = (await response.json().catch(() => ({}))) as { error?: string; errors?: { message?: string }[] }
    console.error('Formspree rejected the submission', response.status, body)
    throw new Error('We could not send your message right now.')
  }
}
