import { z } from 'zod'

export const TRACK_VALUES = ['hospital', 'home'] as const
export const PURPOSE_VALUES = [
  'demo',
  'assessment',
  'quote',
  'support',
  'research',
  'community',
  'other',
] as const
export const SETTING_VALUES = ['hospital', 'skilled-nursing', 'hospitality', 'other'] as const

/**
 * Shared by the contact form (client) and the API route (server), so both sides
 * agree on what a valid submission is.
 */
export const contactSchema = z.object({
  /** Optional in the schema; the form requires it wherever the question is shown. */
  track: z.enum(TRACK_VALUES, { error: 'Please tell us who this is for.' }).optional(),
  purpose: z.enum(PURPOSE_VALUES, { error: 'Please choose a reason for getting in touch.' }),
  setting: z.enum(SETTING_VALUES).optional(),
  forFamilyMember: z.boolean().optional().default(false),
  name: z.string({ error: 'Please enter your name.' }).trim().min(2, 'Please enter your name.').max(120, 'That name is too long.'),
  email: z.email({ error: 'Please enter a valid email address.' }).max(200),
  phone: z.string().trim().max(40, 'That phone number is too long.').optional().default(''),
  organization: z.string().trim().max(160, 'That name is too long.').optional().default(''),
  message: z
    .string({ error: 'Please tell us a little more, at least a sentence.' })
    .trim()
    .min(10, 'Please tell us a little more, at least a sentence.')
    .max(4000, 'Please keep your message under 4,000 characters.'),
  product: z.string().trim().max(80).optional().default(''),
  source: z.string().trim().max(200).optional().default(''),
})

export type ContactInput = z.input<typeof contactSchema>
export type ContactData = z.output<typeof contactSchema>
export type TrackValue = (typeof TRACK_VALUES)[number]
export type PurposeValue = (typeof PURPOSE_VALUES)[number]
export type SettingValue = (typeof SETTING_VALUES)[number]
