import Image from 'next/image'
import type { Partner } from '@/content/types'
import { cn } from '@/lib/cn'
import { type } from './tokens'

interface LogoStripProps {
  logos: Partner[]
  heading?: string
  /** Extra names shown as text when no logo file exists yet. */
  extras?: string[]
  /** "row" is a centred line of logos; "grid" puts each logo in an equal tile, for long lists. */
  variant?: 'row' | 'grid'
  size?: 'sm' | 'md'
  className?: string
}

/** Full-colour partner and integration logos, optionally linked. */
export default function LogoStrip({ logos, heading, extras, variant = 'row', size = 'md', className }: LogoStripProps) {
  const grid = variant === 'grid'
  const imageClass = cn(
    'w-auto object-contain',
    grid ? 'h-9 max-w-full' : size === 'sm' ? 'h-8' : 'h-10 lg:h-12',
  )
  const itemClass = grid
    ? 'flex h-20 items-center justify-center rounded-xl border border-brand-line bg-white px-5'
    : 'flex items-center'

  return (
    <div className={className}>
      {heading && <p className={cn(type.eyebrow, 'mb-8 text-center')}>{heading}</p>}
      <ul
        className={
          grid
            ? 'grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6'
            : 'flex flex-wrap items-center justify-center gap-x-12 gap-y-8'
        }
      >
        {logos.map((partner) => {
          const image = (
            <Image
              src={partner.logo.src}
              alt={partner.logo.alt || partner.name}
              width={partner.logo.width ?? 160}
              height={partner.logo.height ?? 48}
              className={cn(imageClass, partner.darken && 'brightness-0')}
            />
          )
          return (
            <li key={partner.slug} className={itemClass}>
              {partner.href ? (
                <a href={partner.href} target="_blank" rel="noopener noreferrer" className="inline-flex rounded-md">
                  {image}
                  <span className="sr-only">{partner.name} (opens in new tab)</span>
                </a>
              ) : (
                image
              )}
            </li>
          )
        })}
        {extras?.map((name) => (
          <li key={name} className={cn(itemClass, 'text-sm font-semibold text-brand-gray')}>
            {name}
          </li>
        ))}
      </ul>
    </div>
  )
}
