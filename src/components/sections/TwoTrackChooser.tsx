import Image from 'next/image'
import type { ReactNode } from 'react'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import Icon from '@/components/ui/Icon'
import SectionHeading from '@/components/ui/SectionHeading'
import { type } from '@/components/ui/tokens'
import { trackList } from '@/content/site'
import type { TrackKey } from '@/content/types'
import { cn } from '@/lib/cn'

interface TwoTrackChooserProps {
  heading?: { eyebrow?: string; title: ReactNode; lead?: string }
  /** "doors" is a photo card per track (homepage); "cards" is the compact text version used to jump within a page. */
  variant?: 'doors' | 'cards'
  /** Override where each track links (for example an anchor on the same page). */
  hrefs?: Partial<Record<TrackKey, string>>
  className?: string
}

/** The two doors into the site: hospitals and care facilities, or home and family. */
export default function TwoTrackChooser({ heading, variant = 'doors', hrefs, className }: TwoTrackChooserProps) {
  return (
    <div className={className}>
      {heading && <SectionHeading eyebrow={heading.eyebrow} title={heading.title} lead={heading.lead} align="center" />}
      <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
        {trackList.map((track) => {
          const href = hrefs?.[track.key]
          if (variant === 'cards') {
            return (
              <Card key={track.key} href={href} padding="lg" className="flex h-full flex-col">
                <Badge>{track.label}</Badge>
                <h3 className={cn(type.h3, 'mt-4 text-brand-black group-hover:text-brand-red')}>{track.title}</h3>
                <p className={cn(type.body, 'mt-3 flex-1')}>{track.description}</p>
                {href && (
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-red">
                    See the {track.shortLabel.toLowerCase()} path
                    <Icon name="arrow-down" className="h-4 w-4" />
                  </span>
                )}
              </Card>
            )
          }
          return (
            <article key={track.key} className="flex h-full flex-col overflow-hidden rounded-2xl border border-brand-line bg-white">
              <div className="relative aspect-[16/9] sm:aspect-[2/1]">
                <Image src={track.image.src} alt={track.image.alt} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
              </div>
              <div className="flex flex-1 flex-col items-start p-6 lg:p-8">
                <Badge>{track.label}</Badge>
                <h3 className={cn(type.h3, 'mt-4 text-brand-black')}>{track.title}</h3>
                <p className={cn(type.body, 'mt-2 flex-1')}>{track.tagline}</p>
                <Button href={href ?? track.secondary.href} icon="arrow" className="mt-6">
                  {track.secondary.label}
                </Button>
              </div>
            </article>
          )
        })}
      </div>
    </div>
  )
}
