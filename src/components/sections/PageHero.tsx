import Image from 'next/image'
import type { ReactNode } from 'react'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'
import Container from '@/components/ui/Container'
import { type } from '@/components/ui/tokens'
import type { Action, ImageRef } from '@/content/types'
import { cn } from '@/lib/cn'

interface PageHeroProps {
  title: ReactNode
  eyebrow?: string
  lead?: ReactNode
  /** Up to two actions: the first is primary. */
  actions?: Action[]
  media?: ImageRef | ReactNode
  tone?: 'dark' | 'light'
  align?: 'left' | 'center'
  /** Colour of the section that follows, painted behind the rounded bottom edge. */
  nextBackground?: 'white' | 'cream'
  /** Extra content under the lead (for example a stat strip). */
  children?: ReactNode
}

function isImageRef(media: PageHeroProps['media']): media is ImageRef {
  return typeof media === 'object' && media !== null && 'src' in media
}

/**
 * The compact interior hero. One component, two tones, so every page opens the same way
 * and the rounded transition needs no overlap tricks.
 */
export default function PageHero({
  title,
  eyebrow,
  lead,
  actions,
  media,
  tone = 'dark',
  align = 'left',
  nextBackground = 'white',
  children,
}: PageHeroProps) {
  const centered = align === 'center' && !media
  return (
    <div className={nextBackground === 'cream' ? 'bg-brand-cream' : 'bg-white'}>
      <section
        className={cn(
          'relative overflow-hidden rounded-b-[2.5rem] lg:rounded-b-[5rem]',
          tone === 'dark' ? 'on-dark bg-brand-black text-white' : 'bg-brand-cream text-brand-black',
        )}
      >
        {tone === 'dark' && (
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-1/2 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-red/10 blur-[120px]"
          />
        )}
        <Container className="relative py-16 lg:py-24">
          <div className={cn(media ? 'grid gap-10 lg:grid-cols-12 lg:items-center' : centered ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl')}>
            <div className={media ? 'lg:col-span-6' : undefined}>
              {eyebrow && (
                <div className="mb-5">
                  <Badge>{eyebrow}</Badge>
                </div>
              )}
              <h1 className={cn(type.h1, tone === 'dark' ? 'text-white' : 'text-brand-black')}>{title}</h1>
              {lead && <p className={cn(type.lead, 'mt-6', tone === 'dark' && 'text-brand-cream/90')}>{lead}</p>}
              {actions && actions.length > 0 && (
                <div className={cn('mt-8 flex flex-wrap gap-4', centered && 'justify-center')}>
                  {actions.slice(0, 2).map((action, index) => (
                    <Button
                      key={action.label}
                      href={action.href}
                      external={action.external}
                      size="lg"
                      variant={index === 0 ? 'primary' : 'secondary'}
                      icon={index === 0 ? 'arrow' : 'none'}
                    >
                      {action.label}
                    </Button>
                  ))}
                </div>
              )}
              {children && <div className="mt-10">{children}</div>}
            </div>
            {media && (
              <div className="lg:col-span-6">
                {isImageRef(media) ? (
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
                    <Image src={media.src} alt={media.alt} fill priority sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
                  </div>
                ) : (
                  media
                )}
              </div>
            )}
          </div>
        </Container>
      </section>
    </div>
  )
}
