import type { Publication, Video } from './types'

/** Source: "University of Utah Smart Hospital Room Research.docx". */
export const publications: Publication[] = [
  {
    title: 'Hospital Employee Experiences Caring for Patients in Smart Patient Rooms',
    href: 'https://pedel.cs.utah.edu/publications/30400-hospital-employee-experiences-caring-for-patients-in-smart-patient-rooms',
    source: 'University of Utah, PEDEL',
  },
  {
    title: 'Investigating Technology Adoption Soon After Sustaining a Spinal Cord Injury',
    href: 'https://pedel.cs.utah.edu/publications/30664-investigating-technology-adoption-soon-after-sustaining-a-spinal-cord-injury',
    source: 'University of Utah, PEDEL',
  },
  {
    title:
      '“It Made Me Feel So Much More at Home Here”: Patient Perspectives on Smart Home Technology Deployed at Scale in a Rehabilitation Hospital',
    href: 'https://pedel.cs.utah.edu/publications/18841-it-made-me-feel-so-much-more-at-home-here-patient-perspectives-on-smart-home-technology-deployed-at-scale-in-a-rehabilitation-hospital',
    source: 'ACM CHI 2023, University of Utah, PEDEL',
  },
  {
    title: 'Reenvisioning Patient Education with Smart Hospital Patient Rooms',
    href: 'https://pedel.cs.utah.edu/publications/29678-reenvisioning-patient-education-with-smart-hospital-patient-rooms',
    source: 'University of Utah, PEDEL',
  },
  {
    title: 'The Impact of Spinal Cord Injury on Participation in Human-Centered Research',
    href: 'https://pedel.cs.utah.edu/publications/4966-the-impact-of-spinal-cord-injury-on-participation-in-human-centered-research',
    source: 'University of Utah, PEDEL',
  },
]

/** Source: "University of Utah Smart Hospital Room Research.docx", third-party publications. */
export const press: Publication[] = [
  {
    title: 'Hospitals’ Brick and Mortar Paradox',
    source: 'Becker’s Hospital Review',
    href: 'https://www.beckershospitalreview.com/capital/hospitals-brick-and-mortar-paradox.html',
  },
  {
    title: 'Designing Smart Hospitals of the Future: What to Know',
    source: 'Health Journalism',
    href: 'https://healthjournalism.org/blog/2022/03/designing-smart-hospitals-of-the-future-what-to-know/',
  },
  {
    title: 'The Hospital Room of the Future: 5 Innovation Execs Outline What to Expect in Next 5 Years',
    source: 'Becker’s Hospital Review',
    href: 'https://www.beckershospitalreview.com/digital-transformation/the-hospital-room-of-the-future-5-innovation-execs-outline-what-to-expect-in-next-5-years.html',
  },
  {
    title: 'Smart Patient Rooms Support Clinicians and Enhance the Patient Experience',
    source: 'Samsung Insights',
    href: 'https://insights.samsung.com/2021/10/06/smart-patient-rooms-support-clinicians-and-enhance-the-patient-experience-2/',
  },
  {
    title: 'Smart Rooms Are Not Common. Their Benefits Could Soon Make Them So',
    source: 'Healthcare IT News',
    href: 'https://www.healthcareitnews.com/news/smart-rooms-are-not-common-their-benefits-could-soon-make-them-so',
  },
  {
    title: 'A Buyer’s Guide to Smart Rooms',
    source: 'Avia Marketplace',
    href: 'https://resources.marketplace.aviahealth.com/2024/06/11/a-buyers-guide-to-smart-rooms/',
  },
  {
    title: 'Two Ways to Help Retain and Engage Your Nurses',
    source: 'Allen Institute',
    href: 'https://blog.engagewithallen.com/engage/two-ways-to-help-retain-and-engage-your-nurses',
  },
  {
    title: 'Patient Perspectives on Smart Home Technology Deployed at Scale in a Rehabilitation Hospital',
    source: 'ACM Digital Library',
    href: 'https://dl.acm.org/doi/10.1145/3613904.3642201',
  },
]

/** Only real, client-supplied videos. Source: "2026 website overview.docx". */
export const videos: Record<'roomControls' | 'feedbackModule', Video> = {
  roomControls: {
    id: 'room-controls',
    youtubeId: 'VAA7IrOD_7g',
    title: 'Room controls demo at the Craig H. Neilsen Rehabilitation Hospital',
    caption: 'A one-minute walk through the basic room controls at the Craig H. Neilsen Rehabilitation Hospital.',
  },
  feedbackModule: {
    id: 'feedback-module',
    youtubeId: 'TedX1XgVAXE',
    title: 'The Feedback module in the Tetradapt app',
    caption: 'Real-time patient feedback reaching the care team.',
  },
}

export const researchLinks = {
  pedelLab: 'https://pedel.cs.utah.edu',
  pedelPublications: 'https://pedel.cs.utah.edu/publications',
  pedelProject: 'https://pedel.cs.utah.edu/projects/1315-making-smart-hospitals-useful',
  collaborators:
    'https://attheu.utah.edu/science-technology/u-researchers-join-nsf-center-that-studies-how-robots-and-people-learn-to-work-together/',
}
