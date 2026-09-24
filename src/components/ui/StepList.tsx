import type { Step } from '@/content/types'
import { cn } from '@/lib/cn'
import Button from './Button'
import { type } from './tokens'

interface StepListProps {
  steps: Step[]
  numbered?: boolean
  className?: string
}

export default function StepList({ steps, numbered = true, className }: StepListProps) {
  const List = numbered ? 'ol' : 'ul'
  return (
    <List className={cn('divide-y divide-brand-line', className)}>
      {steps.map((step, index) => (
        <li key={step.title} className="grid gap-4 py-7 sm:grid-cols-[3rem_1fr] sm:gap-6">
          <span
            aria-hidden="true"
            className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-red font-display text-lg font-medium text-white on-dark:bg-brand-cream on-dark:text-brand-black"
          >
            {numbered ? index + 1 : '•'}
          </span>
          <div>
            <h3 className={cn(type.h3, 'text-brand-black on-dark:text-white')}>{step.title}</h3>
            <p className={cn(type.body, 'mt-2')}>{step.description}</p>
            {step.action && (
              <Button variant="link" icon="arrow" href={step.action.href} external={step.action.external} className="mt-3 text-sm">
                {step.action.label}
              </Button>
            )}
          </div>
        </li>
      ))}
    </List>
  )
}
