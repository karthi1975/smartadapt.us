'use client'

import { useSearchParams } from 'next/navigation'
import { PURPOSE_VALUES, SETTING_VALUES, TRACK_VALUES } from '@/lib/contactSchema'
import ContactForm from './ContactForm'

function pick<T extends readonly string[]>(value: string | null, allowed: T): T[number] | undefined {
  return value && (allowed as readonly string[]).includes(value) ? (value as T[number]) : undefined
}

/**
 * Reads ?purpose, ?track, ?setting and ?product from the URL so links like
 * "Request a quote" arrive pre-filled. Render inside <Suspense>.
 */
export default function ContactFormFromQuery({ source }: { source: string }) {
  const params = useSearchParams()
  const purpose = pick(params.get('purpose'), PURPOSE_VALUES)
  const track = pick(params.get('track'), TRACK_VALUES)
  const setting = pick(params.get('setting'), SETTING_VALUES)
  const product = params.get('product') ?? undefined
  const impliedTrack = purpose === 'demo' ? 'hospital' : purpose === 'assessment' ? 'home' : undefined

  return (
    <ContactForm
      key={`${purpose ?? ''}-${track ?? ''}-${product ?? ''}`}
      source={source}
      defaultPurpose={purpose}
      defaultTrack={track ?? impliedTrack}
      defaultSetting={setting}
      product={product}
    />
  )
}
