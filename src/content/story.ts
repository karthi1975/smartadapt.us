import type { Award, Deployment, Person, TimelineEvent } from './types'

/**
 * Company story. Sources: History.docx, "Smart Products Presentation.pptx" slides 2 to 4,
 * "HIMSS Presentation" slide 7 (vision), Deployments.docx, Awards.docx,
 * "2025 Paragraph Biosketch-BrentElieson.docx". Drafted copy is marked for client approval.
 */

/** Drafted from the NRH technology team's vision statement (HIMSS slide 7). For client approval. */
export const mission = {
  headline: 'Technology that gives control back.',
  body: [
    'Not technology for its own sake. Tetradapt exists to offer people the greatest degree of independence, control and quality of life after a catastrophic injury or illness.',
    'A person with limited function should be able to experience, navigate and interact with a hospital room, and later a home, with the same control and fluidity as anyone else. That is the standard we build to.',
  ],
}

export const timeline: TimelineEvent[] = [
  {
    year: '2001',
    title: 'A vision for active lives',
    description:
      'Dr. Jeffrey Rosenbluth begins promoting health, independence and an active lifestyle for people with complex physical disabilities in the Intermountain West.',
  },
  {
    year: '2003',
    title: 'TRAILS',
    description:
      'Dr. Rosenbluth develops the University of Utah’s TRAILS program (Technology, Recreation, Access, Independence, Lifestyle, Sports) to maximize quality of life through wellness, sports, recreation, education and advocacy.',
  },
  {
    year: '2008',
    title: 'The Tetradapt Initiative',
    description:
      'Tetradapt begins delivering the latest technology for adaptive sports and recreation to people living with spinal cord injury, in coordination with University of Utah engineering, research, business and medical teams.',
  },
  {
    year: '2020',
    title: 'The Craig H. Neilsen Rehabilitation Hospital opens',
    description:
      'The vision expands to Active Living Solutions for spinal cord injury, brain injury, mental decline and aging populations across hospital, clinic, long-term care, home and recreational settings. Every patient room is built accessibility-first.',
  },
  {
    year: '2023',
    title: 'Peer-reviewed at scale',
    description:
      '“It Made Me Feel So Much More at Home Here,” the first study of the smart rooms deployed at scale, is presented at the ACM CHI conference.',
  },
  {
    year: '2024',
    title: 'HIMSS',
    description:
      'The NRH team presents “Designed for the Patient and Future: An Accessibility-First Rehab Hospital” at HIMSS.',
  },
  {
    year: '2025',
    title: '1.9 million interactions a year',
    description:
      'Patients at NRH originate 1.9 million room interactions a year across 75 rooms, and the feedback module reaches care teams in real time.',
  },
]

export const people: Person[] = [
  {
    name: 'Jeffrey Rosenbluth, M.D.',
    title: 'Founder',
    org: 'Medical Director, Spinal Cord Injury Acute Rehabilitation, University of Utah Health',
    image: { src: '/images/team/jeff-rosenbluth.webp', alt: 'Portrait of Jeffrey Rosenbluth, M.D.', width: 600, height: 600 },
    bio: [
      'Dr. Rosenbluth founded Tetradapt and directs the Spinal Cord Injury Acute Rehabilitation program at the University of Utah Health Sciences Center.',
      'Since 2001 he has promoted health, independence and an active lifestyle for people with complex physical disabilities in the Intermountain West. In 2003 he developed the University of Utah’s TRAILS program, which brings technology, recreation, access, independence, lifestyle and sports together to improve quality of life.',
    ],
  },
  {
    name: 'Brent Elieson',
    title: 'Technology innovation',
    org: 'Associate Director of Technology Innovation, University of Utah Health',
    image: { src: '/images/brent-elieson.jpeg', alt: 'Portrait of Brent Elieson', width: 600, height: 600 },
    bio: [
      'Brent leads technology innovation for Utah Health and holds a BSIT and an MBA along with more than 20 IT industry certifications. He has more than 30 years of experience leading IT teams and has taken part in grants, funded research studies and peer-reviewed publications.',
      'His product designs have been brought to market by companies including Cisco, Computer Associates, Hypnoscure, LanOptics, Meraki and Tetradapt, resulting in more than a dozen US patent assertions.',
    ],
  },
]

/** Source: Deployments.docx (Existing, In Process, Planned). */
export const deployments: Deployment[] = [
  { name: 'Craig H. Neilsen Rehabilitation Hospital (NRH), University of Utah Health', status: 'existing', note: '75 patient rooms' },
  { name: 'University of Utah Community Clinics', status: 'existing' },
  { name: 'University of Utah Hospital', status: 'inProgress' },
  { name: 'University of Utah West Valley', status: 'inProgress' },
  { name: 'QLI of Omaha', status: 'inProgress' },
  { name: 'Discharged patient homes', status: 'inProgress' },
  { name: 'One U Center', status: 'planned' },
]

export const deploymentStatusLabels: Record<Deployment['status'], string> = {
  existing: 'Live',
  inProgress: 'In progress',
  planned: 'Planned',
}

/** Source: Awards.docx. Years and links to be supplied by the client. */
export const awards: Award[] = [
  {
    title: 'HIMSS EMRAM Stage 7',
    body: 'HIMSS',
    description: 'Case study contributing to the University of Utah Health HIMSS EMRAM Stage 7 award.',
  },
  {
    title: 'Most Wired, Level 10',
    body: 'CHIME',
    description: 'Case study contributing to the CHIME Most Wired Level 10 award.',
  },
]

/** Source: "Tetradapt website.docx", Community Developer and Support Program. */
export const communityRoles: { title: string; description: string }[] = [
  { title: 'Software engineer', description: 'Help build and test the app, modules and integrations.' },
  { title: 'Ticket support', description: 'Help patients and families with questions and support requests.' },
  { title: 'Design', description: 'Help design room and home systems around individual abilities.' },
  { title: 'Install', description: 'Join the installation network for homes and facilities.' },
  { title: 'Pilot participation', description: 'Try new modules and devices first and tell us what works.' },
]
