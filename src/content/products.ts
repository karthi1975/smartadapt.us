import type { IconName, Product, ProductFamily } from './types'

/**
 * Canonical product names and routes. Every page, card and nav item reads from here.
 *
 * Sources: "Smart Products Presentation.pptx" slides 9, 10 and 12 (product summary,
 * hardware, home solution), "Smart Hospital Room Options (2).docx" (OEM hardware,
 * user interfaces, services), "Active Living Solution.docx" (module catalog),
 * "Tetradapt website.docx" (page list). Descriptions are drafted for client approval.
 */

export const families: Product[] = [
  {
    slug: 'smart-hospital',
    name: 'Smart Hospital',
    route: '/smart-hospital',
    family: 'smart-hospital',
    summary:
      'Patient-controlled rooms for rehabilitation and acute care. Lights, blinds, temperature, TV, doors and more, through voice, touch, breath and other adaptive inputs, integrated with your clinical systems.',
    icon: 'hospital',
    tracks: ['hospital'],
  },
  {
    slug: 'smart-home',
    name: 'Smart Home',
    route: '/smart-home',
    family: 'smart-home',
    summary:
      'The same controls, at home. Voice and adaptive control of lights, climate, entertainment, doors and calls, with support and patient education built in.',
    icon: 'home',
    tracks: ['home'],
  },
  {
    slug: 'active-living',
    name: 'Active Living Modules',
    route: '/active-living',
    family: 'active-living',
    summary:
      'Software modules for patients and care teams: education, reminders, buddy calls, pressure tracking, feedback, requests and clinical protocols. They run inside Smart Hospital and Smart Home.',
    icon: 'heart',
    tracks: ['hospital', 'home'],
  },
  {
    slug: 'devices',
    name: 'Smart Devices',
    route: '/devices',
    family: 'devices',
    summary:
      'Tetradapt hardware that runs the system and connects to it: presence sensor, enterprise Bluetooth, standalone voice, sip-and-puff interface and elevator voice controller.',
    icon: 'devices',
    tracks: ['hospital', 'home'],
  },
]

/** Tetradapt hardware. Source: Options doc "OEM Hardware" and "Controlled Devices"; deck slide 10. */
export const devices: Product[] = [
  {
    slug: 'presence-sensor',
    name: 'Presence Sensor',
    route: '/devices#presence-sensor',
    family: 'devices',
    summary:
      'A millimeter-wave sensor that knows when a room is occupied. It drives power-save mode when a room is empty, restores the patient’s settings on return, and powers presence-based automations.',
    details: [
      'Detects presence, not identity',
      'Powers room power-save and provider-presence automations',
      'Used in hospital rooms and homes',
    ],
    icon: 'signal',
    tracks: ['hospital', 'home'],
  },
  {
    slug: 'enterprise-bluetooth',
    name: 'Enterprise Bluetooth',
    route: '/devices#enterprise-bluetooth',
    family: 'devices',
    summary:
      'A Bluetooth music and audio device built for shared rooms. Rolling pairing codes, a custom name per room and remote resetting mean the next patient starts clean.',
    details: [
      'Pairing codes roll on discharge through your ADT feed',
      'Custom name per room',
      'Reset remotely from the staff app',
    ],
    icon: 'wifi',
    tracks: ['hospital'],
  },
  {
    slug: 'standalone-voice',
    name: 'Standalone Voice Device',
    route: '/devices#standalone-voice',
    family: 'devices',
    summary:
      'Tetradapt’s own microphone and speaker for rooms and homes. Voice control that stays in the room and works with the rest of the system or on its own.',
    details: [
      'Microphone and speaker in one unit',
      'Runs the Home Hub in residential installs',
      'Works alongside touch, breath and other inputs',
    ],
    icon: 'microphone',
    tracks: ['hospital', 'home'],
  },
  {
    slug: 'sip-n-puff',
    name: 'Sip-N-Puff Interface',
    route: '/devices#sip-n-puff',
    family: 'devices',
    summary:
      'A Bluetooth breath-control interface. Sips and puffs become selections in the same app used for voice and touch, for people who cannot use either.',
    details: ['Bluetooth, pairs with the room or home system', 'Same app as voice and touch'],
    icon: 'breath',
    tracks: ['hospital', 'home'],
  },
  {
    slug: 'elevator-voice-controller',
    name: 'Elevator Voice Controller',
    route: '/devices#elevator-voice-controller',
    family: 'devices',
    summary:
      'Voice control for building elevators, so a person in a power chair can call the elevator and choose a floor without help.',
    details: ['Integrates with building elevator systems', 'Part of an accessibility-first building'],
    icon: 'elevator',
    tracks: ['hospital'],
  },
]

