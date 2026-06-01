'use client'

import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] as const } },
}
const stagger = { visible: { transition: { staggerChildren: 0.06, delayChildren: 0.05 } } }

// Preview: Alice + 4 agenti rappresentativi
const previewAgents = [
  { name: 'Alice', role: 'AI relazionale', img: '/images/team/alice.png', isAlice: true },
  { name: 'Francesco', role: 'Behavior Analyst', img: '/images/team/francesco-behavior-analyst.png' },
  { name: 'Marco', role: 'Course Architect', img: '/images/team/marco-course-architect.png' },
  { name: 'Sofia', role: 'Lesson Designer', img: '/images/team/sofia-lesson-designer.png' },
  { name: 'Angela', role: 'Neuroscience', img: '/images/team/angela-neuroscience.png' },
]

export function AlphaTeamSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section ref={sectionRef} className="relative py-24 md:py-32 bg-white overflow-hidden">
      {/* Decorative accents */}
      <div className="absolute inset-0 pointer-events-none opacity-50">
        <div className="absolute top-20 left-0 w-72 h-72 bg-teal/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-0 w-72 h-72 bg-coral/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={stagger}
          className="text-center mb-14 md:mb-20 max-w-3xl mx-auto"
        >
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal/10 border border-teal/20 mb-6">
            <Sparkles className="w-3.5 h-3.5 text-teal" />
            <span className="text-teal text-[12px] font-bold uppercase tracking-[0.2em]">Alpha Team AI</span>
          </motion.div>

          <motion.h2 variants={fadeUp} className="font-display text-3xl md:text-4xl lg:text-5xl text-navy mb-5 tracking-tight leading-tight">
            Un team che non esiste{' '}
            <span className="text-teal italic">altrove.</span>
          </motion.h2>

          <motion.p variants={fadeUp} className="text-navy/65 text-base md:text-lg leading-relaxed">
            Luca + Alice + 9 agenti AI specializzati. Trent&apos;anni di esperienza distillati in un team che lavora 24/7.
            Nessun altro formatore in Italia ha qualcosa di simile.
          </motion.p>
        </motion.div>

        {/* Luca al centro + preview griglia */}
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={stagger}
          className="flex flex-col items-center"
        >
          {/* Luca card */}
          <motion.div variants={fadeUp} className="relative mb-10 md:mb-14">
            <div className="relative w-32 h-32 md:w-36 md:h-36 rounded-full overflow-hidden ring-4 ring-teal/20 shadow-2xl">
              <Image
                src="/images/luca-portrait.jpg"
                alt="Luca Pellicari — leader umano"
                fill
                className="object-cover"
                sizes="144px"
              />
            </div>
            <div className="text-center mt-4">
              <p className="font-display text-xl text-navy">Luca Pellicari</p>
              <p className="text-teal text-xs uppercase tracking-widest font-semibold mt-1">Leader umano</p>
            </div>
          </motion.div>

          {/* Connettore visivo */}
          <div className="w-px h-10 bg-gradient-to-b from-teal/40 to-transparent mb-2" />

          {/* Griglia 5 agenti */}
          <motion.div
            variants={stagger}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5 md:gap-8 max-w-4xl"
          >
            {previewAgents.map((agent) => (
              <motion.div key={agent.name} variants={fadeUp} className="flex flex-col items-center text-center">
                <div className={`relative w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden mb-3 ${agent.isAlice ? 'ring-2 ring-coral/40' : 'ring-2 ring-navy/10'} shadow-lg`}>
                  <Image
                    src={agent.img}
                    alt={`${agent.name} — ${agent.role}`}
                    fill
                    className="object-cover"
                    sizes="96px"
                  />
                  <span className="absolute bottom-0 right-0 px-1.5 py-0.5 rounded-full bg-navy-dark text-cream text-[7px] font-bold tracking-widest uppercase">
                    AI Virtuale
                  </span>
                </div>
                <p className="font-display text-sm md:text-base text-navy leading-tight">{agent.name}</p>
                <p className="text-navy/55 text-[11px] uppercase tracking-wide mt-0.5">{agent.role}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div variants={fadeUp} className="mt-14 md:mt-16">
            <Link
              href="/il-team"
              className="group inline-flex items-center gap-3 bg-navy text-white px-8 py-4 rounded-full font-semibold shadow-lg shadow-navy/15 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
            >
              <span>Scopri il team completo</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
