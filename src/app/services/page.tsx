import Image from 'next/image'
import CTABanner from '@/components/sections/CTABanner'
import PageHero from '@/components/sections/PageHero'
import TwoTrackChooser from '@/components/sections/TwoTrackChooser'
import Button from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import FaqList from '@/components/ui/FaqList'
import Icon from '@/components/ui/Icon'
import Section from '@/components/ui/Section'
import SectionHeading from '@/components/ui/SectionHeading'
import StepList from '@/components/ui/StepList'
import { type } from '@/components/ui/tokens'
import { contactHref, pageMetadata, partners, tracks } from '@/content/site'
import type { FaqItem, Step } from '@/content/types'
import { cn } from '@/lib/cn'

export const metadata = pageMetadata('/services')

/*
 * Drafted from "Smart Products Presentation.pptx" slide 12 (Hospital Engagement System, Home
 * Engagement System), "Smart Hospital Room Options (2).docx" and the HIMSS deck. For client approval.
 */
const facilitySteps: Step[] = [
  {
    title: 'Discovery and design',
    description:
      'We map your rooms, devices and clinical systems (nurse call, EHR, RTLS, TV) and agree on scope, from entertainment and room control to patient engagement.',
  },
  {
    title: 'Project management',
    description:
      'One project lead runs the schedule, the network and security review (VLANs, device management, guest wireless) and the coordination with your IT, facilities and clinical groups.',
  },
  {
    title: 'Software and hardware',
    description:
      'The Orchestrator server, the patient app for iPad, iPhone and Android, the staff app, and Tetradapt hardware: presence sensors, enterprise Bluetooth and standalone voice.',
  },
  {
    title: 'Installation',
    description:
      'Installed with our partner Resolut. Traditional controls stay in place, so nothing is taken away from patients or staff.',
  },
  {
    title: 'Training',
    description: 'Staff onboarding, an in-app tutorial for patients and families, and material for ongoing training.',
  },
  {
    title: 'Annual support agreement',
    description:
      'Monitoring, updates, ticket integration with ServiceNow and your facilities system, and custom integrations as your needs grow.',
    action: { label: 'See support options', href: '/support#facility-support' },
  },
]

const homeSteps: Step[] = [
  {
    title: 'Consultation',
    description: 'We talk with you, and with the family or care team who help you, about abilities, routines and the spaces you use most.',
  },
  {
    title: 'Design and specify',
    description:
      'We choose the controls (voice, touch, breath, EMG or eye gaze) and the devices: lights, thermostat, TV, doors, locks and calls.',
  },
  {
    title: 'Installation',
    description: 'Our installation network fits the system with as little disruption to your home as possible.',
  },
  {
    title: 'Training',
    description: 'Hands-on setup with you and the people who help you, plus the tutorial inside the app.',
  },
  {
    title: 'Maintenance agreement',
    description: 'Remote support, updates and changes as your needs change.',
    action: { label: 'See support options', href: '/support#home-support' },
  },
]

const faq: FaqItem[] = [
  {
    q: 'Do you run pilots?',
    a: 'Yes. Facilities usually start with a pilot on one unit or a set of rooms, then scale to other units once staff and patients have used it.',
  },
  {
    q: 'Will it work with the systems we already run?',
    a: 'The system communicates with any device that supports mainstream protocols. It integrates with Epic, nurse call, Baxter beds, RTLS and ticketing (ServiceNow and facilities systems), and works alongside MyChart Bedside and remote nursing. We keep a list of certified devices and can assess others.',
  },
  {
    q: 'What happens to the room’s normal controls?',
    a: 'Nothing is removed. Pillow speakers, wall switches, thermostats and nurse-call initiation keep working exactly as before.',
  },
  {
    q: 'How is patient privacy handled?',
    a: 'Devices are managed through your device-management platform, segmented on their own network, and reset on discharge through your ADT feed, so no patient’s credentials or pairing codes carry over.',
  },
]

const installer = partners.find((p) => p.slug === 'resolut')

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="From first conversation to long-term support"
        lead="We design, install, train and support every system we deliver. The path looks different for a hospital than for a home, so here they are side by side."
        actions={[{ label: 'Talk to our team', href: contactHref() }]}
      />

      <Section padding="compact">
        <TwoTrackChooser variant="cards" hrefs={{ hospital: '#facilities', home: '#homes' }} />
      </Section>

      <Section id="facilities" background="cream">
        <SectionHeading
          eyebrow={tracks.hospital.label}
          title="How a facility project runs"
          lead="One team owns the project from discovery to the annual support agreement, working with your IT, facilities and clinical leads."
        />
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <StepList steps={facilitySteps} />
          </div>
          <aside className="space-y-6">
            <Card padding="lg">
              <h3 className={cn(type.h4, 'text-brand-black')}>What is included</h3>
              <ul className="mt-4 space-y-2.5 text-sm text-brand-gray">
                {[
                  'Orchestrator server software',
                  'Patient app for iPad, iPhone and Android',
                  'Staff app for nurse phones',
                  'Presence sensors, enterprise Bluetooth and standalone voice devices',
                  'Project management and custom integrations',
                  'Annual support and maintenance agreement',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <Icon name="check" className="mt-0.5 h-4 w-4 text-brand-red" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
            {installer && (
              <Card padding="lg">
                <Image src={installer.logo.src} alt={installer.logo.alt} width={installer.logo.width} height={installer.logo.height} className="h-8 w-auto" />
                <h3 className={cn(type.h4, 'mt-4 text-brand-black')}>Engineering Services</h3>
                <p className={cn(type.small, 'mt-2')}>
                  Tetradapt partners with {installer.name} to help projects move forward with confidence. {installer.name} is a multidisciplinary
                  engineering firm built around one clear commitment: your success comes first.
                </p>
                <Button variant="link" href={installer.href!} external className="mt-3 text-sm">
                  Visit {installer.name}
                </Button>
              </Card>
            )}
          </aside>
        </div>
      </Section>

      <Section id="homes">
        <SectionHeading
          eyebrow={tracks.home.label}
          title="How a home project runs"
          lead="A smaller team, the same care. We work with you and the people who help you, then keep the system running as your needs change."
        />
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <StepList steps={homeSteps} />
          </div>
          <aside className="space-y-6">
            <Card padding="lg">
              <h3 className={cn(type.h4, 'text-brand-black')}>What is included</h3>
              <ul className="mt-4 space-y-2.5 text-sm text-brand-gray">
                {[
                  'Design and specification',
                  'The Tetradapt app and standalone voice device',
                  'Complementary hardware: lights, thermostat, locks, cameras',
                  'Installation through our network',
                  'A maintenance and support agreement',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <Icon name="check" className="mt-0.5 h-4 w-4 text-brand-red" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
            <Card padding="lg">
              <h3 className={cn(type.h4, 'text-brand-black')}>Coming home from the hospital?</h3>
              <p className={cn(type.small, 'mt-2')}>
                The home version uses the same app and commands patients learned in the hospital, with home-specific services added.
              </p>
              <Button variant="link" icon="arrow" href="/smart-home" className="mt-3 text-sm">
                See Smart Home
              </Button>
            </Card>
          </aside>
        </div>
      </Section>

      <Section background="cream">
        <SectionHeading eyebrow="Questions" title="Common questions about a project" />
        <FaqList items={faq} className="max-w-3xl" />
      </Section>

      <CTABanner audience="both" />
    </>
  )
}
