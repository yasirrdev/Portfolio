"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Github, ExternalLink } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "OcaGo",
    description: "A project I'm currently working on, built with Go and modern web technologies.",
    longDescription:
      "OcaGo is an innovative project that combines the power of Go with modern web technologies to create a robust and scalable application. This project showcases my ability to work with backend systems and integrate them with frontend interfaces.",
    imageUrl: "/placeholder.svg?height=600&width=800",
    technologies: ["Go", "React", "PostgreSQL", "Docker"],
    githubUrl: "https://github.com/IvanMontesGuti/Oca-Project",
    liveUrl: "",
    featured: true,
  },
  {
    id: 2,
    title: "Personal Portfolio",
    description: "My personal portfolio website built with Next.js and Tailwind CSS.",
    longDescription:
      "This portfolio website showcases my projects and skills as a developer. Built with Next.js and styled with Tailwind CSS, it features a responsive design, dark mode support, and smooth animations powered by Framer Motion.",
    imageUrl: "/placeholder.svg?height=800&width=600",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    githubUrl: "https://github.com/yasirrdev",
    liveUrl: "https://yasir-portfolio.netlify.app",
    featured: true,
  },
  {
    id: 3,
    title: "E-commerce Platform",
    description: "A full-featured e-commerce platform with product management and payment integration.",
    longDescription:
      "This e-commerce platform includes features such as product listings, shopping cart functionality, user authentication, and payment processing. It demonstrates my ability to build complex applications with multiple integrated systems.",
    imageUrl: "/placeholder.svg?height=600&width=800",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    githubUrl: "https://github.com/yasirrdev",
    liveUrl: "",
  },
  {
    id: 4,
    title: "Task Management App",
    description: "A productivity app for managing tasks and projects with team collaboration features.",
    longDescription:
      "This task management application helps users organize their work and collaborate with team members. It includes features such as task creation, assignment, due dates, progress tracking, and team communication tools.",
    imageUrl: "/placeholder.svg?height=800&width=600",
    technologies: ["Angular", "Express", "PostgreSQL", "Socket.io"],
    githubUrl: "https://github.com/yasirrdev",
    liveUrl: "",
  },
]

export default function Projects() {
  const [activeProject, setActiveProject] = useState<number | null>(null)

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">My Projects</h2>
          <p className="mt-4 text-lg text-muted-foreground">A selection of my recent work and ongoing projects</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className={`bg-background rounded-3xl shadow-lg overflow-hidden hover-lift transition-all duration-300 ease-in-out border-2 ${
                project.featured ? "border-primary/20" : "border-transparent hover:border-primary/10"
              }`}
            >
              <div className="relative h-48 sm:h-64 overflow-hidden">
                <Image
                  src={project.imageUrl || "/placeholder.svg"}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 ease-in-out group-hover:scale-105"
                />
                <motion.div
                  className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 transition-opacity duration-300"
                  whileHover={{ opacity: 1 }}
                >
                  <p className="text-white text-center px-4">{project.description}</p>
                </motion.div>
              </div>
              <div className="p-4 sm:p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="text-xs font-medium bg-primary/10 text-primary px-2 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm sm:text-base">{project.description}</p>

                <div className="flex items-center justify-between">
                  <button
                    onClick={() => setActiveProject(activeProject === project.id ? null : project.id)}
                    className="text-primary hover:underline inline-flex items-center text-sm sm:text-base"
                  >
                    {activeProject === project.id ? "Less Details" : "More Details"}
                  </button>

                  <div className="flex space-x-3">
                    {project.githubUrl && (
                      <Link
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <Github className="h-5 w-5" />
                        <span className="sr-only">GitHub</span>
                      </Link>
                    )}
                    {project.liveUrl && (
                      <Link
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <ExternalLink className="h-5 w-5" />
                        <span className="sr-only">Live Demo</span>
                      </Link>
                    )}
                  </div>
                </div>

                <AnimatePresence>
                  {activeProject === project.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-4 overflow-hidden"
                    >
                      <p className="text-muted-foreground text-sm sm:text-base">{project.longDescription}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="text-muted-foreground mb-6">
            These are just a few examples of my work. Visit my GitHub profile to see more projects.
          </p>
          <Link
            href="https://github.com/yasirrdev"
            target="_blank"
            rel="noopener noreferrer"
            className="apple-button inline-flex items-center"
          >
            View More on GitHub
            <Github className="ml-2 h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
