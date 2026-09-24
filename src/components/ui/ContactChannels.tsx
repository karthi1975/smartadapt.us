import type { ReactNode } from 'react'
import { contacts } from '@/content/site'
import { cn } from '@/lib/cn'

type Channel = 'email' | 'support-email' | 'phone' | 'address' | 'hours' | 'response'

interface ContactChannelsProps {
  channels?: Channel[]
  className?: string
}

/** Contact details from the content module. A channel the client has not supplied is simply not shown. */
export default function ContactChannels({
  channels = ['email', 'support-email', 'phone', 'address', 'hours', 'response'],
  className,
}: ContactChannelsProps) {
  const linkClass = 'font-medium text-brand-black underline-offset-4 hover:text-brand-red hover:underline on-dark:text-white'

  const rows: { key: Channel; label: string; value: ReactNode }[] = []
  for (const channel of channels) {
    switch (channel) {
      case 'email':
        rows.push({ key: channel, label: 'Email', value: <a className={linkClass} href={`mailto:${contacts.emailGeneral}`}>{contacts.emailGeneral}</a> })
        break
      case 'support-email':
        if (contacts.emailSupport) {
          rows.push({ key: channel, label: 'Support', value: <a className={linkClass} href={`mailto:${contacts.emailSupport}`}>{contacts.emailSupport}</a> })
        }
        break
      case 'phone':
        if (contacts.phone) {
          rows.push({ key: channel, label: 'Phone', value: <a className={linkClass} href={contacts.phone.href}>{contacts.phone.display}</a> })
        }
        break
      case 'address':
        if (contacts.address) rows.push({ key: channel, label: 'Address', value: contacts.address })
        break
      case 'hours':
        if (contacts.hours) rows.push({ key: channel, label: 'Hours', value: contacts.hours })
        break
      case 'response':
        rows.push({ key: channel, label: 'Response', value: contacts.responseTime })
        break
    }
  }

  return (
    <dl className={cn('divide-y divide-brand-line', className)}>
      {rows.map((row) => (
        <div key={row.key} className="flex gap-6 py-4">
          <dt className="w-24 shrink-0 text-xs font-semibold uppercase tracking-[0.14em] text-brand-gray on-dark:text-brand-cream/70">{row.label}</dt>
          <dd className="text-brand-gray on-dark:text-brand-cream/80">{row.value}</dd>
        </div>
      ))}
    </dl>
  )
}
