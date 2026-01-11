export const metadata = {
  title: 'Privacy',
  description: 'Weft privacy policy and data practices.',
}

const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'hello@weft.example'

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-12 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        Privacy
      </h1>
      <div className="mt-8 space-y-6 text-neutral-700 leading-relaxed">
        <p>
          Weft is built with privacy as a first-class principle.
        </p>
        <h2 className="text-2xl font-semibold text-foreground mt-8">What We Don&apos;t Collect</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>No user accounts or login systems</li>
          <li>No tracking cookies</li>
          <li>No personally identifiable information (PII)</li>
          <li>No behavioral tracking or fingerprinting</li>
          <li>No server-side data storage</li>
        </ul>
        <h2 className="text-2xl font-semibold text-foreground mt-8">Local Storage</h2>
        <p>
          Some tools may optionally save your inputs to your browser&apos;s local storage for convenience. This data never leaves your device and can be cleared at any time using the &quot;Reset saved inputs&quot; button in the tool.
        </p>
        <h2 className="text-2xl font-semibold text-foreground mt-8">Analytics</h2>
        <p>
          Weft MVP does not use analytics. If privacy-first analytics (such as Plausible or Umami) are added in the future, they will be cookie-less and will not collect personal identifiers.
        </p>
        <h2 className="text-2xl font-semibold text-foreground mt-8">Questions</h2>
        <p>
          For privacy questions or concerns, contact us at{' '}
          <a href={`mailto:${contactEmail}`} className="text-denim-600 hover:text-denim-700">
            {contactEmail}
          </a>.
        </p>
      </div>
    </div>
  )
}
