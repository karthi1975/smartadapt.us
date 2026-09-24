import CTABanner from '@/components/sections/CTABanner'
import PageHero from '@/components/sections/PageHero'
import Button from '@/components/ui/Button'
import { Card, FeatureCard } from '@/components/ui/Card'
import Icon from '@/components/ui/Icon'
import LogoStrip from '@/components/ui/LogoStrip'
import Section from '@/components/ui/Section'
import SectionHeading from '@/components/ui/SectionHeading'
import StatGroup from '@/components/ui/StatGroup'
import VideoEmbed from '@/components/ui/VideoEmbed'
import { type } from '@/components/ui/tokens'
import {
  families,
  hospitalControls,
  integrationsWithoutLogo,
  modules,
  pageMetadata,
  partnersByKind,
  stats,
  tracks,
  videos,
} from '@/content/site'
import type { IconName } from '@/content/types'
import { cn } from '@/lib/cn'

export const metadata = pageMetadata('/smart-hospital')

const family = families.find((f) => f.slug === 'smart-hospital')!
const hospitalModules = modules.filter((m) => m.tracks.includes('hospital') && m.slug !== 'room-controls')

/*
 * Differentiators drafted from the HIMSS deck ("redundant control options", "HIPAA compliant",
 * "enterprise standards"), the UUH Smart Room Retrofit deck ("traditional control method will
 * continue as before", remote management, staff app) and "Smart Hospital Room Options (2).docx".
 */
const differentiators: { icon: IconName; title: string; description: string }[] = [
  {
    icon: 'shield',
    title: 'Nothing is taken away',
    description: 'Pillow speakers, wall switches, thermostats and nurse-call initiation keep working exactly as before. The system adds control; it never removes it.',
  },
  {
    icon: 'refresh',
    title: 'Redundant control paths',
    description: 'Every device answers to more than one input: iPad, voice, sip-and-puff, wall switch. A bad day for one input is not a bad day for the patient.',
  },
  {
    icon: 'squares-plus',
    title: 'Works alongside what you run',
    description: 'Runs at the same time as MyChart Bedside and remote nursing, and speaks to Epic, nurse call, beds, RTLS and your ticketing systems.',
  },
  {
    icon: 'lock',
    title: 'Enterprise standards',
    description: 'HIPAA-aligned design, managed devices, network segmentation, guest wireless management, and automatic resets on discharge through your ADT feed.',
  },
  {
    icon: 'mobile',
    title: 'Built for staff too',
    description: 'The staff app on nurse phones controls any room from anywhere in the hospital, shows patient location, and routes requests to the right department.',
  },
  {
    icon: 'automations',
    title: 'Rooms that respond on their own',
    description: 'The TV mutes when a provider enters, the room powers down when it empties, and low-stimulation orders from the record are enforced automatically.',
  },
]

export default function SmartHospitalPage() {
  return (
    <>
      <PageHero
        eyebrow={tracks.hospital.label}
        title={family.name}
        lead={family.summary}
        media={{ src: '/images/hospital/smart-room-hero.jpg', alt: 'A patient in a power wheelchair using the room controls in a hospital room' }}
        actions={[tracks.hospital.primary, { label: 'See the room', href: '#controls' }]}
        nextBackground="cream"
      />

      <Section id="controls" background="cream">
        <SectionHeading
          eyebrow="Adaptive control"
          title="Every patient, every input, the whole room"
          lead="Patients recovering from spinal cord injury, stroke or brain injury can switch between voice, breath, EMG, eye gaze and other inputs, and choose what works best for each moment."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          {[
            { title: 'How they control it', items: hospitalControls.how, icon: 'touch' as IconName },
            { title: 'What they control', items: hospitalControls.what, icon: 'home' as IconName },
          ].map((group) => (
            <Card key={group.title} padding="lg">
              <div className="flex items-center gap-3">
                <span aria-hidden="true" className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-red/10 text-brand-red">
                  <Icon name={group.icon} />
                </span>
                <h3 className={cn(type.h3, 'text-brand-black')}>{group.title}</h3>
              </div>
              <ul className="mt-6 grid gap-x-6 gap-y-2.5 sm:grid-cols-2">
                {group.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-brand-gray">
                    <Icon name="check" className="mt-1 h-4 w-4 text-brand-red" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Section>

      <Section id="video">
        <SectionHeading align="center" eyebrow="See it in action" title="Real rooms, real patients" />
        <div className="grid gap-8 md:grid-cols-2">
          <VideoEmbed youtubeId={videos.roomControls.youtubeId} title={videos.roomControls.title} caption={videos.roomControls.caption} />
          <VideoEmbed youtubeId={videos.feedbackModule.youtubeId} title={videos.feedbackModule.title} caption={videos.feedbackModule.caption} />
        </div>
      </Section>

      <Section id="modules" background="cream">
        <SectionHeading
          eyebrow="Software"
          title="Modules for patients and care teams"
          lead="Active Living Modules run inside every room and are switched on per patient. Education, reminders, requests, feedback and clinical protocols, in the same app as the light switch."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {hospitalModules.map((module) => (
            <FeatureCard
              key={module.slug}
              icon={module.icon}
              title={module.name}
              description={module.summary}
              href={module.route}
              tags={[module.audience === 'care-team' ? 'Care team' : 'Patient']}
            />
          ))}
        </div>
        <div className="mt-10">
          <Button variant="link" icon="arrow" href="/active-living">
            See all Active Living Modules
          </Button>
        </div>
      </Section>

      <Section id="why">
        <SectionHeading eyebrow="Why hospitals choose it" title="A hospital system, not a consumer gadget" />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {differentiators.map((item) => (
            <FeatureCard key={item.title} icon={item.icon} title={item.title} description={item.description} size="lg" />
          ))}
        </div>
      </Section>

      <Section id="integrations" background="cream">
        <SectionHeading
          eyebrow="Integrations"
          title="Connected to the systems you already run"
          lead="Electronic health record, nurse call, beds, patient portal, feedback, location services and ticketing. The system communicates with any device that supports mainstream protocols, and we certify new ones."
        />
        <LogoStrip logos={partnersByKind('integration')} extras={integrationsWithoutLogo} />
      </Section>

      <Section id="results">
        <SectionHeading
          eyebrow="Proven results"
          title="Measured in a live hospital"
          lead="Real-world data from the Craig H. Neilsen Rehabilitation Hospital and peer-reviewed research from the University of Utah PEDEL lab."
        />
        <StatGroup variant="cards" stats={[stats.interactions, stats.commandsPerDay, stats.momentsPerDay]} showSources={false} />
        <div className="mt-12 rounded-2xl bg-brand-cream p-8">
          <h3 className={cn(type.h3, 'text-brand-black')}>Impact on staff</h3>
          <StatGroup className="mt-6" stats={[stats.nurseValuable, stats.nurseInfluence, stats.nurseMeaningful]} />
        </div>
        <div className="mt-10">
          <Button variant="link" icon="arrow" href="/research">
            Read the research
          </Button>
        </div>
      </Section>

      <CTABanner audience="hospital" />
    </>
  )
}
