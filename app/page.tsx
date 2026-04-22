import {
  MusicNotes,
  FireSimple,
  HeartStraight,
  Lightning,
  Star,
  Ticket,
  ShieldCheck,
  MapPin,
  Clock,
  Users,
  InstagramLogo,
  FacebookLogo,
  CaretRight,
  Quotes,
  Confetti,
} from '@phosphor-icons/react/dist/ssr'
import ContactForm from '@/components/ContactForm'
import Reveal from '@/components/Reveal'

const classes = [
  {
    icon: MusicNotes,
    name: 'Clubbercise',
    tag: 'Signature',
    duration: '45 min · 300+ cals',
    desc:
      'Club anthems from every era, glow sticks in hand, lights low. A proper dance-floor workout that doesn&rsquo;t feel like one. The one people keep coming back for.',
  },
  {
    icon: FireSimple,
    name: 'Beatz Fitness',
    tag: 'World Dance',
    duration: '45 min · 350+ cals',
    desc:
      'Bhangra, Bollywood, Afrobeats, soca and reggaeton in one class. Every track is a different country — part workout, part world tour, all good mood.',
  },
  {
    icon: HeartStraight,
    name: 'Zumba',
    tag: 'Latin',
    duration: '45 min · 300+ cals',
    desc:
      'The original. Licensed Zumba fitness — merengue, salsa, cumbia, reggaeton — built around rhythms you already want to move to.',
  },
  {
    icon: Lightning,
    name: 'BlockFit',
    tag: 'Strength',
    duration: '40 min · full body',
    desc:
      'HIIT-style strength and cardio using foam blocks — low impact on the knees, heavy on the results. The one you book when dancing isn&rsquo;t enough.',
  },
  {
    icon: Star,
    name: 'First Class Free',
    tag: 'New? Start here',
    duration: 'Any format',
    desc:
      'Try any class, any format, completely free for your first session. No card on file, no pressure, no &ldquo;intro package&rdquo; upsell. Just come dance.',
  },
  {
    icon: Ticket,
    name: 'Class Bundles',
    tag: 'Regulars',
    duration: 'Best value',
    desc:
      'Book four classes in one go and your fifth is on me. Mix and match any format — bring a friend, swap a date, use them on your own time.',
  },
]

const principles = [
  {
    icon: ShieldCheck,
    title: 'Properly licensed',
    text:
      'Fully qualified and licensed in all four formats, insured, first-aid trained. The music, the moves and the safety boxes — all ticked.',
  },
  {
    icon: Users,
    title: 'Every level welcome',
    text:
      'Never danced a step? Coming back after kids? Fifty, sixty, seventy? The front row isn&rsquo;t reserved for anyone — everyone moves at their own pace.',
  },
  {
    icon: Clock,
    title: 'Pay as you go',
    text:
      'No gym contract, no membership, no minimum term. Turn up when you can, pay for that class, leave when it&rsquo;s done. Life-friendly by design.',
  },
]

const timetable = [
  { day: 'Monday', slot: '7:00 – 7:45 pm', name: 'Clubbercise', venue: 'Shrewsbury' },
  { day: 'Tuesday', slot: '6:30 – 7:10 pm', name: 'BlockFit', venue: 'Shrewsbury' },
  { day: 'Wednesday', slot: '9:30 – 10:15 am', name: 'Zumba (Daytime)', venue: 'Shrewsbury' },
  { day: 'Thursday', slot: '7:00 – 7:45 pm', name: 'Beatz Fitness', venue: 'Shrewsbury' },
  { day: 'Saturday', slot: '9:30 – 10:15 am', name: 'Clubbercise', venue: 'Shrewsbury' },
]

const testimonials = [
  {
    quote:
      'I haven&rsquo;t exercised properly since school and Amanda&rsquo;s the first person who&rsquo;s made me actually want to. Three classes a week now and I&rsquo;m not stopping.',
    name: 'Rachel · Clubbercise regular',
  },
  {
    quote:
      'Came for the music, stayed for Amanda. Beatz is the happiest hour of my week — I walk out buzzing every Thursday.',
    name: 'Priya · Beatz Fitness',
  },
  {
    quote:
      'The BlockFit has genuinely transformed my knees — I thought cardio was off the table for good. Turns out it was just the wrong cardio.',
    name: 'Dawn · BlockFit regular',
  },
]

