import { useEffect, useRef, useState } from 'react'
import './index.css'

function ThemeToggle() {
  const [isDark, setIsDark] = useState(
    () => localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
  )
  useEffect(() => {
    const root = document.documentElement
    if (isDark) {
      root.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      root.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [isDark])
  return (
    <button
      aria-label="Toggle dark mode"
      className="btn-ghost rounded-full p-2"
      onClick={() => setIsDark((v) => !v)}
    >
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 3a9 9 0 1 0 9 9 7 7 0 0 1-9-9Z" />
      </svg>
    </button>
  )
}

function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-slate-950/60 border-b border-slate-200/60 dark:border-slate-800">
      <nav className="container-responsive flex items-center justify-between py-3" aria-label="Primary">
        <a href="#hero" className="inline-flex items-center gap-2 text-sm font-semibold">
          <span className="h-2.5 w-2.5 rounded-full bg-brand-500 animate-pulse" aria-hidden="true"></span>
          Ayush Kumar
        </a>
        <div className="hidden md:flex items-center gap-6">
          <a href="#about" className="hover:text-brand-600 transition-colors">About</a>
          <a href="#skills" className="hover:text-brand-600 transition-colors">Skills</a>
          <a href="#projects" className="hover:text-brand-600 transition-colors">Projects</a>
          <a href="#contact" className="hover:text-brand-600 transition-colors">Contact</a>
          <ThemeToggle />
        </div>
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button aria-label="Open menu" className="btn-ghost p-2 rounded-full" aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen((v) => !v)}>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>
      {open && (
        <div id="mobile-menu" className="md:hidden border-t border-slate-200/60 dark:border-slate-800 bg-white/80 dark:bg-slate-950/80 backdrop-blur">
          <div className="container-responsive py-3 flex flex-col gap-2">
            <a href="#about" className="py-2" onClick={() => setOpen(false)}>About</a>
            <a href="#skills" className="py-2" onClick={() => setOpen(false)}>Skills</a>
            <a href="#projects" className="py-2" onClick={() => setOpen(false)}>Projects</a>
            <a href="#contact" className="py-2" onClick={() => setOpen(false)}>Contact</a>
          </div>
        </div>
      )}
    </header>
  )
}

function Hero() {
  return (
    <section id="hero" className="container-responsive pt-16 pb-10 md:pt-24 md:pb-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Ayush Kumar
          </h1>
          <p className="mt-3 text-lg text-slate-600 dark:text-slate-300">App Development • Ethical Hacking</p>
          <p className="mt-6 max-w-prose text-slate-700 dark:text-slate-300">
            Building secure, delightful mobile experiences. I fuse Android engineering with ethical
            security assessments to ship apps that are fast, accessible, and resilient.
          </p>
          <div className="mt-8 flex items-center gap-3">
            <a href="#projects" className="btn-primary">View Projects</a>
            <a href="#contact" className="btn-ghost">Contact</a>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-square w-full max-w-sm md:max-w-md mx-auto rounded-3xl card overflow-hidden">
            {/* TODO: Replace with your profile photo */}
            <img src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=800&auto=format&fit=crop" alt="Profile placeholder" className="h-full w-full object-cover" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="container-responsive py-12 md:py-16">
      <h2 className="text-2xl md:text-3xl font-semibold">About</h2>
      <p className="mt-4 max-w-3xl text-slate-700 dark:text-slate-300">
        I’m a developer focused on Android app development and ethical security assessments. I enjoy building
        performant UIs, improving code quality, and helping teams ship features safely.
      </p>
    </section>
  )
}

function SkillChip({ name, level = 'intermediate' }) {
  const levelMap = {
    beginner: 'w-1/3',
    intermediate: 'w-2/3',
    advanced: 'w-full',
  }
  return (
    <div className="flex items-center gap-3">
      <span className="badge">{name}</span>
      <div className="h-1.5 w-28 bg-slate-200/60 dark:bg-slate-800/80 rounded-full overflow-hidden" aria-hidden="true">
        <div className={`h-full ${levelMap[level]} bg-brand-500`}></div>
      </div>
      <span className="sr-only">Proficiency {level}</span>
    </div>
  )
}

