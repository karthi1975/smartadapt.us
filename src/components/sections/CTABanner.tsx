import Button from '@/components/ui/Button'
import Section from '@/components/ui/Section'
import { type } from '@/components/ui/tokens'
import { cta } from '@/content/site'
import type { Action, Audience } from '@/content/types'
import { cn } from '@/lib/cn'

interface CTABannerProps {
  audience?: Audience
  title?: string
  lead?: string
  primary?: Action
  secondary?: Action
}

/** The closing call to action. Every destination is a contact route, never a help page. */
export default function CTABanner({ audience = 'both', title, lead, primary, secondary }: CTABannerProps) {
  const content = cta[audience]
  const primaryAction = primary ?? content.primary
  const secondaryAction = secondary ?? content.secondary

  return (
    <Section background="red" aria-labelledby="cta-heading">
      <div className="mx-auto max-w-3xl text-center">
        <h2 id="cta-heading" className={cn(type.h2, 'text-white')}>
          {title ?? content.title}
        </h2>
        <p className={cn(type.lead, 'mt-5 text-brand-cream/90')}>{lead ?? content.lead}</p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button size="lg" href={primaryAction.href} icon="arrow">
            {primaryAction.label}
          </Button>
          {secondaryAction && (
            <Button size="lg" variant="secondary" href={secondaryAction.href}>
              {secondaryAction.label}
            </Button>
          )}
        </div>
      </div>
    </Section>
  )
}
