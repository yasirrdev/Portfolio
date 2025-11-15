import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-4xl w-full">
        <div className="space-y-8 text-center">
          <div className="space-y-4">
            <p className="text-muted-foreground text-lg">Hola, soy</p>
            <h1 className="text-5xl md:text-7xl font-bold text-foreground text-balance">
              Yasir Bel Maalem
            </h1>
            <p className="text-2xl md:text-3xl text-primary font-light">
              Desarrollador Web · Next.js & C#
            </p>
            <p className="text-muted-foreground flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Málaga, España
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="https://www.linkedin.com/in/yasirbelmaalem/" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-2xl px-8">
                Contáctame
              </Button>
            </Link>
            <Link href="https://github.com/yasirrdev" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="border-border hover:bg-secondary rounded-2xl px-8">
                Ver GitHub
              </Button>
            </Link>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
            </span>
            <span className="text-sm font-medium">Disponible para trabajar</span>
          </div>
        </div>
      </div>
    </section>
  )
}
