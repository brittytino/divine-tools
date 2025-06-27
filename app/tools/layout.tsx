import { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    default: 'Divine Tools',
    template: '%s | Divine Tools'
  },
  description: 'Collection of useful tools by Divine Infotech',
}

export default function ToolsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-background">
      <main className="flex-1">{children}</main>
    </div>
  )
} 