import CTABanner from '@/components/sections/CTABanner'
import PageHero from '@/components/sections/PageHero'
import ResearchIntro from '@/components/sections/ResearchIntro'
import Button from '@/components/ui/Button'
import LinkList from '@/components/ui/LinkList'
import Section from '@/components/ui/Section'
import SectionHeading from '@/components/ui/SectionHeading'
import StatGroup from '@/components/ui/StatGroup'
import VideoEmbed from '@/components/ui/VideoEmbed'
import { type } from '@/components/ui/tokens'
import { contactHref, pageMetadata, press, publications, researchLinks, stats, tracks, videos } from '@/content/site'
import { cn } from '@/lib/cn'

export const metadata = pageMetadata('/research')

export default function ResearchPage() {
  return (
    <>
      <PageHero
        eyebrow="Peer-reviewed"
        title="Research and evidence"
        lead="Peer-reviewed research validating the impact of smart hospital rooms and accessible home technology on patient independence and care quality."
      >
        <StatGroup stats={[stats.publicationCollaborations, stats.grantAwards, stats.liveHospitalYears]} showSources={false} />
      </PageHero>

      {/* Copy supplied by the client, 2026-09-22. Links confirmed by the client. */}
      <Section width="narrow" id="research-guided-independence">
        <SectionHeading title="Research Guided Independence" />
        <div className={cn('space-y-6', type.lead)}>
          <ResearchIntro showPublications />
        </div>
      </Section>

      <Section background="cream" id="video">
        <SectionHeading align="center" eyebrow="From the study site" title="Real-time feedback reaching the care team" />
        <VideoEmbed youtubeId={videos.feedbackModule.youtubeId} title={videos.feedbackModule.title} caption={videos.feedbackModule.caption} className="mx-auto max-w-4xl" />
      </Section>

      <Section id="publications">
        <SectionHeading
          eyebrow="Research collaborations"
          title="Publications"
          lead="Tetradapt partners with the University of Utah’s PEDEL (Personal Data and Empowerment Lab) and other investigators on peer-reviewed research into smart health care technology. Our founder, Dr. Jeffrey Rosenbluth, Brent Elieson, MBA and our staff take part as investigators and collaborators. The studies cover topics including patient and staff experiences in smart environments, technology adoption after spinal cord injury, human-robot co-adaptation, patient education and participation in research."
        />
        <p className={cn(type.body, 'mb-6')}>The following is a sample of Tetradapt technology publication collaborations.</p>
        <LinkList items={publications} />
        <div className="mt-8 flex flex-wrap gap-6">
          <Button variant="link" href={researchLinks.pedelLab} external>
            Visit the PEDEL lab
          </Button>
          <Button variant="link" href={researchLinks.pedelProject} external>
            The Making Smart Hospitals Useful project
          </Button>
        </div>
      </Section>

      <Section background="cream" id="press">
        <SectionHeading eyebrow="Press and industry" title="Coverage of smart hospital rooms" lead="Third-party reporting and analysis that supports the case for patient-controlled rooms." />
        <LinkList items={press} />
      </Section>

      <CTABanner
        audience="hospital"
        title="Request case studies and data"
        lead="For outcome data, case studies or questions about implementing Tetradapt at your facility, talk to our team."
        primary={{ label: 'Request case studies', href: contactHref({ purpose: 'research', track: 'hospital' }) }}
        secondary={tracks.hospital.primary}
      />
    </>
  )
}
