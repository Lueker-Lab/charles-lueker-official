import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Charles Lueker Official | Singer/Songwriter/Performer',
  description: 'Born into a musical family, Charles has been writing music and performing from an early age.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-tan-100 text-gray-900">{children}</body>
    </html>
  )
}
