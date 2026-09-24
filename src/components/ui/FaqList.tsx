import type { FaqItem } from '@/content/types'
import { cn } from '@/lib/cn'
import Icon from './Icon'
import { type } from './tokens'

interface FaqListProps {
  items: FaqItem[]
  className?: string
}

/** Native disclosure list: keyboard accessible with no script. */
export default function FaqList({ items, className }: FaqListProps) {
  return (
    <div className={cn('divide-y divide-brand-line rounded-2xl border border-brand-line bg-white px-6', className)}>
      {items.map((item) => (
        <details key={item.q} className="group py-5">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg font-medium text-brand-black [&::-webkit-details-marker]:hidden">
            {item.q}
            <Icon name="chevron-down" className="h-5 w-5 text-brand-red transition-transform group-open:rotate-180" />
          </summary>
          <p className={cn(type.body, 'mt-3 pr-9')}>{item.a}</p>
        </details>
      ))}
    </div>
  )
}
