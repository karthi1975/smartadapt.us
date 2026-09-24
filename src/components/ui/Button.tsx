import Link from 'next/link'
import type { ComponentPropsWithoutRef, ReactNode } from 'react'
import type { IconName } from '@/content/types'
import { cn } from '@/lib/cn'
import Icon from './Icon'

type Variant = 'primary' | 'secondary' | 'link'
type Size = 'md' | 'lg'
type IconKind = 'arrow' | 'down' | 'external' | 'none'

const base =
  'inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-colors disabled:cursor-not-allowed disabled:opacity-60'

const variants: Record<Variant, string> = {
  primary:
    'bg-brand-red text-white hover:bg-brand-red-dark on-dark:bg-brand-cream on-dark:text-brand-black on-dark:hover:bg-white',
  secondary:
    'border-2 border-brand-black/15 text-brand-black hover:border-brand-red hover:text-brand-red on-dark:border-brand-cream/30 on-dark:text-brand-cream on-dark:hover:border-brand-cream on-dark:hover:text-white',
  link: 'rounded-none text-brand-red underline-offset-4 hover:underline on-dark:text-brand-cream',
}

const sizes: Record<Size, string> = {
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
}

const iconNames: Record<Exclude<IconKind, 'none'>, IconName> = {
  arrow: 'arrow-right',
  down: 'arrow-down',
  external: 'external',
}

interface CommonProps {
  variant?: Variant
  size?: Size
  icon?: IconKind
  className?: string
  children: ReactNode
}

type ButtonProps = CommonProps & {
  href?: string
  external?: boolean
} & Omit<ComponentPropsWithoutRef<'button'>, 'className' | 'children'>

const isExternal = (href: string) => /^(https?:)?\/\//.test(href) || href.startsWith('mailto:') || href.startsWith('tel:')

export default function Button({ variant = 'primary', size = 'md', icon, className, children, href, external, ...rest }: ButtonProps) {
  const opensNewTab = Boolean(href && (external || /^(https?:)?\/\//.test(href)))
  const iconKind: IconKind = icon ?? (opensNewTab ? 'external' : 'none')
  const classes = cn(base, variants[variant], variant !== 'link' && sizes[size], className)
  const content = (
    <>
      <span>{children}</span>
      {iconKind !== 'none' && <Icon name={iconNames[iconKind]} className="h-4 w-4" />}
    </>
  )

  if (href) {
    if (opensNewTab) {
      return (
        <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
          {content}
          <span className="sr-only"> (opens in new tab)</span>
        </a>
      )
    }
    if (isExternal(href)) {
      return (
        <a href={href} className={classes}>
          {content}
        </a>
      )
    }
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    )
  }

  return (
    <button type={rest.type ?? 'button'} {...rest} className={classes}>
      {content}
    </button>
  )
}
