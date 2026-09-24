import Image from 'next/image'
import type { ReactNode } from 'react'
import type { Action, ImageRef } from '@/content/types'
import { cn } from '@/lib/cn'
import Button from './Button'
import { type } from './tokens'

interface SplitSectionProps {
  media: ImageRef | ReactNode
  mediaSide?: 'left' | 'right'
  eyebrow?: string
  title: ReactNode
  lead?: ReactNode
  actions?: Action[]
  as?: 'h2' | 'h3'
  id?: string
  /** Mark the image as the page's most important image. */
  priority?: boolean
  className?: string
  children?: ReactNode
}

function isImageRef(media: SplitSectionProps['media']): media is ImageRef {
  return typeof media === 'object' && media !== null && 'src' in media
}

/** Text beside media. Used for stories, leadership profiles and product explanations. */
export default function SplitSection({
  media,
  mediaSide = 'right',
  eyebrow,
  title,
  lead,
  actions,
  as: Heading = 'h2',
  id,
  priority,
  className,
  children,
}: SplitSectionProps) {
  return (
    <div id={id} className={cn('grid items-center gap-10 lg:grid-cols-2 lg:gap-16', id && 'scroll-mt-24', className)}>
      <div className={cn(mediaSide === 'left' && 'lg:order-2')}>
        {eyebrow && <p className={cn(type.eyebrow, 'mb-3')}>{eyebrow}</p>}
        <Heading className={cn(Heading === 'h2' ? type.h2 : type.h3, 'text-brand-black on-dark:text-white')}>{title}</Heading>
        {lead && <p className={cn(type.lead, 'mt-5')}>{lead}</p>}
        {children && <div className={cn('mt-6 space-y-4', type.body)}>{children}</div>}
        {actions && actions.length > 0 && (
          <div className="mt-8 flex flex-wrap gap-4">
            {actions.map((action, index) => (
              <Button
                key={action.label}
                href={action.href}
                external={action.external}
                variant={index === 0 ? 'primary' : 'link'}
                icon={index === 0 ? 'none' : 'arrow'}
              >
                {action.label}
              </Button>
            ))}
          </div>
        )}
      </div>
      <div className={cn(mediaSide === 'left' && 'lg:order-1')}>
        {isImageRef(media) ? (
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-brand-cream">
            <Image
              src={media.src}
              alt={media.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              priority={priority}
            />
          </div>
        ) : (
          media
        )}
      </div>
    </div>
  )
}
