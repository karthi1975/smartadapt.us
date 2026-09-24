import Image from 'next/image'
import { contactHref } from '@/content/links'
import type { Product } from '@/content/types'
import { cn } from '@/lib/cn'
import Button from './Button'
import { Card } from './Card'
import Icon from './Icon'
import { type } from './tokens'

interface ProductCardProps {
  product: Product
  /** "quote" pre-selects the product on the contact form; "learn" links to the product page. */
  cta?: 'quote' | 'learn' | 'none'
  className?: string
}

const trackTags: Record<string, string> = { hospital: 'Hospital', home: 'Home' }

export default function ProductCard({ product, cta = 'quote', className }: ProductCardProps) {
  const anchor = product.route.includes('#') ? product.route.split('#')[1] : undefined
  return (
    <Card id={anchor} padding="lg" className={cn('flex h-full flex-col scroll-mt-24', className)}>
      {product.image ? (
        <div className="relative mb-6 aspect-[4/3] overflow-hidden rounded-xl bg-brand-cream">
          <Image
            src={product.image.src}
            alt={product.image.alt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            className="object-cover"
          />
        </div>
      ) : (
        <span aria-hidden="true" className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-brand-red/10 text-brand-red">
          <Icon name={product.icon} className="h-7 w-7" />
        </span>
      )}

      <h3 className={cn(type.h3, 'text-brand-black')}>{product.name}</h3>
      <p className={cn(type.body, 'mt-3')}>{product.summary}</p>

      {product.details && product.details.length > 0 && (
        <ul className="mt-4 space-y-2">
          {product.details.map((detail) => (
            <li key={detail} className="flex items-start gap-2 text-sm text-brand-gray">
              <Icon name="check" className="mt-0.5 h-4 w-4 text-brand-red" />
              <span>{detail}</span>
            </li>
          ))}
        </ul>
      )}

      <div className="mt-6 flex flex-1 flex-wrap items-end justify-between gap-4">
        <ul className="flex flex-wrap gap-2" aria-label="Available in">
          {product.tracks.map((t) => (
            <li key={t} className="rounded-full bg-brand-cream px-2.5 py-0.5 text-xs font-medium text-brand-gray">
              {trackTags[t]}
            </li>
          ))}
        </ul>
        {cta === 'quote' && (
          <Button variant="link" icon="arrow" href={contactHref({ purpose: 'quote', product: product.slug })} className="text-sm">
            Request a quote
          </Button>
        )}
        {cta === 'learn' && (
          <Button variant="link" icon="arrow" href={product.route} className="text-sm">
            Learn more
          </Button>
        )}
      </div>
    </Card>
  )
}
