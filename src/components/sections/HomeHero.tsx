import Image from 'next/image'
import type { ReactNode } from 'react'
import Button from '@/components/ui/Button'
import Container from '@/components/ui/Container'
import { type } from '@/components/ui/tokens'
import type { Action, ImageRef } from '@/content/types'
import { cn } from '@/lib/cn'

interface HomeHeroProps {
  title: ReactNode
  lead: string
  primary: Action
  secondary: Action
  backgroundImage: ImageRef
}

/** The one tall, photographic hero on the site. */
export default function HomeHero({ title, lead, primary, secondary, backgroundImage }: HomeHeroProps) {
  return (
    <div className="bg-white">
      <section className="on-dark relative flex min-h-[80vh] items-center overflow-hidden rounded-b-[2.5rem] bg-brand-black text-white lg:rounded-b-[5rem]">
        <Image src={backgroundImage.src} alt={backgroundImage.alt} fill priority sizes="100vw" className="object-cover" />
        <div aria-hidden="true" className="absolute inset-0 bg-brand-black/85" />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 h-[40rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-red/10 blur-[120px]"
        />
        <Container className="relative py-24 text-center lg:py-32">
          <h1 className={cn(type.h1Home, 'mx-auto max-w-5xl text-white')}>{title}</h1>
          <p className={cn(type.lead, 'mx-auto mt-8 max-w-3xl text-brand-cream/90')}>{lead}</p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" href={primary.href} icon="arrow">
              {primary.label}
            </Button>
            <Button size="lg" variant="secondary" href={secondary.href} icon="down">
              {secondary.label}
            </Button>
          </div>
        </Container>
      </section>
    </div>
  )
}
