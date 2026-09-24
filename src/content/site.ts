import { contactHref } from './links'
import { nav, routes } from './nav'
import { pages, pageMetadata } from './metadata'
import {
  allProducts,
  devices,
  families,
  getProduct,
  homeFeatures,
  hospitalControls,
  inputMethods,
  modules,
  productsByFamily,
} from './products'
import { press, publications, researchLinks, videos } from './research'
import { awards, communityRoles, deploymentStatusLabels, deployments, mission, people, timeline } from './story'
import type { Audience, Partner, Purpose, Setting, Stat, Testimonial, Track, TrackKey } from './types'

export { contactHref } from './links'
export { nav, routes } from './nav'
export type { Route } from './nav'
export { pages, pageMetadata } from './metadata'
export {
  allProducts,
  devices,
  families,
  getProduct,
  homeFeatures,
  hospitalControls,
  inputMethods,
  modules,
  productsByFamily,
} from './products'
export { press, publications, researchLinks, videos } from './research'
export { awards, communityRoles, deploymentStatusLabels, deployments, mission, people, timeline } from './story'
export * from './types'

/* ------------------------------------------------------------------ company */

export const company = {
  name: 'Tetradapt',
  legalName: 'The Tetradapt Initiative',
  founded: 2008,
  tagline: 'Technology that restores independence',
  description:
    'Patient-controlled hospital rooms and homes for people living with spinal cord injury, brain injury and the effects of aging. Proven at the Craig H. Neilsen Rehabilitation Hospital, University of Utah Health.',
  founder: 'Jeffrey Rosenbluth, M.D.',
  // The site is served at smartadapt.us (the www. version does not resolve).
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://smartadapt.us',
}

/** Years since founding, computed at render so it never goes stale. */
export function yearsSince(year: number = company.founded, now: Date = new Date()): number {
  return now.getFullYear() - year
}

/* ----------------------------------------------------------------- contacts */

/**
 * One confirmed value per channel. `null` means the client has not supplied it yet,
 * and the UI hides that row rather than showing a placeholder.
 * Verified 2026-09-22: tetradapt.us has mail records; tetradapt.com cannot receive mail.
 */
export const contacts = {
  emailGeneral: 'info@tetradapt.us',
  emailSupport: null as string | null,
  phone: null as { display: string; href: string } | null,
  address: null as string | null,
  hours: null as string | null,
  responseTime: 'We reply within one business day.',
  /**
   * Formspree form that receives every website form submission. Not secret: Formspree form IDs
   * are public by design. Change the recipient inbox in the Formspree dashboard, not here.
   */
  formspreeFormId: 'xnpnvrby',
}

/* ------------------------------------------------------------------- tracks */

export const tracks: Record<TrackKey, Track> = {
  hospital: {
    key: 'hospital',
    label: 'For hospitals and care facilities',
    shortLabel: 'Hospitals and facilities',
    eyebrow: 'Smart Hospital',
    title: 'Patient-controlled rooms for rehabilitation and acute care',
    tagline: 'Give every patient control of the room from day one, on a platform that integrates with the systems you already run.',
    description:
      'Give every patient control of the room from day one, and give staff a platform that routes requests, enforces protocols and integrates with the systems you already run.',
    bullets: [
      'Voice, touch, breath, EMG and eye-gaze control of the whole room',
      'Integrates with Epic, nurse call, beds and RTLS, and works alongside MyChart Bedside',
      'Traditional controls keep working. Nothing is taken away',
    ],
    image: { src: '/images/hospital/patient-education.jpg', alt: 'A clinician and a patient reviewing the room controls on a screen in a hospital room' },
    href: '/smart-hospital',
    primary: { label: 'Request a Demo', href: contactHref({ purpose: 'demo', track: 'hospital' }) },
    secondary: { label: 'Explore Smart Hospital', href: '/smart-hospital' },
  },
  home: {
    key: 'home',
    label: 'For home and family',
    shortLabel: 'Home and family',
    eyebrow: 'Smart Home',
    title: 'The same independence, at home',
    tagline: 'Bring the controls learned in the hospital home, with people who help you design, install and keep it running.',
    description:
      'Bring the controls learned in the hospital home. Lights, climate, TV, doors and calls, your way, with people who help you design, install and keep it running.',
    bullets: [
      'Control the home by voice, touch, breath or other adaptive inputs',
      'Same app and commands patients learned in the hospital',
      'Design, an installation network and a maintenance agreement',
    ],
    image: { src: '/images/lifestyle/kitchen-interaction.jpg', alt: 'A person in a wheelchair talking with a caregiver at a kitchen table' },
    href: '/smart-home',
    primary: { label: 'Plan My Home', href: contactHref({ purpose: 'assessment', track: 'home' }) },
    secondary: { label: 'Explore Smart Home', href: '/smart-home' },
  },
}

