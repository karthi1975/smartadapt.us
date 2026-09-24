'use client'

import Image from 'next/image'
import { useState } from 'react'
import { cn } from '@/lib/cn'
import Icon from './Icon'

interface VideoEmbedProps {
  youtubeId: string
  title: string
  caption?: string
  className?: string
}

/**
 * Lite YouTube embed: a poster and play button until the visitor clicks, then the
 * privacy-enhanced player. There is no placeholder mode; without a real ID, do not render one.
 */
export default function VideoEmbed({ youtubeId, title, caption, className }: VideoEmbedProps) {
  const [playing, setPlaying] = useState(false)

  return (
    <figure className={className}>
      <div className="relative aspect-video overflow-hidden rounded-2xl bg-brand-black shadow-lg">
        {playing ? (
          <iframe
            className="absolute inset-0 h-full w-full"
            src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&rel=0`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            className="group absolute inset-0 flex items-center justify-center"
            aria-label={`Play video: ${title}`}
          >
            <Image
              src={`https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg`}
              alt=""
              fill
              sizes="(max-width: 1024px) 100vw, 896px"
              className="object-cover opacity-90 transition-opacity group-hover:opacity-100"
            />
            <span
              aria-hidden="true"
              className={cn(
                'relative flex h-16 w-16 items-center justify-center rounded-full bg-brand-red text-white shadow-lg',
                'transition-transform group-hover:scale-105',
              )}
            >
              <Icon name="play" className="h-7 w-7 translate-x-0.5" />
            </span>
          </button>
        )}
      </div>
      {caption && <figcaption className="mt-3 text-sm leading-relaxed text-brand-gray on-dark:text-brand-cream/80">{caption}</figcaption>}
    </figure>
  )
}
