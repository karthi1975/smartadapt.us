import ContactForm from '@/components/forms/ContactForm'
import PageHero from '@/components/sections/PageHero'
import { FeatureCard } from '@/components/ui/Card'
import Section from '@/components/ui/Section'
import SectionHeading from '@/components/ui/SectionHeading'
import StepList from '@/components/ui/StepList'
import { communityRoles, pageMetadata } from '@/content/site'
import type { IconName, Step } from '@/content/types'

export const metadata = pageMetadata('/community')

const roleIcons: Record<string, IconName> = {
  'Software engineer': 'cog',
  'Ticket support': 'ticket',
  Design: 'presentation',
  Install: 'wrench',
  'Pilot participation': 'beaker',
}

/* Process drafted for client approval; the roles come from "Tetradapt website.docx". */
const steps: Step[] = [
  { title: 'Tell us about yourself', description: 'Use the form below. Say which role interests you and how much time you have.' },
  { title: 'We match you to a project', description: 'A member of the team follows up to talk through where your skills fit and what is coming up.' },
  { title: 'Onboard and contribute', description: 'You join the work, whether that is code, support tickets, design, installs or trying new modules first.' },
]

export default function CommunityPage() {
  return (
    <>
      <PageHero
        eyebrow="Community Program"
        title="Build it with us"
        lead="Tetradapt runs a community developer and support program. Volunteers help build, support, design, install and test the technology that gives people control back."
        actions={[{ label: 'Express interest', href: '#form' }]}
      />

      <Section id="roles">
        <SectionHeading eyebrow="Volunteer roles" title="Five ways to help" lead="Every role works directly on systems that patients and families use." />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {communityRoles.map((role) => (
            <FeatureCard key={role.title} icon={roleIcons[role.title] ?? 'star'} title={role.title} description={role.description} />
          ))}
        </div>
      </Section>

      <Section background="cream" id="how" width="narrow">
        <SectionHeading eyebrow="How it works" title="Three steps to your first contribution" />
        <StepList steps={steps} />
      </Section>

      <Section id="form" width="narrow">
        <SectionHeading title="Express your interest" lead="Tell us which role interests you and a little about your background. We reply within one business day." />
        <ContactForm source="/community" defaultPurpose="community" askTrack={false} heading="Community Program interest" />
      </Section>
    </>
  )
}