/** Ways people control the system. Source: Options doc "User Interfaces"; deck slide 5 access modalities. */
export const inputMethods: { name: string; description: string; icon: IconName }[] = [
  { name: 'Touch', description: 'iPad, iPhone, Android and Voalte touch screens, with patient and staff app versions.', icon: 'touch' },
  { name: 'Voice', description: 'Room and home voice control through the Tetradapt standalone voice device.', icon: 'microphone' },
  { name: 'Breath', description: 'Sip-and-puff control through the Tetradapt Bluetooth interface.', icon: 'breath' },
  { name: 'EMG', description: 'Muscle-signal controllers from Tetradapt and Meta Neural.', icon: 'bolt' },
  { name: 'Eye gaze', description: 'Eye-tracking selection for people with very limited movement.', icon: 'eye' },
  { name: 'Head and tongue', description: 'Head movement and tongue-click inputs, including tongue-click alerts.', icon: 'tongue' },
  { name: 'Automations', description: 'Rooms that respond on their own: presence, provider entry, power save, protocols.', icon: 'automations' },
]

/** What the hospital room controls. Source: Options doc "Controlled Devices". */
export const hospitalControls = {
  how: [
    'Voice commands',
    'Touchscreen',
    'Breath (sip-and-puff)',
    'EMG muscle sensors',
    'Head movement',
    'Eye gaze tracking',
    'Tongue click',
    'Smart automations',
  ],
  what: [
    'Lights and dimming',
    'Window shades and blinds',
    'Temperature (HVAC)',
    'Door operators',
    'Building elevators',
    'Bed positioning',
    'TV and cable',
    'Streaming apps',
    'Music (Bluetooth)',
    'Video calls',
    'Digital whiteboard (Epic)',
    'Closet rods, cabinets, fans and curtains',
  ],
}

