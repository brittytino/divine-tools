import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Resume Builder',
  description: 'Create professional resumes with our easy-to-use builder',
}

export default function ResumePage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold">Resume Builder</h1>
    </div>
  )
} 