const marqueeItems = [
  'Clubbercise',
  'Beatz Fitness',
  'Zumba',
  'BlockFit',
  'All levels welcome',
  'Shrewsbury',
  'Pay as you go',
  'First class free',
]

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      {/* HERO */}
      <section className="relative min-h-[100dvh] flex items-center pt-28 pb-20 md:pt-36 md:pb-28">
        <div className="absolute inset-0 glow-spot pointer-events-none" />
        <div
          className="absolute top-10 right-0 w-[55%] h-[65%] opacity-[0.18] pointer-events-none drift"
          style={{
            background:
              'radial-gradient(ellipse at top right, #D94A85 0%, transparent 65%)',
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-[50%] h-[50%] opacity-[0.14] pointer-events-none drift-slow"
          style={{
            background:
              'radial-gradient(ellipse at bottom left, #7A5AF8 0%, transparent 70%)',
          }}
        />

        <div className="relative max-w-7xl mx-auto px-5 md:px-8 w-full grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: editorial brand block */}
          <div className="lg:col-span-7 text-left hero-reveal">
            <div className="inline-flex items-center gap-3 mb-7">
              <span className="h-px w-10 bg-coral-500" />
              <span className="font-body text-[11px] md:text-[12px] tracking-[0.4em] uppercase text-coral-700 font-medium">
                Dance fitness · Shrewsbury
              </span>
            </div>

            <h1 className="font-heading text-[44px] md:text-[78px] lg:text-[92px] leading-[0.95] tracking-tight text-plum-950 mb-6">
              Your weekly<br />
              workout, but it<br />
              <span className="italic text-coral-gradient">feels like a night out</span>.
            </h1>

            <p className="font-body text-lg md:text-xl text-plum-700 leading-relaxed max-w-xl mb-10">
              Four licensed dance fitness formats &mdash; Clubbercise, Beatz, Zumba and
              BlockFit &mdash; with Amanda Telford, across Shrewsbury. High-energy, properly
              welcoming, and genuinely fun. Your first class is on me.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-plum-950 text-cream-50 font-semibold tracking-[0.16em] uppercase text-[13px] rounded-[4px] hover:bg-plum-900 active:scale-[0.98] transition-all"
              >
                Save me a spot
                <CaretRight weight="bold" className="w-4 h-4" />
              </a>
              <a
                href="#classes"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-plum-300 text-plum-800 font-semibold tracking-[0.16em] uppercase text-[13px] rounded-[4px] hover:border-coral-500 hover:text-coral-700 active:scale-[0.98] transition-all"
              >
                See the classes
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-x-8 gap-y-3 text-[12px] tracking-[0.18em] uppercase text-plum-500 font-medium">
              <span className="inline-flex items-center gap-2">
                <ShieldCheck weight="duotone" className="w-4 h-4 text-coral-600" />
                Licensed in all 4
              </span>
              <span className="inline-flex items-center gap-2">
                <Users weight="duotone" className="w-4 h-4 text-coral-600" />
                All levels
              </span>
              <span className="inline-flex items-center gap-2">
                <MapPin weight="duotone" className="w-4 h-4 text-coral-600" />
                Shrewsbury
              </span>
            </div>
          </div>

          {/* Right: editorial image frame */}
          <Reveal as="div" className="lg:col-span-5 relative" delay={300} y={20}>
            <div className="relative aspect-[4/5] w-full max-w-md mx-auto">
              <div
                className="absolute inset-0 rounded-[4px] overflow-hidden border border-plum-200"
                style={{
                  backgroundImage:
                    'linear-gradient(180deg, rgba(30, 14, 24, 0.25) 0%, rgba(30, 14, 24, 0.15) 100%), url(/hero.jpg)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
              <div className="absolute inset-0 rounded-[4px] ring-1 ring-inset ring-coral-500/25" />
              <div className="absolute inset-2 rounded-[4px] ring-1 ring-inset ring-coral-500/15 pointer-events-none" />

              {/* Pulse indicator */}
              <div className="absolute top-4 right-4 flex items-center gap-2 bg-plum-950/90 backdrop-blur-sm px-3 py-2 rounded-[4px]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-coral-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-coral-500" />
                </span>
                <span className="text-[10px] tracking-[0.3em] uppercase text-cream-50">
                  Classes this week
                </span>
              </div>

              {/* Floating quote card */}
              <div className="absolute -bottom-8 -left-6 md:-left-10 bg-cream-50 border border-plum-200 px-6 py-5 rounded-[4px] max-w-[260px] shadow-[0_20px_50px_-24px_rgba(42,22,36,0.30)]">
                <div className="flex items-center gap-2 mb-2">
                  <Quotes weight="fill" className="w-3.5 h-3.5 text-coral-500" />
                  <span className="text-[10px] tracking-[0.3em] uppercase text-plum-400">
                    Clubbercise regular
                  </span>
                </div>
                <p className="font-heading italic text-lg text-plum-900 leading-tight">
                  &ldquo;The happiest hour of my week.&rdquo;
                </p>
              </div>

              {/* Top-left badge */}
              <div className="absolute -top-6 -left-4 md:-left-8 bg-plum-950 text-cream-50 px-5 py-4 rounded-[4px]">
                <div className="text-[10px] tracking-[0.3em] uppercase text-coral-300 mb-1">
                  Teaching in
                </div>
                <div className="font-heading text-2xl">Shrewsbury</div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* KINETIC MARQUEE */}
      <section className="relative py-8 border-y border-plum-200/50 bg-plum-950 text-cream-50 overflow-hidden">
        <div className="flex whitespace-nowrap">
          <div className="flex ticker-track shrink-0">
            {[...marqueeItems, ...marqueeItems].map((item, i) => (
              <div key={`${item}-${i}`} className="flex items-center gap-8 px-8 text-[13px] tracking-[0.35em] uppercase">
                <span className={i % 2 === 0 ? 'text-cream-50' : 'text-coral-gradient'}>
                  {item}
                </span>
                <span className="text-coral-500">
                  <Confetti weight="fill" className="w-3 h-3" />
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLASSES */}
      <section id="classes" className="relative py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <Reveal className="max-w-2xl mb-16 md:mb-20">
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="h-px w-8 bg-coral-500" />
              <span className="text-[10px] tracking-[0.4em] uppercase text-coral-700 font-medium">
                The Classes
              </span>
            </div>
            <h2 className="font-heading text-4xl md:text-6xl leading-[1.05] tracking-tight text-plum-950 mb-6">
              Four formats. One <span className="italic text-coral-gradient">very good reason</span> to turn up.
            </h2>
            <p className="text-plum-600 text-lg leading-relaxed">
              Every class is licensed, properly choreographed and beginner-friendly. Pick
              the vibe that suits the mood &mdash; or rotate through all four and find your
              favourite. First one&rsquo;s on me either way.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-plum-200/70 border border-plum-200 rounded-[4px] overflow-hidden">
            {classes.map((c, i) => {
              const Icon = c.icon
              return (
                <Reveal
                  key={c.name}
                  as="article"
                  delay={i * 80}
                  className="group relative bg-cream-50 p-8 md:p-10 hover:bg-cream-100 transition-colors lift"
                >
                  <div className="flex items-start justify-between gap-6 mb-6">
                    <div className="w-12 h-12 rounded-[4px] border border-coral-500/40 bg-coral-50 flex items-center justify-center group-hover:border-coral-500 group-hover:bg-coral-100 transition-colors">
                      <Icon weight="duotone" className="w-6 h-6 text-coral-700" />
                    </div>
                    <span className="font-body text-[10px] tracking-[0.3em] uppercase text-plum-400 mt-3">
                      {c.duration}
                    </span>
                  </div>
                  <div className="flex items-baseline gap-3 mb-3">
                    <h3 className="font-heading text-2xl md:text-[28px] text-plum-950 leading-tight">
                      {c.name}
                    </h3>
                    <span className="text-[9px] tracking-[0.3em] uppercase text-coral-700 bg-coral-50 border border-coral-500/30 px-2 py-1 rounded-full">
                      {c.tag}
                    </span>
                  </div>
                  <p
                    className="text-plum-600 leading-relaxed text-[15px] max-w-md"
                    dangerouslySetInnerHTML={{ __html: c.desc }}
                  />
                </Reveal>
              )
            })}
          </div>

          <Reveal as="p" delay={200} className="text-left text-plum-400 text-sm mt-10 max-w-xl">
            Drop-in prices shared on enquiry. Class bundles work out at under a fiver a
            session &mdash; and everyone&rsquo;s first class is genuinely free.
          </Reveal>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="relative py-24 md:py-32 border-t border-plum-200/60 bg-cream-100">
        <div className="absolute inset-0 glow-spot-soft pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-5 md:px-8 grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <Reveal as="div" className="lg:col-span-5 order-2 lg:order-1" y={20}>
            <div className="relative aspect-[4/5] w-full max-w-sm mx-auto lg:mx-0">
              <div
                className="absolute inset-0 rounded-[4px] overflow-hidden border border-plum-200"
                style={{
                  backgroundImage:
                    'linear-gradient(180deg, rgba(30, 14, 24, 0) 0%, rgba(30, 14, 24, 0.20) 100%), url(/about.jpg)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
              <div className="absolute inset-0 rounded-[4px] ring-1 ring-inset ring-coral-500/25" />
              <div className="absolute inset-2 rounded-[4px] ring-1 ring-inset ring-coral-500/15" />

              <div className="hidden md:flex absolute -bottom-6 -right-6 w-40 h-40 rounded-[4px] border border-plum-200 bg-cream-50 items-center justify-center">
                <div className="text-center px-4">
                  <div className="font-heading italic text-4xl text-coral-gradient leading-none">
                    4
                  </div>
                  <div className="text-[9px] tracking-[0.3em] uppercase text-plum-400 mt-2">
                    Licensed formats
                  </div>
                  <div className="h-px w-8 bg-coral-500/40 mx-auto my-3" />
                  <div className="font-heading italic text-xl text-plum-900 leading-none">
                    One Amanda
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal as="div" className="lg:col-span-7 order-1 lg:order-2" delay={120}>
            <span className="text-[10px] tracking-[0.4em] uppercase text-coral-700 font-medium mb-5 block">
              Meet Amanda
            </span>
            <h2 className="font-heading text-4xl md:text-5xl leading-[1.08] tracking-tight text-plum-950 mb-6">
              The front row is <span className="italic text-coral-gradient">nobody&rsquo;s</span>. Which means it&rsquo;s yours.
            </h2>
            <p className="text-plum-700 text-lg leading-relaxed mb-5">
              Hi, I&rsquo;m Amanda &mdash; a licensed dance fitness instructor based in Shrewsbury,
              teaching Clubbercise, Beatz Fitness, Zumba and BlockFit. I started teaching
              because the classes I loved never stayed in one place long enough, and I
              wanted to build something that actually felt like a Friday night.
            </p>
            <p className="text-plum-600 leading-relaxed mb-5">
              My classes aren&rsquo;t studio-body, mirror-wall, front-of-the-room-or-don&rsquo;t-bother
              sessions. They&rsquo;re loud, messy, genuinely welcoming, and built for real
              people &mdash; busy mums, shift workers, complete beginners, over-fifties getting
              their sparkle back. Nobody&rsquo;s watching you. Everyone&rsquo;s dancing.
            </p>
            <p className="text-plum-600 leading-relaxed mb-10">
              If you&rsquo;ve been meaning to come for months &mdash; this is your sign. First
              class is free. Drag a friend along. You&rsquo;ll feel brilliant by the end.
            </p>

            <div className="grid sm:grid-cols-3 gap-6">
              {principles.map((p, i) => {
                const Icon = p.icon
                return (
                  <Reveal
                    key={p.title}
                    delay={200 + i * 100}
                    className="border-t border-plum-200 pt-5"
                  >
                    <Icon weight="duotone" className="w-6 h-6 text-coral-600 mb-3" />
                    <h4 className="font-heading text-lg text-plum-950 mb-1.5">
                      {p.title}
                    </h4>
                    <p className="text-plum-600 text-sm leading-relaxed">{p.text}</p>
                  </Reveal>
                )
              })}
            </div>
          </Reveal>
        </div>
      </section>

      {/* TIMETABLE */}
      <section id="timetable" className="relative py-24 md:py-32 border-t border-plum-200/60">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <Reveal className="max-w-2xl mb-16 md:mb-20">
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="h-px w-8 bg-coral-500" />
              <span className="text-[10px] tracking-[0.4em] uppercase text-coral-700 font-medium">
                The Weekly Rhythm
              </span>
            </div>
            <h2 className="font-heading text-4xl md:text-6xl leading-[1.05] tracking-tight text-plum-950 mb-6">
              Five classes. <span className="italic text-coral-gradient">One week</span>.
            </h2>
            <p className="text-plum-600 text-lg leading-relaxed">
              Classes run across Shrewsbury in proper halls &mdash; sprung floors, good
              sound, parking. Message me for the venue nearest you or to check current
              availability. Timings may shift in school holidays.
            </p>
          </Reveal>

          <div className="border border-plum-200 rounded-[4px] overflow-hidden bg-cream-50">
            {timetable.map((t, i) => (
              <Reveal
                key={t.day + t.name}
                delay={i * 70}
                className={`grid grid-cols-12 gap-4 px-5 md:px-8 py-5 md:py-6 items-center ${
                  i === 0 ? '' : 'border-t border-plum-200/70'
                } hover:bg-cream-100 transition-colors`}
              >
                <div className="col-span-3 md:col-span-2 font-heading italic text-lg md:text-xl text-plum-950">
                  {t.day}
                </div>
                <div className="col-span-9 md:col-span-3 text-[11px] md:text-[12px] tracking-[0.2em] uppercase text-plum-500 font-medium">
                  {t.slot}
                </div>
                <div className="col-span-8 md:col-span-4 font-heading text-xl md:text-2xl text-plum-950 leading-tight">
                  {t.name}
                </div>
                <div className="col-span-4 md:col-span-3 text-right md:text-left text-[11px] tracking-[0.25em] uppercase text-coral-700 font-medium">
                  {t.venue}
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal as="p" delay={300} className="text-plum-500 text-sm mt-6">
            New venues being added &mdash; message for the full, up-to-date schedule.
          </Reveal>
        </div>
      </section>

      {/* QUOTE STRIP */}
      <section className="relative py-20 md:py-24 bg-plum-950 text-cream-50 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.14] pointer-events-none drift-slow"
          style={{
            background:
              'radial-gradient(ellipse at center, #D94A85 0%, transparent 60%)',
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.10] pointer-events-none drift"
          style={{
            background:
              'radial-gradient(ellipse at 20% 80%, #7A5AF8 0%, transparent 55%)',
          }}
        />
        <div className="relative max-w-7xl mx-auto px-5 md:px-8">
          <Reveal className="max-w-3xl mx-auto text-center mb-16">
            <Quotes weight="fill" className="w-8 h-8 text-coral-500 mx-auto mb-6" />
            <p className="font-heading italic text-2xl md:text-4xl leading-[1.2] tracking-tight mb-6">
              &ldquo;I walk in stressed, I walk out with a <span className="text-coral-gradient">stupid grin on my face</span>.
              Didn&rsquo;t know a workout could do that.&rdquo;
            </p>
            <div className="text-[11px] tracking-[0.35em] uppercase text-coral-300">
              Sophie &middot; Zumba regular since 2023
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-px bg-plum-800/70 border border-plum-800 rounded-[4px] overflow-hidden">
            {testimonials.map((t, i) => (
              <Reveal
                key={t.name}
                delay={i * 120}
                className="bg-plum-900 p-8 md:p-10"
              >
                <Quotes weight="fill" className="w-5 h-5 text-coral-500 mb-5" />
                <p
                  className="text-cream-50/90 text-[15px] leading-relaxed mb-6"
                  dangerouslySetInnerHTML={{ __html: t.quote }}
                />
                <div className="text-[11px] tracking-[0.3em] uppercase text-coral-300">
                  {t.name}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="relative py-24 md:py-32 border-t border-plum-200/60">
        <div className="absolute inset-0 glow-spot pointer-events-none opacity-70" />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 grid lg:grid-cols-2 gap-12 lg:gap-20">
          <Reveal as="div">
            <span className="text-[10px] tracking-[0.4em] uppercase text-coral-700 font-medium mb-5 block">
              Save Me A Spot
            </span>
            <h2 className="font-heading text-4xl md:text-5xl leading-[1.08] tracking-tight text-plum-950 mb-6">
              One message. <span className="italic text-coral-gradient">That&rsquo;s it</span>.
            </h2>
            <p className="text-plum-600 text-lg leading-relaxed mb-10 max-w-md">
              Drop your name, the class you fancy, and I&rsquo;ll reply within 24 hours with
              your spot, the venue address and what to bring. No sign-up, no card, no faff.
            </p>

            <div className="space-y-5">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 border border-plum-200 rounded-[4px] hover:border-coral-500 hover:bg-cream-100 transition-all group lift"
              >
                <div className="w-11 h-11 rounded-[4px] bg-coral-100 border border-coral-500/40 flex items-center justify-center flex-shrink-0 group-hover:bg-coral-500 group-hover:border-coral-500 transition-colors">
                  <FacebookLogo weight="fill" className="w-5 h-5 text-coral-700 group-hover:text-cream-50 transition-colors" />
                </div>
                <div>
                  <div className="text-[10px] tracking-[0.3em] uppercase text-coral-700 mb-0.5">
                    Facebook
                  </div>
                  <div className="font-heading text-xl text-plum-950">Message Amanda</div>
                </div>
              </a>

              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 border border-plum-200 rounded-[4px] hover:border-coral-500 hover:bg-cream-100 transition-all group lift"
              >
                <div className="w-11 h-11 rounded-[4px] bg-coral-100 border border-coral-500/40 flex items-center justify-center flex-shrink-0 group-hover:bg-coral-500 group-hover:border-coral-500 transition-colors">
                  <InstagramLogo weight="fill" className="w-5 h-5 text-coral-700 group-hover:text-cream-50 transition-colors" />
                </div>
                <div>
                  <div className="text-[10px] tracking-[0.3em] uppercase text-coral-700 mb-0.5">
                    Instagram
                  </div>
                  <div className="font-heading text-xl text-plum-950">See the classes in action</div>
                </div>
              </a>

              <div className="flex items-center gap-4 p-5 border border-plum-200/70 rounded-[4px]">
                <div className="w-11 h-11 rounded-[4px] bg-coral-100 border border-coral-500/40 flex items-center justify-center flex-shrink-0">
                  <MapPin weight="fill" className="w-5 h-5 text-coral-700" />
                </div>
                <div>
                  <div className="text-[10px] tracking-[0.3em] uppercase text-coral-700 mb-0.5">
                    Teaching across
                  </div>
                  <div className="text-plum-800">Shrewsbury &amp; surrounding Shropshire villages</div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal as="div" delay={120} className="bg-cream-50 border border-plum-200 rounded-[4px] p-6 md:p-10 shadow-[0_20px_50px_-30px_rgba(42,22,36,0.25)]">
            <h3 className="font-heading text-2xl text-plum-950 mb-2">Send a message</h3>
            <p className="text-plum-500 text-sm mb-8">
              Tell me which class you&rsquo;re after and I&rsquo;ll come back with the details.
            </p>
            <ContactForm />
          </Reveal>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative border-t border-plum-200 py-12 bg-cream-100">
        <div className="max-w-7xl mx-auto px-5 md:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-baseline gap-2">
            <span className="font-heading italic text-xl text-plum-950">Amanda&nbsp;Telford</span>
            <span className="font-body text-[10px] tracking-[0.4em] uppercase text-coral-700">
              Fitness
            </span>
          </div>
          <div className="flex items-center gap-5">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-plum-500 hover:text-coral-600 transition-colors"
              aria-label="Instagram"
            >
              <InstagramLogo weight="fill" className="w-5 h-5" />
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-plum-500 hover:text-coral-600 transition-colors"
              aria-label="Facebook"
            >
              <FacebookLogo weight="fill" className="w-5 h-5" />
            </a>
          </div>
          <div className="text-plum-400 text-[11px] tracking-[0.25em] uppercase">
            &copy; {new Date().getFullYear()} Amanda Telford Fitness
          </div>
        </div>
      </footer>
    </main>
  )
}
