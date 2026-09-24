import type { Publication } from '@/content/types'
import { cn } from '@/lib/cn'
import Icon from './Icon'

interface LinkListProps {
  items: Publication[]
  className?: string
}

/** Rows of outbound links: publications and press. */
export default function LinkList({ items, className }: LinkListProps) {
  return (
    <ul className={cn('space-y-3', className)}>
      {items.map((item) => (
        <li key={item.href}>
          <a
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-start justify-between gap-6 rounded-2xl border border-brand-line bg-white p-5 transition-colors hover:border-brand-red"
          >
            <span>
              {item.source && <span className="mb-1 block text-xs font-semibold uppercase tracking-[0.14em] text-brand-red">{item.source}</span>}
              <span className="block font-display text-lg font-medium leading-snug text-brand-black group-hover:text-brand-red">{item.title}</span>
              <span className="sr-only"> (opens in new tab)</span>
            </span>
            <Icon name="external" className="mt-1 h-5 w-5 text-brand-gray" />
          </a>
        </li>
      ))}
    </ul>
  )
}
