import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Project Ideas Generator',
  description: 'Generate creative project ideas for your next development project',
}

export default function ProjectIdeasPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold">Project Ideas Generator</h1>
    </div>
  )
} 