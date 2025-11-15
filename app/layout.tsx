import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const roboto = Roboto({ 
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Yasir Bel Maalem · Desarrollador Web',
  description: 'Portfolio profesional de Yasir Bel Maalem, desarrollador web especializado en Next.js y C#. Disponible para trabajar en Málaga, España.',
  keywords: ['desarrollador web', 'Next.js', 'React', 'TypeScript', 'frontend','backend', 'fullstack'],
  authors: [{ name: 'Yasir Bel Maalem' }],
  openGraph: {
    title: 'Yasir Bel Maalem · Desarrollador Web',
    description: 'Portfolio profesional - Desarrollador web especializado en Next.js y C#.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${roboto.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
