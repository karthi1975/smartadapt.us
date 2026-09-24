import type { PurposeValue, SettingValue, TrackValue } from '@/lib/contactSchema'

export type TrackKey = TrackValue
export type Audience = TrackKey | 'both'
export type Purpose = PurposeValue
export type Setting = SettingValue

/** Icon names resolved by `src/components/ui/icons.ts`. Content never imports React. */
export type IconName =
  | 'hospital'
  | 'home'
  | 'heart'
  | 'devices'
  | 'bell'
  | 'book'
  | 'calendar'
  | 'bolt'
  | 'user'
  | 'shield'
  | 'lightbulb'
  | 'video'
  | 'chart'
  | 'signal'
  | 'wifi'
  | 'alert'
  | 'clipboard'
  | 'chat'
  | 'refresh'
  | 'check-circle'
  | 'check'
  | 'microphone'
  | 'eye'
  | 'elevator'
  | 'breath'
  | 'touch'
  | 'automations'
  | 'users'
  | 'tv'
  | 'lock'
  | 'phone'
  | 'squares-plus'
  | 'arrow-right'
  | 'arrow-down'
  | 'external'
  | 'chevron-down'
  | 'menu'
  | 'close'
  | 'envelope'
  | 'lifebuoy'
  | 'clock'
  | 'document'
  | 'academic'
  | 'wrench'
  | 'presentation'
  | 'cog'
  | 'desktop'
  | 'mobile'
  | 'play'
  | 'map-pin'
  | 'trophy'
  | 'newspaper'
  | 'beaker'
  | 'user-group'
  | 'ticket'
  | 'power'
  | 'head'
  | 'tongue'
  | 'sun'
  | 'speaker'
  | 'globe'
  | 'building'
  | 'star'
  | 'quote'
  | 'thumbs-up'
  | 'inbox'
  | 'megaphone'
  | 'warning'
  | 'door'
  | 'adjustments'

export interface Action {
  label: string
  href: string
  external?: boolean
}

export interface ImageRef {
  src: string
  alt: string
  width?: number
  height?: number
}

export interface Stat {
  id: string
  value: string
  label: string
  /** Where the number applies, shown under the label. */
  scope?: string
  /** Document or page the number comes from. */
  source?: { label: string; href?: string }
  asOf?: string
}

export type ProductFamily = 'smart-hospital' | 'smart-home' | 'active-living' | 'devices'

export interface Product {
  slug: string
  name: string
  route: string
  family: ProductFamily
  summary: string
  icon: IconName
  image?: ImageRef
  tracks: TrackKey[]
  /** For Active Living modules: who the module is for. */
  audience?: 'patient' | 'care-team'
  /** Short bullet points shown on product cards. */
  details?: string[]
}

export interface Partner {
  slug: string
  name: string
  logo: ImageRef
  href?: string
  kind: 'deployment' | 'integration' | 'research' | 'installer'
  /** Render a white logo file in black so it shows on light backgrounds. */
  darken?: boolean
}

export interface Deployment {
  name: string
  status: 'existing' | 'inProgress' | 'planned'
  note?: string
}

export interface Award {
  title: string
  body: string
  description: string
}

export interface Publication {
  title: string
  href: string
  source?: string
}

export interface Video {
  id: string
  youtubeId: string
  title: string
  caption?: string
}

export interface Testimonial {
  quote: string
  name: string
  role: string
  org?: string
  /** Only verified quotes render. */
  verified: boolean
  /** Link for the attribution line (for example the study's publications). */
  href?: string
  source?: string
}

export interface Track {
  key: TrackKey
  label: string
  shortLabel: string
  eyebrow: string
  title: string
  /** One sentence, for the homepage doors. */
  tagline: string
  description: string
  bullets: string[]
  image: ImageRef
  href: string
  primary: Action
  secondary: Action
}

export interface NavLink {
  label: string
  href: string
}

export interface NavGroup {
  label: string
  children: NavLink[]
}

export type NavItem = NavLink | NavGroup

export interface FaqItem {
  q: string
  a: string
}

export interface Step {
  title: string
  description: string
  action?: Action
}

export interface Person {
  name: string
  title: string
  org?: string
  image: ImageRef
  bio: string[]
}

export interface TimelineEvent {
  year: string
  title: string
  description: string
}
