import Image from 'next/image'
import CTABanner from '@/components/sections/CTABanner'
import HomeHero from '@/components/sections/HomeHero'
import TwoTrackChooser from '@/components/sections/TwoTrackChooser'
import { FeatureCard, TestimonialCard } from '@/components/ui/Card'
import LogoStrip from '@/components/ui/LogoStrip'
import Reveal from '@/components/ui/Reveal'
import Section from '@/components/ui/Section'
import SectionHeading from '@/components/ui/SectionHeading'
import SplitSection from '@/components/ui/SplitSection'
import StatGroup from '@/components/ui/StatGroup'
import VideoEmbed from '@/components/ui/VideoEmbed'
import { company, computedStats, families, pageMetadata, partnersByKind, stats, tracks, verifiedTestimonials, videos } from '@/content/site'

export const metadata = pageMetadata('/')

export default function HomePage() {
  const computed = computedStats()

  return (
    <>
      <HomeHero
        title={
          <>
            <span className="sr-only">{company.tagline}</span>
            <span aria-hidden="true">
              <span className="inline-flex items-baseline">
                <Image src="/Logo/Tetradapt-white-t.png" alt="" width={120} height={120} className="-mr-[0.04em] h-[0.9em] w-auto" priority />
                <span>echnology</span>
              </span>
              <br />
              that <span className="text-brand-red-tint">restores independence</span>
            </span>
          </>
        }
        lead="Patient-controlled hospital rooms and homes for people living with spinal cord injury, brain injury and the effects of aging. Proven at the Craig H. Neilsen Rehabilitation Hospital."
        primary={tracks.hospital.primary}
        secondary={{ label: 'See how it works', href: '#tracks' }}
        backgroundImage={{ src: '/images/hospital/smart-room-hero.jpg', alt: '' }}
      />

      <Section padding="compact">
        <LogoStrip
          heading="Deployed and trusted at"
          logos={partnersByKind('deployment')}
          extras={['Craig H. Neilsen Rehabilitation Hospital', 'Masimo']}
        />
      </Section>

      <Section id="tracks" background="cream">
        <Reveal>
          <TwoTrackChooser
            heading={{
              eyebrow: 'Solutions',
              title: 'Built for the hospital room. Made to come home.',
            }}
          />
        </Reveal>
      </Section>

      <Section id="proof">
        <SectionHeading
          eyebrow="Proof"
          title={`What ${stats.rooms.value} rooms taught us`}
          lead="Every command a patient sends is a moment of independence they did not have to ask for. At the Craig H. Neilsen Rehabilitation Hospital, that adds up."
        />
        <Reveal>
          <StatGroup stats={[stats.interactions, stats.commandsPerDay, stats.momentsPerDay]} />
        </Reveal>
      </Section>

      <Section id="what-we-build" background="cream">
        <SectionHeading
          eyebrow="What we build"
          title="Four products, one platform"
          lead="The hospital room and the home run the same software. The modules and the hardware work in both."
        />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {families.map((family) => (
            <FeatureCard key={family.slug} icon={family.icon} title={family.name} description={family.summary} href={family.route} size="lg" linkLabel={`Explore ${family.name}`} />
          ))}
        </div>
      </Section>

      <Section id="video">
        <SectionHeading align="center" eyebrow="See it in action" title="One minute in a patient-controlled room" />
        <VideoEmbed youtubeId={videos.roomControls.youtubeId} title={videos.roomControls.title} caption={videos.roomControls.caption} className="mx-auto max-w-4xl" />
      </Section>

      {verifiedTestimonials.length > 0 && (
        <Section background="cream" id="voices">
          <SectionHeading eyebrow="In their words" title="What control feels like from the bed" />
          <div className={verifiedTestimonials.length === 1 ? 'max-w-2xl' : 'grid gap-6 md:grid-cols-2 lg:grid-cols-3'}>
            {verifiedTestimonials.map((t) => (
              <TestimonialCard key={t.quote} quote={t.quote} name={t.name} role={t.role} org={t.org} />
            ))}
          </div>
        </Section>
      )}

      <Section id="research">
        <SplitSection
          media={{ src: '/images/hospital/nurse-patient-care.jpg', alt: 'A nurse and a patient talking in a hospital room' }}
          mediaSide="left"
          eyebrow="Research"
          title="Research-backed and peer-reviewed"
          lead={`Our staff serve as principal investigators and collaborators with the University of Utah PEDEL lab. ${computed.publications.value} peer-reviewed studies so far cover patient and staff experience, technology adoption after spinal cord injury and patient education.`}
          actions={[
            { label: 'Read the research', href: '/research' },
            { label: 'Our story', href: '/about' },
          ]}
        />
      </Section>

      <CTABanner audience="both" />
    </>
  )
}
