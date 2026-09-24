import Image from 'next/image'
import CTABanner from '@/components/sections/CTABanner'
import PageHero from '@/components/sections/PageHero'
import Button from '@/components/ui/Button'
import { FeatureCard } from '@/components/ui/Card'
import Section from '@/components/ui/Section'
import SectionHeading from '@/components/ui/SectionHeading'
import SplitSection from '@/components/ui/SplitSection'
import VideoEmbed from '@/components/ui/VideoEmbed'
import { families, homeFeatures, pageMetadata, tracks, videos } from '@/content/site'
import type { IconName } from '@/content/types'

export const metadata = pageMetadata('/smart-home')

const family = families.find((f) => f.slug === 'smart-home')!

/* Drafted from deck slide 9 (Voice Control, Home Control, Support Ticketing System, Patient Education). */
const benefits: { icon: IconName; title: string; description: string }[] = [
  {
    icon: 'home',
    title: 'Your space, your rules',
    description: 'Control lights, thermostat, TV, doors and locks. Adapt the home to your abilities rather than the other way around.',
  },
  {
    icon: 'refresh',
    title: 'The app you learned in the hospital',
    description: 'Same controls, same commands, in your own space. The home version adds home-specific services.',
  },
  {
    icon: 'lifebuoy',
    title: 'Support built in',
    description: 'Send a support request from the app, follow the tutorial, and let us fix most things remotely.',
  },
  {
    icon: 'book',
    title: 'Education that travels with you',
    description: 'Patient education, trained on curated documents, continues at home.',
  },
]

const steps: { icon: IconName; title: string; description: string }[] = [
  { icon: 'chat', title: 'Consultation', description: 'We talk with you and the people who help you about abilities, routines and the spaces you use most.' },
  { icon: 'wrench', title: 'Design and installation', description: 'We choose the controls and devices, then our installation network fits them with as little disruption as possible.' },
  { icon: 'shield', title: 'Maintenance agreement', description: 'Remote support, updates and changes as your needs change.' },
]

export default function SmartHomePage() {
  return (
    <>
      <PageHero
        eyebrow={tracks.home.label}
        title={family.name}
        lead={family.summary}
        media={{ src: '/images/rooms/apartment-living.jpg', alt: 'A person in a wheelchair in an accessible apartment living room' }}
        actions={[tracks.home.primary, { label: 'What you control', href: '#controls' }]}
        nextBackground="cream"
      />

      <Section background="cream" id="benefits">
        <SectionHeading eyebrow="Independent living at home" title="From hospital to home, without starting over" lead="Continue the independence you gained during recovery, with the same technology adapted for where you live." />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {benefits.map((benefit) => (
            <FeatureCard key={benefit.title} icon={benefit.icon} title={benefit.title} description={benefit.description} size="lg" />
          ))}
        </div>
      </Section>

      <Section id="controls">
        <SectionHeading eyebrow="What you control" title="The whole home, by voice, touch or adaptive input" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {homeFeatures.map((feature) => (
            <FeatureCard key={feature.name} icon={feature.icon} title={feature.name} description={feature.description} />
          ))}
        </div>
      </Section>

      <Section background="cream" id="app">
        <SplitSection
          mediaSide="left"
          eyebrow="The app"
          title="One app for everything at home"
          lead="The main menu, room controls, buddy calls, education and support requests live in one place, on iPad, iPhone or Android, by voice, touch or adaptive input."
          actions={[{ label: 'See the modules', href: '/active-living' }]}
          media={
            <div className="flex justify-center gap-4 lg:justify-end">
              {[
                { src: '/images/app/main-menu.jpg', alt: 'The Tetradapt app main menu on a phone' },
                { src: '/images/app/room-controls.jpg', alt: 'Room controls in the Tetradapt app on a phone' },
              ].map((shot) => (
                <Image key={shot.src} src={shot.src} alt={shot.alt} width={1170} height={2532} sizes="(max-width: 1024px) 40vw, 220px" className="w-[40%] max-w-[220px] rounded-2xl border border-brand-line shadow-lg" />
              ))}
            </div>
          }
        />
      </Section>

      <Section id="video">
        <SectionHeading align="center" eyebrow="See it in action" title="The same controls patients use in the hospital" />
        <div className="grid gap-8 md:grid-cols-2">
          <VideoEmbed youtubeId={videos.roomControls.youtubeId} title={videos.roomControls.title} caption={videos.roomControls.caption} />
          <VideoEmbed youtubeId={videos.feedbackModule.youtubeId} title={videos.feedbackModule.title} caption={videos.feedbackModule.caption} />
        </div>
      </Section>

      <Section background="cream" id="how">
        <SectionHeading eyebrow="How a home project runs" title="Three steps from first call to living with it" />
        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((step) => (
            <FeatureCard key={step.title} icon={step.icon} title={step.title} description={step.description} size="lg" />
          ))}
        </div>
        <div className="mt-10">
          <Button variant="link" icon="arrow" href="/services#homes">
            See the full home process
          </Button>
        </div>
      </Section>

      <CTABanner audience="home" />
    </>
  )
}
