import Image from 'next/image'
import type { Partner } from '@/content/types'
import { cn } from '@/lib/cn'
import { type } from './tokens'

interface LogoStripProps {
  logos: Partner[]
  heading?: string
  /** Extra names shown as text when no logo file exists yet. */
  extras?: string[]
  size?: 'sm' | 'md'
  className?: string
}

/** Full-colour partner and integration logos, optionally linked. */
export default function LogoStrip({ logos, heading, extras, size = 'md', className }: LogoStripProps) {
  const imageClass = cn('w-auto object-contain', size === 'sm' ? 'h-8' : 'h-10 lg:h-12')
  return (
    <div className={className}>
      {heading && <p className={cn(type.eyebrow, 'mb-8 text-center')}>{heading}</p>}
      <ul className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
        {logos.map((partner) => {
          const image = (
            <Image
              src={partner.logo.src}
              alt={partner.logo.alt || partner.name}
              width={partner.logo.width ?? 160}
              height={partner.logo.height ?? 48}
              className={imageClass}
            />
          )
          return (
            <li key={partner.slug} className="flex items-center">
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
          <li key={name} className="text-sm font-semibold text-brand-gray">
            {name}
          </li>
        ))}
      </ul>
    </div>
  )
}
