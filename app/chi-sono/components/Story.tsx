'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const storyChapters = [
  {
    year: 'XIV sec.',
    tag: 'Le Origini',
    title: 'Pellicari — i Pilecher',
    content:
      "Le radici della famiglia affondano nella Lessinia veronese, tra le comunità cimbre. Pilech: la betulla. Custodi, prima che artigiani.",
  },
  {
    year: '1963',
    tag: 'Nascita',
    title: 'Un nuovo mondo. Il valore della famiglia.',
    content:
      "Figlio unico, cresciuto in un bozzolo di amore e vulnerabilità. Il calore della famiglia diventa la prima fondamenta.",
  },
  {
    year: '1982',
    tag: 'Liceo Scientifico',
    title: 'Le basi formative. La prima scelta di vita.',
    content:
      "Lo studio come palestra del pensiero. Il primo «chi voglio essere» — costruito a mano, con disciplina.",
  },
  {
    year: '1983',
    tag: 'BAO — XIII GRACO',
    title: 'Disciplina e coraggio. Nasce la Comunicazione Alpha.',
    content:
      "Il 3/3/83 divento paracadutista militare. Imparo la libertà dentro le regole, la forza del team. Due volte sfioro la morte: non ho mai avuto paura.",
  },
  {
    year: '1987',
    tag: 'RAS / Allianz',
    title: 'La comunicazione diventa professione.',
    content:
      "Agente Generale. Le relazioni smettono di essere intuizione e diventano metodo. Il mercato è la prima vera scuola.",
  },
  {
    year: '1988',
    tag: 'Impresa & Politica',
    title: 'Alpha diventa strumento di vita.',
    content:
      "Esperienza di impresa e impegno politico. Il metodo Alpha si forma a contatto con persone, decisioni, responsabilità.",
  },
  {
    year: '1993',
    tag: 'La Seconda Rinascita',
    title: 'Cancro e Meditazione Trascendentale.',
    content:
      "Linfoma non Hodgkin, sei mesi di vita. Trent'anni dopo, sono ancora qui. La meditazione trascendentale apre una nuova dimensione.",
  },
  {
    year: '1996',
    tag: 'La Prima Azienda',
    title: "Un'esperienza da dimenticare.",
    content:
      "Apro un'azienda che produce scatole di cartone — io, allergico alla carta. Sette anni di sacrifici, debiti, lezioni. Pago tutto fino all'ultima lira.",
  },
  {
    year: '2002',
    tag: 'Piramis Group',
    title: 'La comunicazione Alpha diventa professione.',
    content:
      "Incontro Davide Possi, Filomena e Rita Cossu. Da 27 mq a 1.100 collaboratori e quasi 100 milioni di fatturato. La mia vera skill: la gestione delle relazioni.",
  },
  {
    year: '2006',
    tag: 'La Terza Rinascita',
    title: 'La nuova famiglia. La gioia e il dolore.',
    content:
      "La famiglia si ricompone su un piano nuovo. Gioia e dolore si intrecciano. La terza rinascita non è fisica: è di senso.",
  },
  {
    year: '2013',
    tag: 'Quantum Academy',
    title: 'La passione diventa professione.',
    content:
      "Nasce Quantum Academy con Lucia Facchinetti e Alberto Lori. Un'idea, tre vite, una missione comune. La scuola che non sapevo di sognare.",
  },
  {
    year: '2020',
    tag: 'AlphaKom — In-Flow Protocol',
    title: 'Nasce il Metodo Alpha.',
    content:
      "AlphaKom prende forma come framework operativo. The In-Flow Protocol diventa il sistema completo: Flow che genera Inflow.",
  },
  {
    year: '2026',
    tag: 'La Quarta Rinascita',
    title: 'Una nuova sfida: Ictus.',
    content:
      "Una nuova sfida fisica. Il punto di massimo Inflow: ciò che hai vissuto non si cancella, si trasforma. Questa è la Grande Opera.",
  },
]

