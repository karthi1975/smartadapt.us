import { contacts, researchLinks } from '@/content/site'

const linkClass = 'font-medium text-brand-red underline-offset-4 hover:underline'

interface ResearchIntroProps {
  /** Include the sentence pointing to the PEDEL publications page (used on the Research page). */
  showPublications?: boolean
}

/**
 * The client's research statement, supplied 2026-09-22 and extended to the homepage and
 * About page on 2026-09-24. Keep the wording as supplied.
 */
export default function ResearchIntro({ showPublications = false }: ResearchIntroProps) {
  return (
    <>
      <p>
        Tetradapt combines practical innovation with world-class research. Our staff serve as principal investigators (PIs) and{' '}
        <a href={researchLinks.collaborators} target="_blank" rel="noopener noreferrer" className={linkClass}>
          collaborators<span className="sr-only"> (opens in new tab)</span>
        </a>{' '}
        on research initiatives with leading scholars at the University of Utah and other respected institutions. These partnerships
        help ensure that Tetradapt solutions are supported by scientific evidence, user-centered design, and peer-reviewed research.
      </p>
      <p>
        Our collaborative research efforts have been funded by organizations including the National Science Foundation (NSF), the
        National Institutes of Health (NIH), and several of the world&apos;s leading technology companies.
      </p>
      <p>
        {showPublications && (
          <>
            To learn more about the research behind our work, explore our publications at{' '}
            <a href={researchLinks.pedelPublications} target="_blank" rel="noopener noreferrer" className={linkClass}>
              PEDEL Publications<span className="sr-only"> (opens in new tab)</span>
            </a>
            .{' '}
          </>
        )}
        For additional publications or research partnership inquiries, please contact us at{' '}
        <a href={`mailto:${contacts.emailGeneral}`} className={linkClass}>
          {contacts.emailGeneral}
        </a>
        .
      </p>
    </>
  )
}
