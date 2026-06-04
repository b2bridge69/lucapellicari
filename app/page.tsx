'use client'

import { useRef, useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import { ArrowRight, ChevronRight, ChevronLeft, Target, Eye, Shield, Users, Brain, Star, Compass, Sparkles, Quote, ArrowUpRight, GraduationCap, Building2, Globe, Handshake, CheckCircle, RefreshCw, TrendingUp, ImageOff as ImageIcon } from 'lucide-react'
import { InFlowSection } from '@/components/sections/InFlowSection'
import { AlphaTeamSection } from '@/components/sections/AlphaTeamSection'
import { AliceHomepageSection } from '@/components/alice/AliceHomepageSection'

// Animation variants - optimized for performance
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const }
  }
}

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5, ease: "easeOut" } }
}

const stagger = {
  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.05 } }
}

const slideIn = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const }
  }
}

const scaleIn = {
  hidden: { opacity: 0, scale: 0.97 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] as const }
  }
}

// Hero Slider Data — 4 slide, una per area del Metodo AlphaKom
interface HeroSlide {
  image: string
  alt: string
  label: string
  title: string
  highlight: string
  description: string
  ctaText: string
  ctaHref: string
  ctaSecondaryText?: string
  motto?: string
  showLogoOverlay: boolean
}
const heroSlides: HeroSlide[] = [
  {
    image: '/images/hero/slide-1-bao.png',
    alt: 'Luca Pellicari - Le Origini (BAO XIII GRACO)',
    label: 'LE ORIGINI',
    title: 'Disciplina, coraggio,',
    highlight: 'identità.',
    description: 'Dove nasce la Comunicazione Alpha: tra disciplina militare e radici cimbre.',
    ctaText: 'Scopri chi sono',
    ctaHref: '/chi-sono',
    showLogoOverlay: true,
  },
  {
    image: '/images/hero/slide-2-piramis.png',
    alt: 'Luca Pellicari - L\'evoluzione (Piramis Group)',
    label: "L'EVOLUZIONE",
    title: 'La comunicazione',
    highlight: 'diventa metodo.',
    description: 'Dal palco al campo: il metodo Alpha prende forma. Replicabile. Solido.',
    ctaText: 'Scopri il percorso',
    ctaHref: '/percorsi',
    showLogoOverlay: true,
  },
  {
    image: '/images/hero/slide-3-gran-guardia.png',
    alt: 'Luca Pellicari - La trasformazione (Gran Guardia Verona 2016)',
    label: 'LA TRASFORMAZIONE',
    title: 'Quando l\'esperienza',
    highlight: 'diventa metodo.',
    description: 'AlphaKom: il framework che trasforma obiettivi personali in successi professionali.',
    ctaText: 'Scopri AlphaKom',
    ctaHref: '/alphakom',
    showLogoOverlay: true,
  },
  {
    image: '/images/hero/slide-4-liberta.png',
    alt: 'Luca Pellicari - La libertà',
    label: 'LA LIBERTÀ',
    title: 'La libertà di',
    highlight: 'essere chi sei.',
    description: 'Il compimento della Grande Opera: risultati stabili, replicabili, condivisibili.',
    ctaText: 'Contattami',
    ctaHref: '/contatti',
    ctaSecondaryText: 'Parla con Alice',
    motto: 'Surgo ex clade.',
    showLogoOverlay: false,
  },
]

// Animated Counter — uses requestAnimationFrame for smooth 60fps
function AnimatedNumber({ value, suffix = '' }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return
    const duration = 1800
    let start: number | null = null
    let rafId: number | null = null
    const step = (ts: number) => {
      if (!start) start = ts
      const progress = Math.min((ts - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * value))
      if (progress < 1) rafId = requestAnimationFrame(step)
    }
    rafId = requestAnimationFrame(step)
    return () => { if (rafId) cancelAnimationFrame(rafId) }
  }, [isInView, value])

  return <span ref={ref}>{count}{suffix}</span>
}

