'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  Triangle,
  Eye,
  Users,
  Briefcase,
  Target,
  Crown,
  ArrowRight,
  Sparkles,
  CheckCircle,
  Compass,
  ScrollText,
} from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] as const } },
}
const stagger = { visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } } }

// ── HERO ───────────────────────────────────────────
function PiramideHero() {
  return (
    <section className="relative pt-32 md:pt-40 pb-20 md:pb-28 bg-navy-dark text-cream overflow-hidden">
      <div className="absolute inset-0 opacity-25 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-teal rounded-full blur-3xl" />
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
            <Triangle className="w-3.5 h-3.5 text-teal-light" />
            <span className="text-teal-light text-[12px] font-bold uppercase tracking-[0.2em]">
              AlphaKom — Framework Identitario
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="font-display text-4xl md:text-6xl lg:text-7xl text-cream mb-6 tracking-tight leading-[1.05]"
          >
            La Piramide dell&apos;Identità
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="font-serif italic text-xl md:text-2xl text-cream/80 leading-relaxed mb-10 max-w-3xl"
          >
            Il modello fondante del Metodo ALPHA. Non uno schema teorico:
            uno strumento operativo per costruire coerenza tra chi sei, come ti relazioni, come operi e dove stai andando.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="relative inline-block pl-6 border-l-2 border-teal-light/40 max-w-2xl"
          >
            <p className="font-display italic text-lg md:text-xl text-teal-light leading-snug">
              &laquo;Trasforma obiettivi personali in successi professionali.&raquo;
            </p>
            <p className="text-cream/55 text-xs mt-2 uppercase tracking-widest">— Luca Pellicari</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

// ── INTRO ──────────────────────────────────────────
function Introduzione() {
  return (
    <section className="py-20 md:py-28 bg-cream">
      <div className="container-custom max-w-4xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={stagger}
        >
          <motion.span variants={fadeUp} className="inline-block text-teal text-sm font-medium uppercase tracking-[0.3em] mb-4">
            01 — Introduzione
          </motion.span>
          <motion.h2 variants={fadeUp} className="font-display text-3xl md:text-4xl lg:text-5xl text-navy mb-8 leading-tight">
            Una forma che non è casuale.
          </motion.h2>

          <motion.div variants={fadeUp} className="space-y-6 text-navy/75 text-base md:text-lg leading-[1.8]">
            <p>
              Una piramide a base quadrata ha <strong className="text-teal">quattro facce triangolari</strong> che convergono in un unico vertice.
              Ogni faccia rappresenta una dimensione dell&apos;identità da sviluppare in sequenza. Quando tutte e quattro sono sincronizzate,
              si raggiunge il vertice: la <strong className="text-teal">Leadership Alpha</strong>.
            </p>
            <p>
              Il vertice non è uno stato psicologico astratto. È un&apos;identità conquistata:
              quella del <em className="text-navy font-semibold not-italic">Leader Alpha</em> — l&apos;uomo o la donna che ha smesso di rincorrere
              obiettivi altrui e ha iniziato a costruire la propria realtà professionale con autorevolezza, autonomia e autenticità.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

// ── PYRAMID VISUALIZATION ──────────────────────────
const facce = [
  {
    step: 1,
    code: '3V',
    name: 'Identità Personale',
    question: 'Chi sei davvero?',
    accent: 'teal',
    icon: Eye,
  },
  {
    step: 2,
    code: '3R',
    name: 'Identità Relazionale',
    question: 'Come vieni visto?',
    accent: 'coral',
    icon: Users,
  },
  {
    step: 3,
    code: '3A',
    name: 'Identità Professionale',
    question: 'Come operi nel mondo?',
    accent: 'gold',
    icon: Briefcase,
  },
  {
    step: 4,
    code: '3C',
    name: 'Obiettivi Coerenti',
    question: 'Dove stai davvero andando?',
    accent: 'navy',
    icon: Target,
  },
]

const accentClasses: Record<string, { bg: string; text: string; ring: string; ringDark: string }> = {
  teal: { bg: 'bg-teal/10', text: 'text-teal', ring: 'ring-teal/30', ringDark: 'group-hover:ring-teal' },
  coral: { bg: 'bg-coral/10', text: 'text-coral', ring: 'ring-coral/30', ringDark: 'group-hover:ring-coral' },
  gold: { bg: 'bg-gold/10', text: 'text-gold', ring: 'ring-gold/30', ringDark: 'group-hover:ring-gold' },
  navy: { bg: 'bg-navy/10', text: 'text-navy', ring: 'ring-navy/30', ringDark: 'group-hover:ring-navy' },
}

function PiramideVisual() {
  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 pointer-events-none opacity-50">
        <div className="absolute top-20 left-0 w-72 h-72 bg-teal/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-0 w-72 h-72 bg-coral/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={stagger}
          className="text-center max-w-3xl mx-auto mb-14 md:mb-16"
        >
          <motion.span variants={fadeUp} className="inline-block text-teal text-sm font-medium uppercase tracking-[0.3em] mb-4">
            02 — Struttura
          </motion.span>
          <motion.h2 variants={fadeUp} className="font-display text-3xl md:text-4xl lg:text-5xl text-navy mb-5 leading-tight">
            Una sequenza evolutiva precisa.
          </motion.h2>
          <motion.p variants={fadeUp} className="text-navy/65 text-base md:text-lg leading-relaxed">
            Non si può saltare nessun passaggio. Ogni faccia costruisce sulle fondamenta della precedente.
          </motion.p>
        </motion.div>

        {/* Piramide visiva — vertice + 4 facce */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={stagger}
          className="max-w-4xl mx-auto"
        >
          {/* Vertice */}
          <motion.div variants={fadeUp} className="flex justify-center mb-3">
            <div className="relative bg-gradient-to-br from-navy-dark to-navy text-cream px-8 py-5 rounded-2xl shadow-2xl border-2 border-gold/40 max-w-sm text-center">
              <Crown className="w-6 h-6 text-gold mx-auto mb-2" />
              <p className="font-display text-lg md:text-xl text-cream leading-tight">Leadership Alpha</p>
              <p className="text-cream/60 text-[11px] uppercase tracking-widest mt-1">Il vertice</p>
            </div>
          </motion.div>

          {/* Connettore */}
          <div className="flex justify-center mb-4">
            <div className="w-px h-8 bg-gradient-to-b from-gold/50 to-transparent" />
          </div>

          {/* 4 facce */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
            {facce.map((faccia) => {
              const a = accentClasses[faccia.accent]
              return (
                <motion.div key={faccia.code} variants={fadeUp}>
                  <Link
                    href={`#step-${faccia.code.toLowerCase()}`}
                    className={`group relative flex items-center gap-5 p-6 rounded-2xl bg-white border-2 border-navy/10 hover:border-transparent hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-300 ring-2 ${a.ring} ${a.ringDark}`}
                  >
                    <div className={`flex-shrink-0 w-14 h-14 rounded-xl ${a.bg} flex items-center justify-center`}>
                      <faccia.icon className={`w-6 h-6 ${a.text}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-baseline gap-2 mb-1">
                        <span className={`font-display text-2xl font-bold ${a.text}`}>{faccia.code}</span>
                        <span className="text-navy/45 text-xs uppercase tracking-widest font-semibold">
                          Step {faccia.step}
                        </span>
                      </div>
                      <p className="text-navy font-semibold text-sm md:text-base mb-0.5 leading-tight">
                        {faccia.name}
                      </p>
                      <p className="text-navy/55 text-xs md:text-sm font-serif italic">
                        {faccia.question}
                      </p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-navy/30 group-hover:text-navy group-hover:translate-x-1 transition-all" />
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// ── FACE DETAIL COMPONENT ──────────────────────────
interface Parola {
  letter: string
  word: string
  description: string
}
interface FacciaDettaglio {
  id: string
  step: number
  code: string
  fullName: string
  subtitle: string
  intro: string
  parole: Parola[]
  quote?: string
  accent: string
  icon: typeof Eye
}

const dettagli: FacciaDettaglio[] = [
  {
    id: 'step-3v',
    step: 1,
    code: '3V',
    fullName: 'Le 3V — Canvas dell\u2019Identità Personale',
    subtitle: 'Chi sei davvero — al di là dei ruoli e delle aspettative',
    intro:
      "Il punto di partenza obbligato. Prima di costruire qualsiasi cosa — relazioni, carriera, obiettivi — devi sapere chi sei. Non chi ti hanno detto di essere. Non chi ti aspetti di diventare. Chi sei adesso, quando nessuno ti guarda.",
    accent: 'teal',
    icon: Eye,
    parole: [
      {
        letter: 'V',
        word: 'VISIONE',
        description:
          "La direzione verso cui ti muovi quando ascolti ciò che ti emoziona davvero. Non un obiettivo, non un piano strategico. La Visione è il senso: il perché profondo che alimenta ogni azione e che, anche nei momenti difficili, ti fa dire «ne vale la pena».",
      },
      {
        letter: 'V',
        word: 'VALORI',
        description:
          "Ciò su cui non puoi negoziare, nemmeno quando sarebbe più comodo farlo. I Valori non si dichiarano: si riconoscono nel momento in cui vengono violati. Sono il sistema immunitario dell\u2019identità — quella reazione istintiva che precede qualsiasi ragionamento.",
      },
      {
        letter: 'V',
        word: 'VERITÀ',
        description:
          "Ciò che sai fare davvero e ciò che stavi solo fingendo di saper fare. La Verità è la componente più scomoda delle 3V — e la più liberatoria. È il punto in cui smetti di recitare e inizi ad essere te stesso.",
      },
    ],
    quote:
      "La trasformazione non inizia quando capisci chi sei, ma quando smetti di tradire ciò che già sai di essere.",
  },
  {
    id: 'step-3r',
    step: 2,
    code: '3R',
    fullName: 'Le 3R — Canvas dell\u2019Identità Relazionale',
    subtitle: 'Come la tua identità si manifesta nelle relazioni',
    intro:
      "Una volta che sai chi sei, devi portare quella identità fuori da te — nelle relazioni, nei team, nel mercato. L\u2019identità che non si manifesta non esiste professionalmente. Le 3R descrivono il percorso dal riconoscere se stessi all\u2019essere riconosciuti e, infine, al generare riconoscenza.",
    accent: 'coral',
    icon: Users,
    parole: [
      {
        letter: 'R',
        word: 'RICONOSCIUTO',
        description:
          "Quando ti riconosci, inizi a portare coerenza nel sistema. Le persone percepiscono stabilità. Il cervello umano è programmato per riconoscere ciò che è solido: sincerità, trasparenza e coerenza non sono valori astratti, sono segnali di sicurezza che il sistema registra prima ancora che la mente li elabori.",
      },
      {
        letter: 'R',
        word: 'RICONOSCIBILE',
        description:
          "Non basta essere riconosciuto una volta. Il professionista che ha lavorato sulla propria identità costruisce una presenza leggibile e coerente nel tempo — riconoscibile in qualsiasi contesto, al di là del ruolo o del titolo. È il passaggio dall\u2019autostima alla reputazione.",
      },
      {
        letter: 'R',
        word: 'RICONOSCENZA',
        description:
          "Quando la tua presenza coerente genera valore negli altri, emerge la riconoscenza: non come gesto educato, ma come conseguenza naturale e biologica. È il segnale più potente che il sistema funziona: le persone sono riconoscenti verso chi percepiscono come solido, sincero e trasparente.",
      },
    ],
    quote:
      "Prima ti riconosci, poi vieni riconosciuto. E alla fine scopri che la vera ricchezza è la riconoscenza.",
  },
  {
    id: 'step-3a',
    step: 3,
    code: '3A',
    fullName: 'Le 3A — Canvas dell\u2019Identità Professionale',
    subtitle: 'Come esprimi la tua identità nel lavoro e nel mercato',
    intro:
      "Il terzo passo porta l\u2019identità dentro la professione. Non come la si dichiara, ma come la si vive ogni giorno: nel modo in cui si prendono decisioni, si gestiscono le relazioni di lavoro e si opera nel mercato. Le 3A descrivono il professionista o l\u2019imprenditore che ha integrato il Metodo ALPHA nella propria realtà operativa.",
    accent: 'gold',
    icon: Briefcase,
    parole: [
      {
        letter: 'A',
        word: 'AUTOREVOLEZZA',
        description:
          "Non è autorità. L\u2019autorità si esercita per posizione. L\u2019autorevolezza si guadagna per coerenza. Il professionista autorevole non impone: orienta. Non controlla ossessivamente: responsabilizza. Non decide per paura: decide per chiarezza. È la manifestazione esterna di un\u2019identità interna solida.",
      },
      {
        letter: 'A',
        word: 'AUTONOMIA',
        description:
          "La capacità di operare secondo la propria visione senza dipendenza da approvazioni esterne. L\u2019autonomia non è isolamento: è libertà di scegliere come contribuire, con chi collaborare e verso quale direzione lavorare. È il risultato di un\u2019identità chiara e di obiettivi coerenti.",
      },
      {
        letter: 'A',
        word: 'AUTENTICITÀ',
        description:
          "Lo stato in cui ciò che sei e ciò che fai professionalmente coincidono. Non un traguardo da raggiungere, ma uno stato da abitare. Il professionista autentico non realizza la visione degli altri: costruisce e realizza la propria. Non recita un ruolo: incarna un\u2019identità.",
      },
    ],
  },
  {
    id: 'step-3c',
    step: 4,
    code: '3C',
    fullName: 'Le 3C — Canvas degli Obiettivi Coerenti',
    subtitle: 'Costruire obiettivi che appartengano davvero a te',
    intro:
      "Solo a questo punto — dopo aver costruito identità personale, relazionale e professionale — si definiscono gli obiettivi. Non prima. Gli obiettivi costruiti senza identità sono la visione degli altri calata su di te. Le 3C garantiscono che ogni obiettivo sia davvero tuo.",
    accent: 'navy',
    icon: Target,
    parole: [
      {
        letter: 'C',
        word: 'COMPATIBILI',
        description:
          "L\u2019obiettivo deve essere compatibile con i tuoi Valori. Se per raggiungerlo devi tradire ciò su cui non scendi a patti, non è il tuo obiettivo: è la proiezione dei valori di qualcun altro. La compatibilità è il test di autenticità di ogni traguardo professionale.",
      },
      {
        letter: 'C',
        word: 'COERENTI',
        description:
          "L\u2019obiettivo deve essere coerente con la tua Visione: deve muoverti nella direzione che il tuo senso profondo indica. Un obiettivo incoerente ti sposta, ti affatica e produce risultati che non senti tuoi, anche quando arriva il successo esteriore.",
      },
      {
        letter: 'C',
        word: 'CONGRUI',
        description:
          "L\u2019obiettivo deve essere congruo con la tua Verità — con ciò che realmente sei e sei capace di fare. Non per limitarti, ma per ancorare l\u2019ambizione alla realtà. Un obiettivo congruo è sfidante e raggiungibile allo stesso tempo. Non è sogno: è traguardo.",
      },
    ],
  },
]

function FacceDettaglio() {
  return (
    <section className="py-20 md:py-28 bg-cream">
      <div className="container-custom max-w-5xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={stagger}
          className="text-center mb-16"
        >
          <motion.span variants={fadeUp} className="inline-block text-teal text-sm font-medium uppercase tracking-[0.3em] mb-4">
            03 — Le Quattro Facce
          </motion.span>
          <motion.h2 variants={fadeUp} className="font-display text-3xl md:text-4xl lg:text-5xl text-navy mb-5 leading-tight">
            Quattro facce.{' '}
            <span className="text-teal italic">Una sola identità.</span>
          </motion.h2>
        </motion.div>

        <div className="space-y-16 md:space-y-24">
          {dettagli.map((faccia) => {
            const a = accentClasses[faccia.accent]
            return (
              <motion.article
                key={faccia.code}
                id={faccia.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
                variants={stagger}
                className="scroll-mt-28"
              >
                {/* Header faccia */}
                <motion.div variants={fadeUp} className="flex items-center gap-4 mb-6">
                  <div className={`flex-shrink-0 w-14 h-14 rounded-2xl ${a.bg} flex items-center justify-center`}>
                    <faccia.icon className={`w-6 h-6 ${a.text}`} />
                  </div>
                  <div>
                    <p className="text-navy/45 text-xs uppercase tracking-widest font-bold">
                      Passo {faccia.step} · Faccia {faccia.code}
                    </p>
                    <h3 className="font-display text-2xl md:text-3xl text-navy leading-tight mt-1">
                      {faccia.fullName}
                    </h3>
                  </div>
                </motion.div>

                <motion.p variants={fadeUp} className={`font-serif italic ${a.text} text-lg md:text-xl mb-6`}>
                  {faccia.subtitle}
                </motion.p>

                <motion.p variants={fadeUp} className="text-navy/75 text-base md:text-lg leading-[1.8] mb-10 max-w-3xl">
                  {faccia.intro}
                </motion.p>

                {/* 3 parole */}
                <motion.div variants={stagger} className="grid md:grid-cols-3 gap-5 md:gap-6 mb-8">
                  {faccia.parole.map((p) => (
                    <motion.div
                      key={p.word}
                      variants={fadeUp}
                      className="group relative bg-white rounded-2xl p-6 md:p-7 shadow-sm border border-navy/8 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
                    >
                      <div className="flex items-baseline gap-3 mb-4">
                        <span className={`font-display text-5xl md:text-6xl font-bold ${a.text} leading-none`}>
                          {p.letter}
                        </span>
                        <p className="font-display text-lg md:text-xl text-navy font-bold tracking-wide">
                          {p.word}
                        </p>
                      </div>
                      <p className="text-navy/70 text-sm md:text-[15px] leading-[1.7]">
                        {p.description}
                      </p>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Quote */}
                {faccia.quote && (
                  <motion.blockquote
                    variants={fadeUp}
                    className="relative pl-6 border-l-2 border-navy/15 max-w-3xl"
                  >
                    <p className={`font-serif italic ${a.text} text-base md:text-lg leading-relaxed`}>
                      &laquo;{faccia.quote}&raquo;
                    </p>
                  </motion.blockquote>
                )}
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// ── VERTICE / LEADERSHIP ALPHA ─────────────────────
function VerticeAlpha() {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-br from-navy-dark via-navy to-navy-dark text-cream relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-gold rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/3 w-[400px] h-[400px] bg-teal rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative max-w-4xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={stagger}
          className="text-center"
        >
          <motion.span variants={fadeUp} className="inline-block text-gold text-sm font-medium uppercase tracking-[0.3em] mb-4">
            04 — Il Vertice
          </motion.span>

          <motion.div variants={fadeUp} className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gold/15 border border-gold/40 mb-6">
            <Crown className="w-9 h-9 text-gold" />
          </motion.div>

          <motion.h2 variants={fadeUp} className="font-display text-3xl md:text-5xl lg:text-6xl text-cream mb-5 leading-[1.1]">
            Leadership Alpha
          </motion.h2>

          <motion.p variants={fadeUp} className="font-serif italic text-lg md:text-xl text-gold/85 max-w-2xl mx-auto mb-12 leading-relaxed">
            L&apos;identità conquistata dell&apos;uomo e della donna che guidano se stessi prima di guidare gli altri.
          </motion.p>

          <motion.p variants={fadeUp} className="text-cream/75 text-base md:text-lg leading-[1.8] mb-12 max-w-3xl mx-auto">
            Il vertice non è uno stato che si raggiunge per sempre. È un&apos;identità che si abita quando le quattro facce della piramide sono sincronizzate.
            Non è un titolo, non è una posizione: è un <strong className="text-gold">modo di essere nel mondo professionale</strong>.
          </motion.p>

          <motion.div variants={fadeUp} className="text-left max-w-3xl mx-auto mb-14">
            <p className="text-cream/80 text-base md:text-lg mb-6">
              Il Leader Alpha non è necessariamente il CEO, il direttore o il più anziano in sala. È la persona che:
            </p>
            <ul className="space-y-4">
              {[
                'Ha costruito chiarezza sulla propria identità personale — sa chi è, cosa vuole e su cosa non scende a patti.',
                'È riconoscibile e genera riconoscenza — la sua presenza coerente crea valore negli altri.',
                'Agisce con autorevolezza, autonomia e autenticità — non recita un ruolo, incarna un\u2019identità.',
                'Persegue obiettivi compatibili, coerenti e congrui con la propria identità — non gli obiettivi degli altri.',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                  <span className="text-cream/85 text-base leading-[1.7]">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.blockquote variants={fadeUp} className="relative px-6 py-8 md:py-10 rounded-2xl bg-gold/5 border border-gold/20 max-w-2xl mx-auto">
            <p className="font-serif italic text-cream text-lg md:text-xl leading-[1.6]">
              &laquo;Diventare Leader Alpha non significa comandare. Significa{' '}
              <span className="text-gold not-italic font-semibold">smettere di seguire direzioni che non appartengono a te</span>.&raquo;
            </p>
            <p className="text-gold/70 text-xs mt-3 uppercase tracking-widest">— Luca Pellicari</p>
          </motion.blockquote>
        </motion.div>
      </div>
    </section>
  )
}

// ── RIEPILOGO ──────────────────────────────────────
function Riepilogo() {
  const rows = [
    { num: '01', code: '3V', identita: 'Identità Personale', parole: ['Visione', 'Valori', 'Verità'], domanda: 'Chi sei davvero?', accent: 'teal' },
    { num: '02', code: '3R', identita: 'Identità Relazionale', parole: ['Riconosciuto', 'Riconoscibile', 'Riconoscenza'], domanda: 'Come vieni visto dagli altri?', accent: 'coral' },
    { num: '03', code: '3A', identita: 'Identità Professionale', parole: ['Autorevolezza', 'Autonomia', 'Autenticità'], domanda: 'Come operi nel mondo?', accent: 'gold' },
    { num: '04', code: '3C', identita: 'Obiettivi Coerenti', parole: ['Compatibili', 'Coerenti', 'Congrui'], domanda: 'Dove stai davvero andando?', accent: 'navy' },
  ]

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container-custom max-w-5xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={stagger}
          className="text-center mb-12"
        >
          <motion.span variants={fadeUp} className="inline-block text-teal text-sm font-medium uppercase tracking-[0.3em] mb-4">
            05 — Riepilogo
          </motion.span>
          <motion.h2 variants={fadeUp} className="font-display text-3xl md:text-4xl lg:text-5xl text-navy mb-5 leading-tight">
            La sequenza completa.
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={stagger}
          className="space-y-3 md:space-y-4"
        >
          {rows.map((row) => {
            const a = accentClasses[row.accent]
            return (
              <motion.div
                key={row.code}
                variants={fadeUp}
                className="group grid grid-cols-12 gap-3 md:gap-6 items-center p-5 md:p-6 rounded-2xl bg-cream border border-navy/8 hover:border-teal/20 hover:bg-white hover:shadow-lg transition-all duration-300"
              >
                <div className="col-span-2 md:col-span-1 text-center">
                  <span className="font-display text-2xl md:text-3xl font-bold text-navy/30">{row.num}</span>
                </div>
                <div className="col-span-10 md:col-span-2">
                  <span className={`font-display text-3xl md:text-4xl font-bold ${a.text}`}>{row.code}</span>
                </div>
                <div className="col-span-12 md:col-span-3">
                  <p className="text-navy font-semibold text-sm md:text-base leading-tight">{row.identita}</p>
                </div>
                <div className="col-span-12 md:col-span-3">
                  <p className="text-navy/70 text-xs md:text-sm leading-relaxed">
                    {row.parole.join(' · ')}
                  </p>
                </div>
                <div className="col-span-12 md:col-span-3">
                  <p className="font-serif italic text-navy/65 text-xs md:text-sm">{row.domanda}</p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

// ── UTILIZZO NEI PERCORSI ──────────────────────────
function Utilizzo() {
  const usi = [
    {
      icon: Compass,
      title: 'Diagnosi iniziale',
      desc: "All\u2019inizio di ogni percorso, viene utilizzata per mappare la posizione attuale del partecipante rispetto alle quattro dimensioni. Permette di identificare con precisione dove si trovano i blocchi, le incoerenze e i punti di forza.",
    },
    {
      icon: ScrollText,
      title: 'Canvas di lavoro',
      desc: "Ogni faccia diventa un canvas su cui il partecipante lavora: risponde a domande guida, identifica le aree di sviluppo, costruisce un piano di azione coerente con la propria identità.",
    },
    {
      icon: Sparkles,
      title: 'Struttura narrativa',
      desc: "Nei workshop e nelle masterclass, la piramide fornisce la sequenza didattica in 4 passi: 3V → 3R → 3A → 3C. Ogni passo costruisce sulle fondamenta del precedente.",
    },
    {
      icon: CheckCircle,
      title: 'Verifica dei risultati',
      desc: "Al termine di un percorso, la piramide viene utilizzata per valutare l\u2019avanzamento su ciascuna dimensione e identificare i prossimi passi verso la Leadership Alpha.",
    },
  ]

  return (
    <section className="py-20 md:py-28 bg-cream">
      <div className="container-custom max-w-5xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={stagger}
          className="text-center mb-14"
        >
          <motion.span variants={fadeUp} className="inline-block text-teal text-sm font-medium uppercase tracking-[0.3em] mb-4">
            06 — Utilizzo nei Percorsi
          </motion.span>
          <motion.h2 variants={fadeUp} className="font-display text-3xl md:text-4xl lg:text-5xl text-navy mb-5 leading-tight">
            Lo strumento operativo{' '}
            <span className="text-teal italic">di tutti i percorsi AlphaKom.</span>
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={stagger}
          className="grid sm:grid-cols-2 gap-5 md:gap-6"
        >
          {usi.map((u) => (
            <motion.div
              key={u.title}
              variants={fadeUp}
              className="group p-6 md:p-7 rounded-2xl bg-white border border-navy/8 hover:border-teal/25 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-teal/10 flex items-center justify-center mb-5 group-hover:bg-teal group-hover:scale-105 transition-all duration-300">
                <u.icon className="w-5 h-5 text-teal group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-display text-xl text-navy mb-3 font-bold tracking-tight">{u.title}</h3>
              <p className="text-navy/70 text-sm md:text-[15px] leading-[1.7]">{u.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

// ── CTA ────────────────────────────────────────────
function PiramideCTA() {
  return (
    <section className="py-20 md:py-28 bg-navy text-cream">
      <div className="container-custom max-w-3xl text-center">
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-cream mb-6 leading-tight">
          Vuoi conoscere la tua{' '}
          <span className="text-teal-light italic">posizione</span>{' '}
          sulla Piramide?
        </h2>
        <p className="text-cream/75 text-base md:text-lg mb-10 leading-relaxed">
          Ogni percorso AlphaKom inizia da una diagnosi precisa.
          Parla con Alice — ti orienta, ti invia materiale e fissa un incontro con me.
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
            href="/alphakom"
            className="group inline-flex items-center gap-3 border-2 border-cream/30 text-cream px-8 py-4 rounded-full font-semibold hover:border-cream/60 hover:bg-cream/5 transition-all duration-300"
          >
            <span>Scopri AlphaKom</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  )
}

// ── PAGE ───────────────────────────────────────────
export default function PiramidePage() {
  return (
    <main>
      <PiramideHero />
      <Introduzione />
      <PiramideVisual />
      <FacceDettaglio />
      <VerticeAlpha />
      <Riepilogo />
      <Utilizzo />
      <PiramideCTA />
    </main>
  )
}
