'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { TextReveal } from '@/components/animations/TextReveal'
import { FadeIn } from '@/components/animations/FadeIn'

export function Stemma() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-white relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-teal/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-0 w-[400px] h-[400px] bg-gold/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Stemma di famiglia */}
          <FadeIn direction="left">
            <div className="relative mx-4 md:mx-0">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl bg-cream">
                <Image
                  src="/images/stemma-pellicari.jpg"
                  alt="Stemma di famiglia Pellicari — La Fenice ferita"
                  fill
                  className="object-contain p-6 md:p-10"
                  quality={75}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  loading="lazy"
                />
              </div>

              {/* Decorative corners */}
              <div className="hidden md:block absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-gold/30 rounded-tr-3xl" />
              <div className="hidden md:block absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-teal/30 rounded-bl-3xl" />

              {/* Motto floating card */}
              <motion.div
                className="absolute -bottom-4 right-2 md:-bottom-6 md:-right-6 bg-gradient-to-br from-navy-dark to-navy text-white p-4 md:p-6 rounded-xl md:rounded-2xl max-w-[200px] md:max-w-[220px] shadow-2xl"
                initial={{ opacity: 0, x: 20, y: 20 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                <div className="w-6 md:w-8 h-1 bg-gold/50 rounded mb-2 md:mb-3" />
                <p className="text-gold font-serif italic text-base md:text-lg leading-tight mb-1">Surgo ex clade.</p>
                <p className="text-white/60 text-[10px] md:text-xs">Motto di famiglia · latino</p>
              </motion.div>
            </div>
          </FadeIn>

          {/* Content */}
          <div className="mt-4 md:mt-0">
            <FadeIn>
              <span className="inline-block text-teal text-sm font-medium uppercase tracking-[0.3em] mb-4 md:mb-6">
                Le Mie Origini
              </span>
            </FadeIn>

            <TextReveal className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-navy mb-3 md:mb-4 leading-tight">
              Pellicari — I Pilecher.
            </TextReveal>

            <FadeIn delay={0.2}>
              <p className="font-serif text-lg md:text-xl lg:text-2xl text-gold italic mb-6 md:mb-8">
                Dal cimbro &laquo;Pilech&raquo; — la betulla.
              </p>
            </FadeIn>

            {/* 4 badge informativi */}
            <FadeIn delay={0.25}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3 mb-8">
                {[
                  { label: 'Simbolo', value: '700 anni' },
                  { label: 'Rinascita', value: 'Fenice' },
                  { label: 'Stupidità', value: 'Oche' },
                  { label: 'Coraggio', value: 'Arma' },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex flex-col items-center text-center bg-cream rounded-xl px-3 py-3 border border-cream-dark"
                  >
                    <span className="text-teal font-display font-bold text-sm md:text-base">{item.value}</span>
                    <span className="text-navy/50 text-[10px] md:text-xs font-medium uppercase tracking-wider mt-1">{item.label}</span>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="space-y-6 text-navy/75 text-base md:text-[17px] leading-[1.75]">
                {/* PELLICARI — I Pilecher */}
                <div>
                  <h3 className="font-display text-lg md:text-xl text-navy mb-2 tracking-tight">PELLICARI — I Pilecher</h3>
                  <p>
                    Le radici della famiglia Pellicari affondano nella terra antica della Lessinia veronese, tra le comunità cimbre che,
                    a partire dal Medioevo, si stabilirono nella valle d&apos;Illasi, trovando in Badia Calavena un luogo da abitare, difendere e custodire.
                  </p>
                  <p className="mt-3">
                    Il nome stesso custodisce una traccia di questa origine: <strong className="text-teal">Pilech</strong>, la betulla.
                    Albero capace di crescere anche nei terreni più difficili, simbolo di resistenza, adattamento e rinascita.
                    I Pellicari erano coloro che lavoravano questo legno. Ma la loro posizione, arroccata su una riva a protezione della valle,
                    racconta anche un altro ruolo: quello di presidio, di custodia, di presenza vigile.
                  </p>
                  <p className="mt-3 italic text-navy/85">Non solo artigiani. <strong className="not-italic text-teal">Custodi.</strong></p>
                </div>

                {/* ARMA — Il significato */}
                <div>
                  <h3 className="font-display text-lg md:text-xl text-navy mb-2 tracking-tight">ARMA — Il significato</h3>
                  <p>
                    Nel suo significato originario, &laquo;arma&raquo; non significa &laquo;guerra&raquo; né indica origini nobiliari:
                    parla di <strong className="text-teal">identità</strong>. È il segno attraverso cui una famiglia si riconosce e viene riconosciuta.
                    L&apos;arma dei Pellicari non nasce come simbolo di potere, ma come sintesi di difesa dei valori.
                  </p>
                </div>

                {/* LA FENICE — Simbologia */}
                <div>
                  <h3 className="font-display text-lg md:text-xl text-navy mb-2 tracking-tight">LA FENICE — Simbologia</h3>
                  <p>
                    Al centro del simbolo compare una figura che proviene da documenti ufficiali: una fenice.
                    Non è trionfante ma ferita, attaccata al cuore da tre oche bianche.
                    Le oche rappresentano falsità, stupidità e ignoranza.
                  </p>
                  <p className="mt-3">
                    Nessuna di queste è in grado di distruggere i valori primari dell&apos;uomo: coerenza, intelligenza e conoscenza.
                    Attaccano, feriscono — ma l&apos;Uomo coraggioso{' '}
                    <strong className="text-teal">rinasce sempre nei suoi valori</strong>.
                  </p>
                </div>

                {/* IL LOGO — La trasformazione */}
                <div className="relative pl-5 border-l-2 border-teal/30">
                  <h3 className="font-display text-lg md:text-xl text-navy mb-2 tracking-tight">IL LOGO — La trasformazione</h3>
                  <p>
                    Il mio logo nasce dalla trasformazione dello stemma di famiglia. Ho voluto mantenere integri i valori rappresentati
                    dal simbolo di famiglia — perché rappresenta la sintesi di chi sono e di ciò in cui credo. E lo fa da{' '}
                    <strong className="text-teal">circa 700 anni</strong>.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}
