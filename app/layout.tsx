import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Great Kwame Nkrumah Memorial School - Admissions',
  description: 'Online admission portal for Great Kwame Nkrumah Memorial School. Nurturing young minds, shaping the future star.',
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
