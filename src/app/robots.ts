import type { MetadataRoute } from 'next'
import { company } from '@/content/site'

/** Set NEXT_PUBLIC_NOINDEX=1 on review deployments so search engines ignore them. */
const noindex = process.env.NEXT_PUBLIC_NOINDEX === '1'

export default function robots(): MetadataRoute.Robots {
  if (noindex) {
    return { rules: [{ userAgent: '*', disallow: '/' }] }
  }
  return {
    rules: [{ userAgent: '*', allow: '/', disallow: ['/api/', '/styleguide'] }],
    sitemap: `${company.siteUrl}/sitemap.xml`,
  }
}
