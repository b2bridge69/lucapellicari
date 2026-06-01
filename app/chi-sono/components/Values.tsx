'use client'

import { motion } from 'framer-motion'
import {
  Heart,
  Shield,
  Sparkles,
  Flame,
  Target,
  Scale,
  Star,
  Gem,
} from 'lucide-react'

const values = [
  {
    icon: Heart,
    title: 'AMORE',
    description: "Ama te stesso. È il primo gesto d'amore verso chi ti ama.",
  },
  {
    icon: Shield,
    title: 'RISPETTO',
    description: 'Per ciò che sei, non per ciò che hai. Devi guadagnartelo.',
  },
  {
    icon: Sparkles,
    title: 'EDUCAZIONE',
    description: 'È ciò che ti distingue. Un faro nel buio.',
  },
  {
    icon: Flame,
    title: 'CORAGGIO',
    description: 'È energia, è vita, è lo stimolo a superare te stesso.',
  },
  {
    icon: Target,
    title: 'VERITÀ',
    description: 'Accetta i limiti e sviluppa i talenti. Sono comunque tuoi.',
  },
  {
    icon: Scale,
    title: 'COERENZA',
    description: 'Virtù rara. Appartiene a chi sa di Essere.',
  },
  {
    icon: Star,
    title: 'BELLEZZA',
    description: 'È nell\u2019anima, ti fa brillare anche tra mille.',
  },
  {
    icon: Gem,
    title: 'RICCHEZZA',
    description: 'È condivisione, è tempo. È per tutti.',
  },
]

export function Values() {
  return (
    <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-20 w-72 h-72 bg-teal/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-coral/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            className="inline-block text-teal text-sm font-medium uppercase tracking-[0.3em] mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            I Miei Valori — 8 Valori
          </motion.span>
          <motion.h2
            className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-navy mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            LE FONDAMENTA{' '}
            <span className="bg-gradient-to-r from-teal to-coral bg-clip-text text-transparent">
              DELLA MIA IDENTITÀ
            </span>
          </motion.h2>
          <motion.p
            className="text-navy/70 text-base md:text-lg max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            I valori non sono parole, sono pietre angolari sulle quali costruire la nostra identità.
            Vanno difesi con determinazione e coraggio, altrimenti le cicatrici saranno molto più profonde.
          </motion.p>
        </div>

        {/* Values Grid — 8 in 4 colonne */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              className="group h-full"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                duration: 0.5,
                delay: index * 0.05,
                ease: [0.22, 1, 0.36, 1] as const
              }}
            >
              <div className="relative h-full bg-white rounded-2xl p-6 border border-gray-100 hover:border-teal/30 hover:shadow-xl transition-all duration-500 overflow-hidden">
                {/* Hover glow effect */}
                <div className="absolute -inset-px bg-gradient-to-r from-teal/20 to-coral/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-teal/10 to-coral/10 flex items-center justify-center mb-5 group-hover:from-teal group-hover:to-teal-dark transition-all duration-500">
                    <value.icon
                      size={26}
                      className="text-teal group-hover:text-white transition-colors duration-500"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-xl md:text-2xl text-navy font-bold mb-3 tracking-wide group-hover:text-teal transition-colors duration-300">
                    {value.title}
                  </h3>

                  {/* Description */}
                  <p className="text-navy/70 text-sm md:text-[15px] leading-relaxed">
                    {value.description}
                  </p>
                </div>

                {/* Decorative corner */}
                <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-teal/5 to-transparent rounded-tl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
