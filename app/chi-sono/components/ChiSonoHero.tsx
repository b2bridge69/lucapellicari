'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export function ChiSonoHero() {
  return (
    <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-teal/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-0 w-[400px] h-[400px] bg-coral/10 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <motion.span
              className="inline-block text-teal text-sm font-medium uppercase tracking-[0.3em] mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Chi Sono
            </motion.span>

            <motion.h1
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-navy-dark mb-4 leading-[1.1]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Io sono Luca Pellicari.
            </motion.h1>

            <motion.p
              className="font-display text-2xl md:text-3xl lg:text-4xl text-teal italic mb-10 leading-[1.25]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              Non sono qui per motivarti. Sono qui per aiutarti a diventare ciò che già sei.
            </motion.p>

            <motion.p
              className="text-lg text-navy/75 leading-[1.75] mb-5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Immaginati al tavolo di un bar. Io davanti a te, un caffè tra le mani.
              È così che mi piace presentarmi — <span className="text-teal font-semibold">senza palco, senza distanza</span>.
            </motion.p>

            <motion.p
              className="text-lg text-navy/75 leading-[1.75] mb-5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Ho vissuto molto. La disciplina militare. La malattia. Le sconfitte in impresa.
              Le rinascite. Ogni caduta mi ha tolto qualcosa.
              Ogni rinascita mi ha restituito qualcosa di più grande.
              Quello che hai davanti oggi è il risultato di tutto questo.
            </motion.p>

            <motion.p
              className="text-lg text-navy/75 leading-[1.75] mb-5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Ricordi? &laquo;Chi non sa fare insegna&raquo; — Io non insegno:{' '}
              <span className="font-bold uppercase text-teal">CONDIVIDO</span>.
              Perché ho vissuto in prima persona tutto ciò di cui parlo.
            </motion.p>

            <motion.p
              className="text-base text-navy/65 leading-[1.75] mb-10 italic"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              E se sei arrivato fin qui, forse è perché lo hai già capito. Forse una parte della mia storia parla anche di te.
              Continua a leggere. O parla con Alice — abbiamo molto da dirti.
            </motion.p>

            {/* Badge credenziali */}
            <motion.div
              className="flex flex-wrap gap-2.5 mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.55 }}
            >
              {[
                { text: 'Fondatore AlphaKom & Quantum Academy', accent: true },
                { text: 'Autore', accent: false },
                { text: 'Docente Universitario', accent: false },
                { text: 'Ricercatore', accent: false },
                { text: 'Analista del Comportamento', accent: false },
              ].map((badge) => (
                <span
                  key={badge.text}
                  className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-[12px] font-semibold tracking-wide ${
                    badge.accent
                      ? 'bg-teal/10 border border-teal/20 text-teal'
                      : 'bg-navy/[0.03] border border-navy/10 text-navy/70'
                  }`}
                >
                  {badge.accent && <span className="w-1.5 h-1.5 rounded-full bg-teal/60" />}
                  {badge.text}
                </span>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.a
              href="#story"
              className="group inline-flex items-center gap-3 bg-teal text-white px-7 py-3.5 rounded-full font-semibold shadow-lg shadow-teal/25 hover:shadow-xl hover:shadow-teal/35 hover:-translate-y-0.5 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <span>Scopri la mia storia</span>
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </motion.a>
          </div>

          {/* Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl shadow-navy/15">
              <Image
                src="/images/luca-portrait-2.jpg"
                alt="Luca Pellicari - Fondatore AlphaKom & Quantum Academy"
                fill
                className="object-cover"
                priority
                quality={75}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/55 via-transparent to-transparent" />
            </div>

            {/* Quote card — motto LP */}
            <motion.div
              className="absolute -bottom-6 -left-6 bg-gradient-to-br from-teal to-teal-dark text-white p-6 rounded-2xl max-w-xs shadow-2xl"
              initial={{ opacity: 0, x: -20, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <div className="w-8 h-1 bg-white/50 rounded mb-4" />
              <p className="font-serif text-lg italic leading-relaxed">
                &laquo;Rispetta ciò che sei. Offri ciò che sai. Ottieni ciò che vuoi.&raquo;
              </p>
              <p className="text-white/70 mt-3 text-sm font-medium">— Luca Pellicari</p>
            </motion.div>

            {/* Decorative corner */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-teal/30 rounded-tr-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
