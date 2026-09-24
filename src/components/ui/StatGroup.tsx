import type { Stat } from '@/content/types'
import { cn } from '@/lib/cn'
import { type } from './tokens'

interface StatGroupProps {
  stats: Stat[]
  columns?: 2 | 3 | 4
  /** "inline" for a quiet strip, "cards" for coloured blocks. */
  variant?: 'inline' | 'cards'
  /** Show the source footnote (on by default). */
  showSources?: boolean
  className?: string
}

const columnClasses = {
  2: 'sm:grid-cols-2',
  3: 'sm:grid-cols-3',
  4: 'sm:grid-cols-2 lg:grid-cols-4',
} as const

/**
 * The only way statistics render on the site. Every stat carries its scope, and the group
 * prints one footnote per source so a number never floats free of where it came from.
 */
export default function StatGroup({ stats, columns = 3, variant = 'inline', showSources = true, className }: StatGroupProps) {
  const sources = Array.from(new Map(stats.filter((s) => s.source).map((s) => [s.source!.label, s.source!])).values())

  return (
    <div className={className}>
      <ul className={cn('grid gap-6', columnClasses[columns])}>
        {stats.map((stat, index) =>
          variant === 'cards' ? (
            <li
              key={stat.id}
              className={cn('on-dark rounded-2xl p-8 text-white', index % 2 === 1 ? 'bg-brand-black' : 'bg-brand-red')}
            >
              <p className={cn(type.stat, 'text-white')}>{stat.value}</p>
              <p className="mt-3 font-medium leading-snug">{stat.label}</p>
              {stat.scope && <p className="mt-2 text-sm leading-snug text-brand-cream/80">{stat.scope}</p>}
            </li>
          ) : (
            <li key={stat.id} className="border-l-2 border-brand-red pl-5">
              <p className={cn(type.stat, 'text-brand-red on-dark:text-brand-red-tint')}>{stat.value}</p>
              <p className="mt-3 font-medium leading-snug text-brand-black on-dark:text-white">{stat.label}</p>
              {stat.scope && <p className={cn(type.small, 'mt-1')}>{stat.scope}</p>}
            </li>
          ),
        )}
      </ul>
      {showSources && sources.length > 0 && (
        <p className="mt-6 text-xs leading-relaxed text-brand-gray on-dark:text-brand-cream/70">
          Source: {sources.map((s) => s.label).join('; ')}.
        </p>
      )}
    </div>
  )
}
