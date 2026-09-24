'use client'

import { useEffect, useId, useRef, useState, type ComponentPropsWithoutRef, type FormEvent } from 'react'
import Button from '@/components/ui/Button'
import Icon from '@/components/ui/Icon'
import { type } from '@/components/ui/tokens'
import { contacts, getProduct, purposes, settings, tracks } from '@/content/site'
import type { Purpose, Setting, TrackKey } from '@/content/types'
import { cn } from '@/lib/cn'
import { contactSchema } from '@/lib/contactSchema'
import { sendContact } from '@/lib/sendContact'

interface ContactFormProps {
  /** Path of the page the form lives on; sent with the message. */
  source: string
  defaultPurpose?: Purpose
  defaultTrack?: TrackKey
  defaultSetting?: Setting
  /** Product slug attached by a "Request a quote" link. */
  product?: string
  /** Ask "Who is this for?" (hospital or home). Off for forms where it makes no sense, like volunteering. */
  askTrack?: boolean
  heading?: string
  className?: string
}

type FieldName = 'track' | 'setting' | 'purpose' | 'name' | 'email' | 'phone' | 'organization' | 'message'
type Errors = Partial<Record<FieldName, string>>
type Status = 'idle' | 'submitting' | 'success' | 'error'

const fieldOrder: FieldName[] = ['track', 'setting', 'purpose', 'name', 'email', 'phone', 'organization', 'message']
const trackKeys: TrackKey[] = ['hospital', 'home']

const inputClass =
  'w-full rounded-xl border border-brand-line bg-white px-4 py-3 text-brand-black placeholder:text-brand-gray/70 aria-[invalid=true]:border-brand-red'
const labelClass = 'mb-2 block text-sm font-medium text-brand-black'
const errorClass = 'mt-2 text-sm text-brand-red'

function purposesFor(track: TrackKey | '') {
  return purposes.filter((p) => !p.tracks || !track || p.tracks.includes(track))
}

