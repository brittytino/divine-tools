import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Certificate Generator',
  description: 'Generate professional certificates with customizable templates',
}

export default function CertificatePage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold">Certificate Generator</h1>
    </div>
  )
} 