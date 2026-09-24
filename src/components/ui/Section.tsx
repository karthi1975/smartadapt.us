import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'
import Container from './Container'
import type { ContainerWidth } from './tokens'

export type SectionBackground = 'white' | 'cream' | 'dark' | 'red'

interface SectionProps {
  background?: SectionBackground
  padding?: 'default' | 'compact' | 'none'
  width?: ContainerWidth
  id?: string
  className?: string
  /** Wrap content in a landmark other than <section>. */
  as?: 'section' | 'div' | 'aside'
  'aria-labelledby'?: string
  children: ReactNode
}

const backgrounds: Record<SectionBackground, string> = {
  white: 'bg-white',
  cream: 'bg-brand-cream',
  dark: 'on-dark bg-brand-black text-white',
  red: 'on-dark bg-brand-red text-white',
}

const paddings = {
  default: 'py-16 lg:py-24',
  compact: 'py-10 lg:py-14',
  none: '',
} as const

export default function Section({
  background = 'white',
  padding = 'default',
  width = 'default',
  id,
  className,
  as: Tag = 'section',
  children,
  ...rest
}: SectionProps) {
  return (
    <Tag
      id={id}
      className={cn('relative', backgrounds[background], paddings[padding], id && 'scroll-mt-24', className)}
      aria-labelledby={rest['aria-labelledby']}
    >
      <Container width={width}>{children}</Container>
    </Tag>
  )
}
