'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useId, useRef, useState } from 'react'
import Button from '@/components/ui/Button'
import Container from '@/components/ui/Container'
import Icon from '@/components/ui/Icon'
import { type } from '@/components/ui/tokens'
import { nav } from '@/content/site'
import type { NavGroup, NavItem } from '@/content/types'
import { cn } from '@/lib/cn'

function isGroup(item: NavItem): item is NavGroup {
  return 'children' in item
}

const linkClass = 'rounded-md py-2 text-sm font-medium text-brand-black transition-colors hover:text-brand-red'

export default function Header() {
  const pathname = usePathname()
  const uid = useId()
  const [openGroup, setOpenGroup] = useState<string | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const navRef = useRef<HTMLElement>(null)
  const buttonRefs = useRef<Record<string, HTMLButtonElement | null>>({})
  const closeTimer = useRef<number | undefined>(undefined)

  // Close menus whenever the route changes.
  useEffect(() => {
    setOpenGroup(null)
    setMobileOpen(false)
  }, [pathname])

  // Close on outside click and on Escape (returning focus to the toggle).
  useEffect(() => {
    function onPointerDown(event: PointerEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) setOpenGroup(null)
    }
    function onKeyDown(event: KeyboardEvent) {
      if (event.key !== 'Escape') return
      if (openGroup) {
        buttonRefs.current[openGroup]?.focus()
        setOpenGroup(null)
      }
      if (mobileOpen) setMobileOpen(false)
    }
    document.addEventListener('pointerdown', onPointerDown)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('pointerdown', onPointerDown)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [openGroup, mobileOpen])

  // Lock page scroll while the mobile panel is open.
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  const isActive = (href: string) => (href === '/' ? pathname === '/' : pathname.startsWith(href))
  const groupActive = (group: NavGroup) => group.children.some((child) => isActive(child.href))

  function openMenu(label: string) {
    window.clearTimeout(closeTimer.current)
    setOpenGroup(label)
  }
  function scheduleClose() {
    window.clearTimeout(closeTimer.current)
    closeTimer.current = window.setTimeout(() => setOpenGroup(null), 150)
  }

  const mobileId = `${uid}-mobile`

  return (
    <header className="sticky top-0 z-50 border-b border-brand-line bg-white">
      <Container>
        <nav ref={navRef} aria-label="Primary" className="flex h-20 items-center justify-between gap-6">
          <Link href="/" className="inline-flex shrink-0 items-center rounded-md" aria-label="Tetradapt home">
            <Image src="/Logo/tetradapt-main-logo.webp" alt="" width={180} height={50} className="h-10 w-auto" priority />
          </Link>

          <ul className="hidden items-center gap-7 lg:flex">
            {nav.primary.map((item) => {
              if (!isGroup(item)) {
                const active = isActive(item.href)
                return (
                  <li key={item.href}>
                    <Link href={item.href} aria-current={active ? 'page' : undefined} className={cn(linkClass, active && 'text-brand-red')}>
                      {item.label}
                    </Link>
                  </li>
                )
              }
              const isOpen = openGroup === item.label
              const panelId = `${uid}-${item.label.toLowerCase()}`
              return (
                <li
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => openMenu(item.label)}
                  onMouseLeave={scheduleClose}
                  onBlur={(event) => {
                    // Close when keyboard focus leaves the menu entirely.
                    if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setOpenGroup(null)
                  }}
                >
                  <button
                    ref={(element) => {
                      buttonRefs.current[item.label] = element
                    }}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenGroup(isOpen ? null : item.label)}
                    onKeyDown={(event) => {
                      if (event.key === 'Enter') {
                        // Handle Enter here (and cancel the native click) so the toggle happens exactly once.
                        event.preventDefault()
                        setOpenGroup(isOpen ? null : item.label)
                      } else if (event.key === 'ArrowDown') {
                        event.preventDefault()
                        openMenu(item.label)
                        requestAnimationFrame(() => document.getElementById(panelId)?.querySelector('a')?.focus())
                      }
                    }}
                    className={cn(linkClass, 'inline-flex items-center gap-1', (isOpen || groupActive(item)) && 'text-brand-red')}
                  >
                    {item.label}
                    <Icon name="chevron-down" className={cn('h-4 w-4 transition-transform', isOpen && 'rotate-180')} />
                  </button>
                  <div id={panelId} hidden={!isOpen} className="absolute left-0 top-full pt-2">
                    <ul className="min-w-[14rem] animate-fade-in rounded-2xl border border-brand-line bg-white p-2 shadow-lg">
                      {item.children.map((child) => {
                        const active = isActive(child.href)
                        return (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              aria-current={active ? 'page' : undefined}
                              className={cn(
                                'block rounded-xl px-4 py-2.5 text-sm text-brand-black transition-colors hover:bg-brand-cream hover:text-brand-red',
                                active && 'text-brand-red',
                              )}
                            >
                              {child.label}
                            </Link>
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                </li>
              )
            })}
            <li>
              <Button href={nav.cta.href}>{nav.cta.label}</Button>
            </li>
          </ul>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full text-brand-black lg:hidden"
            aria-expanded={mobileOpen}
            aria-controls={mobileId}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMobileOpen((open) => !open)}
          >
            <Icon name={mobileOpen ? 'close' : 'menu'} />
          </button>
        </nav>
      </Container>

      <div id={mobileId} hidden={!mobileOpen} className="lg:hidden">
        <nav aria-label="Primary, mobile" className="max-h-[calc(100vh-5rem)] overflow-y-auto border-t border-brand-line bg-white">
          <Container className="py-6">
            <ul className="space-y-6">
              {nav.primary.map((item) => {
                if (!isGroup(item)) {
                  return (
                    <li key={item.href}>
                      <Link href={item.href} aria-current={isActive(item.href) ? 'page' : undefined} className={cn('block text-base font-medium text-brand-black', isActive(item.href) && 'text-brand-red')}>
                        {item.label}
                      </Link>
                    </li>
                  )
                }
                return (
                  <li key={item.label}>
                    <p className={cn(type.eyebrow, 'mb-3 text-brand-gray')}>{item.label}</p>
                    <ul className="space-y-3 border-l-2 border-brand-line pl-4">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link href={child.href} aria-current={isActive(child.href) ? 'page' : undefined} className={cn('block text-base text-brand-black', isActive(child.href) && 'text-brand-red')}>
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                )
              })}
              <li>
                <Button href={nav.cta.href} size="lg" className="w-full">
                  {nav.cta.label}
                </Button>
              </li>
            </ul>
          </Container>
        </nav>
      </div>
    </header>
  )
}
