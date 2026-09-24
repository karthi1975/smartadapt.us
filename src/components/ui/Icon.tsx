import type { IconName } from '@/content/types'
import { cn } from '@/lib/cn'
import { icons } from './icons'

interface IconProps {
  name: IconName
  className?: string
}

/** Decorative icon. Always hidden from assistive tech; pair it with visible text. */
export default function Icon({ name, className }: IconProps) {
  const Component = icons[name]
  return <Component aria-hidden="true" className={cn('h-6 w-6 shrink-0', className)} />
}
