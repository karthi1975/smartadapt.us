import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'
import { container, type ContainerWidth } from './tokens'

interface ContainerProps {
  width?: ContainerWidth
  className?: string
  children: ReactNode
}

export default function Container({ width = 'default', className, children }: ContainerProps) {
  return <div className={cn('mx-auto w-full px-6 lg:px-8', container[width], className)}>{children}</div>
}