export const trackList: Track[] = [tracks.hospital, tracks.home]

/* ------------------------------------------------------------- form options */

export const purposes: { value: Purpose; label: string; tracks?: TrackKey[] }[] = [
  { value: 'demo', label: 'Request a demo', tracks: ['hospital'] },
  { value: 'assessment', label: 'Plan a home system', tracks: ['home'] },
  { value: 'quote', label: 'Request a quote' },
  { value: 'support', label: 'Get support for an existing system' },
  { value: 'research', label: 'Research or partnership' },
  { value: 'community', label: 'Join the Community Program' },
  { value: 'other', label: 'Something else' },
]

/** Facility types the client asked to segment by ("2026 website overview.docx"). */
export const settings: { value: Setting; label: string }[] = [
  { value: 'hospital', label: 'Hospital or rehabilitation facility' },
  { value: 'skilled-nursing', label: 'Skilled nursing facility' },
  { value: 'hospitality', label: 'Hospitality' },
  { value: 'other', label: 'Other organization' },
]

export function purposeLabel(value: string): string {
  return purposes.find((p) => p.value === value)?.label ?? value
}

export function settingLabel(value: string): string {
  return settings.find((s) => s.value === value)?.label ?? value
}

export function trackLabel(value: string): string {
  return value in tracks ? tracks[value as TrackKey].shortLabel : value
}

/* ----------------------------------------------------------------- partners */

/**
 * Client partner list ("2026 website overview.docx"): NRH, UUH, QLI, Masimo. Masimo has no
 * logo yet. NRH is part of University of Utah Health. Integrations from the Smart Hospital page.
 */
export const partners: Partner[] = [
  {
    slug: 'uofu-health',
    name: 'University of Utah Health',
    logo: { src: '/Logo/uofu-health-new.svg', alt: 'University of Utah Health', width: 160, height: 48 },
    href: 'https://healthcare.utah.edu',
    kind: 'deployment',
  },
  {
    slug: 'qli',
    name: 'QLI',
    logo: { src: '/Logo/logo-qli.png', alt: 'QLI', width: 120, height: 48 },
    href: 'https://qliomaha.com',
    kind: 'deployment',
  },
  {
    slug: 'resolut',
    name: 'Resolut',
    logo: { src: '/Logo/resolut-primary-logo-full-color-rgb.svg', alt: 'Resolut', width: 160, height: 48 },
    href: 'https://www.resolutegroup.com',
    kind: 'installer',
  },
  {
    slug: 'epic',
    name: 'Epic',
    logo: { src: '/Logo/integration-logos/Epic.png', alt: 'Epic', width: 120, height: 48 },
    kind: 'integration',
  },
  {
    slug: 'hillrom',
    name: 'Hillrom nurse call',
    logo: { src: '/Logo/integration-logos/hillrom.jpeg', alt: 'Hillrom', width: 140, height: 48 },
    kind: 'integration',
  },
  {
    slug: 'baxter',
    name: 'Baxter beds',
    logo: { src: '/Logo/integration-logos/baxter.png', alt: 'Baxter', width: 120, height: 48 },
    kind: 'integration',
  },
  {
    slug: 'mychart',
    name: 'MyChart Bedside',
    logo: { src: '/Logo/integration-logos/mychart.png', alt: 'MyChart', width: 140, height: 48 },
    kind: 'integration',
  },
  {
    slug: 'qualtrics',
    name: 'Qualtrics',
    logo: { src: '/Logo/integration-logos/Qualtrics-Logo.jpg', alt: 'Qualtrics', width: 140, height: 48 },
    kind: 'integration',
  },
]

export function partnersByKind(kind: Partner['kind']): Partner[] {
  return partners.filter((p) => p.kind === kind)
}

/** Named integrations without a logo file yet. */
export const integrationsWithoutLogo = ['RTLS (Centrak, Zulafly)', 'ServiceNow', 'CBORD food ordering', 'Connexall']

/* -------------------------------------------------------------------- stats */

const nrhSource = { label: 'UUH Smart Room Features, September 2025' }
const retrofitSource = { label: 'UUH Smart Room Retrofit deck' }

