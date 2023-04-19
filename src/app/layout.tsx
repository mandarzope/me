import './globals.scss'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Mandar Zope: Neil Patel: Helping You Succeed Through Conversion Optimised Platform',
  description: 'If you need assistance with revamping outdated systems, scaling applications to handle high traffic, or creating multi-tenant solutions that enable resource sharing, I\'m a skilled CTO who can help you out. I have extensive experience in these areas and can work with you to achieve your technology goals. Don\'t hesitate to reach out to me for a consultation.',
  robots: {
    index: false,
    follow: false,
    nocache: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}