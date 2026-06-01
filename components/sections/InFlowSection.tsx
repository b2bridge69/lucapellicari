'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, BookOpen, GraduationCap, Route } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const } },
}

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
}

export function InFlowSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-white via-teal-50/30 to-white overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12">

        {/* Header */}
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={stagger}
          className="text-center mb-12 md:mb-16"
        >
          <motion.div variants={fadeUp} className="inline-flex items-center gap-3 mb-4 md:mb-6">
            <span className="w-10 h-px bg-teal/50" />
            <span className="px-4 py-1.5 bg-teal/10 rounded-full text-teal text-xs uppercase tracking-[0.2em] font-medium">
              Il Mio Metodo
            </span>
            <span className="w-10 h-px bg-teal/50" />
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="font-display text-4xl md:text-6xl lg:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-navy via-teal to-navy mb-4 md:mb-5 leading-tight"
          >
            The Inflow Protocol
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="font-serif text-lg md:text-2xl text-navy/75 italic max-w-2xl mx-auto leading-relaxed"
          >
            Due libri in uno. Un manuale operativo e un romanzo. Perché la trasformazione vera non si spiega — si vive.
          </motion.p>
        </motion.div>

        {/* Body copy + sigillo */}
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={stagger}
          className="max-w-3xl mx-auto text-center mb-14 md:mb-20"
        >
          <motion.p variants={fadeUp} className="text-navy/75 text-lg md:text-xl leading-[1.8] mb-10">
            Non è un libro di formazione. È un sistema.{' '}
            <span className="font-semibold text-navy">Keelin O&apos;Connell</span> lo vive nelle pagine del romanzo.
            Tu lo applichi nel manuale. E i risultati arrivano nella tua vita reale.
          </motion.p>

          <motion.blockquote
            variants={fadeUp}
            className="relative px-6 py-8 md:py-10 rounded-2xl bg-gradient-to-br from-teal/[0.06] to-teal/[0.02] border border-teal/15"
          >
            <p className="font-serif italic text-xl md:text-2xl text-navy leading-[1.6]">
              &ldquo;Il <span className="text-teal font-semibold not-italic">Flow</span> non è &lsquo;fortuna&rsquo;.
              È uno stato che si costruisce. <span className="text-teal font-semibold not-italic">In-Flow</span> è ciò
              che generi quando smetti di lottare e inizi a vivere chi sei. Limiti e talenti.&rdquo;
            </p>
          </motion.blockquote>
        </motion.div>

        {/* Cards */}
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={stagger}
          className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 mb-14"
        >
          {/* Card 1 — Il libro */}
          <motion.div variants={fadeUp}>
            <Link
              href="/libri"
              className="group flex flex-col h-full p-7 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:border-teal/30 hover:-translate-y-0.5 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-navy/5 flex items-center justify-center mb-6 group-hover:bg-navy group-hover:scale-105 transition-all duration-300">
                <BookOpen className="w-7 h-7 text-navy group-hover:text-white transition-colors" />
              </div>
              <h4 className="text-2xl font-display text-navy mb-2">Il libro</h4>
              <p className="text-navy/70 text-sm leading-relaxed">
                Due percorsi paralleli. Una sola trasformazione.
              </p>
            </Link>
          </motion.div>

          {/* Card 2 — Il Daily Flow */}
          <motion.div variants={fadeUp}>
            <Link
              href="/libri"
              className="group flex flex-col h-full p-7 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:border-coral/30 hover:-translate-y-0.5 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-coral/10 flex items-center justify-center mb-6 group-hover:bg-coral group-hover:scale-105 transition-all duration-300">
                <GraduationCap className="w-7 h-7 text-coral group-hover:text-white transition-colors" />
              </div>
              <h4 className="text-2xl font-display text-navy mb-2">Il Daily Flow</h4>
              <p className="text-navy/70 text-sm leading-relaxed">
                Il tuo diario personale del flusso. Gratis. Concreto.
              </p>
            </Link>
          </motion.div>

          {/* Card 3 — Il percorso */}
          <motion.div variants={fadeUp}>
            <Link
              href="/percorsi"
              className="group flex flex-col h-full p-7 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:border-teal/30 hover:-translate-y-0.5 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-teal/10 flex items-center justify-center mb-6 group-hover:bg-teal group-hover:scale-105 transition-all duration-300">
                <Route className="w-7 h-7 text-teal group-hover:text-white transition-colors" />
              </div>
              <h4 className="text-2xl font-display text-navy mb-2">Il percorso</h4>
              <p className="text-navy/70 text-sm leading-relaxed">
                Dall&apos;Inflow Protocol al Metodo AlphaKom — con me.
              </p>
            </Link>
          </motion.div>
        </motion.div>

        {/* CTA principale */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Link
            href="/metodo-in-flow"
            className="group inline-flex items-center gap-3 bg-gradient-to-r from-teal to-teal-dark text-white px-9 md:px-11 py-5 md:py-6 rounded-full text-lg md:text-xl font-semibold shadow-xl shadow-teal/30 hover:shadow-2xl hover:shadow-teal/45 hover:scale-[1.02] transition-all duration-300"
          >
            <span>Entra nel Flow. Adesso.</span>
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