export default function ContactForm({
  source,
  defaultPurpose,
  defaultTrack,
  defaultSetting,
  product: initialProduct,
  askTrack = true,
  heading,
  className,
}: ContactFormProps) {
  const uid = useId()
  const id = (name: string) => `${uid}-${name}`

  const [track, setTrack] = useState<TrackKey | ''>(defaultTrack ?? '')
  const [setting, setSetting] = useState<Setting | ''>(defaultSetting ?? '')
  const [forFamilyMember, setForFamilyMember] = useState(false)
  const [purpose, setPurpose] = useState<Purpose | ''>(defaultPurpose ?? '')
  const [fields, setFields] = useState({ name: '', email: '', phone: '', organization: '', message: '' })
  const [product, setProduct] = useState(initialProduct ?? '')
  const [website, setWebsite] = useState('') // honeypot
  const [errors, setErrors] = useState<Errors>({})
  const [status, setStatus] = useState<Status>('idle')
  const [serverError, setServerError] = useState<string | null>(null)
  const [failedAttempts, setFailedAttempts] = useState(0)
  const summaryRef = useRef<HTMLDivElement>(null)

  // After a failed submit, move focus to the error summary once it has rendered.
  useEffect(() => {
    if (failedAttempts > 0) summaryRef.current?.focus()
  }, [failedAttempts])

  const productInfo = product ? getProduct(product) : undefined
  const visiblePurposes = purposesFor(track)

  function clearError(name: FieldName) {
    setErrors((current) => {
      if (!current[name]) return current
      const next = { ...current }
      delete next[name]
      return next
    })
  }

  function updateField(name: keyof typeof fields, value: string) {
    setFields((current) => ({ ...current, [name]: value }))
    clearError(name)
  }

  function chooseTrack(key: TrackKey) {
    setTrack(key)
    clearError('track')
    if (purpose && !purposesFor(key).some((p) => p.value === purpose)) setPurpose('')
  }

  function payload() {
    return {
      track: track || undefined,
      purpose: purpose || undefined,
      setting: track === 'hospital' && setting ? setting : undefined,
      forFamilyMember: track === 'home' ? forFamilyMember : false,
      ...fields,
      product,
      source,
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (website) {
      setStatus('success') // a bot filled the hidden field; pretend it worked and send nothing
      return
    }
    const parsed = contactSchema.safeParse(payload())
    const next: Errors = {}
    if (!parsed.success) {
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as FieldName | undefined
        if (key && !next[key]) next[key] = issue.message
      }
    }
    if (askTrack && !track) next.track = 'Please tell us who this is for.'
    if (!parsed.success || Object.keys(next).length > 0) {
      setErrors(next)
      setFailedAttempts((count) => count + 1)
      return
    }

    setStatus('submitting')
    setServerError(null)
    try {
      await sendContact(parsed.data)
      setStatus('success')
    } catch (error) {
      setServerError(error instanceof Error ? error.message : 'We could not send your message.')
      setStatus('error')
    }
  }

  if (status === 'success') {
    const firstName = fields.name.trim().split(/\s+/)[0]
    return (
      <div role="status" className={cn('rounded-2xl border border-brand-line bg-white p-8', className)}>
        <span aria-hidden="true" className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-red text-white">
          <Icon name="check" />
        </span>
        <h3 className={cn(type.h3, 'mt-5 text-brand-black')}>Thanks{firstName ? `, ${firstName}` : ''}. We have your message.</h3>
        <p className={cn(type.body, 'mt-3')}>
          {contacts.responseTime} If it is urgent, email{' '}
          <a href={`mailto:${contacts.emailGeneral}`} className="font-medium text-brand-red underline-offset-4 hover:underline">
            {contacts.emailGeneral}
          </a>
          .
        </p>
      </div>
    )
  }

  const errorList = fieldOrder.filter((name) => errors[name])

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className={cn('relative rounded-2xl border border-brand-line bg-white p-6 sm:p-8', className)}
      aria-describedby={id('note')}
    >
      {heading && <h3 className={cn(type.h3, 'mb-6 text-brand-black')}>{heading}</h3>}

      {errorList.length > 0 && (
        <div ref={summaryRef} tabIndex={-1} role="alert" className="mb-6 rounded-xl border border-brand-red bg-brand-red/5 p-4">
          <p className="font-semibold text-brand-black">Please check {errorList.length === 1 ? 'this field' : 'these fields'}:</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-brand-black">
            {errorList.map((name) => (
              <li key={name}>
                <a href={`#${id(name)}`} className="underline underline-offset-2 hover:text-brand-red">
                  {errors[name]}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      {status === 'error' && (
        <div role="alert" className="mb-6 rounded-xl border border-brand-red bg-brand-red/5 p-4 text-sm text-brand-black">
          <p className="font-semibold">We could not send your message.</p>
          <p className="mt-1">
            {serverError} Please email us directly at{' '}
            <a href={`mailto:${contacts.emailGeneral}`} className="underline underline-offset-2">
              {contacts.emailGeneral}
            </a>
            .
          </p>
        </div>
      )}

      <div className="space-y-6">
        {askTrack && (
        <div>
          <p id={id('track-label')} className={labelClass}>
            Who is this for? <span className="text-brand-red" aria-hidden="true">*</span>
          </p>
          <div
            id={id('track')}
            role="radiogroup"
            aria-labelledby={id('track-label')}
            aria-required="true"
            aria-describedby={errors.track ? id('track-error') : undefined}
            className="grid gap-3 sm:grid-cols-2"
          >
            {trackKeys.map((key) => {
              const option = tracks[key]
              const checked = track === key
              return (
                <label
                  key={key}
                  className={cn(
                    'flex cursor-pointer items-start gap-3 rounded-xl border p-4 transition-colors',
                    checked ? 'border-brand-red bg-brand-red/5' : 'border-brand-line hover:border-brand-gray',
                  )}
                >
                  <input
                    type="radio"
                    name="track"
                    value={key}
                    checked={checked}
                    onChange={() => chooseTrack(key)}
                    className="mt-1 h-4 w-4 accent-brand-red"
                  />
                  <span>
                    <span className="block font-medium text-brand-black">{option.label}</span>
                    <span className="block text-sm text-brand-gray">
                      {key === 'hospital' ? 'Hospitals, rehabilitation, skilled nursing, hospitality' : 'Your home, or a family member’s'}
                    </span>
                  </span>
                </label>
              )
            })}
          </div>
          {errors.track && (
            <p id={id('track-error')} className={errorClass}>
              {errors.track}
            </p>
          )}
        </div>
        )}

        {track === 'hospital' && (
          <div>
            <label htmlFor={id('setting')} className={labelClass}>
              What kind of facility? <span className="font-normal text-brand-gray">(optional)</span>
            </label>
            <select id={id('setting')} name="setting" value={setting} onChange={(e) => setSetting(e.target.value as Setting | '')} className={inputClass}>
              <option value="">Choose one</option>
              {settings.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        )}

        {track === 'home' && (
          <label className="flex items-start gap-3 rounded-xl border border-brand-line p-4">
            <input
              type="checkbox"
              name="forFamilyMember"
              checked={forFamilyMember}
              onChange={(e) => setForFamilyMember(e.target.checked)}
              className="mt-1 h-4 w-4 accent-brand-red"
            />
            <span className="text-sm text-brand-black">This is for a family member</span>
          </label>
        )}

        <div>
          <label htmlFor={id('purpose')} className={labelClass}>
            How can we help? <span className="text-brand-red" aria-hidden="true">*</span>
          </label>
          <select
            id={id('purpose')}
            name="purpose"
            required
            value={purpose}
            onChange={(e) => {
              setPurpose(e.target.value as Purpose | '')
              clearError('purpose')
            }}
            aria-invalid={errors.purpose ? true : undefined}
            aria-describedby={errors.purpose ? id('purpose-error') : undefined}
            className={inputClass}
          >
            <option value="">Choose one</option>
            {visiblePurposes.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          {errors.purpose && (
            <p id={id('purpose-error')} className={errorClass}>
              {errors.purpose}
            </p>
          )}
        </div>

        {productInfo && (
          <div className="flex items-center justify-between gap-4 rounded-xl bg-brand-cream px-4 py-3 text-sm">
            <span className="text-brand-black">
              About: <strong>{productInfo.name}</strong>
            </span>
            <button type="button" onClick={() => setProduct('')} className="inline-flex items-center gap-1 rounded-md text-brand-gray hover:text-brand-red">
              <Icon name="close" className="h-4 w-4" />
              Remove<span className="sr-only"> {productInfo.name}</span>
            </button>
          </div>
        )}

        <div className="grid gap-6 sm:grid-cols-2">
          <TextField
            id={id('name')}
            label="Your name"
            name="name"
            autoComplete="name"
            required
            value={fields.name}
            onChange={(e) => updateField('name', e.target.value)}
            error={errors.name}
          />
          <TextField
            id={id('email')}
            label="Email"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={fields.email}
            onChange={(e) => updateField('email', e.target.value)}
            error={errors.email}
          />
          <TextField
            id={id('phone')}
            label="Phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            optional
            value={fields.phone}
            onChange={(e) => updateField('phone', e.target.value)}
            error={errors.phone}
          />
          <TextField
            id={id('organization')}
            label={track === 'home' ? 'Who will use the system?' : 'Organization'}
            name="organization"
            autoComplete={track === 'home' ? 'off' : 'organization'}
            optional
            value={fields.organization}
            onChange={(e) => updateField('organization', e.target.value)}
            error={errors.organization}
          />
        </div>

        <div>
          <label htmlFor={id('message')} className={labelClass}>
            Message <span className="text-brand-red" aria-hidden="true">*</span>
          </label>
          <textarea
            id={id('message')}
            name="message"
            rows={5}
            required
            value={fields.message}
            onChange={(e) => updateField('message', e.target.value)}
            aria-invalid={errors.message ? true : undefined}
            aria-describedby={errors.message ? id('message-error') : undefined}
            className={cn(inputClass, 'resize-y')}
            placeholder={
              track === 'home'
                ? 'Tell us about the home and the person who will use the system.'
                : 'Tell us about your facility, the rooms and the systems you run.'
            }
          />
          {errors.message && (
            <p id={id('message-error')} className={errorClass}>
              {errors.message}
            </p>
          )}
        </div>

        {/* Honeypot: hidden from people, tempting to bots. */}
        <div className="absolute -left-[9999px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
          <label htmlFor={id('website')}>Website</label>
          <input id={id('website')} name="website" type="text" tabIndex={-1} autoComplete="off" value={website} onChange={(e) => setWebsite(e.target.value)} />
        </div>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <Button type="submit" size="lg" disabled={status === 'submitting'} className="sm:min-w-[12rem]">
            {status === 'submitting' ? 'Sending…' : 'Send message'}
          </Button>
          <p id={id('note')} className="text-sm text-brand-gray">
            {contacts.responseTime} We use your details only to reply.
          </p>
        </div>
      </div>
    </form>
  )
}

type TextFieldProps = {
  id: string
  label: string
  error?: string
  optional?: boolean
} & Omit<ComponentPropsWithoutRef<'input'>, 'id' | 'className'>

function TextField({ id, label, error, optional, ...input }: TextFieldProps) {
  return (
    <div>
      <label htmlFor={id} className={labelClass}>
        {label}{' '}
        {optional ? (
          <span className="font-normal text-brand-gray">(optional)</span>
        ) : (
          <span className="text-brand-red" aria-hidden="true">
            *
          </span>
        )}
      </label>
      <input id={id} aria-invalid={error ? true : undefined} aria-describedby={error ? `${id}-error` : undefined} className={inputClass} {...input} />
      {error && (
        <p id={`${id}-error`} className={errorClass}>
          {error}
        </p>
      )}
    </div>
  )
}
