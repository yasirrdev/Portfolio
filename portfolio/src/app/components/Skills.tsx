"use client"

import { motion } from "framer-motion"

const skills = [
  {
    category: "Frontend",
    technologies: [
      { name: "HTML", icon: "html5" },
      { name: "CSS", icon: "css3" },
      { name: "JavaScript", icon: "javascript" },
      { name: "TypeScript", icon: "typescript" },
      { name: "React", icon: "react" },
      { name: "Next.js", icon: "nextjs" },
      { name: "Angular", icon: "angular" },
    ],
  },
  {
    category: "Backend",
    technologies: [
      { name: "Node.js", icon: "nodejs" },
      { name: "Express", icon: "express" },
      { name: "C#", icon: "csharp" },
      { name: "Go", icon: "go" },
      { name: "Python", icon: "python" },
    ],
  },
  {
    category: "Database",
    technologies: [
      { name: "MongoDB", icon: "mongodb" },
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "MySQL", icon: "mysql" },
    ],
  },
  {
    category: "DevOps & Tools",
    technologies: [
      { name: "Git", icon: "git" },
      { name: "Docker", icon: "docker" },
      { name: "AWS", icon: "aws" },
      { name: "Linux", icon: "linux" },
    ],
  },
]

const iconMap: Record<string, string> = {
  html5: '<i class="devicon-html5-plain colored"></i>',
  css3: '<i class="devicon-css3-plain colored"></i>',
  javascript: '<i class="devicon-javascript-plain colored"></i>',
  typescript: '<i class="devicon-typescript-plain colored"></i>',
  react: '<i class="devicon-react-original colored"></i>',
  nextjs: '<i class="devicon-nextjs-original"></i>',
  angular: '<i class="devicon-angularjs-plain colored"></i>',
  nodejs: '<i class="devicon-nodejs-plain colored"></i>',
  express: '<i class="devicon-express-original"></i>',
  csharp: '<i class="devicon-csharp-plain colored"></i>',
  go: '<i class="devicon-go-original-wordmark colored"></i>',
  python: '<i class="devicon-python-plain colored"></i>',
  mongodb: '<i class="devicon-mongodb-plain colored"></i>',
  postgresql: '<i class="devicon-postgresql-plain colored"></i>',
  mysql: '<i class="devicon-mysql-plain colored"></i>',
  git: '<i class="devicon-git-plain colored"></i>',
  docker: '<i class="devicon-docker-plain colored"></i>',
  aws: '<i class="devicon-amazonwebservices-original colored"></i>',
  linux: '<i class="devicon-linux-plain"></i>',
}

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="container mx-auto">
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-black mb-8 sm:mb-16 text-center text-foreground"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Skills & Technologies
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {skills.map((skillGroup, groupIndex) => (
            <motion.div
              key={skillGroup.category}
              className="bg-secondary/10 p-4 sm:p-6 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: groupIndex * 0.1 }}
            >
              <h3 className="text-lg sm:text-xl font-bold mb-4 text-foreground">{skillGroup.category}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
                {skillGroup.technologies.map((tech, techIndex) => (
                  <motion.div
                    key={tech.name}
                    className="flex items-center p-2 rounded-md hover:bg-secondary/20 transition-colors"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: groupIndex * 0.1 + techIndex * 0.05 }}
                  >
                    <div
                      className="mr-2 text-xl sm:text-2xl"
                      dangerouslySetInnerHTML={{ __html: iconMap[tech.icon] || "🔧" }}
                    />
                    <span className="text-muted-foreground text-sm sm:text-base">{tech.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 sm:mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="text-muted-foreground text-sm sm:text-base">
            I'm always learning and expanding my skill set. Currently focusing on improving my Next.js and C# knowledge.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
