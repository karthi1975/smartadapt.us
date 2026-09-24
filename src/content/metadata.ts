import type { Metadata } from 'next'
import type { Route } from './nav'

export const pages: Record<Route, { title: string; description: string }> = {
  '/': {
    title: 'Tetradapt',
    description:
      'Patient-controlled hospital rooms and homes for people living with spinal cord injury, brain injury and the effects of aging. Proven at the Craig H. Neilsen Rehabilitation Hospital, University of Utah Health.',
  },
  '/smart-hospital': {
    title: 'Smart Hospital',
    description:
      'Patient-controlled rooms for rehabilitation and acute care: voice, touch, breath and adaptive control of the whole room, integrated with Epic, nurse call, beds and RTLS.',
  },
  '/smart-home': {
    title: 'Smart Home',
    description:
      'The same independence, at home. Voice and adaptive control of lights, climate, entertainment, doors and calls, with support and patient education built in.',
  },
  '/active-living': {
    title: 'Active Living Modules',
    description:
      'Software modules for patients and care teams: education, reminders, buddy calls, pressure tracking, feedback, requests and clinical protocols.',
  },
  '/devices': {
    title: 'Smart Devices',
    description:
      'Tetradapt hardware: presence and fall detection sensors, enterprise Bluetooth, standalone voice, a sip-and-puff interface, and controllers for elevators, powered doors and beds.',
  },
  '/about': {
    title: 'Our Story',
    description:
      'Tetradapt began in 2008 with Dr. Jeffrey Rosenbluth and the University of Utah. Today its patient-controlled rooms run at the Craig H. Neilsen Rehabilitation Hospital.',
  },
  '/research': {
    title: 'Research',
    description:
      'Peer-reviewed research from the University of Utah PEDEL lab on smart hospital rooms, technology adoption after spinal cord injury and patient education.',
  },
  '/community': {
    title: 'Community Program',
    description:
      'Volunteer with Tetradapt as a software engineer, ticket support, designer, installer or pilot participant.',
  },
  '/services': {
    title: 'Services',
    description:
      'How Tetradapt designs, installs, trains and supports patient-controlled rooms for facilities and homes.',
  },
  '/support': {
    title: 'Support',
    description: 'Support for facilities and homes running Tetradapt systems.',
  },
  '/contact': {
    title: 'Contact',
    description: 'Request a demo, plan a home system, get support or ask about research partnerships.',
  },
}

/** Public URL path for a route: pages live at /about/ (see trailingSlash in next.config.js). */
export function routePath(route: Route): string {
  return route === '/' ? '/' : `${route}/`
}

export function pageMetadata(route: Route): Metadata {
  const page = pages[route]
  return {
    // The homepage keeps the brand line; interior pages use the "Page | Tetradapt" template.
    title: route === '/' ? { absolute: 'Tetradapt: Technology that restores independence' } : page.title,
    description: page.description,
    alternates: { canonical: routePath(route) },
    openGraph: {
      title: page.title,
      description: page.description,
      url: routePath(route),
      type: 'website',
    },
  }
}
