import Link from 'next/link'

const CONTACT_EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL || ''

function ContactEmail(): React.ReactElement {
  if (!CONTACT_EMAIL) {
    return <span className="text-neutral-400 italic">Email not configured</span>
  }

  return (
    <a
      href={`mailto:${CONTACT_EMAIL}`}
      className="text-denim-600 hover:text-denim-700 transition-colors"
    >
      {CONTACT_EMAIL}
    </a>
  )
}

export default function Footer(): React.ReactElement {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-neutral-200 bg-neutral-50">
      <div className="mx-auto max-w-7xl px-6 py-12 flex flex-col items-center justify-center space-y-8 lg:px-8">
        <nav className="flex justify-center space-x-6">
          <Link
            href="/privacy"
            className="text-sm text-neutral-600 hover:text-denim-600 transition-colors"
          >
            Privacy
          </Link>
          <Link
            href="/about"
            className="text-sm text-neutral-600 hover:text-denim-600 transition-colors"
          >
            About
          </Link>
        </nav>
        <div className="text-center">
          <p className="text-sm text-neutral-600">
            &copy; {currentYear} Weft. All rights reserved.
          </p>
          <p className="mt-2 text-sm text-neutral-500">
            Business &amp; sponsorship inquiries: <ContactEmail />
          </p>
        </div>
      </div>
    </footer>
  )
}