/** Active Living Modules. Source: deck slide 12 "Software Modules" and "Active Living Solution.docx". */
export const modules: Product[] = [
  // Patient-facing
  {
    slug: 'room-controls',
    name: 'Room Controls',
    route: '/active-living#room-controls',
    family: 'active-living',
    audience: 'patient',
    summary: 'Lights, shades, temperature, TV, streaming, doors, bed and more, from one app, by voice, touch or adaptive input.',
    icon: 'squares-plus',
    tracks: ['hospital', 'home'],
  },
  {
    slug: 'in-app-tutorial',
    name: 'In-App Tutorial',
    route: '/active-living#in-app-tutorial',
    family: 'active-living',
    audience: 'patient',
    summary: 'A live walkthrough inside the app, so patients and families learn the room on day one without waiting for staff.',
    icon: 'play',
    tracks: ['hospital', 'home'],
  },
  {
    slug: 'sci-education',
    name: 'SCI Education',
    route: '/active-living#sci-education',
    family: 'active-living',
    audience: 'patient',
    summary: 'AI-led patient education for spinal cord injury, trained only on your curated documents and protocols.',
    icon: 'book',
    tracks: ['hospital', 'home'],
  },
  {
    slug: 'buddy-calls',
    name: 'Buddy Calls',
    route: '/active-living#buddy-calls',
    family: 'active-living',
    audience: 'patient',
    summary: 'Video calls with family, friends and support networks, started from the same app.',
    icon: 'video',
    tracks: ['hospital', 'home'],
  },
  {
    slug: 'pressure-tracker',
    name: 'Pressure Tracker',
    route: '/active-living#pressure-tracker',
    family: 'active-living',
    audience: 'patient',
    summary: 'Reminders and tracking for pressure relief, to help prevent pressure injuries after spinal cord injury.',
    icon: 'chart',
    tracks: ['hospital', 'home'],
  },
  {
    slug: 'emergency-alerts',
    name: 'Emergency Alerts',
    route: '/active-living#emergency-alerts',
    family: 'active-living',
    audience: 'patient',
    summary: 'A tongue click or any adaptive input raises an alert to staff or family through paging and nurse-call integrations.',
    icon: 'bell',
    tracks: ['hospital', 'home'],
  },
  {
    slug: 'memory-manager',
    name: 'Memory Manager',
    route: '/active-living#memory-manager',
    family: 'active-living',
    audience: 'patient',
    summary: 'Calendar and reminders for medications, routines, appointments and therapy, in the hospital and at home.',
    icon: 'calendar',
    tracks: ['hospital', 'home'],
  },
  {
    slug: 'tbi-care',
    name: 'TBI Care',
    route: '/active-living#tbi-care',
    family: 'active-living',
    audience: 'patient',
    summary: 'Support after traumatic brain injury: memory aids, routines and simplified controls.',
    icon: 'lightbulb',
    tracks: ['hospital', 'home'],
  },
  {
    slug: 'stroke-care',
    name: 'Stroke Care',
    route: '/active-living#stroke-care',
    family: 'active-living',
    audience: 'patient',
    summary: 'Recovery support and daily-living assistance after a stroke.',
    icon: 'heart',
    tracks: ['hospital', 'home'],
  },
  {
    slug: 'doc-care',
    name: 'DoC Care',
    route: '/active-living#doc-care',
    family: 'active-living',
    audience: 'patient',
    summary: 'Care protocols for patients with disorders of consciousness, including controlled stimulation.',
    icon: 'shield',
    tracks: ['hospital'],
  },
  {
    slug: 'pulseox-integration',
    name: 'PulseOx Integration',
    route: '/active-living#pulseox-integration',
    family: 'active-living',
    audience: 'patient',
    summary: 'Blood-oxygen readings and other health markers, visible to the patient and the care team.',
    icon: 'thumbs-up',
    tracks: ['hospital', 'home'],
  },
  // Care team
  {
    slug: 'stimulation-protocols',
    name: 'Stimulation Protocols',
    route: '/active-living#stimulation-protocols',
    family: 'active-living',
    audience: 'care-team',
    summary: 'Low-stimulation orders from the medical record enforce limits on TV hours, lighting and visitors, automatically.',
    icon: 'alert',
    tracks: ['hospital'],
  },
  {
    slug: 'survey-feedback',
    name: 'Survey Feedback',
    route: '/active-living#survey-feedback',
    family: 'active-living',
    audience: 'care-team',
    summary: 'Real-time patient feedback (Qualtrics) that reaches the care team while the patient is still in the room.',
    icon: 'clipboard',
    tracks: ['hospital'],
  },
  {
    slug: 'request-systems',
    name: 'Request Systems',
    route: '/active-living#request-systems',
    family: 'active-living',
    audience: 'care-team',
    summary: 'Patient requests routed to the right department: paging, facilities tickets (CMMS) and IT tickets (ServiceNow). A residential version routes home support requests.',
    icon: 'chat',
    tracks: ['hospital', 'home'],
  },
  {
    slug: 'patient-disposition-monitoring',
    name: 'Patient Disposition Monitoring',
    route: '/active-living#patient-disposition-monitoring',
    family: 'active-living',
    audience: 'care-team',
    summary: 'Status tracking and alerts for care teams as a patient’s condition and plan change.',
    icon: 'presentation',
    tracks: ['hospital'],
  },
  {
    slug: 'workflow-automations',
    name: 'Hospital Workflow Automations',
    route: '/active-living#workflow-automations',
    family: 'active-living',
    audience: 'care-team',
    summary: 'Mute the TV when a provider enters, power the room down when it empties, reset devices on discharge. Routine work handled by the room.',
    icon: 'refresh',
    tracks: ['hospital'],
  },
  {
    slug: 'compliance',
    name: 'Compliance',
    route: '/active-living#compliance',
    family: 'active-living',
    audience: 'care-team',
    summary: 'Track medication adherence, therapy completion, eating and daily-routine compliance.',
    icon: 'check-circle',
    tracks: ['hospital', 'home'],
  },
]

/** Smart Home features. Source: deck slide 9 "Home Solution"; existing page content. */
export const homeFeatures: { name: string; description: string; icon: IconName }[] = [
  { name: 'Lighting', description: 'All lights, dimmers and scenes.', icon: 'lightbulb' },
  { name: 'Climate', description: 'Thermostat and HVAC.', icon: 'sun' },
  { name: 'Entertainment', description: 'TV, streaming and music.', icon: 'tv' },
  { name: 'Doors and locks', description: 'Door operators, locks and cameras.', icon: 'lock' },
  { name: 'Communication', description: 'Phone, video calls and alerts.', icon: 'phone' },
  { name: 'Appliances', description: 'Fans, plugs and other connected devices.', icon: 'squares-plus' },
]

export const allProducts: Product[] = [...families, ...devices, ...modules]

export function getProduct(slug: string): Product | undefined {
  return allProducts.find((p) => p.slug === slug)
}

export function productsByFamily(family: ProductFamily): Product[] {
  return allProducts.filter((p) => p.family === family && !families.includes(p))
}