// ============================================
// HERO SECTION
// ============================================
function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [isPaused, setIsPaused] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { amount: 0.2 })

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1])

  useEffect(() => {
    if (!isAutoPlaying || isPaused || !isInView) return
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 6500)
    return () => clearInterval(interval)
  }, [isAutoPlaying, isPaused, isInView])

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }, [])

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }, [])

  return (
    <section
      ref={containerRef}
      className="relative h-screen overflow-hidden bg-navy-dark"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background */}
      <motion.div className="absolute inset-0" style={{ scale }}>
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image src={slide.image} alt={slide.alt} fill className="object-cover" priority={index === 0} loading={index === 0 ? "eager" : "lazy"} quality={65} sizes="100vw" />
            {/* Premium gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/90 via-navy-dark/60 to-navy-dark/30" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/50 via-transparent to-transparent" />
          </div>
        ))}
      </motion.div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-teal/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-teal/20 to-transparent" />

      {/* Subtle corner accents - hidden on mobile to prevent overflow */}
      <div className="hidden md:block absolute top-32 left-8 w-24 h-24 border-l border-t border-cream/10 rounded-tl-3xl" />
      <div className="hidden md:block absolute bottom-32 right-8 w-24 h-24 border-r border-b border-teal/10 rounded-br-3xl" />

      {/* Ticker / banner overlay - claim generale */}
      <div className="absolute top-20 md:top-24 left-0 right-0 z-20 pointer-events-none">
        <div className="w-full px-6 md:px-16 lg:px-24">
          <p className="text-cream/70 text-[10px] md:text-[12px] uppercase tracking-[0.35em] font-semibold">
            Trasformare obiettivi personali in successi professionali
          </p>
        </div>
      </div>

      {/* Logo PELLICARI overlay (slide 1-3) */}
      {heroSlides[currentSlide].showLogoOverlay && (
        <div className="absolute top-32 md:top-36 left-6 md:left-16 lg:left-24 z-20 pointer-events-none">
          <span className="font-display text-cream tracking-[0.4em] text-base md:text-lg font-semibold">
            PELLICARI
          </span>
        </div>
      )}

      {/* Content */}
      <motion.div className="relative z-10 h-full flex items-center" style={{ opacity }}>
        <div className="w-full px-6 md:px-16 lg:px-24">
          <div className="max-w-3xl">
            {/* Slide label */}
            <div className="flex items-center gap-4 mb-8">
              <span className="w-12 h-px bg-teal-light" />
              <span className="text-teal-light text-sm uppercase tracking-[0.25em] font-semibold">
                {heroSlides[currentSlide].label}
              </span>
            </div>

            <div className="relative min-h-[160px] md:min-h-[180px] lg:min-h-[200px] mb-8">
              {heroSlides.map((slide, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-700 ${
                    index === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'
                  }`}
                >
                  <h1 className="font-display text-4xl md:text-6xl lg:text-7xl text-cream leading-[1.05] tracking-tight">
                    {slide.title}{' '}
                    <span className="text-teal-light italic">{slide.highlight}</span>
                  </h1>
                </div>
              ))}
            </div>

            <div className="relative min-h-[4.5rem] md:min-h-[4rem] mb-8">
              {heroSlides.map((slide, index) => (
                <p
                  key={index}
                  className={`absolute inset-0 text-cream/80 text-base md:text-xl leading-relaxed max-w-xl transition-opacity duration-500 ${
                    index === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'
                  }`}
                >
                  {slide.description}
                </p>
              ))}
            </div>

            {/* Motto (solo slide 4) */}
            {heroSlides[currentSlide].motto && (
              <p className="font-serif italic text-cream/60 text-sm md:text-base mb-6 tracking-wide">
                {heroSlides[currentSlide].motto}
              </p>
            )}

            <div className="flex flex-wrap gap-4 md:gap-5">
              <Link href={heroSlides[currentSlide].ctaHref} className="group relative inline-flex items-center gap-3 bg-teal text-white px-7 md:px-9 py-3.5 md:py-4 rounded-full font-semibold overflow-hidden shadow-xl shadow-teal/25 hover:shadow-2xl hover:shadow-teal/35 transition-all duration-500 hover:-translate-y-0.5">
                <span className="relative z-10">{heroSlides[currentSlide].ctaText}</span>
                <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                <div className="absolute inset-0 bg-teal-dark opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </Link>
              {heroSlides[currentSlide].ctaSecondaryText && (
                <button
                  type="button"
                  onClick={() => {
                    const evt = new CustomEvent('alice:open')
                    window.dispatchEvent(evt)
                  }}
                  className="group relative inline-flex items-center gap-3 px-7 md:px-9 py-3.5 md:py-4 border border-cream/30 text-cream rounded-full font-medium backdrop-blur-sm hover:border-cream/60 hover:bg-white/5 transition-all duration-300"
                >
                  <span>{heroSlides[currentSlide].ctaSecondaryText}</span>
                  <ArrowUpRight className="w-4 h-4 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                </button>
              )}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Controls */}
      <div className="absolute bottom-6 md:bottom-12 left-0 right-0 z-20 px-6 md:px-16 lg:px-24">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 md:gap-8">
            {/* Slide counter */}
            <div className="flex items-center gap-2 md:gap-3 text-sm font-medium">
              <span className="text-cream text-xl md:text-2xl font-display">0{currentSlide + 1}</span>
              <span className="text-cream/60">/</span>
              <span className="text-cream/60">0{heroSlides.length}</span>
            </div>

            {/* Progress bar */}
            <div className="w-20 md:w-48">
              <div className="h-[2px] bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-teal to-teal-light"
                  initial={{ width: '0%' }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 6.5, ease: "linear" }}
                  key={currentSlide}
                />
              </div>
            </div>
          </div>

          {/* Navigation buttons */}
          <div className="flex gap-2 md:gap-3">
            <button
              onClick={prevSlide}
              aria-label="Slide precedente"
              className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-cream/20 flex items-center justify-center text-cream/60 hover:text-cream hover:border-cream/40 hover:bg-white/5 active:bg-white/10 focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 focus-visible:ring-offset-navy-dark transition-all duration-300"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Slide successiva"
              className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-cream/20 flex items-center justify-center text-cream/60 hover:text-cream hover:border-cream/40 hover:bg-white/5 active:bg-white/10 focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 focus-visible:ring-offset-navy-dark transition-all duration-300"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 hidden lg:flex flex-col items-center gap-2"
      >
        <span className="text-cream/60 text-xs uppercase tracking-widest">Scroll</span>
        <div
          className="w-5 h-8 rounded-full border border-cream/20 flex items-start justify-center p-1.5 animate-bounce motion-reduce:animate-none"
          style={{ animationDuration: '2s' }}
        >
          <div className="w-1 h-2 rounded-full bg-teal-light" />
        </div>
      </div>
    </section>
  )
}

// ============================================
// OPENING SECTION - Creative Split Layout
// ============================================
function OpeningSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="grid lg:grid-cols-2 min-h-[85vh]">
        {/* Left - Dark Side */}
        <div className="relative bg-navy-dark py-28 lg:py-36 px-6 md:px-16 lg:px-20 flex items-center overflow-hidden">
          {/* Floating Number — large watermark */}
          <div className="absolute top-8 right-6 md:top-10 md:right-10 text-[10rem] md:text-[16rem] font-display text-cream/[0.025] leading-none select-none pointer-events-none">
            7
          </div>

          {/* Left accent bar */}
          <div className="absolute top-0 left-0 w-[3px] h-full bg-gradient-to-b from-teal via-teal/30 to-transparent" />

          {/* Subtle bottom gradient fade */}
          <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[#1a2f42] to-transparent pointer-events-none" />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            {/* Label */}
            <motion.div variants={fadeUp} className="flex items-center gap-4 mb-12">
              <span className="w-10 h-[2px] bg-gradient-to-r from-teal-light to-teal-light/0" />
              <span className="text-teal-light/70 text-[13px] uppercase tracking-[0.25em] font-semibold">
                Una verità semplice, la mia
              </span>
            </motion.div>

            {/* Negation lines — progressive fade */}
            <motion.div variants={fadeUp} className="space-y-4 mb-12">
              {[
                { text: 'Io non sono un formatore.', opacity: 'text-cream/25' },
                { text: 'Non sono un motivatore.', opacity: 'text-cream/20' },
                { text: 'Non sono un guru.', opacity: 'text-cream/15' },
              ].map((item, i) => (
                <p key={i} className={`font-display text-[26px] md:text-[32px] ${item.opacity} tracking-tight leading-snug`}>
                  {item.text}
                </p>
              ))}
            </motion.div>

            {/* Paragraph CONDIVIDO */}
            <motion.p variants={fadeUp} className="text-cream/75 text-[17px] md:text-[18px] leading-[1.8] mb-8">
              Si dice che &ldquo;chi non sa fare insegna&rdquo;. Io non insegno:{' '}
              <span className="font-bold uppercase text-teal-light">CONDIVIDO</span>.{' '}
              Perché sono un uomo che ha studiato molto e vissuto di più.
            </motion.p>

            {/* Motto */}
            <motion.p variants={fadeUp} className="font-serif italic text-teal-light/80 text-[15px] md:text-[16px] mb-12 leading-relaxed">
              &ldquo;Rispetta ciò che sei. Offri ciò che sai. Ottieni ciò che vuoi.&rdquo;
            </motion.p>

            {/* Divider */}
            <motion.div variants={fadeUp} className="flex items-center gap-4 mb-10">
              <div className="h-[2px] w-12 bg-gradient-to-r from-teal-light to-transparent" />
              <div className="h-[2px] w-4 bg-teal-light/30" />
            </motion.div>

            {/* Main statement */}
            <motion.p
              variants={fadeUp}
              className="font-display text-[28px] md:text-[34px] lg:text-[40px] text-cream leading-[1.2] tracking-tight"
            >
              Sono un uomo che ha vissuto{' '}
              <span className="relative text-teal-light">
                sette rinascite
                <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-teal-light/50 to-transparent" />
              </span>.
            </motion.p>
          </motion.div>
        </div>

        {/* Right - Light Side */}
        <div className="relative bg-white py-28 lg:py-36 px-6 md:px-16 lg:px-20 flex items-center overflow-hidden">
          {/* Decorative circle */}
          <div className="hidden lg:block absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-56 h-56 rounded-full border border-teal/8" />
          <div className="absolute bottom-14 right-14 w-28 h-28 rounded-full bg-gradient-to-br from-teal/5 to-teal/0" />
          {/* Right accent bar */}
          <div className="hidden lg:block absolute top-0 right-0 w-[3px] h-full bg-gradient-to-b from-transparent via-teal/10 to-transparent" />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            {/* Opening statement */}
            <motion.p
              variants={fadeUp}
              className="font-serif text-[22px] md:text-[26px] text-navy/70 italic leading-[1.6] mb-12"
            >
              E ciò che condivido non è teoria. È trent&apos;anni di vita vissuta trasformati in un metodo. Collaudato sul campo. Replicabile.{' '}
              <span className="text-teal font-bold not-italic">Tuo.</span>
            </motion.p>

            {/* Callout card */}
            <motion.div
              variants={fadeUp}
              className="relative bg-gradient-to-br from-teal/[0.06] to-teal/[0.02] p-7 md:p-8 rounded-2xl border border-teal/10 mb-14"
            >
              {/* Accent bar */}
              <div className="absolute left-0 top-5 bottom-5 w-[3px] rounded-full bg-gradient-to-b from-teal to-teal/30" />
              <p className="text-navy/80 text-[17px] leading-[1.75] pl-4">
                Non esistono risultati professionali duraturi senza una base identitaria solida.{' '}
                <span className="text-teal font-bold">Prima costruiamo quella.</span>{' '}
                Poi tutto il resto viene da sé.
              </p>
            </motion.div>

            {/* Label sopra bullets */}
            <motion.p variants={fadeUp} className="text-teal text-[13px] uppercase tracking-[0.25em] font-semibold mb-6">
              Il Metodo AlphaKom in 4 fasi:
            </motion.p>

            {/* 4 fasi del Metodo */}
            <motion.div variants={fadeUp} className="space-y-0">
              {[
                {
                  title: 'ANALISI',
                  desc: 'Costruiamo insieme la tua identità personale e professionale. Il punto di partenza di ogni progetto vero. Come in medicina: prima l\u2019anamnesi.',
                  color: 'bg-teal',
                },
                {
                  title: 'IL PROGETTO ESCLUSIVO',
                  desc: 'Definiamo modalità, tempi e obiettivi del tuo percorso. Perché <em>ciò che va bene per tutti non funziona per nessuno</em>. Come in medicina: la diagnosi è sempre individuale.',
                  color: 'bg-teal-dark',
                },
                {
                  title: 'IL METODO ALPHA',
                  desc: 'Entriamo nelle practices. I canvas di progetto prendono forma. È qui che il <strong>Flow</strong> si attiva e genera <strong>Inflow</strong>.',
                  color: 'bg-navy',
                },
                {
                  title: 'LA TRASFORMAZIONE',
                  desc: 'Il compimento della <em>Grande Opera</em>. Obiettivi realizzati, stabili e replicabili. Una ricchezza che non è solo finanziaria — è condivisibile.',
                  color: 'bg-teal',
                },
              ].map((item, i) => (
                <div key={i} className="group flex items-start gap-5 py-5 border-b border-navy/5 last:border-b-0 cursor-default">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-navy/[0.04] flex items-center justify-center mt-1">
                    <span className={`w-2 h-2 rounded-full ${item.color}`} />
                  </div>
                  <div>
                    <p className="text-navy font-bold tracking-wide text-[15px] uppercase mb-1.5">{item.title}</p>
                    <p
                      className="text-navy/70 text-[15px] leading-[1.7]"
                      dangerouslySetInnerHTML={{ __html: item.desc }}
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// ============================================
// CHI SONO SECTION - Editorial Premium Layout
// ============================================
function ChiSonoSection() {
  return (
    <section className="py-28 lg:py-36 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-20 items-center">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
            className="lg:col-span-5 order-2 lg:order-1"
          >
            <div className="relative">
              {/* Background accent shape */}
              <div className="absolute -top-4 -left-4 w-full h-full rounded-3xl bg-gradient-to-br from-teal/8 to-teal/3 -z-10" />

              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-xl shadow-navy/10">
                <Image
                  src="/images/luca-portrait.jpg"
                  alt="Luca Pellicari - Identity Coach"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  quality={65}
                  loading="lazy"
                />
                {/* Subtle overlay gradient at bottom */}
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-navy-dark/30 to-transparent" />
              </div>

              {/* Floating Stats Card — 4 voci */}
              <div className="absolute -bottom-6 -right-4 md:-bottom-8 md:-right-6 bg-white rounded-2xl p-4 md:p-6 shadow-xl shadow-navy/8 border border-navy/5">
                <div className="grid grid-cols-4 gap-3 md:gap-5 text-center">
                  <div>
                    <p className="text-[22px] md:text-[28px] font-display text-teal leading-none mb-1"><AnimatedNumber value={3} /></p>
                    <p className="text-[9px] md:text-[10px] text-navy/50 uppercase tracking-[0.1em] font-semibold">Rinascite</p>
                  </div>
                  <div className="border-l border-navy/6 pl-3">
                    <p className="text-[22px] md:text-[28px] font-display text-teal leading-none mb-1"><AnimatedNumber value={10} /></p>
                    <p className="text-[9px] md:text-[10px] text-navy/50 uppercase tracking-[0.1em] font-semibold">Vite</p>
                  </div>
                  <div className="border-l border-navy/6 pl-3">
                    <p className="text-[22px] md:text-[28px] font-display text-teal leading-none mb-1"><AnimatedNumber value={40} suffix="+" /></p>
                    <p className="text-[9px] md:text-[10px] text-navy/50 uppercase tracking-[0.1em] font-semibold">Anni Studio</p>
                  </div>
                  <div className="border-l border-navy/6 pl-3">
                    <p className="text-[22px] md:text-[28px] font-display text-navy-dark leading-none mb-1"><AnimatedNumber value={60} suffix="+" /></p>
                    <p className="text-[9px] md:text-[10px] text-navy/50 uppercase tracking-[0.1em] font-semibold">Esperienze</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="lg:col-span-7 order-1 lg:order-2"
          >
            {/* Label */}
            <motion.div variants={fadeUp} className="flex items-center gap-4 mb-8">
              <span className="w-10 h-[2px] bg-gradient-to-r from-teal to-teal/0" />
              <span className="text-teal text-[13px] uppercase tracking-[0.2em] font-semibold">Chi Sono</span>
            </motion.div>

            {/* Name */}
            <motion.h2 variants={fadeUp} className="font-display text-[40px] md:text-[52px] lg:text-[60px] text-navy-dark mb-5 tracking-tight leading-[1.05]">
              Io sono Luca Pellicari.
            </motion.h2>

            {/* Sottotitolo */}
            <motion.p variants={fadeUp} className="font-serif text-[19px] md:text-[21px] text-navy/55 italic mb-8 leading-relaxed">
              Non sono qui per motivarti. Sono qui per aiutarti a diventare ciò che già sei.
            </motion.p>

            {/* Credential badges */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-2.5 mb-10">
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
                      ? 'bg-teal/8 border border-teal/15 text-teal'
                      : 'bg-navy/[0.03] border border-navy/8 text-navy/65'
                  }`}
                >
                  {badge.accent && <span className="w-1.5 h-1.5 rounded-full bg-teal/50" />}
                  {badge.text}
                </span>
              ))}
            </motion.div>

            {/* Body text */}
            <motion.div variants={fadeUp} className="space-y-5 mb-10">
              <p className="text-navy/70 text-[18px] leading-[1.8]">
                Ho vissuto molte rinascite. La malattia. La disciplina militare. Le sconfitte. La ricostruzione. L&apos;esperienza.
                Ogni volta ho perso qualcosa. Ogni volta ho guadagnato qualcosa di ancora più grande.
              </p>
              <p className="text-navy/70 text-[18px] leading-[1.8]">
                Ho trasformato tutto questo in un metodo personale. Non per insegnarlo — per condividerlo.
                Non è solo formazione, è <span className="font-bold uppercase text-teal">TRASFORMAZIONE</span>,
                perché ciò che non si è vissuto non si può trasmettere. E io ho vissuto tutto ciò di cui ti parlo.
              </p>
            </motion.div>

            {/* Claim chiusura — motto */}
            <motion.blockquote
              variants={fadeUp}
              className="relative pl-7 py-4 mb-12"
            >
              <div className="absolute left-0 top-0 bottom-0 w-[3px] rounded-full bg-gradient-to-b from-teal to-teal/20" />
              <p className="text-[22px] md:text-[26px] font-serif italic text-navy-dark leading-[1.45]">
                &ldquo;Rispetta ciò che sei. Offri ciò che sai.{' '}
                <span className="text-teal">Ottieni ciò che vuoi.</span>&rdquo;
              </p>
            </motion.blockquote>

            {/* CTA link */}
            <motion.div variants={fadeUp}>
              <Link href="/chi-sono" className="group inline-flex items-center gap-4">
                <span className="relative text-[16px] font-semibold text-navy-dark">
                  Scopri la mia storia
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-teal group-hover:w-full transition-all duration-400" />
                </span>
                <span className="w-11 h-11 rounded-full border-2 border-navy/15 flex items-center justify-center group-hover:border-teal group-hover:bg-teal transition-all duration-300">
                  <ArrowUpRight className="w-[18px] h-[18px] text-navy/60 group-hover:text-white transition-colors duration-300" />
                </span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}


