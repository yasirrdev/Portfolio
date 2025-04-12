"use client"

import { motion } from "framer-motion"

export default function About() {
  return (
    <section
      id="about"
      className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-secondary/20"
    >
      <div className="container mx-auto">
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-black mb-8 text-center text-foreground"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About Me
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-foreground">Full-Stack Developer</h3>
            <p className="text-muted-foreground mb-6 text-sm sm:text-base">
              I'm a passionate full-stack developer with a love for creating elegant, efficient, and user-friendly web
              applications. My journey in web development started with a curiosity about how websites work, and it has
              evolved into a career where I get to build digital experiences that solve real problems.
            </p>
            <p className="text-muted-foreground mb-6 text-sm sm:text-base">
              Currently, I'm focused on working with OcaGo while expanding my knowledge in Next.js and C#. I enjoy the
              challenge of learning new technologies and applying them to create better solutions.
            </p>
            <p className="text-muted-foreground text-sm sm:text-base">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or
              sharing my knowledge with the developer community.
            </p>
          </motion.div>
          <motion.div
            className="relative h-auto sm:h-96"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/50 to-purple-600/50 rounded-lg transform rotate-3"></div>
            <div className="absolute inset-0 bg-background rounded-lg transform -rotate-3 flex flex-col items-center justify-center p-6 sm:p-8">
              <h4 className="text-xl sm:text-2xl font-bold text-foreground mb-6">Quick Facts</h4>
              <ul className="space-y-4 text-muted-foreground text-sm sm:text-base">
                <li className="flex items-start">
                  <span className="mr-2">🚀</span>
                  <span>Currently working on OcaGo</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">📚</span>
                  <span>Learning Next.js and C#</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">🌍</span>
                  <span>Based in Málaga, Spain</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">💼</span>
                  <span>Open to freelance and full-time opportunities</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">🔗</span>
                  <span>
                    Portfolio:{" "}
                    <a
                      href="https://yasir-portfolio.netlify.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      yasir-portfolio.netlify.app
                    </a>
                  </span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