function Skills() {
  return (
    <section id="skills" className="container-responsive py-12 md:py-16">
      <h2 className="text-2xl md:text-3xl font-semibold">Skills</h2>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="card p-6">
          <h3 className="text-lg font-medium">Android Development</h3>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
            <SkillChip name="Kotlin" level="advanced" />
            <SkillChip name="Jetpack Compose" level="advanced" />
            <SkillChip name="MVVM / Architecture" level="advanced" />
            <SkillChip name="Coroutines / Flow" level="advanced" />
            <SkillChip name="Room / SQL" level="intermediate" />
            <SkillChip name="Firebase" level="intermediate" />
          </div>
        </div>
        <div className="card p-6">
          <h3 className="text-lg font-medium">Ethical Hacking & Security</h3>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
            <SkillChip name="OWASP MASVS" level="advanced" />
            <SkillChip name="Network Security" level="intermediate" />
            <SkillChip name="Reverse Engineering (Legal)" level="intermediate" />
            <SkillChip name="Static/Dynamic Analysis" level="intermediate" />
            <SkillChip name="Secure Coding" level="advanced" />
            <SkillChip name="Threat Modeling" level="intermediate" />
          </div>
        </div>
      </div>
    </section>
  )
}

function TechBadge({ label }) {
  return <span className="badge">{label}</span>
}