// ============================================
// MISSIONE SECTION - Bento Grid
// ============================================
const missionItems = [
  { icon: Eye, label: 'Identità', desc: 'La base che non tradisce' },
  { icon: Target, label: 'Visione', desc: 'Dove vuoi arrivare davvero' },
  { icon: Star, label: 'Leadership Alpha', desc: 'Riconosciuto — non imposto' },
  { icon: Brain, label: 'Analisi', desc: 'Vedere prima degli altri' },
  { icon: Users, label: 'Relazioni', desc: 'Il tuo capitale invisibile' },
  { icon: Handshake, label: 'Negoziazione', desc: 'Ogni accordo è una scelta' },
  { icon: Shield, label: 'Il Metodo', desc: 'Collaudato sul campo' },
  { icon: Compass, label: 'In-Flow', desc: 'Flow che genera Inflow' },
]

function MissioneSection() {
  return (
    <section className="py-28 lg:py-36 bg-cream overflow-hidden">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className="w-10 h-[2px] bg-gradient-to-r from-transparent to-teal/40" />
            <span className="text-teal text-[13px] uppercase tracking-[0.2em] font-semibold">La Mia Missione</span>
            <span className="w-10 h-[2px] bg-gradient-to-l from-transparent to-teal/40" />
          </div>
          <h2 className="font-display text-2xl md:text-4xl lg:text-[44px] text-navy-dark mb-6 tracking-tight max-w-4xl mx-auto leading-[1.2]">
            Guido professionisti e imprenditori a costruire la propria identità operativa.{' '}
            <span className="text-teal italic">Con metodo. Con esperienza. Con risultati.</span>
          </h2>
          <p className="text-base md:text-lg text-navy/60 max-w-2xl mx-auto leading-relaxed">
            Il mio lavoro è preciso: ti aiuto a costruire la tua identità operativa.
            Con metodo. Con esperienza. Con risultati stabili e ripetibili.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {missionItems.map((item) => (
            <div
              key={item.label}
              className="group relative bg-white border border-navy/6 rounded-2xl p-4 md:p-6 shadow-sm hover:border-teal/20 hover:shadow-lg hover:shadow-teal/5 transition-all duration-300 cursor-pointer"
            >
              <div className="w-10 h-10 md:w-11 md:h-11 rounded-xl bg-teal/10 flex items-center justify-center mb-3 md:mb-4 group-hover:bg-teal group-hover:scale-105 transition-all duration-300">
                <item.icon className="w-4 h-4 md:w-5 md:h-5 text-teal group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="font-semibold text-navy mb-0.5 md:mb-1 text-xs md:text-sm">{item.label}</h3>
              <p className="text-[10px] md:text-xs text-navy/60 leading-snug">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-14">
          <Link href="/missione" className="group inline-flex items-center gap-3 bg-navy text-white px-8 py-4 rounded-full font-medium shadow-lg shadow-navy/10 hover:shadow-xl hover:shadow-navy/15 hover:-translate-y-0.5 transition-all duration-300">
            <span>Scopri la mia missione</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </section>
  )
}

// ============================================
// IL VERO PROBLEMA - Core Message Section
// ============================================
function IlVeroProblemaSection() {
  return (
    <section className="relative py-28 lg:py-36 bg-white overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-teal/5 rounded-full blur-2xl" />
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-navy/5 rounded-full blur-2xl" />
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="text-center mb-12 md:mb-20"
        >
          <motion.div variants={fadeUp} className="flex items-center justify-center gap-4 mb-8">
            <span className="w-10 h-[2px] bg-gradient-to-r from-transparent to-teal/40" />
            <span className="text-teal text-[13px] uppercase tracking-[0.2em] font-semibold">Fortuna o Disciplina</span>
            <span className="w-10 h-[2px] bg-gradient-to-l from-transparent to-teal/40" />
          </motion.div>

          <motion.h2 variants={fadeUp} className="font-display text-2xl md:text-4xl lg:text-5xl text-navy mb-4 tracking-tight leading-[1.2] italic max-w-4xl mx-auto">
            &ldquo;Più mi alleno e più sono fortunato.&rdquo;
          </motion.h2>
          <motion.p variants={fadeUp} className="text-teal font-semibold text-sm md:text-base tracking-widest uppercase mb-10">
            — Arnold Palmer
          </motion.p>

          <motion.p variants={fadeUp} className="font-display text-xl md:text-3xl lg:text-4xl text-navy/85 max-w-3xl mx-auto leading-[1.35] mb-3">
            Di me dicono che sono un uomo fortunato. Ma io non lo credo:{' '}
            <span className="text-teal italic">la mia fortuna si chiama disciplina e coraggio.</span>
          </motion.p>
          <motion.p variants={fadeUp} className="text-teal font-semibold text-sm md:text-base tracking-widest uppercase">
            — Luca Pellicari
          </motion.p>
        </motion.div>

        {/* Three Result Pillars */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={stagger}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6"
        >
          {[
            {
              icon: CheckCircle,
              title: 'Coerenti',
              description: 'Allineati con chi sei davvero. Non con chi ti hanno detto di essere. Quando l\u2019identità e l\u2019azione coincidono i risultati non sorprendono. Confermano. E non è fortuna.',
            },
            {
              icon: RefreshCw,
              title: 'Stabili',
              description: 'Non dipendono dalla fortuna. Dipendono dalla struttura che hai costruito, dal tuo Flow. La disciplina non è un sacrificio. È la forma più alta di rispetto verso sé stessi.',
            },
            {
              icon: TrendingUp,
              title: 'Replicabili',
              description: 'Ogni volta. Non per caso. Perché tu sai esattamente cosa hai fatto, come lo hai fatto e perché è funzionato. Questo si chiama metodo. Non fortuna.',
            },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              className="group relative"
            >
              <div className="relative bg-white border border-navy/8 rounded-2xl p-6 md:p-8 shadow-sm hover:border-teal/20 hover:shadow-xl hover:shadow-teal/5 transition-all duration-300 h-full">
                <div className="w-12 md:w-14 h-12 md:h-14 rounded-xl bg-teal/10 flex items-center justify-center mb-4 md:mb-6 group-hover:bg-teal group-hover:scale-105 transition-all duration-300">
                  <item.icon className="w-6 md:w-7 h-6 md:h-7 text-teal group-hover:text-white transition-colors duration-300" />
                </div>
                <span className="text-teal/10 font-display text-5xl md:text-6xl font-bold absolute top-4 md:top-6 right-6 md:right-8">
                  0{index + 1}
                </span>
                <h3 className="font-display text-xl md:text-2xl text-navy font-semibold mb-2 md:mb-3">
                  Risultati {item.title}
                </h3>
                <p className="text-navy/60 text-sm md:text-base leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center mt-10 md:mt-16"
        >
          <div className="inline-flex flex-wrap items-center justify-center gap-3 md:gap-4 bg-navy text-white rounded-full px-5 md:px-8 py-3 md:py-4 shadow-lg shadow-navy/10 max-w-3xl mx-auto">
            <span className="w-2 h-2 rounded-full bg-teal-light animate-pulse motion-reduce:animate-none flex-shrink-0" />
            <p className="font-medium text-sm md:text-base text-center">
              Non vendo informazioni utili. Non regalo pillole di successo. Costruiamo insieme il{' '}
              <span className="font-bold uppercase">TUO</span>{' '}
              <span className="text-teal-light font-semibold">Flow</span>.{' '}
              Quello che genera <span className="text-teal-light font-semibold">Inflow</span> — ogni volta.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// ============================================
// QUANTUM ACADEMY - Immersive Dark Section
// ============================================
function QuantumAcademySection() {
  return (
    <section className="relative py-28 lg:py-36 bg-navy-dark overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 right-0 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-teal rounded-full blur-2xl" />
        <div className="absolute bottom-0 left-0 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-teal-dark rounded-full blur-2xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            <motion.span variants={fadeUp} className="inline-block px-4 py-2 bg-teal text-white text-sm font-medium rounded-full mb-8">
              Quantum Academy
            </motion.span>

            <motion.h2 variants={fadeUp} className="font-display text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white mb-8 leading-tight">
              Il sogno che non sapevo di sognare, diventato realtà.
            </motion.h2>

            <motion.div variants={fadeUp} className="space-y-5 text-white/70 text-base md:text-lg mb-10">
              <p className="text-teal-light text-lg md:text-xl font-medium">
                Quantum Academy non è una scuola.
              </p>
              <p>
                È il luogo dove l&apos;esperienza diventa metodo e il metodo diventa libertà.
              </p>
              <p>
                Dieci anni di lavoro sul campo. Centinaia di professionisti, imprenditori, manager.
                Una sola domanda sempre al centro:{' '}
                <span className="text-teal-light font-medium">chi vuoi diventare davvero?</span>
              </p>
            </motion.div>

            <motion.div variants={fadeUp}>
              <Link href="/quantum-academy" className="group relative inline-flex items-center gap-3 bg-white text-navy px-6 md:px-8 py-3.5 md:py-4 rounded-full font-medium overflow-hidden shadow-xl shadow-black/10 hover:shadow-2xl transition-all duration-500">
                <span className="relative z-10">Entra in Quantum Academy</span>
                <span className="relative z-10 w-8 h-8 rounded-full bg-teal/10 flex items-center justify-center group-hover:bg-teal group-hover:text-white transition-all duration-300">
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-teal-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden border border-white/10 relative">
              <Image
                src="/images/quantum-team.jpg"
                alt="Lucia, Alberto e Luca — i tre fondatori di Quantum Academy"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={60}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/60 via-transparent to-transparent" />
            </div>
            {/* Caption foto */}
            <p className="mt-5 font-serif italic text-center text-teal-light/85 text-sm md:text-base px-4">
              Lucia, Alberto e Luca — i tre fondatori. Un&apos;idea, tre vite, una missione comune.
            </p>
            {/* Decorative Elements */}
            <div className="hidden md:block absolute -bottom-4 -right-4 w-24 h-24 border-2 border-teal/30 rounded-2xl" />
            <div className="hidden md:block absolute -top-4 -left-4 w-16 h-16 bg-teal/20 rounded-xl blur-xl" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// ============================================
// ALPHAKOM SECTION - Clean Minimal
// ============================================
function AlphakomSection() {
  const points = [
    { text: 'Costruiamo le tue 4 identità operative. Sono le fondamenta del tuo successo.', highlight: false },
    { text: 'Individuiamo il tuo metodo personale, esclusivo Alpha.', highlight: false },
    { text: 'Trasformiamo il metodo in un framework operativo. Creiamo il Flow.', highlight: false },
    { text: 'Consolidiamo i risultati e li rendiamo replicabili.', highlight: true },
  ]

  return (
    <section className="py-28 lg:py-36 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden relative shadow-2xl">
              <Image
                src="/images/alphakom-luca-palco.png"
                alt="Luca Pellicari sul palco — AlphaKom"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={60}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/30 to-transparent" />
            </div>
            {/* Decorative */}
            <div className="hidden md:block absolute -bottom-6 -left-6 w-32 h-32 border-2 border-teal/20 rounded-2xl -z-10" />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="flex items-center gap-4 mb-6">
              <span className="w-10 h-[2px] bg-gradient-to-r from-teal to-teal/0" />
              <span className="text-teal text-[13px] uppercase tracking-[0.2em] font-semibold">AlphaKom</span>
            </motion.div>

            <motion.h2 variants={fadeUp} className="font-display text-2xl md:text-3xl lg:text-[40px] text-navy mb-3 leading-[1.2]">
              AlphaKom non è un corso. È il metodo che trasforma i tuoi{' '}
              <span className="text-teal italic">obiettivi personali</span> in{' '}
              <span className="text-teal italic">successi professionali</span>.
            </motion.h2>

            <motion.p variants={fadeUp} className="text-xs text-navy/55 font-medium tracking-[0.12em] uppercase mb-10">
              Advanced Leadership Program for High Achievement
            </motion.p>

            <motion.div variants={fadeUp} className="space-y-3 md:space-y-4 mb-10">
              {points.map((point, i) => (
                <div
                  key={i}
                  className={`flex items-start gap-3 md:gap-4 p-3 md:p-4 rounded-xl border transition-all ${
                    point.highlight
                      ? 'bg-gradient-to-r from-teal/10 to-teal/5 border-teal/30 shadow-md'
                      : 'bg-white border-navy/6 hover:border-teal/30 hover:shadow-md'
                  }`}
                >
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                    point.highlight ? 'bg-teal text-white' : 'bg-teal/10'
                  }`}>
                    <span className={`text-sm font-medium ${point.highlight ? '' : 'text-teal'}`}>{i + 1}</span>
                  </div>
                  <p className={`text-sm md:text-base ${point.highlight ? 'text-navy font-medium' : 'text-navy/80'}`}>{point.text}</p>
                </div>
              ))}
            </motion.div>

            <motion.div variants={fadeUp}>
              <Link href="/alphakom" className="group relative inline-flex items-center gap-3 text-navy font-medium">
                <span className="relative">
                  Scopri AlphaKom
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal group-hover:w-full transition-all duration-300" />
                </span>
                <span className="w-10 h-10 rounded-full border-2 border-navy/20 flex items-center justify-center group-hover:border-teal group-hover:bg-teal transition-all duration-300">
                  <ArrowUpRight className="w-4 h-4 group-hover:text-white transition-colors duration-300" />
                </span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// ============================================
// QUOTE SECTION - Full Width Statement
// ============================================
function QuoteSection() {
  return (
    <section className="py-28 lg:py-36 bg-cream relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 md:px-16 text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <Quote className="w-8 h-8 md:w-10 md:h-10 text-teal/30 mx-auto mb-8 md:mb-10" />
          <p className="font-display text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-navy leading-[1.3] tracking-tight mb-8 md:mb-10">
            Ciò che hai vissuto non si cancella. Si trasforma.<br />
            <span className="text-teal italic">Questa è la Grande Opera.</span>
          </p>
          <div className="flex items-center justify-center gap-5">
            <span className="w-10 h-px bg-teal/40" />
            <span className="text-teal font-medium text-sm uppercase tracking-widest">Luca Pellicari</span>
            <span className="w-10 h-px bg-teal/40" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// ============================================
// PERCORSI SECTION - Interactive Grid
// ============================================
const percorsiItems = [
  {
    title: '4 Identità — 1 realtà',
    desc: 'Scopriamo chi sei prima di creare ciò che vuoi',
    icon: Eye,
  },
  {
    title: 'Leadership Alpha',
    desc: 'Guidi perché vieni riconosciuto — non perché imponi',
    icon: Star,
  },
  {
    title: 'Analisi del Comportamento',
    desc: 'Vedi ciò che gli altri non vedono ancora',
    icon: Brain,
  },
  {
    title: 'Comunicazione e Negoziazione',
    desc: 'Ogni relazione diventa un accordo. Ogni accordo, un risultato',
    icon: Handshake,
  },
  {
    title: 'Il Progetto Esclusivo',
    desc: 'Il tuo canvas. Il tuo metodo. I tuoi obiettivi',
    icon: Compass,
  },
  {
    title: 'Flow → Inflow',
    desc: 'Quando tutto si allinea — i risultati non sorprendono. Confermano',
    icon: Sparkles,
  },
]

function PercorsiSection() {
  return (
    <section className="py-28 lg:py-36 bg-navy-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="w-10 h-[2px] bg-gradient-to-r from-transparent to-teal-light/40" />
            <span className="text-teal-light text-[13px] uppercase tracking-[0.2em] font-semibold">Cosa Posso Fare per Te</span>
            <span className="w-10 h-[2px] bg-gradient-to-l from-transparent to-teal-light/40" />
          </div>
          <h2 className="font-display text-2xl md:text-3xl lg:text-[44px] text-white mb-5 leading-tight">
            Ricorda: Non esistono percorsi standard.{' '}
            <span className="text-teal-light italic">Esiste il tuo.</span>
          </h2>
          <p className="text-base md:text-lg text-white/70 leading-relaxed">
            <em>Ciò che va bene per tutti non funziona per nessuno.</em> Ogni percorso nasce da te e per te.
            Dalla tua identità, dai tuoi obiettivi, dalla realtà che vivi.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
          {percorsiItems.map((item) => (
            <div
              key={item.title}
              className="group p-5 md:p-6 lg:p-7 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-teal/30 transition-all duration-300 cursor-pointer"
            >
              <item.icon className="w-6 h-6 md:w-8 md:h-8 text-teal-light mb-3 md:mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-white font-semibold text-base md:text-lg mb-1.5 leading-tight">{item.title}</h3>
              <p className="text-white/65 text-xs md:text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <Link href="/contatti" className="group inline-flex items-center gap-3 bg-teal text-white px-8 py-4 rounded-full font-medium shadow-lg shadow-teal/25 hover:shadow-xl hover:shadow-teal/35 hover:-translate-y-0.5 transition-all duration-300">
            <span>Costruiamo il tuo percorso</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </section>
  )
}


// ============================================
// PARTNERSHIP SECTION
// ============================================
const partnerCategories = [
  {
    icon: GraduationCap,
    title: 'Università',
    description: 'Collaborazioni accademiche, docenze universitarie e ricerca scientifica.',
    partners: ['Docenza in Negoziazione e Analisi del Comportamento', 'Pubblicazioni su ResearchGate'],
  },
  {
    icon: Building2,
    title: 'Aziende',
    description: 'Formazione identitaria e leadership per team aziendali e manager.',
    partners: ['Pyramis Group', 'Programmi corporate su misura'],
  },
  {
    icon: GraduationCap,
    title: 'Scuole & Formazione',
    description: 'Percorsi accreditati e programmi formativi professionali.',
    partners: ['Accreditamento Regione Lombardia', 'Corsi professionali AI e lavoro'],
  },
  {
    icon: Globe,
    title: 'Istituzioni',
    description: 'Partnership istituzionali e progetti di formazione internazionale.',
    partners: ['Progetti di formazione internazionale', 'Collaborazioni istituzionali'],
  },
]

function PartnershipSection() {
  return (
    <section className="py-28 lg:py-36 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className="w-10 h-[2px] bg-gradient-to-r from-transparent to-teal/40" />
            <span className="text-teal text-[13px] uppercase tracking-[0.2em] font-semibold">Partnership</span>
            <span className="w-10 h-[2px] bg-gradient-to-l from-transparent to-teal/40" />
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-navy mb-6 tracking-tight">
            Chi crede in questo progetto.
          </h2>
          <p className="text-base md:text-lg text-navy/60 max-w-2xl mx-auto leading-relaxed">
            Università, aziende, scuole e istituzioni che condividono la nostra visione
            di crescita, consapevolezza e trasformazione.
          </p>
        </div>

        {/* Partner Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {partnerCategories.map((category) => (
            <div
              key={category.title}
              className="group relative bg-white border border-navy/5 rounded-2xl p-6 md:p-8 hover:border-teal/20 hover:shadow-xl hover:shadow-teal/5 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-teal/10 flex items-center justify-center mb-6 group-hover:bg-teal group-hover:scale-105 transition-all duration-300">
                <category.icon className="w-6 h-6 text-teal group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="font-display text-lg md:text-xl text-navy font-semibold mb-3">{category.title}</h3>
              <p className="text-navy/60 text-sm leading-relaxed mb-5">{category.description}</p>
              <ul className="space-y-2">
                {category.partners.map((partner, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-navy/70">
                    <span className="w-1 h-1 rounded-full bg-teal mt-2 flex-shrink-0" />
                    <span>{partner}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Trust Indicator */}
        <div className="mt-12 md:mt-16 text-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-3 md:gap-4 px-6 md:px-8 py-3 md:py-4 bg-navy/5 rounded-full">
            <Handshake className="w-5 h-5 text-teal flex-shrink-0" />
            <span className="text-navy/70 font-medium text-sm md:text-base">Vuoi diventare partner?</span>
            <Link href="/contatti" className="text-teal font-semibold hover:text-teal-dark transition-colors">
              Contattaci →
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

// ============================================
// LIBRI SECTION - Editorial Style
// ============================================
interface Libro {
  title: string
  subtitle: string
  image: string
  comingSoon: boolean
  missingImage?: boolean
}
const libri: Libro[] = [
  { title: 'The Inflow Protocol', subtitle: 'Il metodo', image: '/images/books/inflow-protocol.png', comingSoon: true },
  { title: 'Daily Flow', subtitle: 'Il diario', image: '/images/books/daily-flow.png', comingSoon: true },
  { title: 'Oltre la diagnosi', subtitle: 'La mia storia', image: '/images/books/oltre-la-diagnosi.png', comingSoon: false },
  { title: 'Il codice segreto della Legge di Attrazione', subtitle: 'La scienza', image: '/images/books/codice-segreto.png', comingSoon: false },
  { title: 'Guida introduttiva alla Metaquantistica', subtitle: 'La scienza', image: '/images/book-metaquantistica.jpg', comingSoon: false },
  { title: 'Doppiatore di te stesso vol.1', subtitle: 'La voce interiore', image: '/images/books/doppiatore-vol1.png', comingSoon: false },
  { title: 'Doppiatore di te stesso vol.2', subtitle: 'La voce interiore', image: '/images/books/doppiatore-vol2.png', comingSoon: false },
]

function LibriSection() {
  return (
    <section className="py-28 lg:py-36 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16"
        >
          <div>
            <motion.div variants={fadeUp} className="flex items-center gap-4 mb-4">
              <span className="w-10 h-[2px] bg-gradient-to-r from-teal to-teal/0" />
              <span className="text-teal text-[13px] uppercase tracking-[0.2em] font-semibold">I Miei Libri</span>
            </motion.div>
            <motion.h2 variants={fadeUp} className="font-display text-3xl md:text-4xl lg:text-5xl text-navy">
              Storie vere, identità vere.
            </motion.h2>
          </div>
          <motion.div variants={fadeUp}>
            <Link href="/libri" className="group relative inline-flex items-center gap-3 text-navy font-medium">
              <span className="relative">
                Vedi tutti
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal group-hover:w-full transition-all duration-300" />
              </span>
              <span className="w-10 h-10 rounded-full border-2 border-navy/20 flex items-center justify-center group-hover:border-teal group-hover:bg-teal transition-all duration-300">
                <ArrowUpRight className="w-4 h-4 group-hover:text-white transition-colors duration-300" />
              </span>
            </Link>
          </motion.div>
        </motion.div>

        {/* Carosello continuo auto-scroll */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-cream to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-cream to-transparent z-10 pointer-events-none" />

          <div
            className="flex w-max items-stretch"
            style={{ animation: 'scroll-left 60s linear infinite' }}
          >
            {[...libri, ...libri].map((libro, i) => (
              <div
                key={i}
                className="group flex-shrink-0 w-[220px] md:w-[260px] mx-3 md:mx-4 cursor-pointer"
              >
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-4 bg-white shadow-lg group-hover:shadow-2xl transition-shadow duration-500">
                  {libro.missingImage ? (
                    // Placeholder card — copertina non ancora disponibile
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-5 bg-gradient-to-br from-cream to-cream-dark/40 border-2 border-dashed border-navy/15">
                      <ImageIcon className="w-9 h-9 text-navy/30 mb-3" />
                      <p className="text-navy/60 text-[11px] uppercase tracking-[0.2em] font-bold mb-2">
                        Copertina mancante
                      </p>
                      <p className="text-navy/50 text-xs leading-relaxed italic">
                        Immagine non ancora disponibile
                      </p>
                    </div>
                  ) : (
                    <>
                      <Image
                        src={libro.image}
                        alt={libro.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                        sizes="260px"
                        quality={60}
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </>
                  )}
                  {libro.comingSoon && (
                    <span className="absolute top-3 right-3 px-3 py-1 rounded-full bg-coral text-white text-[10px] font-bold tracking-widest uppercase shadow-md">
                      Coming Soon
                    </span>
                  )}
                </div>
                <p className="text-teal text-xs font-medium mb-1">{libro.subtitle}</p>
                <h3 className="font-display text-lg text-navy group-hover:text-teal transition-colors leading-tight">{libro.title}</h3>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Coming Soon */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-navy/5 rounded-full">
            <span className="w-2 h-2 rounded-full bg-teal animate-pulse motion-reduce:animate-none" />
            <span className="text-navy/70 font-medium text-sm">Altri progetti in arrivo…</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// ============================================
// BLOG SECTION - With Images
// ============================================
const blogPosts = [
  {
    title: 'Il coraggio di essere se stessi',
    excerpt: 'Scopri come abbracciare la tua vera identità e vivere autenticamente.',
    image: '/images/blog-1.jpg',
    category: 'Identità',
  },
  {
    title: 'Le 7 rinascite: la mia storia',
    excerpt: 'Un viaggio attraverso le trasformazioni che hanno definito chi sono oggi.',
    image: '/images/blog-2.jpg',
    category: 'Crescita',
  },
  {
    title: 'In-Flow: vivere nel proprio stato naturale',
    excerpt: 'Come trovare l\'equilibrio tra chi sei e ciò che fai ogni giorno.',
    image: '/images/blog-3.jpg',
    category: 'Metodo',
  },
]

function BlogSection() {
  return (
    <section className="py-28 lg:py-36 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
        >
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
            <div>
              <motion.div variants={fadeUp} className="flex items-center gap-4 mb-4">
                <span className="w-10 h-[2px] bg-gradient-to-r from-teal to-teal/0" />
                <span className="text-teal text-[13px] uppercase tracking-[0.2em] font-semibold">Blog</span>
              </motion.div>
              <motion.h2 variants={fadeUp} className="font-display text-3xl md:text-4xl lg:text-5xl text-navy mb-2">
                Pensieri liberi.<br />Verità condivise.
              </motion.h2>
              <motion.p variants={fadeUp} className="text-teal text-base md:text-lg font-medium mb-3">
                Identità che si aprono.
              </motion.p>
              <motion.p variants={fadeUp} className="text-navy/70 text-sm md:text-base max-w-md">
                Scrivo per raccontare, per comprendere e per far vibrare qualcosa dentro chi legge.
              </motion.p>
            </div>
            <motion.div variants={fadeUp}>
              <Link href="/blog" className="group relative inline-flex items-center gap-3 text-navy font-medium">
                <span className="relative">
                  Tutti gli articoli
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal group-hover:w-full transition-all duration-300" />
                </span>
                <span className="w-10 h-10 rounded-full border-2 border-navy/20 flex items-center justify-center group-hover:border-teal group-hover:bg-teal transition-all duration-300">
                  <ArrowUpRight className="w-4 h-4 group-hover:text-white transition-colors duration-300" />
                </span>
              </Link>
            </motion.div>
          </div>

          {/* Blog Grid */}
          <motion.div
            variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8"
          >
            {blogPosts.map((post) => (
              <motion.article
                key={post.title}
                variants={fadeUp}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                    quality={60}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-navy">
                    {post.category}
                  </span>
                </div>
                <h3 className="font-display text-lg md:text-xl text-navy mb-2 group-hover:text-teal transition-colors duration-300">
                  {post.title}
                </h3>
                <p className="text-navy/60 text-sm leading-relaxed">
                  {post.excerpt}
                </p>
              </motion.article>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

// ============================================
// CONTATTI SECTION - Creative Pro Design
// ============================================
function ContattiSection() {
  return (
    <section className="relative bg-navy-dark overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-dark via-navy-dark to-navy opacity-50" />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 min-h-[450px] md:min-h-[550px] lg:min-h-[600px]">
          {/* Left Side - Dark with Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative flex items-center px-6 md:px-16 lg:px-20 py-16 md:py-20 lg:py-28"
          >
            {/* Accent Line */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-28 bg-gradient-to-b from-teal via-teal/50 to-transparent" />

            <div className="relative">
              <div className="flex items-center gap-3 mb-8">
                <span className="w-8 h-px bg-teal/50" />
                <span className="text-teal-light text-xs uppercase tracking-[0.25em] font-medium">
                  Inizia ora
                </span>
              </div>

              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-cream leading-[1.1] tracking-tight mb-8">
                Hai già deciso.<br />
                <span className="text-teal-light italic">Forse non lo sai ancora.</span>
              </h2>

              <div className="space-y-3 text-cream/65 text-base md:text-lg max-w-md">
                <p>Vuoi portare il <span className="text-teal-light font-medium">Metodo Alpha</span> nella tua azienda?</p>
                <p>Vuoi costruire il tuo <span className="text-teal-light font-medium">percorso esclusivo</span> con me?</p>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Teal Gradient con due opzioni */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative flex items-center justify-center px-6 md:px-12 lg:px-16 py-16 md:py-20 lg:py-24 bg-gradient-to-br from-teal to-teal-dark"
          >
            <div className="hidden md:block absolute top-10 right-10 w-16 h-16 rounded-full border border-cream/10" />
            <div className="hidden md:block absolute bottom-16 left-10 w-24 h-24 rounded-full border border-cream/5" />

            <div className="relative w-full max-w-md text-center lg:text-left">
              {/* Opzione 1 — contatto diretto */}
              <p className="font-display text-2xl md:text-3xl lg:text-4xl text-cream leading-tight tracking-tight mb-6">
                Scrivimi.{' '}
                <span className="text-cream/85 font-serif italic">Sono qui.</span>
              </p>

              <Link
                href="/contatti"
                className="group inline-flex items-center gap-3 bg-white text-navy-dark px-6 md:px-7 py-3.5 md:py-4 rounded-full text-base font-semibold shadow-xl shadow-navy-dark/20 hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-300"
              >
                <span>Contattami</span>
                <span className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-navy-dark flex items-center justify-center group-hover:bg-teal-dark transition-colors duration-300">
                  <ArrowRight className="w-4 h-4 text-cream group-hover:translate-x-0.5 transition-transform duration-300" />
                </span>
              </Link>

              <p className="mt-4 mb-10 text-cream/65 text-sm font-serif italic">
                Non esiste il momento giusto. Esiste adesso.
              </p>

              {/* Divisore */}
              <div className="flex items-center gap-4 my-8">
                <span className="flex-1 h-px bg-cream/20" />
                <span className="text-cream/50 text-xs uppercase tracking-widest">oppure</span>
                <span className="flex-1 h-px bg-cream/20" />
              </div>

              {/* Opzione 2 — Alice */}
              <div className="flex flex-col items-center lg:items-start">
                <div className="relative w-20 h-20 rounded-full overflow-hidden ring-2 ring-cream/30 shadow-xl mb-4">
                  <Image
                    src="/images/alice/alice.png"
                    alt="Alice — AI di Luca Pellicari"
                    fill
                    className="object-cover"
                    sizes="80px"
                  />
                  <span className="absolute bottom-1 right-1 px-1.5 py-0.5 rounded-full bg-navy-dark text-cream text-[8px] font-bold tracking-widest uppercase">
                    AI
                  </span>
                </div>
                <p className="text-cream font-display text-lg md:text-xl mb-2 leading-tight">
                  Sono Alice, l&apos;assistente personale virtuale di Luca. <span className="italic">Dimmi pure.</span>
                </p>
                <p className="text-cream/70 text-sm leading-relaxed mb-5">
                  Parla liberamente con Alice. Può approfondire ogni argomento, inviarti materiale e fissare direttamente un incontro con me.
                </p>
                <button
                  type="button"
                  onClick={() => window.dispatchEvent(new CustomEvent('alice:open'))}
                  className="group inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-cream/40 text-cream text-sm font-semibold hover:bg-cream/10 hover:border-cream/70 transition-all duration-300"
                >
                  <span>Inizia la conversazione</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-300" />
                </button>
                <p className="mt-3 text-cream/55 text-xs font-serif italic">
                  Disponibile 24/7.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// ============================================
// IDENTITY HIGHLIGHTS - Carousel Marquee
// ============================================
const identityTags = [
  { text: 'Le origini cimbre', color: 'bg-teal/10 text-teal border-teal/20' },
  { text: 'La Famiglia', color: 'bg-navy/5 text-navy/80 border-navy/15' },
  { text: 'La Cultura', color: 'bg-coral/10 text-coral border-coral/20' },
  { text: 'Disciplina e Coraggio', color: 'bg-teal/10 text-teal-dark border-teal/20' },
  { text: 'La Professione', color: 'bg-coral/10 text-coral border-coral/20' },
  { text: 'Le Relazioni', color: 'bg-teal/10 text-teal border-teal/20' },
  { text: 'La Meditazione', color: 'bg-navy/5 text-navy/80 border-navy/15' },
  { text: 'L\u2019Impresa', color: 'bg-navy/5 text-navy/80 border-navy/15' },
  { text: 'La Formazione', color: 'bg-coral/10 text-coral border-coral/20' },
  { text: 'I Figli', color: 'bg-teal/10 text-teal border-teal/20' },
  { text: 'L\u2019Impegno Sociale', color: 'bg-navy/5 text-navy/80 border-navy/15' },
  { text: 'Il Metodo Alpha', color: 'bg-teal/10 text-teal border-teal/20' },
  { text: 'La Rinascita', color: 'bg-coral/10 text-coral border-coral/20' },
]

function IdentityHighlightsSection() {
  return (
    <section className="py-14 md:py-18 lg:py-20 bg-white overflow-hidden">
      {/* Top separator */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-10 md:mb-12">
        <div className="flex items-center justify-center gap-5">
          <span className="hidden md:block w-12 h-[2px] bg-gradient-to-r from-transparent to-teal/25" />
          <p className="text-teal text-[12px] md:text-[13px] font-semibold uppercase tracking-[0.25em] text-center">
            Identità in sintesi
          </p>
          <span className="hidden md:block w-12 h-[2px] bg-gradient-to-l from-transparent to-teal/25" />
        </div>
      </div>

      {/* Marquee container */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div
          className="flex w-max items-center"
          style={{ animation: 'scroll-left 55s linear infinite' }}
        >
          {[...identityTags, ...identityTags, ...identityTags].map((tag, i) => (
            <div key={i} className="flex items-center shrink-0">
              <span className={`whitespace-nowrap px-6 md:px-8 py-2.5 md:py-3 mx-2 md:mx-3 rounded-full border text-[12px] md:text-[14px] font-semibold tracking-wide ${tag.color}`}>
                {tag.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ============================================
// MAIN PAGE
// ============================================
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AliceHomepageSection />
      <AlphaTeamSection />
      <OpeningSection />
      <IdentityHighlightsSection />
      <ChiSonoSection />
      <MissioneSection />
      <IlVeroProblemaSection />
      <QuantumAcademySection />
      <AlphakomSection />
      <QuoteSection />
      <PercorsiSection />
      {/* PartnershipSection nascosta — da riattivare con 4-6 partner nominativi + logo (post-speech Atoma) */}
      <InFlowSection />
      <LibriSection />
      {/* BlogSection nascosta — da riattivare quando ci sono articoli da pubblicare */}
      <ContattiSection />
    </>
  )
}
