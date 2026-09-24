import ContactForm from '@/components/forms/ContactForm'
import PageHero from '@/components/sections/PageHero'
import TwoTrackChooser from '@/components/sections/TwoTrackChooser'
import Button from '@/components/ui/Button'
import { FeatureCard } from '@/components/ui/Card'
import ContactChannels from '@/components/ui/ContactChannels'
import FaqList from '@/components/ui/FaqList'
import Section from '@/components/ui/Section'
import SectionHeading from '@/components/ui/SectionHeading'
import { type } from '@/components/ui/tokens'
import { contactHref, contacts, pageMetadata, tracks } from '@/content/site'
import type { FaqItem, IconName } from '@/content/types'
import { cn } from '@/lib/cn'

export const metadata = pageMetadata('/support')

/*
 * Drafted from "Smart Hospital Room Options (2).docx" (services, ADT resets, AD-controlled staff
 * access), the UUH Smart Room Retrofit deck (remote management, staff app) and the HIMSS deck.
 * Response times and hours come from the content module. For client approval.
 */
const facilityChannels: { icon: IconName; title: string; description: string }[] = [
  {
    icon: 'ticket',
    title: 'Support tickets',
    description: 'Raise a ticket through your help desk. We integrate with ServiceNow and facilities ticketing so requests reach us with the room and device attached.',
  },
  {
    icon: 'desktop',
    title: 'Remote management',
    description: 'We diagnose and resolve most issues remotely, including device resets and configuration changes.',
  },
  {
    icon: 'mobile',
    title: 'Staff app',
    description: 'The staff version of the app on nurse phones controls any room from anywhere in the hospital and shows tagged patient locations.',
  },
  {
    icon: 'lifebuoy',
    title: 'Escalation',
    description: 'Your annual support agreement sets response times and who to call when it cannot wait.',
  },
]

const facilityFaq: FaqItem[] = [
  {
    q: 'What happens if the network or the system goes down?',
    a: 'Traditional controls keep working. Pillow speakers, wall switches, thermostats and nurse-call initiation are never removed, so patients and staff always have a fallback.',
  },
  {
    q: 'How are rooms reset between patients?',
    a: 'Discharge events from your ADT feed reset the room iPad, Apple TV, TV, Bluetooth pairing codes and BYOD pairing codes automatically.',
  },
  {
    q: 'Can we add a new device or integration?',
    a: 'Yes. The system communicates with any device that supports mainstream protocols. We keep a list of certified devices and can assess and certify others.',
  },
  {
    q: 'Who can change room restrictions?',
    a: 'Staff with the right role can set room-control restrictions and low-stimulation protocols from the staff app. Access is controlled through your directory.',
  },
]

const homeChannels: { icon: IconName; title: string; description: string }[] = [
  {
    icon: 'play',
    title: 'In-app tutorial',
    description: 'Every installation includes a walkthrough inside the app for you and your family.',
  },
  {
    icon: 'envelope',
    title: 'Email us',
    description: `Describe what is happening and what changed. ${contacts.responseTime}`,
  },
  {
    icon: 'desktop',
    title: 'Remote assistance',
    description: 'With your permission we connect to the system and fix most issues without a visit.',
  },
  {
    icon: 'shield',
    title: 'Maintenance agreement',
    description: 'Updates, changes as your needs change, and priority help when something stops working.',
  },
]

const homeFaq: FaqItem[] = [
  {
    q: 'The system is not responding to my voice.',
    a: 'Check that the voice device has power and that your home internet is working, then try again. If it still does not respond, email us and we can connect remotely.',
  },
  {
    q: 'Can I add devices later?',
    a: 'Yes. Most additions can be configured remotely. Some need a short visit from the installation network.',
  },
  {
    q: 'Is it the same app I used in the hospital?',
    a: 'Yes. The home version uses the same controls and commands, and adds home-specific services such as support requests and education.',
  },
]

export default function SupportPage() {
  return (
    <>
      <PageHero
        tone="light"
        eyebrow="Support"
        title="Help for the systems we have installed"
        lead="Support looks different for a hospital IT team than for a family at home. Pick your path, or send us a message and we will route it."
      />

      <Section padding="compact">
        <TwoTrackChooser variant="cards" hrefs={{ hospital: '#facility-support', home: '#home-support' }} />
      </Section>

      <Section id="facility-support" background="cream">
        <SectionHeading
          eyebrow={tracks.hospital.label}
          title="Facility IT and staff"
          lead="Most issues are diagnosed and resolved remotely. Your support agreement sets response times and escalation."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {facilityChannels.map((channel) => (
            <FeatureCard key={channel.title} icon={channel.icon} title={channel.title} description={channel.description} />
          ))}
        </div>
        <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <h3 className={cn(type.h3, 'text-brand-black')}>Common questions</h3>
            <FaqList items={facilityFaq} className="mt-6" />
          </div>
          <div>
            <h3 className={cn(type.h3, 'text-brand-black')}>Contact support</h3>
            <ContactChannels className="mt-6" />
            <Button href={contactHref({ purpose: 'support', track: 'hospital' })} icon="arrow" className="mt-6">
              Open a support request
            </Button>
          </div>
        </div>
      </Section>

      <Section id="home-support">
        <SectionHeading
          eyebrow={tracks.home.label}
          title="Home users and families"
          lead="Start with the tutorial inside the app, then reach us by email or through the form. We can connect remotely to fix most things without a visit."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {homeChannels.map((channel) => (
            <FeatureCard key={channel.title} icon={channel.icon} title={channel.title} description={channel.description} />
          ))}
        </div>
        <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <h3 className={cn(type.h3, 'text-brand-black')}>Common questions</h3>
            <FaqList items={homeFaq} className="mt-6" />
          </div>
          <div>
            <h3 className={cn(type.h3, 'text-brand-black')}>Contact support</h3>
            <ContactChannels className="mt-6" />
            <Button href={contactHref({ purpose: 'support', track: 'home' })} icon="arrow" className="mt-6">
              Open a support request
            </Button>
          </div>
        </div>
      </Section>

      <Section background="cream" width="narrow" id="request">
        <SectionHeading
          title="Send a support request"
          lead="Tell us who you are and what is happening. Include the room or home and, if you can, what changed before it stopped working."
        />
        <ContactForm source="/support" defaultPurpose="support" />
      </Section>
    </>
  )
}
