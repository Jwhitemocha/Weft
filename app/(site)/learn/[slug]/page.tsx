import { notFound } from 'next/navigation'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { compileMDX } from 'next-mdx-remote/rsc'
import Link from 'next/link'

const contentDirectory = path.join(process.cwd(), 'content/learn')

interface ArticleFrontmatter {
  title: string
  description: string
  publishedAt: string
  tags?: string[]
}

async function getArticle(slug: string) {
  try {
    const filePath = path.join(contentDirectory, `${slug}.mdx`)
    const fileContent = fs.readFileSync(filePath, 'utf8')
    const { data, content } = matter(fileContent)

    const { content: mdxContent } = await compileMDX({
      source: content,
      options: { parseFrontmatter: false },
    })

    return {
      frontmatter: data as ArticleFrontmatter,
      content: mdxContent,
    }
  } catch {
    return null
  }
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const article = await getArticle(slug)

  if (!article) {
    return {
      title: 'Article Not Found',
    }
  }

  return {
    title: article.frontmatter.title,
    description: article.frontmatter.description,
  }
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const article = await getArticle(slug)

  if (!article) {
    notFound()
  }

  return (
    <div className="mx-auto max-w-3xl px-6 py-12 lg:px-8">
      <article>
        <div className="mb-8">
          <Link href="/learn" className="text-sm text-denim-600 hover:text-denim-700 mb-4 inline-block">
            ← Back to Learn
          </Link>
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mt-4">
            {article.frontmatter.title}
          </h1>
          <p className="mt-2 text-sm text-neutral-500">
            Published: {new Date(article.frontmatter.publishedAt).toLocaleDateString()}
          </p>
        </div>
        <div className="prose prose-neutral lg:prose-lg max-w-none prose-headings:text-foreground prose-a:text-denim-600 prose-a:no-underline hover:prose-a:underline">
          {article.content}
        </div>
      </article>
    </div>
  )
}
