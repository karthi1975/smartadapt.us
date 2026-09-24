import Image from 'next/image'
import CTABanner from '@/components/sections/CTABanner'
import PageHero from '@/components/sections/PageHero'
import { Card } from '@/components/ui/Card'
import Icon from '@/components/ui/Icon'
import LogoStrip from '@/components/ui/LogoStrip'
import Section from '@/components/ui/Section'
import SectionHeading from '@/components/ui/SectionHeading'
import SplitSection from '@/components/ui/SplitSection'
import StatGroup from '@/components/ui/StatGroup'
import { type } from '@/components/ui/tokens'
import {
  awards,
  company,
  computedStats,
  deploymentStatusLabels,
  deployments,
  mission,
  pageMetadata,
  partnersByKind,
  people,
  stats,
  timeline,
  yearsSince,
} from '@/content/site'
import type { Deployment, IconName } from '@/content/types'
import { cn } from '@/lib/cn'

export const metadata = pageMetadata('/about')

const statusIcons: Record<Deployment['status'], IconName> = {
  existing: 'check-circle',
  inProgress: 'refresh',
  planned: 'calendar',
}

export default function AboutPage() {
  const years = yearsSince()
  const computed = computedStats()

  return (
    <>
      <PageHero
        eyebrow={`Est. ${company.founded}`}
        title="Our story"
        lead={`Tetradapt began with a doctor, a university and a conviction: people living with paralysis should have the latest technology, delivered with the same care as any other part of their treatment. ${years} years later, that conviction runs ${stats.rooms.value} hospital rooms and is coming home.`}
      >
        <StatGroup stats={[computed.years, stats.rooms, stats.interactions]} showSources={false} />
      </PageHero>

      <Section width="narrow">
        <SectionHeading eyebrow="Mission" title={mission.headline} />
        <div className="space-y-5">
          {mission.body.map((paragraph) => (
            <p key={paragraph} className={type.lead}>
              {paragraph}
            </p>
          ))}
        </div>
      </Section>

      <Section background="cream" id="timeline">
        <SectionHeading eyebrow="Timeline" title="How we got here" />
        <ol className="relative max-w-3xl space-y-10 border-l-2 border-brand-line pl-8">
          {timeline.map((event) => (
            <li key={event.year} className="relative">
              <span aria-hidden="true" className="absolute -left-[2.6rem] top-1 h-4 w-4 rounded-full border-4 border-brand-cream bg-brand-red" />
              <p className={type.eyebrow}>{event.year}</p>
              <h3 className={cn(type.h3, 'mt-1 text-brand-black')}>{event.title}</h3>
              <p className={cn(type.body, 'mt-2')}>{event.description}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section id="leadership">
        <SectionHeading eyebrow="Leadership" title="The people behind it" />
        <div className="space-y-16 lg:space-y-24">
          {people.map((person, index) => (
            <SplitSection
              key={person.name}
              as="h3"
              media={
                <div className="relative mx-auto aspect-square max-w-md overflow-hidden rounded-2xl bg-brand-cream lg:mx-0">
                  <Image src={person.image.src} alt={person.image.alt} fill sizes="(max-width: 1024px) 100vw, 40vw" className="object-cover" />
                </div>
              }
              mediaSide={index % 2 === 0 ? 'left' : 'right'}
              eyebrow={person.title}
              title={person.name}
              lead={person.org}
            >
              {person.bio.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </SplitSection>
          ))}
        </div>
      </Section>

      <Section background="cream" id="partners">
        <SectionHeading
          eyebrow="Partners and recognition"
          title="Built with the University of Utah"
          lead="Tetradapt works in coordination with University of Utah engineering, research, business and medical teams, and with the partners below."
        />
        <LogoStrip
          logos={partnersByKind('deployment')}
          extras={['Craig H. Neilsen Rehabilitation Hospital', 'Masimo', 'PEDEL, University of Utah']}
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {awards.map((award) => (
            <Card key={award.title} padding="lg" className="flex gap-5">
              <span aria-hidden="true" className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-red/10 text-brand-red">
                <Icon name="trophy" />
              </span>
              <div>
                <p className={type.eyebrow}>{award.body}</p>
                <h3 className={cn(type.h4, 'mt-1 text-brand-black')}>{award.title}</h3>
                <p className={cn(type.small, 'mt-2')}>{award.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section id="deployments">
        <SectionHeading eyebrow="Deployments" title="Where the system runs" />
        <div className="grid gap-6 md:grid-cols-3">
          {(['existing', 'inProgress', 'planned'] as const).map((status) => (
            <Card key={status} padding="lg">
              <h3 className={cn(type.h4, 'text-brand-black')}>{deploymentStatusLabels[status]}</h3>
              <ul className="mt-4 space-y-3">
                {deployments
                  .filter((d) => d.status === status)
                  .map((d) => (
                    <li key={d.name} className="flex items-start gap-3 text-brand-black">
                      <Icon name={statusIcons[status]} className="mt-0.5 h-5 w-5 text-brand-red" />
                      <span>
                        {d.name}
                        {d.note && <span className="block text-sm text-brand-gray">{d.note}</span>}
                      </span>
                    </li>
                  ))}
              </ul>
            </Card>
          ))}
        </div>
      </Section>

      <Section background="cream">
        <SplitSection
          media={{
            src: '/images/hospital/smart-room-detail.jpg',
            alt: 'A smart hospital room with the control tablet mounted at the bedside',
          }}
          eyebrow="Research"
          title="Proven by peer-reviewed research"
          lead="Our staff serve as principal investigators and collaborators with the University of Utah PEDEL lab. Five studies so far cover patient and staff experience, technology adoption after spinal cord injury and patient education."
          actions={[{ label: 'Read the research', href: '/research' }]}
        />
      </Section>

      <CTABanner audience="both" />
    </>
  )
}
