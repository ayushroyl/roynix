import { useState } from "react";
import { motion } from "framer-motion";
import { Rocket, Code2, ShoppingCart, Palette, Cloud, Wrench, Mail, Globe, Linkedin, ChevronRight, CheckCircle2 } from "lucide-react";

// RoyNix Modern Landing Page – Single-file React component
// Stack: React + Tailwind + Framer Motion + Lucide Icons
// Drop into a Vite/Next/CRA project with Tailwind set up.
// Tip: For Next.js, place inside app/page.tsx or a client component.

const navItems = [
  { label: "Services", href: "#services" },
  { label: "Technologies", href: "#tech" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const services = [
  {
    icon: <Code2 className="size-6" />, 
    title: "Web Development",
    desc: "Stunning, responsive, and user‑friendly websites built for conversion.",
    bullets: ["SEO-ready", "Accessible", "Lightning-fast"],
  },
  {
    icon: <Wrench className="size-6" />, 
    title: "Software Solutions",
    desc: "Custom apps that streamline operations and scale with your growth.",
    bullets: ["APIs & Integrations", "Dashboards", "Automation"],
  },
  {
    icon: <ShoppingCart className="size-6" />, 
    title: "E‑commerce",
    desc: "Scalable, secure stores with seamless checkout and analytics.",
    bullets: ["Headless ready", "Payment gateways", "Inventory"],
  },
  {
    icon: <Palette className="size-6" />, 
    title: "UI/UX Design",
    desc: "Intuitive, elegant experiences that users love to use.",
    bullets: ["Design systems", "Prototyping", "Usability"],
  },
  {
    icon: <Cloud className="size-6" />, 
    title: "Cloud & DevOps",
    desc: "Reliable infrastructure with CI/CD and observability baked in.",
    bullets: ["AWS", "Docker & K8s", "Pipelines"],
  },
  {
    icon: <Rocket className="size-6" />, 
    title: "Consulting",
    desc: "Strategy, audits, and roadmaps to ship faster with confidence.",
    bullets: ["Architecture", "Security", "Performance"],
  },
];

const tech = [
  { group: "Frontend", items: ["React", "Next.js", "Vue", "Angular"] },
  { group: "Backend", items: ["Node.js", "Python", "Django", "FastAPI"] },
  { group: "Mobile", items: ["Flutter", "React Native"] },
  { group: "Database", items: ["PostgreSQL", "MongoDB", "Firebase"] },
  { group: "DevOps & Cloud", items: ["AWS", "Docker", "Kubernetes", "CI/CD"] },
];

export default function RoyNixLanding() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      {/* Background aesthetics */}
      <BackgroundDecor />

      {/* Navbar */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/50 border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-3">
          <div className="flex items-center justify-between">
            <a href="#top" className="group inline-flex items-center gap-2">
              <div className="relative">
                <span className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-indigo-500/60 via-sky-500/60 to-emerald-500/60 blur"></span>
                <div className="relative z-10 grid size-9 place-items-center rounded-2xl bg-neutral-900 border border-white/10">
                  <Rocket className="size-5" />
                </div>
              </div>
              <span className="text-xl font-semibold tracking-tight">RoyNix</span>
            </a>

            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((n) => (
                <a key={n.label} href={n.href} className="text-sm text-neutral-300 hover:text-white transition">
                  {n.label}
                </a>
              ))}
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <a href="#contact" className="group inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm hover:bg-white/10 transition">
                <span>Let’s Talk</span>
                <ChevronRight className="size-4 transition group-hover:translate-x-0.5" />
              </a>
            </div>

            {/* Mobile menu button */}
            <button onClick={() => setMenuOpen((s) => !s)} className="md:hidden inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2">
              <span className="text-sm">Menu</span>
            </button>
          </div>
        </div>

        {/* Mobile drawer */}
        {menuOpen && (
          <div className="md:hidden border-t border-white/10 bg-neutral-950/90 backdrop-blur">
            <div className="mx-auto max-w-7xl px-4 py-4 grid gap-3">
              {navItems.map((n) => (
                <a key={n.label} href={n.href} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                  {n.label}
                </a>
              ))}
              <a href="#contact" className="rounded-xl border border-indigo-400/20 bg-indigo-500/10 px-4 py-3">
                Let’s Talk
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Hero */}
      <section id="top" className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 py-20 md:py-28">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-6xl font-bold tracking-tight"
              >
                <span className="block">Innovating the</span>
                <span className="bg-gradient-to-r from-indigo-400 via-sky-400 to-emerald-400 bg-clip-text text-transparent">
                  Digital World
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="mt-5 text-lg text-neutral-300"
              >
                Welcome to RoyNix. We craft websites, software, and digital experiences tailored to your business needs.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="mt-8 flex flex-wrap gap-3"
              >
                <a href="#services" className="inline-flex items-center gap-2 rounded-2xl border border-indigo-400/30 bg-indigo-500/10 px-5 py-3 text-sm font-medium hover:bg-indigo-500/20 transition">
                  Explore Services <ChevronRight className="size-4" />
                </a>
                <a href="#contact" className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium hover:bg-white/10 transition">
                  Get a Quote
                </a>
              </motion.div>

              {/* Trust bar */}
              <div className="mt-10 flex flex-wrap items-center gap-4 text-sm text-neutral-400">
                <div className="inline-flex items-center gap-2"><CheckCircle2 className="size-4" /> Quality First</div>
                <div className="inline-flex items-center gap-2"><CheckCircle2 className="size-4" /> On‑time Delivery</div>
                <div className="inline-flex items-center gap-2"><CheckCircle2 className="size-4" /> Transparent Pricing</div>
              </div>
            </div>

            {/* Hero Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative"
            >
              <div className="relative rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-6 shadow-2xl">
                <div className="grid gap-6">
                  <Stat title="Projects Delivered" value="120+" />
                  <Stat title="Avg. Client NPS" value="9.4/10" />
                  <Stat title="Deploys / month" value="60+" />
                </div>
                <div className="mt-6 rounded-2xl border border-white/10 bg-neutral-900/60 p-4">
                  <div className="flex items-center gap-3 text-sm text-neutral-300">
                    <Rocket className="size-4" />
                    <span>From idea → production, faster.</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="relative">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">What we do</h2>
          <p className="mt-2 text-neutral-400 max-w-2xl">End‑to‑end product development: from strategy and design to build, ship, and scale.</p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4 }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 hover:shadow-2xl hover:shadow-indigo-500/10"
              >
                <div className="flex items-center gap-3">
                  <div className="grid size-10 place-items-center rounded-2xl border border-white/10 bg-neutral-900">
                    {s.icon}
                  </div>
                  <h3 className="text-lg font-semibold">{s.title}</h3>
                </div>
                <p className="mt-3 text-sm text-neutral-300">{s.desc}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {s.bullets.map((b) => (
                    <li key={b} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-neutral-300">{b}</li>
                  ))}
                </ul>
                <div className="pointer-events-none absolute -right-10 -top-10 size-24 rounded-full bg-gradient-to-br from-indigo-500/10 to-emerald-500/10 blur-2xl" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section id="tech" className="relative">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Technologies</h2>
          <p className="mt-2 text-neutral-400 max-w-2xl">We use modern, battle‑tested tools to deliver robust and scalable solutions.</p>

          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {tech.map((t) => (
              <motion.div
                key={t.group}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4 }}
                className="rounded-3xl border border-white/10 bg-white/5 p-6"
              >
                <div className="text-sm font-medium text-neutral-300">{t.group}</div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {t.items.map((i) => (
                    <span key={i} className="rounded-xl border border-white/10 bg-neutral-900 px-3 py-1 text-sm">
                      {i}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 rounded-3xl border border-white/10 bg-gradient-to-r from-indigo-500/10 via-sky-500/10 to-emerald-500/10 p-6">
            <div className="flex flex-wrap items-center gap-3 text-sm text-neutral-300">
              <span className="inline-flex items-center gap-2"><Globe className="size-4" /> SSR & Edge‑ready</span>
              <span className="inline-flex items-center gap-2"><Code2 className="size-4" /> Type‑safe options</span>
              <span className="inline-flex items-center gap-2"><Cloud className="size-4" /> Observability hooks</span>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="relative">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">About RoyNix</h2>
              <p className="mt-3 text-neutral-300">
                We believe in innovation, efficiency, and excellence. Our designers, developers, and strategists partner closely with you to ship high‑impact products.
              </p>
              <ul className="mt-6 grid gap-3 text-sm text-neutral-300">
                {[
                  "Discovery → Design → Build → Ship → Scale",
                  "Security and performance considered from day one",
                  "Clear communication and iterative delivery",
                ].map((pt) => (
                  <li key={pt} className="inline-flex items-center gap-2">
                    <CheckCircle2 className="size-4" /> {pt}
                  </li>
                ))}
              </ul>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              className="order-1 md:order-2"
            >
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <MiniStat label="Avg. delivery time" value="4–6 weeks" />
                  <MiniStat label="Repeat clients" value="85%" />
                  <MiniStat label="Uptime SLAs" value=">99.9%" />
                  <MiniStat label="Team" value="Design + Dev + DevOps" />
                </div>
                <div className="pointer-events-none absolute -right-14 -bottom-16 size-40 rounded-full bg-gradient-to-br from-sky-500/10 to-emerald-500/10 blur-2xl" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative">
        <div className="mx-auto max-w-7xl px-4 pb-4">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-indigo-600/15 via-sky-600/15 to-emerald-600/15 p-8 md:p-10">
            <div className="grid gap-6 md:grid-cols-2 md:items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-semibold">Let’s build something amazing together</h3>
                <p className="mt-2 text-neutral-300">From MVPs to enterprise platforms – we’ve got you covered.</p>
              </div>
              <div className="flex flex-wrap gap-3 md:justify-end">
                <a href="#contact" className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium hover:bg-white/10 transition">
                  Contact Us <ChevronRight className="size-4" />
                </a>
                <a href="#services" className="inline-flex items-center gap-2 rounded-2xl border border-indigo-400/30 bg-indigo-500/10 px-5 py-3 text-sm font-medium hover:bg-indigo-500/20 transition">
                  Our Services
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Get in touch</h2>
          <p className="mt-2 text-neutral-400 max-w-2xl">Tell us about your project and timeline. We’ll reply within one business day.</p>

          <div className="mt-8 grid gap-6 md:grid-cols-5">
            {/* Info */}
            <div className="md:col-span-2 space-y-4">
              <a href="mailto:contact.roynix@gmail.com" className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 hover:bg-white/10">
                <Mail className="size-5" />
                <div>
                  <div className="text-sm text-neutral-400">Email</div>
                  <div className="text-sm font-medium">contact.roynix@gmail.com</div>
                </div>
              </a>
              <a href="https://roynix.tech" target="_blank" rel="noreferrer" className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 hover:bg-white/10">
                <Globe className="size-5" />
                <div>
                  <div className="text-sm text-neutral-400">Website</div>
                  <div className="text-sm font-medium">roynix.tech</div>
                </div>
              </a>
              <a href="#" className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 hover:bg-white/10">
                <Linkedin className="size-5" />
                <div>
                  <div className="text-sm text-neutral-400">LinkedIn</div>
                  <div className="text-sm font-medium">Follow us on LinkedIn</div>
                </div>
              </a>
            </div>

            {/* Form */}
            <form className="md:col-span-3 grid gap-4 rounded-3xl border border-white/10 bg-white/5 p-6">
              <div className="grid gap-2">
                <label htmlFor="name" className="text-sm text-neutral-300">Name</label>
                <input id="name" type="text" placeholder="Your full name" className="rounded-xl border border-white/10 bg-neutral-900 px-4 py-3 text-sm outline-none placeholder:text-neutral-500 focus:ring-2 focus:ring-indigo-500" />
              </div>
              <div className="grid gap-2">
                <label htmlFor="email" className="text-sm text-neutral-300">Email</label>
                <input id="email" type="email" placeholder="you@company.com" className="rounded-xl border border-white/10 bg-neutral-900 px-4 py-3 text-sm outline-none placeholder:text-neutral-500 focus:ring-2 focus:ring-indigo-500" />
              </div>
              <div className="grid gap-2">
                <label htmlFor="msg" className="text-sm text-neutral-300">Project details</label>
                <textarea id="msg" rows={4} placeholder="Tell us about your goals, scope, and timeline" className="rounded-xl border border-white/10 bg-neutral-900 px-4 py-3 text-sm outline-none placeholder:text-neutral-500 focus:ring-2 focus:ring-indigo-500" />
              </div>
              <button type="button" onClick={() => alert('Thanks! We\'ll get back to you shortly.')} className="inline-flex items-center justify-center gap-2 rounded-2xl border border-indigo-400/30 bg-indigo-500/10 px-5 py-3 text-sm font-medium hover:bg-indigo-500/20 transition">
                Send Message <ChevronRight className="size-4" />
              </button>
              <p className="text-xs text-neutral-500">By sending, you agree to our terms and privacy policy.</p>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="inline-flex items-center gap-2">
              <div className="grid size-8 place-items-center rounded-xl border border-white/10 bg-neutral-900">
                <Rocket className="size-4" />
              </div>
              <span className="text-sm font-semibold">RoyNix</span>
            </div>
            <p className="text-xs text-neutral-500">© {new Date().getFullYear()} RoyNix. All rights reserved.</p>
            <div className="flex gap-4 text-sm">
              {navItems.map((n) => (
                <a key={n.label} href={n.href} className="text-neutral-400 hover:text-white transition">{n.label}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Stat({ title, value }: { title: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-neutral-900/60 p-4">
      <div className="text-sm text-neutral-400">{title}</div>
      <div className="text-2xl font-semibold mt-1">{value}</div>
    </div>
  );
}

function MiniStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-neutral-900 p-4">
      <div className="text-xs text-neutral-400">{label}</div>
      <div className="text-lg font-semibold mt-1">{value}</div>
    </div>
  );
}

function BackgroundDecor() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* radial glow */}
      <div className="absolute left-1/2 top-[-200px] h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-gradient-to-r from-indigo-500/20 via-sky-500/20 to-emerald-500/20 blur-3xl" />
      {/* grid */}
      <svg className="absolute inset-0 size-full opacity-[0.06]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse">
            <path d="M 32 0 L 0 0 0 32" fill="none" stroke="white" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>
  );
}