export function Story() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  const lineHeight = useTransform(scrollYProgress, [0.1, 0.9], ['0%', '100%'])

  return (
    <section
      id="story"
      ref={containerRef}
      className="py-24 lg:py-32 bg-gradient-to-b from-navy-dark via-navy to-navy-dark relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-teal/5 rounded-full blur-3xl" />
        <div className="absolute bottom-40 right-10 w-96 h-96 bg-coral/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-teal/3 to-transparent rounded-full" />
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <motion.span
            className="inline-block text-teal-light text-sm font-medium uppercase tracking-[0.3em] mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            La Mia Storia
          </motion.span>
          <motion.h2
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5 leading-[1.1]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            La mia{' '}
            <span className="bg-gradient-to-r from-teal-light via-coral to-teal-light bg-clip-text text-transparent italic">
              LIFELINE
            </span>
          </motion.h2>
          <motion.p
            className="font-serif italic text-xl md:text-2xl text-cream/85 mb-6 leading-snug"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            Questa è la mia vita. Lei insegna, io ascolto.
          </motion.p>
          <motion.div
            className="space-y-3 text-cream/70 text-base md:text-lg leading-[1.75]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p>Alcune tappe le ho scelte, altre no. Ma sempre ho scelto cosa farne.</p>
            <p>
              <strong className="text-teal-light">Tredici passaggi</strong> che insegnano, che trasformano — ognuno ha lasciato
              qualcosa: una cicatrice, un amore, un dolore, una nuova idea. Un&apos;esperienza.
            </p>
            <p className="italic">Quello che leggi qui sotto non è una biografia. È una mappa.</p>
          </motion.div>
        </div>

        {/* Lifeline Timeline — 13 punti */}
        <div className="max-w-5xl mx-auto relative">
          {/* Animated Progress Line */}
          <div className="absolute left-[28px] lg:left-1/2 lg:-translate-x-px top-0 bottom-0 w-[2px] bg-white/10">
            <motion.div
              className="w-full bg-gradient-to-b from-teal via-coral to-teal"
              style={{ height: lineHeight }}
            />
          </div>

          {/* Timeline Steps */}
          <div className="space-y-8 lg:space-y-0">
            {storyChapters.map((chapter, index) => (
              <motion.div
                key={`${chapter.year}-${index}`}
                className={`relative flex flex-col lg:flex-row items-start gap-6 lg:gap-12 lg:min-h-[220px] ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{
                  duration: 0.7,
                  delay: 0.1,
                  ease: [0.22, 1, 0.36, 1] as const,
                }}
              >
                {/* Step Number Circle */}
                <div className="absolute left-0 lg:left-1/2 lg:-translate-x-1/2 z-20">
                  <div className="relative group">
                    <div className="absolute inset-0 w-14 h-14 rounded-full bg-gradient-to-br from-teal to-coral opacity-50 blur-md group-hover:opacity-80 transition-opacity duration-500" />
                    <div className="relative w-14 h-14 rounded-full bg-gradient-to-br from-teal to-teal-dark flex items-center justify-center border-4 border-navy-dark shadow-2xl">
                      <span className="font-display text-base font-bold text-white">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content Card */}
                <div className={`flex-1 pl-20 lg:pl-0 ${index % 2 === 0 ? 'lg:pr-20' : 'lg:pl-20'}`}>
                  <div className="group relative h-full">
                    <div className="absolute -inset-1 bg-gradient-to-r from-teal/20 via-coral/10 to-teal/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    <div className="relative h-full min-h-[200px] bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 lg:p-7 hover:border-teal/30 transition-all duration-500 hover:bg-white/[0.08] flex flex-col">
                      <div className="inline-flex items-center gap-2 mb-3">
                        <div className="w-2 h-2 rounded-full bg-coral animate-pulse" />
                        <span className="text-coral font-mono text-sm font-semibold tracking-wider">
                          {chapter.year}
                        </span>
                      </div>

                      <p className="text-teal-light text-[11px] uppercase tracking-[0.2em] font-bold mb-2">
                        {chapter.tag}
                      </p>

                      <h3 className="font-display text-lg lg:text-xl font-bold text-white mb-3 group-hover:text-teal-light transition-colors duration-300 leading-tight">
                        {chapter.title}
                      </h3>

                      <p className="text-white/70 leading-relaxed text-sm flex-grow">
                        {chapter.content}
                      </p>

                      <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-teal/20 rounded-tr-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-coral/20 rounded-bl-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                  </div>
                </div>

                <div className="hidden lg:block flex-1" />
              </motion.div>
            ))}
          </div>

          {/* End marker */}
          <motion.div
            className="absolute left-[28px] lg:left-1/2 lg:-translate-x-1/2 -bottom-4 z-20"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="relative">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-teal to-teal-dark flex items-center justify-center border-4 border-navy-dark">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </motion.div>
        </div>

        {/* CHI SONO OGGI — Surgo ex clade + Anafore + Poesia Cimbra */}
        <motion.div
          className="mt-28 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-10">
            <span className="text-teal-light text-sm font-medium uppercase tracking-[0.3em]">Chi sono oggi</span>
            <h3 className="font-display italic text-3xl md:text-4xl lg:text-5xl text-cream mt-4 leading-tight">
              Surgo ex clade.
            </h3>
          </div>

          {/* Anafore */}
          <div className="space-y-2.5 text-center mb-14">
            {[
              'Sono un uomo che ha vissuto molte vite.',
              'Il mio simbolo è la fenice che risorge dai propri errori.',
              'Trasformo le paure in coraggio, ogni giorno.',
              'Mi definisco un guerriero, ma amo la pace.',
              'Combatto solo con me stesso e non vinco sempre.',
              "Cerco nella scienza le ragioni dell'esperienza.",
              'Condivido ciò che imparo, dono ciò che sono.',
            ].map((line, i) => (
              <p key={i} className="font-serif text-lg md:text-xl text-cream/85 leading-[1.7]">
                {line}
              </p>
            ))}
          </div>

          {/* Poesia Cimbra */}
          <div className="relative pl-6 border-l-2 border-gold/40 mb-14 max-w-md mx-auto">
            <p className="font-serif italic text-gold text-base md:text-lg leading-[1.9]">
              «Il bosco è la casa del Cimbro,<br />
              il tetto è il cielo,<br />
              le finestre gli spazi tra le foglie<br />
              e le porte…<br />
              le ha rubate il vento»
            </p>
            <p className="text-cream/55 text-xs mt-3 uppercase tracking-widest">— Antica poesia Cimbra</p>
          </div>

          {/* Quote LP */}
          <div className="text-center pt-8 border-t border-white/10">
            <p className="font-serif text-xl lg:text-2xl text-cream/95 italic leading-relaxed">
              &laquo;Ogni volta che cado, mi rialzo più forte. Non perché sono speciale. Perché ho imparato che cadere è
              l&apos;unico modo per scoprire quanto in alto puoi arrivare.&raquo;
            </p>
            <p className="text-teal-light mt-4 font-medium tracking-wide">— Luca Pellicari</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
