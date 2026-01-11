import type { MetadataRoute } from 'next'

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://weft.example'

interface SitemapEntry {
  path: string
  changeFrequency: 'monthly' | 'weekly' | 'yearly'
  priority: number
}

const SITEMAP_ENTRIES: SitemapEntry[] = [
  { path: '', changeFrequency: 'monthly', priority: 1 },
  { path: '/tools', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/tools/tdee', changeFrequency: 'monthly', priority: 1 },
  { path: '/learn', changeFrequency: 'weekly', priority: 0.8 },
  { path: '/learn/what-is-tdee', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/about', changeFrequency: 'monthly', priority: 0.5 },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return SITEMAP_ENTRIES.map((entry) => ({
    url: `${BASE_URL}${entry.path}`,
    lastModified,
    changeFrequency: entry.changeFrequency,
    priority: entry.priority,
  }))
}
