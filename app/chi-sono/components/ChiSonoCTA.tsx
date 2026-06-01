'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, BookOpen, Mail, Sparkles } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] as const } },
}
const stagger = { visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } } }

export function ChiSonoCTA() {
  return (
    <section className="relative py-24 lg:py-32 bg-navy-dark overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-teal/10 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-coral/10 blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={stagger}
          className="max-w-4xl mx-auto text-center mb-14 md:mb-16"
        >
          <motion.span
            variants={fadeUp}
            className="inline-block text-teal-light text-sm font-medium uppercase tracking-[0.3em] mb-6"
          >
            Inizia il tuo viaggio
          </motion.span>

          <motion.h2
            variants={fadeUp}
            className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-cream mb-7 leading-[1.15]"
          >
            Sei pronto a trasformare i tuoi{' '}
            <span className="text-teal-light italic">desideri personali</span>{' '}
            in <span className="text-teal-light italic">successi professionali?</span>
          </motion.h2>

          <motion.p variants={fadeUp} className="text-cream/75 text-lg md:text-xl leading-[1.7]">
            Se sei arrivato fin qui, forse significa che della mia storia, almeno in parte, parla anche di te.
            Ti risuona. Ma se hai ancora qualche perplessità puoi:
          </motion.p>
        </motion.div>

        {/* 3 opzioni */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={stagger}
          className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 max-w-5xl mx-auto"
        >
          {/* Opzione 1 — Scrivimi */}
          <motion.div variants={fadeUp}>
            <Link
              href="/contatti"
              className="group relative flex flex-col items-center text-center h-full p-7 md:p-8 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-sm hover:bg-white/[0.07] hover:border-teal/30 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-teal/15 border border-teal/30 flex items-center justify-center mb-5 group-hover:bg-teal group-hover:scale-105 transition-all duration-300">
                <Mail className="w-6 h-6 text-teal-light group-hover:text-white transition-colors" />
              </div>
              <span className="text-teal-light text-[11px] font-bold uppercase tracking-[0.25em] mb-2">01</span>
              <h3 className="font-display text-2xl text-cream mb-3">Scrivermi</h3>
              <p className="text-cream/65 text-sm leading-relaxed mb-5">
                Una mail diretta. Senza filtri. Senza intermediari. Quando hai qualcosa di importante da dirmi.
              </p>
              <span className="inline-flex items-center gap-2 text-teal-light text-sm font-semibold mt-auto">
                Contattami
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </motion.div>

          {/* Opzione 2 — Continuare a leggere */}
          <motion.div variants={fadeUp}>
            <Link
              href="/missione"
              className="group relative flex flex-col items-center text-center h-full p-7 md:p-8 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-sm hover:bg-white/[0.07] hover:border-teal/30 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-coral/15 border border-coral/30 flex items-center justify-center mb-5 group-hover:bg-coral group-hover:scale-105 transition-all duration-300">
                <BookOpen className="w-6 h-6 text-coral group-hover:text-white transition-colors" />
              </div>
              <span className="text-coral text-[11px] font-bold uppercase tracking-[0.25em] mb-2">02</span>
              <h3 className="font-display text-2xl text-cream mb-3">Continuare a leggere</h3>
              <p className="text-cream/65 text-sm leading-relaxed mb-5">
                Ogni pagina è un capitolo: la missione, il metodo, la visione. Costruisci la tua idea senza fretta.
              </p>
              <span className="inline-flex items-center gap-2 text-coral text-sm font-semibold mt-auto">
                Scopri la missione
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </motion.div>

          {/* Opzione 3 — Parlare con Alice */}
          <motion.div variants={fadeUp}>
            <button
              type="button"
              onClick={() => window.dispatchEvent(new CustomEvent('alice:open'))}
              className="group relative flex flex-col items-center text-center h-full w-full p-7 md:p-8 rounded-2xl bg-gradient-to-br from-teal/15 to-coral/10 border border-teal-light/30 backdrop-blur-sm hover:from-teal/25 hover:to-coral/15 hover:border-teal-light/60 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative w-16 h-16 rounded-full overflow-hidden mb-5 ring-2 ring-teal-light/40 shadow-xl">
                <Image
                  src="/images/alice/alice.png"
                  alt="Alice — assistente AI"
                  fill
                  className="object-cover"
                  sizes="64px"
                />
                <span className="absolute bottom-0 right-0 px-1.5 py-0.5 rounded-full bg-navy-dark text-cream text-[7px] font-bold tracking-widest uppercase">
                  AI
                </span>
              </div>
              <span className="text-teal-light text-[11px] font-bold uppercase tracking-[0.25em] mb-2">03</span>
              <h3 className="font-display text-2xl text-cream mb-3">Parlare con Alice</h3>
              <p className="text-cream/75 text-sm leading-relaxed mb-5">
                La mia assistente personale virtuale. Conosce ogni dettaglio del mio mondo. Risponde a voce.
              </p>
              <span className="inline-flex items-center gap-2 text-cream bg-teal px-4 py-2 rounded-full text-sm font-semibold mt-auto group-hover:bg-teal-light transition-colors">
                <Sparkles className="w-4 h-4" />
                Inizia la conversazione
              </span>
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
