import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Rolls-Royce Motor Cars',
  description: 'A clone project based on the official Rolls-Royce website.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  )
}
