import type { Metadata } from 'next'
import PageHero from '@/components/sections/PageHero'

export const metadata: Metadata = { title: 'Page not found' }

export default function NotFound() {
  return (
    <PageHero
      eyebrow="404"
      title="We can’t find that page"
      lead="The link may be out of date, or the page may have moved."
      actions={[
        { label: 'Go to the homepage', href: '/' },
        { label: 'Contact us', href: '/contact' },
      ]}
    />
  )
}
