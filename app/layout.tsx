import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'

export const metadata: Metadata = {
  title: 'Hawa Ultra 🚀',
  description: 'صفحة Hawa Ultra الأصلية',
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ar" dir="rtl">
      <body style={{ margin: 0 }}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
