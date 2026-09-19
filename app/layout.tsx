import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Hawa Ultra',
  description: 'A modern Next.js application',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  )
}
