import Image from 'next/image'
import CTABanner from '@/components/sections/CTABanner'
import PageHero from '@/components/sections/PageHero'
import { FeatureCard } from '@/components/ui/Card'
import Section from '@/components/ui/Section'
import SectionHeading from '@/components/ui/SectionHeading'
import { type } from '@/components/ui/tokens'
import { contactHref, families, modules, pageMetadata } from '@/content/site'
import type { IconName, Product } from '@/content/types'
import { cn } from '@/lib/cn'

export const metadata = pageMetadata('/active-living')

const family = families.find((f) => f.slug === 'active-living')!
const patientModules = modules.filter((m) => m.audience === 'patient')
const careTeamModules = modules.filter((m) => m.audience === 'care-team')

const trackTags: Record<string, string> = { hospital: 'Hospital', home: 'Home' }
const tagsFor = (module: Product) => module.tracks.map((t) => trackTags[t])

/* Settings from "Active Living Solution.docx": hospital, clinic, long term care, home and recreational settings. */
const settings: { title: string; description: string; image: string; alt: string }[] = [
  { title: 'Hospital', description: 'Acute and rehabilitation care', image: '/images/hospital/nurse-patient-care.jpg', alt: 'A nurse caring for a patient in a hospital room' },
  { title: 'Clinic', description: 'Outpatient therapy', image: '/images/therapy/therapy-session.jpg', alt: 'A therapy session in a clinic' },
  { title: 'Long-term care', description: 'Extended support facilities', image: '/images/hospital/care-team.jpg', alt: 'A care team with a patient' },
  { title: 'Home', description: 'Independent living', image: '/images/lifestyle/kitchen-interaction.jpg', alt: 'A person in a wheelchair at a kitchen table' },
  { title: 'Recreation', description: 'Community and outdoor activities', image: '/images/lifestyle/outdoor-garden.jpg', alt: 'People in wheelchairs outdoors in a garden' },
]

const groups: { icon: IconName; title: string; description: string }[] = [
  { icon: 'user', title: 'For patients and families', description: 'Education, reminders, buddy calls, pressure tracking and alerts that a patient uses directly, in the hospital and at home.' },
  { icon: 'user-group', title: 'For care teams', description: 'Protocols, feedback, requests, monitoring and automations that make the room part of the care plan.' },
  { icon: 'squares-plus', title: 'Switched on per person', description: 'Modules are enabled per patient, per room or per home, so a rehabilitation unit, a skilled nursing facility and a family home each get what they need.' },
]

export default function ActiveLivingPage() {
  return (
    <>
      <PageHero
        eyebrow="Software modules"
        title={family.name}
        lead={family.summary}
        actions={[
          { label: 'Request a demo', href: contactHref({ purpose: 'demo', track: 'hospital' }) },
          { label: 'Browse the modules', href: '#patient' },
        ]}
        media={
          <div className="flex justify-center gap-4 lg:justify-end">
            {[
              { src: '/images/app/sci-education.jpg', alt: 'The SCI Education module in the Tetradapt app' },
              { src: '/images/app/buddy-calls.jpg', alt: 'The Buddy Calls module in the Tetradapt app' },
            ].map((shot) => (
              <Image key={shot.src} src={shot.src} alt={shot.alt} width={1170} height={2532} sizes="(max-width: 1024px) 40vw, 220px" className="w-[40%] max-w-[220px] rounded-2xl border border-white/10 shadow-2xl" priority />
            ))}
          </div>
        }
        nextBackground="cream"
      />

      <Section background="cream" id="how">
        <SectionHeading eyebrow="How the modules fit" title="One platform, switched on where it is needed" lead="Every Smart Hospital room and every Smart Home runs the same software. The modules below are the pieces you turn on." />
        <div className="grid gap-6 md:grid-cols-3">
          {groups.map((group) => (
            <FeatureCard key={group.title} icon={group.icon} title={group.title} description={group.description} size="lg" />
          ))}
        </div>
      </Section>

      <Section id="patient">
        <SectionHeading eyebrow="For patients and families" title="Patient modules" lead="Used directly by the person in the bed or at home. Each card shows where it is available." />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {patientModules.map((module) => (
            <FeatureCard key={module.slug} id={module.slug} icon={module.icon} title={module.name} description={module.summary} tags={tagsFor(module)} />
          ))}
        </div>
      </Section>

      <Section background="cream" id="care-team">
        <SectionHeading eyebrow="For care teams" title="Care team modules" lead="Run by staff, felt by patients. These make the room part of the care plan." />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {careTeamModules.map((module) => (
            <FeatureCard key={module.slug} id={module.slug} icon={module.icon} title={module.name} description={module.summary} tags={tagsFor(module)} />
          ))}
        </div>
      </Section>

      <Section id="settings">
        <SectionHeading align="center" eyebrow="Available across settings" title="From the first hospital day to the rest of life" lead="Hospital, clinic, long-term care, home and recreation. The modules follow the person." />
        <ul className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5">
          {settings.map((setting) => (
            <li key={setting.title}>
              <div className="relative aspect-square overflow-hidden rounded-2xl">
                <Image src={setting.image} alt={setting.alt} fill sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw" className="object-cover" />
              </div>
              <h3 className={cn(type.h4, 'mt-4 text-brand-black')}>{setting.title}</h3>
              <p className={type.small}>{setting.description}</p>
            </li>
          ))}
        </ul>
      </Section>

      <CTABanner audience="both" />
    </>
  )
}
