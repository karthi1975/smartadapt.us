/**
 * The type scale and container widths, as class strings. Components read from here so a
 * heading looks the same on every page.
 */
export const type = {
  h1Home:
    'font-display font-medium text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[0.95] tracking-tight text-balance',
  h1: 'font-display font-medium text-4xl sm:text-5xl lg:text-6xl leading-[1.02] tracking-tight text-balance',
  h2: 'font-display font-medium text-3xl sm:text-4xl lg:text-5xl leading-tight tracking-tight text-balance',
  h3: 'font-display font-medium text-xl lg:text-2xl leading-snug tracking-tight',
  h4: 'font-display font-medium text-lg leading-snug',
  eyebrow: 'text-xs font-semibold uppercase tracking-[0.14em] text-brand-red on-dark:text-brand-cream/80',
  lead: 'text-lg lg:text-xl leading-relaxed text-brand-gray on-dark:text-brand-cream/80',
  body: 'text-base leading-relaxed text-brand-gray on-dark:text-brand-cream/80',
  small: 'text-sm leading-relaxed text-brand-gray on-dark:text-brand-cream/80',
  stat: 'font-display font-medium text-5xl lg:text-6xl leading-none tabular-nums',
} as const

export const container = {
  default: 'max-w-7xl',
  narrow: 'max-w-4xl',
  prose: 'max-w-3xl',
} as const

export type ContainerWidth = keyof typeof container
