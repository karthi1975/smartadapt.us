import { families } from './products'
import type { NavItem, NavLink } from './types'

const family = (slug: string): NavLink => {
  const f = families.find((p) => p.slug === slug)
  if (!f) throw new Error(`Unknown product family: ${slug}`)
  return { label: f.name, href: f.route }
}

export const nav = {
  primary: [
    { label: 'Home', href: '/' },
    {
      label: 'Solutions',
      children: [family('smart-hospital'), family('smart-home'), family('active-living'), family('devices')],
    },
    {
      label: 'About',
      children: [
        { label: 'Our Story', href: '/about' },
        { label: 'Research', href: '/research' },
        { label: 'Community Program', href: '/community' },
      ],
    },
    { label: 'Services', href: '/services' },
    { label: 'Support', href: '/support' },
  ] satisfies NavItem[],
  cta: { label: 'Contact Us', href: '/contact' } satisfies NavLink,
  footer: [
    {
      heading: 'Solutions',
      items: [family('smart-hospital'), family('smart-home'), family('active-living'), family('devices')],
    },
    {
      heading: 'Company',
      items: [
        { label: 'Our Story', href: '/about' },
        { label: 'Research', href: '/research' },
        { label: 'Community Program', href: '/community' },
        { label: 'Services', href: '/services' },
      ],
    },
    {
      heading: 'Help',
      items: [
        { label: 'Support', href: '/support' },
        { label: 'Contact', href: '/contact' },
      ],
    },
  ],
}

/** Every public route, used by the sitemap and metadata. */
export const routes = [
  '/',
  '/smart-hospital',
  '/smart-home',
  '/active-living',
  '/devices',
  '/about',
  '/research',
  '/community',
  '/services',
  '/support',
  '/contact',
] as const

export type Route = (typeof routes)[number]