function ProjectCard({ title, description, tech, onOpen, github }) {
  return (
    <article className="card overflow-hidden group focus-within:ring-2 focus-within:ring-brand-500" tabIndex="-1">
      <div className="p-6">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="mt-2 text-slate-700 dark:text-slate-300">{description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {tech.map((t) => (
            <TechBadge key={t} label={t} />
          ))}
        </div>
        <div className="mt-6 flex items-center gap-3">
          <button className="btn-primary" onClick={onOpen} aria-haspopup="dialog">View More</button>
          <a className="btn-ghost" href={github} target="_blank" rel="noreferrer noopener" aria-label={`${title} GitHub (placeholder)`}>
            GitHub
          </a>
        </div>
      </div>
    </article>
  )
}

function Modal({ open, onClose, title, children }) {
  const dialogRef = useRef(null)
  useEffect(() => {
    function onKey(e) { if (e.key === 'Escape') onClose() }
    if (open) {
      document.addEventListener('keydown', onKey)
      dialogRef.current?.focus()
    }
    return () => document.removeEventListener('keydown', onKey)
  }, [open, onClose])

  if (!open) return null
  return (
    <div role="dialog" aria-modal="true" aria-labelledby="modal-title" className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-slate-900/60" onClick={onClose} aria-hidden="true"></div>
      <div ref={dialogRef} tabIndex={-1} className="relative z-10 w-full max-w-3xl card">
        <div className="p-6">
          <div className="flex items-start justify-between gap-4">
            <h4 id="modal-title" className="text-lg font-semibold">{title}</h4>
            <button className="btn-ghost p-2 rounded-full" aria-label="Close modal" onClick={onClose}>
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            </button>
          </div>
          <div className="mt-4 space-y-4">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

function Projects() {
  const [open, setOpen] = useState(null)
  return (
    <section id="projects" className="container-responsive py-12 md:py-16">
      <h2 className="text-2xl md:text-3xl font-semibold">Projects</h2>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        <ProjectCard
          title="Portfolio"
          description="My modern, responsive portfolio site with dark mode and smooth animations."
          tech={["React", "Tailwind CSS", "Vite"]}
          github="#" // TODO: replace with GitHub link
          onOpen={() => setOpen('portfolio')}
        />
        <ProjectCard
          title="Calculator"
          description="A clean, accessible calculator app with keyboard support and theming."
          tech={["Kotlin", "Jetpack Compose"]}
          github="#" // TODO: replace with GitHub link
          onOpen={() => setOpen('calculator')}
        />
        <ProjectCard
          title="OTP Security Assessment"
          description="Ethical analysis of OTP flows, identifying weaknesses and proposing fixes."
          tech={["OWASP", "MITM (legal)", "Threat Modeling"]}
          github="#" // TODO: optional link to report repo
          onOpen={() => setOpen('otp')}
        />
      </div>

      <Modal open={open === 'portfolio'} onClose={() => setOpen(null)} title="Portfolio — Details">
        <p>
          Built with React, Tailwind CSS, and Vite. Focused on performance and accessibility.
        </p>
        <img src="https://images.unsplash.com/photo-1556485689-33b1bd09798d?q=80&w=1200&auto=format&fit=crop" alt="Portfolio screenshot placeholder" className="rounded-xl" loading="lazy" />
      </Modal>

      <Modal open={open === 'calculator'} onClose={() => setOpen(null)} title="Calculator — Details">
        <p>
          Jetpack Compose UI, unit-tested core logic, and haptic feedback for delightful UX.
        </p>
        <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop" alt="Calculator screenshot placeholder" className="rounded-xl" loading="lazy" />
      </Modal>

      <Modal open={open === 'otp'} onClose={() => setOpen(null)} title="OTP Security Assessment — Ethical Report">
        <div className="space-y-3">
          <p>
            Ethical assessment focusing on OTP delivery and verification flows. Tested only with explicit permission and within legal boundaries.
          </p>
          <ul className="list-disc ml-6 space-y-1 text-slate-700 dark:text-slate-300">
            <li>Findings: Inadequate rate limiting, verbose error responses, weak token entropy.</li>
            <li>Impact: Increased risk of enumeration and credential stuffing attempts.</li>
            <li>Remediation: Enforce server-side rate limits, generic error messages, rotate and hash OTPs, short expiry, device binding, and MFA.
            </li>
          </ul>
          <img src="https://images.unsplash.com/photo-1600267175161-cfaa711b4a11?q=80&w=1200&auto=format&fit=crop" alt="Security assessment visual placeholder" className="rounded-xl" loading="lazy" />
        </div>
      </Modal>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="container-responsive py-12 md:py-16">
      <h2 className="text-2xl md:text-3xl font-semibold">Contact</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <div className="card p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span aria-hidden className="h-9 w-9 rounded-full bg-brand-600 text-white grid place-content-center">@</span>
            <div>
              <p className="text-sm text-slate-500">Email</p>
              <a className="font-medium hover:text-brand-600" href="mailto:TODO@email" aria-label="Email link">TODO@email</a>
            </div>
          </div>
          <a className="btn-ghost" href="mailto:TODO@email">Send</a>
        </div>
        <div className="card p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span aria-hidden className="h-9 w-9 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 grid place-content-center">GH</span>
            <div>
              <p className="text-sm text-slate-500">GitHub</p>
              <a className="font-medium hover:text-brand-600" href="#" aria-label="GitHub profile (placeholder)">Add link</a>
            </div>
          </div>
          <a className="btn-ghost" href="#">Open</a>
        </div>
        <div className="card p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span aria-hidden className="h-9 w-9 rounded-full bg-sky-600 text-white grid place-content-center">in</span>
            <div>
              <p className="text-sm text-slate-500">LinkedIn</p>
              <a className="font-medium hover:text-brand-600" href="#" aria-label="LinkedIn profile (placeholder)">Add link</a>
            </div>
          </div>
          <a className="btn-ghost" href="#">Open</a>
        </div>
        <div className="card p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span aria-hidden className="h-9 w-9 rounded-full bg-emerald-600 text-white grid place-content-center">CV</span>
            <div>
              <p className="text-sm text-slate-500">Resume</p>
              <a className="font-medium hover:text-brand-600" href="/Ayush_Kumar_Resume.pdf" download aria-label="Download resume">Download</a>
            </div>
          </div>
          <a className="btn-primary" href="/Ayush_Kumar_Resume.pdf" download>Download</a>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-slate-200/60 dark:border-slate-800 mt-16">
      <div className="container-responsive py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-slate-500">© {new Date().getFullYear()} Ayush Kumar</p>
        <div className="text-sm text-slate-500">Built with React & Tailwind</div>
      </div>
    </footer>
  )
}

function CursorGlow() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    function onMove(e) {
      const x = e.clientX
      const y = e.clientY
      el.style.transform = `translate(${x - 150}px, ${y - 150}px)`
    }
    window.addEventListener('pointermove', onMove)
    return () => window.removeEventListener('pointermove', onMove)
  }, [])
  return (
    <div aria-hidden ref={ref} className="pointer-events-none fixed inset-0 z-[1]">
      <div className="h-72 w-72 rounded-full bg-brand-500/20 blur-3xl transition-transform"></div>
    </div>
  )
}

export default function App() {
  return (
    <div className="relative" id="main">
      <CursorGlow />
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