export const stats = {
  interactions: {
    id: 'interactions',
    value: '1.9M',
    label: 'Patient-originated room interactions a year',
    scope: 'Across 75 patient rooms at the Craig H. Neilsen Rehabilitation Hospital',
    source: nrhSource,
    asOf: '2025',
  },
  commandsPerDay: {
    id: 'commandsPerDay',
    value: '5,205',
    label: 'Commands sent by patients every day',
    scope: 'Craig H. Neilsen Rehabilitation Hospital',
    source: retrofitSource,
  },
  momentsPerDay: {
    id: 'momentsPerDay',
    value: '104',
    label: 'Moments of independence per patient, per day',
    scope: 'Craig H. Neilsen Rehabilitation Hospital',
    source: retrofitSource,
  },
  rooms: {
    id: 'rooms',
    value: '75',
    label: 'Patient rooms live at NRH',
    scope: 'Craig H. Neilsen Rehabilitation Hospital, University of Utah Health',
    source: nrhSource,
  },
  nurseValuable: {
    id: 'nurseValuable',
    value: '88%',
    label: 'Say real-time feedback is valuable for improving patient care',
    scope: '108-nurse survey at NRH',
    source: retrofitSource,
  },
  nurseInfluence: {
    id: 'nurseInfluence',
    value: '73%',
    label: 'Say knowing patients can give feedback changes how they interact',
    scope: '108-nurse survey at NRH',
    source: retrofitSource,
  },
  nurseMeaningful: {
    id: 'nurseMeaningful',
    value: '96%',
    label: 'Find it meaningful when good work is acknowledged through feedback',
    scope: '108-nurse survey at NRH',
    source: retrofitSource,
  },
} satisfies Record<string, Stat>

export function computedStats(): { years: Stat; publications: Stat; press: Stat } {
  return {
    years: {
      id: 'years',
      value: `${yearsSince()}`,
      label: 'Years since the Tetradapt Initiative began',
      scope: 'Founded 2008',
    },
    publications: {
      id: 'publications',
      value: `${publications.length}`,
      label: 'Peer-reviewed publications',
      scope: 'University of Utah PEDEL lab',
    },
    press: {
      id: 'press',
      value: `${press.length}`,
      label: 'Industry and press articles',
    },
  }
}

/* ------------------------------------------------------------- testimonials */

/** Only verified quotes render. Source for P19: PEDEL study, quoted in the client's HIMSS deck (slides 46-47). */
export const testimonials: Testimonial[] = [
  {
    quote:
      'When you have a sense of control over something, it does make me feel better, like I still have control. A lot of times when you are in a hospital, you feel like you don’t have control over anything.',
    name: 'Patient participant',
    role: 'University of Utah PEDEL study of the smart rooms',
    org: 'Craig H. Neilsen Rehabilitation Hospital',
    verified: true,
    source: 'HIMSS presentation, participant P19',
  },
]

export const verifiedTestimonials = testimonials.filter((t) => t.verified)

/* ---------------------------------------------------------------------- CTA */

export const cta: Record<Audience, { title: string; lead: string; primary: { label: string; href: string }; secondary?: { label: string; href: string } }> = {
  hospital: {
    title: 'Bring patient-controlled rooms to your facility',
    lead: 'See the system in a live demo and talk through integration with the clinical systems you already run.',
    primary: tracks.hospital.primary,
    secondary: { label: 'Talk to our team', href: contactHref({ track: 'hospital' }) },
  },
  home: {
    title: 'Bring the same independence home',
    lead: 'Tell us about your home and who will use it. We design the system around their abilities.',
    primary: tracks.home.primary,
    secondary: { label: 'Contact Us', href: contactHref({ track: 'home' }) },
  },
  both: {
    title: 'Let’s design your solution',
    lead: 'Whether for a facility or a home, we tailor the system to the people who will use it.',
    primary: tracks.hospital.primary,
    secondary: tracks.home.primary,
  },
}

/* --------------------------------------------------------------- aggregate */

export const site = {
  company,
  contacts,
  tracks,
  trackList,
  purposes,
  settings,
  partners,
  stats,
  testimonials: verifiedTestimonials,
  cta,
  nav,
  routes,
  pages,
  families,
  devices,
  modules,
  inputMethods,
  hospitalControls,
  homeFeatures,
  publications,
  press,
  videos,
  researchLinks,
  mission,
  timeline,
  people,
  deployments,
  deploymentStatusLabels,
  awards,
  communityRoles,
  allProducts,
  getProduct,
  productsByFamily,
  pageMetadata,
  contactHref,
  yearsSince,
  computedStats,
}

export type Site = typeof site
