import Link from 'next/link'
import type { ReactNode } from 'react'
import type { IconName } from '@/content/types'
import { cn } from '@/lib/cn'
import Icon from './Icon'
import { type } from './tokens'

/* -------------------------------------------------------------------- Card */

interface CardProps {
  href?: string
  padding?: 'sm' | 'md' | 'lg'
  interactive?: boolean
  id?: string
  className?: string
  children: ReactNode
}

const paddings = { sm: 'p-5', md: 'p-6', lg: 'p-8' } as const

const surface = 'rounded-2xl border border-brand-line bg-white text-brand-black'
const interactiveClasses = 'transition-colors hover:border-brand-red hover:shadow-md'

export function Card({ href, padding = 'md', interactive, id, className, children }: CardProps) {
  const classes = cn(surface, paddings[padding], (interactive || href) && interactiveClasses, href && 'group block', id && 'scroll-mt-24', className)
  if (href) {
    return (
      <Link href={href} id={id} className={classes}>
        {children}
      </Link>
    )
  }
  return (
    <div id={id} className={classes}>
      {children}
    </div>
  )
}

/* ------------------------------------------------------------- FeatureCard */

interface FeatureCardProps {
  icon: IconName
  title: string
  description: string
  href?: string
  linkLabel?: string
  tags?: string[]
  size?: 'sm' | 'lg'
  as?: 'h3' | 'h4'
  id?: string
}

export function FeatureCard({ icon, title, description, href, linkLabel = 'Learn more', tags, size = 'sm', as: Heading = 'h3', id }: FeatureCardProps) {
  return (
    <Card href={href} id={id} padding={size === 'lg' ? 'lg' : 'md'} className="flex h-full flex-col">
      <span
        aria-hidden="true"
        className={cn(
          'mb-4 flex items-center justify-center rounded-full bg-brand-red/10 text-brand-red',
          size === 'lg' ? 'h-14 w-14' : 'h-12 w-12',
        )}
      >
        <Icon name={icon} className={size === 'lg' ? 'h-7 w-7' : 'h-6 w-6'} />
      </span>
      <Heading className={cn(size === 'lg' ? type.h3 : type.h4, 'text-brand-black group-hover:text-brand-red')}>{title}</Heading>
      <p className={cn(size === 'lg' ? type.body : type.small, 'mt-2 flex-1')}>{description}</p>
      {tags && tags.length > 0 && (
        <ul className="mt-4 flex flex-wrap gap-2" aria-label="Available in">
          {tags.map((tag) => (
            <li key={tag} className="rounded-full bg-brand-cream px-2.5 py-0.5 text-xs font-medium text-brand-gray">
              {tag}
            </li>
          ))}
        </ul>
      )}
      {href && (
        <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-red">
          {linkLabel}
          <Icon name="arrow-right" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </span>
      )}
    </Card>
  )
}

/* --------------------------------------------------------- TestimonialCard */

interface TestimonialCardProps {
  quote: string
  name: string
  role: string
  org?: string
  /** Makes the attribution a link, for example to the study's publications. */
  href?: string
  className?: string
}

export function TestimonialCard({ quote, name, role, org, href, className }: TestimonialCardProps) {
  return (
    <figure className={cn(surface, 'flex h-full flex-col p-8', className)}>
      <Icon name="quote" className="h-8 w-8 text-brand-red" />
      <blockquote className="mt-4 flex-1 text-lg leading-relaxed text-brand-black">
        <p>&ldquo;{quote}&rdquo;</p>
      </blockquote>
      <figcaption className="mt-6 border-t border-brand-line pt-4 text-sm">
        <span className="block font-semibold text-brand-black">{name}</span>
        {href ? (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-brand-gray underline decoration-brand-red/40 underline-offset-4 hover:text-brand-red"
          >
            {role}
            {org ? `, ${org}` : ''}
            <span className="sr-only"> (opens in new tab)</span>
          </a>
        ) : (
          <span className="block text-brand-gray">
            {role}
            {org ? `, ${org}` : ''}
          </span>
        )}
      </figcaption>
    </figure>
  )
}
