import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { Code2, Database, Palette, Cpu, Globe, Zap, GitBranch, Package, Terminal } from 'lucide-react'

const technologies = [
  { name: 'Next.js', category: 'framework', icon: Code2, color: 'text-blue-400' },
  { name: 'React', category: 'frontend', icon: Code2, color: 'text-cyan-400' },
  { name: 'TypeScript', category: 'language', icon: Terminal, color: 'text-blue-500' },
  { name: 'JavaScript', category: 'language', icon: Terminal, color: 'text-yellow-400' },
  { name: 'Tailwind CSS', category: 'styling', icon: Palette, color: 'text-sky-400' },
  { name: 'HTML/CSS', category: 'fundamentals', icon: Globe, color: 'text-orange-400' },
  { name: 'C#', category: 'backend', icon: Cpu, color: 'text-purple-400' },
  { name: 'Java', category: 'backend', icon: Cpu, color: 'text-red-400' },
  { name: 'SQL', category: 'database', icon: Database, color: 'text-green-400' },
  { name: 'WebSocket', category: 'realtime', icon: Zap, color: 'text-amber-400' },
  { name: 'Git', category: 'tools', icon: GitBranch, color: 'text-orange-500' },
  { name: 'AWS', category: 'cloud', icon: Package, color: 'text-yellow-500' }
]

const skills = [
  {
    title: 'Desarrollo Frontend',
    description: 'Especializado en crear interfaces de usuario modernas, responsive y accesibles con React, Next.js y Tailwind CSS. Experiencia en optimización de rendimiento.',
    icon: Code2,
    color: 'text-cyan-400',
    bgColor: 'bg-cyan-400/10',
    borderColor: 'border-cyan-400/20'
  },
  {
    title: 'Desarrollo Backend',
    description: 'Construcción de APIs RESTful robustas, sistemas de autenticación seguros con JWT, y gestión eficiente de bases de datos relacionales con Java y C#.',
    icon: Database,
    color: 'text-purple-400',
    bgColor: 'bg-purple-400/10',
    borderColor: 'border-purple-400/20'
  },
  {
    title: 'Comunicación en Tiempo Real',
    description: 'Implementación de sistemas de comunicación bidireccional instantánea usando WebSocket para aplicaciones interactivas y colaborativas.',
    icon: Zap,
    color: 'text-amber-400',
    bgColor: 'bg-amber-400/10',
    borderColor: 'border-amber-400/20'
  }
]

export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-linear-to-b from-background to-card/20">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">
              Sobre mí
            </h2>
            <div className="w-20 h-1.5 bg-linear-to-r from-primary to-accent rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="space-y-6 text-lg leading-relaxed">
              <p className="text-muted-foreground">
                Soy estudiante de <span className="text-primary font-semibold">Desarrollo de Aplicaciones Web (DAW)</span> con una gran pasión por crear experiencias digitales modernas y funcionales.
              </p>

              <p className="text-muted-foreground">
                Busco mi <span className="text-accent font-semibold">primera oportunidad laboral</span> como fullstack junior, donde pueda aportar mis conocimientos técnicos y mi entusiasmo por aprender.
              </p>

              <p className="text-muted-foreground">
                Me caracterizo por mi <span className="text-foreground font-medium">capacidad de adaptación rápida</span>, compromiso con las buenas prácticas de desarrollo, y mi enfoque en crear código limpio y mantenible.
              </p>

              <div className="pt-4">
                <div className="inline-flex items-center gap-3 px-6 py-3 bg-linear-to-r from-primary/20 to-accent/20 border border-primary/30 rounded-2xl">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                  </span>
                  <span className="text-foreground font-semibold">Disponibilidad inmediata</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              {skills.map((skill, index) => {
                const IconComponent = skill.icon
                return (
                  <Card 
                    key={index} 
                    className={`p-6 bg-card/50 border ${skill.borderColor} hover:border-primary/50 transition-all duration-300 hover:translate-x-2 hover:shadow-lg group`}
                  >
                    <div className="flex gap-4">
                      <div className={`${skill.bgColor} p-8 rounded-2xl ${skill.color} group-hover:scale-110 transition-transform`}>
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <div className="space-y-2 flex-1">
                        <h4 className="font-semibold text-foreground text-lg">{skill.title}</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">{skill.description}</p>
                      </div>
                    </div>
                  </Card>
                )
              })}
            </div>
          </div>

          <div className="space-y-8 pt-8">
            <div className="space-y-3">
              <h3 className="text-3xl font-bold text-foreground">
                Stack Tecnológico
              </h3>
              <p className="text-muted-foreground text-lg">
                Tecnologías y herramientas con las que trabajo actualmente
              </p>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {technologies.map((tech, index) => { 
                const IconComponent = tech.icon
                return (
                  <div
                    key={index}
                    className="relative flex flex-col items-center gap-3 p-5 bg-card/50 border border-border rounded-2xl hover:border-primary/50 hover:bg-card/80 transition-all duration-300 hover:scale-105 hover:shadow-lg group overflow-hidden"
                  >
                    <div className={`${tech.color} p-3 rounded-xl bg-background/50 group-hover:scale-110 transition-transform relative z-10`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-foreground font-medium text-center text-sm relative z-10">{tech.name}</span>
                    <Badge variant="secondary" className="text-xs bg-primary/10 text-primary border-primary/20 relative z-10">
                      {tech.category}
                    </Badge>
                    
                    <div className={`absolute inset-0 bg-linear-to-br ${tech.color} opacity-0 group-hover:opacity-5 transition-opacity`}></div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
