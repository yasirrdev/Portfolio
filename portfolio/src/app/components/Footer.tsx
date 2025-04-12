import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-background border-t border-gray-200 dark:border-gray-800">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-8 sm:py-12 lg:px-8">
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-4" aria-label="Footer">
          {["Home", "Projects", "About", "Skills", "Contact"].map((item) => (
            <div key={item} className="pb-2">
              <Link
                href={`#${item.toLowerCase()}`}
                className="text-sm leading-6 text-muted-foreground hover:text-foreground"
              >
                {item}
              </Link>
            </div>
          ))}
        </nav>

        <div className="mt-8 flex justify-center space-x-6">
          <Link
            href="https://github.com/yasirrdev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground"
          >
            <span className="sr-only">GitHub</span>
            <Github className="h-6 w-6" />
          </Link>
          <Link
            href="https://linkedin.com/in/yasirrdev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground"
          >
            <span className="sr-only">LinkedIn</span>
            <Linkedin className="h-6 w-6" />
          </Link>
          <Link href="mailto:yasirbelmaalem30@gmail.com" className="text-muted-foreground hover:text-foreground">
            <span className="sr-only">Email</span>
            <Mail className="h-6 w-6" />
          </Link>
        </div>

        <p className="mt-8 text-center text-sm leading-5 text-muted-foreground">
          &copy; {new Date().getFullYear()} Yasir. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
