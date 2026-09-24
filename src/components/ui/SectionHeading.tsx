import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'
import { type } from './tokens'

interface SectionHeadingProps {
  title: ReactNode
  eyebrow?: string
  lead?: ReactNode
  as?: 'h2' | 'h3'
  align?: 'left' | 'center'
  /** The red accent bar. On by default. */
  bar?: boolean
  id?: string
  className?: string
}

export default function SectionHeading({
  title,
  eyebrow,
  lead,
  as: Heading = 'h2',
  align = 'left',
  bar = true,
  id,
  className,
}: SectionHeadingProps) {
  const headingClass = Heading === 'h2' ? type.h2 : type.h3

  if (align === 'center') {
    return (
      <div className={cn('mx-auto mb-10 max-w-3xl text-center lg:mb-14', className)}>
        {bar && <span aria-hidden="true" className="mx-auto mb-6 block h-1.5 w-12 rounded-full bg-brand-red" />}
        {eyebrow && <p className={cn(type.eyebrow, 'mb-3')}>{eyebrow}</p>}
        <Heading id={id} className={cn(headingClass, 'text-brand-black on-dark:text-white')}>
          {title}
        </Heading>
        {lead && <p className={cn(type.lead, 'mt-4')}>{lead}</p>}
      </div>
    )
  }

  return (
    <div className={cn('mb-10 flex items-start gap-5 lg:mb-14', className)}>
      {bar && <span aria-hidden="true" className="mt-1.5 hidden h-12 w-1.5 shrink-0 rounded-full bg-brand-red sm:block" />}
      <div className="max-w-3xl">
        {eyebrow && <p className={cn(type.eyebrow, 'mb-3')}>{eyebrow}</p>}
        <Heading id={id} className={cn(headingClass, 'text-brand-black on-dark:text-white')}>
          {title}
        </Heading>
        {lead && <p className={cn(type.lead, 'mt-4')}>{lead}</p>}
      </div>
    </div>
  )
}
