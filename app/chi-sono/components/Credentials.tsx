'use client'

import { motion } from 'framer-motion'
import { GraduationCap, BookOpen, Award, Heart, FlaskConical, University } from 'lucide-react'

const credentials = [
  {
    icon: GraduationCap,
    tag: 'Lo Studio',
    title: 'Scienze Politiche',
    description:
      'Dopo aver interrotto Giurisprudenza per ragioni di lavoro a 24 anni, al mio 60° anno mi sono laureato «cum laude» con una tesi sulle Tecniche di Negoziazione.',
  },
  {
    icon: University,
    tag: "L'Università",
    title: 'Docente Universitario',
    description:
      'Dopo il master in «Analisi del Comportamento» ho ottenuto una docenza in «Tecniche di Negoziazione — storia ed evoluzione».',
  },
  {
    icon: FlaskConical,
    tag: 'La Ricerca',
    title: 'Analisi del Comportamento',
    description:
      'Con Behaviour Analysis Team (Nucleo Osservatori del Comportamento) conduciamo e pubblichiamo ricerche scientifiche a sfondo sociale.',
  },
  {
    icon: Heart,
    tag: 'Non Profit',
    title: 'Impegno Sociale',
    description:
      'Personalmente e in Quantum Academy sviluppiamo percorsi formativi e divulgativi destinati al mondo dell\u2019inclusione e delle disabilità.',
  },
  {
    icon: Award,
    tag: 'Formazione',
    title: 'Corsi e Docenze',
    description:
      'Sono accreditato a livello nazionale e svolgo attività formative per Regione Lombardia con aziende, professionisti e a sfondo sociale.',
  },
  {
    icon: BookOpen,
    tag: 'La Passione',
    title: 'Autore e Speaker',
    description:
      'Pubblico libri su vari argomenti che trasformo in contenuti audio — particolarmente «The In-Flow Protocol», un esclusivo esperimento letterario.',
  },
]

export function Credentials() {
  return (
    <section className="py-24 lg:py-32 bg-navy-dark relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-teal/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-coral/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <motion.span
            className="inline-block text-teal-light text-sm font-medium uppercase tracking-[0.3em] mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Formazione & Ricerca
          </motion.span>

          <motion.h2
            className="font-display text-2xl md:text-3xl lg:text-[40px] font-bold text-white mb-6 leading-[1.2]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            RICERCA SCIENTIFICA <span className="text-teal-light">+</span> ESPERIENZA PERSONALE{' '}
            <span className="text-teal-light">=</span>{' '}
            <span className="bg-gradient-to-r from-teal-light via-coral to-teal-light bg-clip-text text-transparent">
              TRASFORMAZIONE PROFESSIONALE
            </span>
          </motion.h2>

          <motion.p
            className="text-white/75 text-base md:text-lg leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            I manuali insegnano, le esperienze formano, le emozioni allineano.
            Questa è la vera trasformazione: quando <span className="text-teal-light italic">ciò che desideri personalmente diventa un successo professionale</span>… emozionandoti.
          </motion.p>
        </div>

        {/* Credentials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {credentials.map((cred, index) => (
            <motion.div
              key={cred.title}
              className="group h-full"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1] as const,
              }}
            >
              <div className="relative h-full bg-white/5 backdrop-blur-sm rounded-2xl p-7 border border-white/10 hover:border-teal/30 transition-all duration-500 hover:bg-white/[0.08]">
                <div className="absolute -inset-1 bg-gradient-to-r from-teal/15 via-transparent to-teal/15 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal to-teal-dark flex items-center justify-center mb-5 shadow-lg">
                    <cred.icon size={24} className="text-white" />
                  </div>

                  <span className="inline-block text-teal-light text-[11px] font-bold uppercase tracking-[0.25em] mb-2">
                    {cred.tag}
                  </span>

                  <h3 className="font-display text-xl text-white font-bold mb-3 group-hover:text-teal-light transition-colors duration-300">
                    {cred.title}
                  </h3>

                  <p className="text-white/65 text-sm leading-relaxed">
                    {cred.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Claim finale */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="font-serif italic text-cream/85 text-lg md:text-2xl leading-relaxed max-w-2xl mx-auto">
            &laquo;Rispetta ciò che sei. Offri ciò che sai.{' '}
            <span className="text-teal-light">Ottieni ciò che vuoi.</span>&raquo;
          </p>
        </motion.div>
      </div>
    </section>
  )
}
