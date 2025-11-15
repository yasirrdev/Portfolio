'use client'

import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'

const projects = [
  {
    title: 'MoveInn',
    description: 'Red social diseñada para estudiantes Erasmus que facilita la conexión, compartir experiencias y la integración en nuevos destinos.',
    fullDescription: 'Plataforma fullstack con arquitectura cliente-servidor, autenticación JWT, chat en tiempo real, foros de discusión y sistema de reservas de alojamiento.',
    technologies: ['Next.js', 'ASP.NET Core', 'MySQL', 'WebSocket', 'AWS'],
    github: 'https://github.com/Chriistiiaann/MoveInn',
    images: [
      '/moveinn-1.png'    
    ],
    highlights: ['Chat en tiempo real', 'Sistema de reservas', 'Foros de discusión', 'Despliegue en AWS']
  },
  {
    title: 'OcaGo!',
    description: 'Juego online multijugador inspirado en la Oca. Sistema completo con autenticación JWT, salas en tiempo real mediante WebSocket, y sistema de notificaciones.',
    fullDescription: 'Aplicación fullstack que demuestra arquitectura cliente-servidor, manejo de estados complejos y comunicación en tiempo real con sistema de amigos y matchmaking.',
    technologies: ['Next.js', 'C#', 'SQLite', 'WebSocket', 'JWT'],
    github: 'https://github.com/IvanMontesGuti/Oca-Project',
    images: [
      '/ocago-1.jpeg',
      '/ocago-2.jpeg',
    ],
    highlights: ['Sistema de salas en tiempo real', 'Autenticación JWT', 'Chat integrado', 'Notificaciones push']
  },
  {
    title: 'MediaDropper',
    description: 'Plataforma web que permite convertir y descargar videos de YouTube a múltiples formatos de audio y video como MP3, MP4, WAV, AVI y más.',
    fullDescription: 'Aplicación fullstack con API REST en Flask utilizando yt-dlp y ffmpeg para conversión multimedia, con interfaz intuitiva en Next.js y TailwindCSS.',
    technologies: ['Next.js', 'Flask', 'Python', 'yt-dlp', 'ffmpeg'],
    github: 'https://github.com/yasirrdev/MediaDropper',
    images: [
      '/mediadropper-1.png',
      '/mediadropper-2.png',
      '/mediadropper-3.png'
    ],
    highlights: ['Conversión múltiples formatos', 'API REST con Flask', 'Integración yt-dlp', 'Descarga directa']
  },
  {
    title: 'Malhotra Cables',
    description: 'Página web corporativa para Malhotra Cables Private Limited, empresa especializada en fabricación de cables eléctricos.',
    fullDescription: 'Sitio web profesional con diseño moderno, catálogo de productos, información corporativa y formulario de contacto optimizado para conversión.',
    technologies: ['Next.js', 'Tailwind CSS', 'EmailJS'],
    github: 'https://github.com/yasirrdev/MalhotraWeb',
    images: [
      '/malhotracables-1.png',
      '/malhotracables-2.png',
      '/malhotracables-3.png'
    ],
    highlights: ['Diseño corporativo profesional', 'Responsive design', 'Performance optimizado', 'Formulario de contacto' ]
  }
]

function ProjectCarousel({ images }: { images: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <div className="relative overflow-hidden h-72 group/carousel">
      <img
        src={images[currentIndex] || "/placeholder.svg?height=400&width=600"}
        alt={`Slide ${currentIndex + 1}`}
        className="w-full h-full object-cover transition-transform duration-700"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent"></div>
      
      {images.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center text-foreground opacity-0 group-hover/carousel:opacity-100 transition-opacity hover:bg-background"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center text-foreground opacity-0 group-hover/carousel:opacity-100 transition-opacity hover:bg-background"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
          
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex 
                    ? 'bg-primary w-8' 
                    : 'bg-muted-foreground/50 hover:bg-muted-foreground'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}
      
      <div className="absolute top-6 right-6">
        <div className="w-12 h-12 bg-primary/90 backdrop-blur-sm rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg">
          {currentIndex + 1}
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 bg-gradient-to-b from-card/20 to-background">
      <div className="max-w-7xl mx-auto">
        <div className="space-y-4 mb-16 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">
            Proyectos Destacados
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-primary to-accent rounded-full mx-auto md:mx-0"></div>
          <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">
            Aplicaciones web modernas que demuestran mi experiencia en desarrollo frontend y fullstack, desde interfaces interactivas hasta sistemas en tiempo real.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="bg-gradient-to-br from-card/80 to-card/40 border-border rounded-3xl overflow-hidden group hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10"
            >
              <ProjectCarousel images={project.images} />
              
              <CardHeader className="space-y-4 pt-6">
                <CardTitle className="text-3xl text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground text-base leading-relaxed">
                  {project.description}
                </CardDescription>
                <p className="text-sm text-muted-foreground/80 leading-relaxed">
                  {project.fullDescription}
                </p>
              </CardHeader>

              <CardContent className="space-y-6 pb-8">
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider">Características clave</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {project.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm text-muted-foreground">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider">Tecnologías</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex} 
                        className="bg-primary/10 text-primary border border-primary/20 rounded-lg px-3 py-1.5 font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Link
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-medium hover:bg-primary/90 transition-all hover:gap-3 group/link"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  <span>Ver en GitHub</span>
                  <svg className="w-5 h-5 transition-transform group-hover/link:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
