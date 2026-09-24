'use client'

import { useEffect, useRef, useState, type ReactNode } from 'react'
import { cn } from '@/lib/cn'

interface RevealProps {
  children: ReactNode
  delay?: number
  className?: string
}

/**
 * Fades content in the first time it scrolls into view. Content is visible by default, so
 * nothing is hidden without JavaScript, and `motion-safe:` keeps it still for people who
 * prefer reduced motion.
 */
export default function Reveal({ children, delay = 0, className }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [state, setState] = useState<'idle' | 'hidden' | 'shown'>('idle')

  useEffect(() => {
    const element = ref.current
    if (!element || typeof IntersectionObserver === 'undefined') return
    const rect = element.getBoundingClientRect()
    if (rect.top < window.innerHeight) return // already on screen: leave it visible
    setState('hidden')
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setState('shown')
          observer.disconnect()
        }
      },
      { threshold: 0.15 },
    )
    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      style={{ transitionDelay: state === 'shown' ? `${delay}ms` : undefined }}
      className={cn(
        'motion-safe:transition-all motion-safe:duration-700 motion-safe:ease-out',
        state === 'hidden' && 'motion-safe:translate-y-4 motion-safe:opacity-0',
        className,
      )}
    >
      {children}
    </div>
  )
}
