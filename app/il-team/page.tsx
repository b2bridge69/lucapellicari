'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, ShieldCheck } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] as const } },
}
const stagger = { visible: { transition: { staggerChildren: 0.06, delayChildren: 0.05 } } }

interface TeamMember {
  name: string
  role: string
  competence: string
  img: string
  category: 'leader' | 'relational' | 'structural'
}

const team: TeamMember[] = [
  {
    name: 'Luca Pellicari',
    role: 'Leader umano',
    competence: 'Fondatore — visione, metodo, identità. Trent\u2019anni di esperienza vissuta.',
    img: '/images/luca-portrait.jpg',
    category: 'leader',
  },
  {
    name: 'Alice',
    role: 'Assistente AI relazionale',
    competence: 'Conosce ogni dettaglio del mondo di Luca. Risponde a voce 24/7, fissa appuntamenti, invia materiali.',
    img: '/images/team/alice.png',
    category: 'relational',
  },
  {
    name: 'Francesco',
    role: 'Behavior Analyst',
    competence: 'Legge i contesti prima che diventino problemi. Analisi del comportamento applicata.',
    img: '/images/team/francesco-behavior-analyst.png',
    category: 'structural',
  },
  {
    name: 'Angela',
    role: 'Neuroscience Specialist',
    competence: 'Le basi neuroscientifiche del Metodo. Come il cervello costruisce e mantiene identità.',
    img: '/images/team/angela-neuroscience.png',
    category: 'structural',
  },
  {
    name: 'Alessandro',
    role: 'Research Analyst',
    competence: 'Ricerca scientifica, fonti, pubblicazioni. Tutto ciò che dice Luca è verificabile.',
    img: '/images/team/alessandro-research-analyst.png',
    category: 'structural',
  },
  {
    name: 'Marco',
    role: 'Course Architect',
    competence: 'Progetta l\u2019architettura dei percorsi formativi. Dalla diagnosi al risultato.',
    img: '/images/team/marco-course-architect.png',
    category: 'structural',
  },
  {
    name: 'Sofia',
    role: 'Lesson Designer',
    competence: 'Trasforma il metodo in lezioni efficaci. Ogni passaggio costruisce sul precedente.',
    img: '/images/team/sofia-lesson-designer.png',
    category: 'structural',
  },
  {
    name: 'Giovanni',
    role: 'Visual Learning Designer',
    competence: 'Schemi, infografiche, canvas: rende visibile ciò che è astratto.',
    img: '/images/team/giovanni-visual-designer.png',
    category: 'structural',
  },
  {
    name: 'Robert',
    role: 'Material Designer',
    competence: 'Materiali operativi pronti all\u2019uso: workbook, slide, strumenti di lavoro.',
    img: '/images/team/robert-material-designer.png',
    category: 'structural',
  },
  {
    name: 'Marcel',
    role: 'AI Tools & Prompt Strategist',
    competence: 'L\u2019infrastruttura AI che fa funzionare il team. Strategia di prompt e tooling.',
    img: '/images/team/marcel-prompt-strategist.png',
    category: 'structural',
  },
  {
    name: 'Giulia',
    role: 'Quality Editor',
    competence: 'Ogni contenuto pubblicato passa da lei. Coerenza, tono, precisione.',
    img: '/images/team/giulia-quality-editor.png',
    category: 'structural',
  },
]

export default function IlTeamPage() {
  return (
    <main className="min-h-screen bg-cream">
      {/* Hero */}
      <section className="relative pt-32 md:pt-40 pb-16 md:pb-20 bg-navy-dark text-cream overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-coral rounded-full blur-3xl" />
        </div>
        <div className="container-custom relative">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-4xl"
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal/15 border border-teal/30 mb-6">
              <Sparkles className="w-3.5 h-3.5 text-teal-light" />
              <span className="text-teal-light text-[12px] font-bold uppercase tracking-[0.2em]">Alpha Team AI</span>
            </motion.div>
            <motion.h1 variants={fadeUp} className="font-display text-4xl md:text-6xl lg:text-7xl text-cream mb-6 tracking-tight leading-[1.05]">
              Il Team
            </motion.h1>
            <motion.p variants={fadeUp} className="font-serif italic text-xl md:text-2xl text-cream/75 leading-relaxed">
              Luca + Alice + 9 agenti AI specializzati. Un team che non esiste altrove.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Dichiarazione trasparenza — OBBLIGATORIA in cima */}
      <section className="bg-cream py-12 md:py-16 border-b border-navy/10">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative p-6 md:p-10 rounded-2xl bg-white border-l-4 border-teal shadow-lg"
          >
            <ShieldCheck className="w-8 h-8 text-teal mb-4" />
            <p className="font-serif text-navy text-lg md:text-xl leading-[1.7]">
              Questo team è composto da <strong className="text-teal not-italic">intelligenze artificiali specializzate</strong>.
              Ogni membro rappresenta una competenza reale, costruita in trent&apos;anni di esperienza professionale di Luca Pellicari.
              Sono <em>artificiali nella natura</em>. Sono <em>umani nel linguaggio, nel ruolo e nella funzione</em>.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team grid */}
      <section className="py-20 md:py-28">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            {team.map((member) => (
              <motion.div
                key={member.name}
                variants={fadeUp}
                className="group relative bg-white rounded-2xl p-6 md:p-7 shadow-sm border border-navy/8 hover:shadow-xl hover:border-teal/20 hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="flex items-center gap-5 mb-5">
                  <div className={`relative w-20 h-20 rounded-full overflow-hidden flex-shrink-0 shadow-md ${
                    member.category === 'leader' ? 'ring-2 ring-teal/40'
                      : member.category === 'relational' ? 'ring-2 ring-coral/40'
                      : 'ring-2 ring-navy/10'
                  }`}>
                    <Image
                      src={member.img}
                      alt={`${member.name} — ${member.role}`}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </div>
                  <div>
                    <h3 className="font-display text-xl text-navy leading-tight">{member.name}</h3>
                    <p className="text-teal text-xs uppercase tracking-widest font-semibold mt-1">{member.role}</p>
                  </div>
                </div>
                {member.category !== 'leader' && (
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 mb-3 rounded-full bg-navy-dark text-cream text-[9px] font-bold tracking-widest uppercase">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-light" />
                    AI Virtuale
                  </span>
                )}
                <p className="text-navy/70 text-sm leading-relaxed">{member.competence}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-navy text-cream">
        <div className="container-custom max-w-3xl text-center">
          <h2 className="font-display text-3xl md:text-4xl text-cream mb-6 leading-tight">
            Vuoi lavorare con il Team?
          </h2>
          <p className="text-cream/70 text-base md:text-lg mb-8">
            Parla con Alice, l&apos;assistente personale virtuale di Luca: ti orienta, ti invia materiale e fissa un incontro.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => window.dispatchEvent(new CustomEvent('alice:open'))}
              className="group inline-flex items-center gap-3 bg-teal text-white px-8 py-4 rounded-full font-semibold shadow-lg shadow-teal/25 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
            >
              <Sparkles className="w-4 h-4" />
              <span>Parla con Alice</span>
            </button>
            <Link
              href="/contatti"
              className="group inline-flex items-center gap-3 border-2 border-cream/30 text-cream px-8 py-4 rounded-full font-semibold hover:border-cream/60 hover:bg-cream/5 transition-all duration-300"
            >
              <span>Contattami</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
