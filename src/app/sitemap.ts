import type { MetadataRoute } from 'next'
import { company, routes } from '@/content/site'
import { routePath } from '@/content/metadata'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()
  return routes.map((route) => ({
    url: `${company.siteUrl}${routePath(route)}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: route === '/' ? 1 : 0.7,
  }))
}
