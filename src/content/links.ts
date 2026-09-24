import type { Purpose, Setting, TrackKey } from './types'

export interface ContactHrefOptions {
  purpose?: Purpose
  track?: TrackKey
  setting?: Setting
  product?: string
}

/** Builds a /contact link that pre-selects the form. */
export function contactHref(options: ContactHrefOptions = {}): string {
  const params = new URLSearchParams()
  if (options.purpose) params.set('purpose', options.purpose)
  if (options.track) params.set('track', options.track)
  if (options.setting) params.set('setting', options.setting)
  if (options.product) params.set('product', options.product)
  const query = params.toString()
  return query ? `/contact?${query}` : '/contact'
}
