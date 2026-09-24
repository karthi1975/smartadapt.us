import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'

interface BadgeProps {
  children: ReactNode
  tone?: 'red' | 'neutral'
  className?: string
}

/** Small uppercase label: hero eyebrows, setting and audience tags. */
export default function Badge({ children, tone = 'red', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em]',
        tone === 'red'
          ? 'border border-brand-red/20 bg-brand-red/5 text-brand-red on-dark:border-brand-cream/20 on-dark:bg-white/10 on-dark:text-brand-cream'
          : 'bg-brand-cream text-brand-gray on-dark:bg-white/10 on-dark:text-brand-cream/80',
        className,
      )}
    >
      {children}
    </span>
  )
}
