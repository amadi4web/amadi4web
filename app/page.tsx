import type { LucideIcon } from 'lucide-react';
import {
  Brain,
  BookOpen,
  Droplet,
  Dumbbell,
  Heart,
  Lightbulb,
  Moon,
  Sparkles,
  Sun,
  Timer,
  Wind,
} from 'lucide-react';

type RoutineBlock = {
  timeWindow: string;
  title: string;
  description: string;
  science: string;
  actions: string[];
  icon: LucideIcon;
  duration: string;
};

type ProtocolStack = {
  title: string;
  subtitle: string;
  icon: LucideIcon;
  bullets: string[];
};

const routineBlocks: RoutineBlock[] = [
  {
    timeWindow: '0 - 2 minutes',
    duration: 'Wake + anchor light',
    title: 'Natural Light Activation',
    description:
      'Step outside immediately on waking. Let unfiltered sunlight hit your eyes to start the cortisol pulse that sets circadian timing.',
    science:
      'Light-sensitive melanopsin ganglion cells signal the suprachiasmatic nucleus, shifting your biological clock and suppressing lingering melatonin.',
    actions: ['Delay sunglasses and screens', 'Use overcast light for 5-10 minutes', 'If before sunrise, use bright artificial light temporarily'],
    icon: Sun,
  },
  {
    timeWindow: '2 - 10 minutes',
    duration: 'Hydration + minerals',
    title: 'Neural Hydration Primer',
    description:
      'Front-load electrolytes to replenish overnight losses, stabilize blood volume, and ready the nervous system for deep work.',
    science:
      'Sodium and potassium restore fluid balance, keeping neurons firing efficiently and preventing mid-morning crashes.',
    actions: ['16-24 oz water with sea salt + lemon', 'Add electrolytes if you train early', 'Delay caffeine for 90 minutes to preserve adenosine contrast'],
    icon: Droplet,
  },
  {
    timeWindow: '10 - 30 minutes',
    duration: 'Movement + respiration',
    title: 'State Shifting Movement',
    description:
      'Raise core temperature and circulation with low-friction movement paired with the physiological sigh to tune arousal.',
    science:
      'Movement releases epinephrine and dopamine, while deep breathing activates the vagus nerve to keep stress optimal - not excessive.',
    actions: ['5-10 minute zone 2 walk or mobility flow', 'Two physiological sighs when stress spikes', 'Cold water splash if you need extra alertness'],
    icon: Dumbbell,
  },
  {
    timeWindow: '30 - 90 minutes',
    duration: 'Focus block',
    title: 'Peak Cognitive Work',
    description:
      'Protect the first deep-work block for demanding, creative output. Stack nootropics, binaural beats, or background protocols as needed.',
    science:
      'Dopamine is naturally elevated in the early morning. Directing it toward effortful work builds neural circuits and motivation loops.',
    actions: ['90-minute ultradian work sprint', 'Use the 90/20 rule: intense focus, then reset', 'Deploy binaural beats or low-level white noise for focus'],
    icon: Brain,
  },
  {
    timeWindow: '90 - 120 minutes',
    duration: 'Deliberate recovery',
    title: 'Non-Sleep Deep Rest',
    description:
      'Exit the work block with deliberate downshifting so the nervous system consolidates learning and resets for the next push.',
    science:
      'NSDR protocols reduce sympathetic tone, replenish dopamine, and enhance retention through hippocampal replay.',
    actions: ['10-minute NSDR or Yoga Nidra session', 'Eyes-closed panoramic vision reset', 'Finish with gratitude or goal rehearsal'],
    icon: Wind,
  },
  {
    timeWindow: 'Within 3 hours',
    duration: 'Nutrition',
    title: 'Metabolic Alignment Meal',
    description:
      'Fuel with protein-dominant nutrition to stabilize glucose, support neurotransmitters, and maintain the circadian clockwork.',
    science:
      'Protein and slow carbs provide tyrosine and tryptophan for dopamine and serotonin. Eating within 2-3 hours tells the liver clock day has begun.',
    actions: ['30-40g protein-forward breakfast', 'Include omega-3s or healthy fats', 'Add fibrous vegetables or low-glycemic fruit'],
    icon: Heart,
  },
];

const protocolStacks: ProtocolStack[] = [
  {
    title: 'Neural Priming Stack',
    subtitle: 'Accelerate plasticity and learning for the first focus block.',
    icon: Brain,
    bullets: [
      'Brainwave entrainment or 40 Hz binaural beats (10-15 minutes).',
      'L-theanine + caffeine stack after 90 minutes awake for sustained alertness.',
      'Visualize the desired outcome for 60 seconds to prime prefrontal circuits.',
    ],
  },
  {
    title: 'Energy & Mood Stack',
    subtitle: 'Stabilize dopamine and cortisol for consistent drive.',
    icon: Lightbulb,
    bullets: [
      'Morning sunlight + brief cold exposure (30-120 seconds) to spike norepinephrine.',
      'Zone 2 cardio three times per week boosts mitochondrial density.',
      'Keep caffeine cutoff 8-10 hours before bedtime to preserve deep sleep.',
    ],
  },
  {
    title: 'Resilience Stack',
    subtitle: 'Finish the window with deliberate downshifting.',
    icon: BookOpen,
    bullets: [
      'Non-sleep deep rest or Yoga Nidra right after focus to encode learning.',
      'Panoramic vision breaks every 45 minutes to relieve ocular micro-saccade fatigue.',
      'Gratitude journaling anchors serotonin circuits that balance dopamine pursuit.',
    ],
  },
];

const foundations = [
  {
    label: 'Circadian anchor',
    value: 'Sun before screen',
    detail: 'Match internal clock with solar clock to set cortisol and melatonin timing.',
    icon: Sun,
  },
  {
    label: 'Body temperature rise',
    value: '~1.5-degree boost',
    detail: 'Movement + hydration move you toward the alertness peak of the day.',
    icon: Dumbbell,
  },
  {
    label: 'Dopamine runway',
    value: '90 min protected',
    detail: 'Guard the first ultradian cycle for the most cognitively demanding task.',
    icon: Sparkles,
  },
];

const closingReminders = [
  'Keep wake time within a 60-minute window, even on weekends.',
  'Light, movement, nutrition, and mindset form linked levers - pull them in sequence.',
  'Subjective energy is the scorecard: tweak hydration, carbohydrates, or NSDR dose based on feel and data.',
  'Review biomarkers (HRV, sleep efficiency, temperature) weekly to personalize the routine.',
];

export default function Home() {
  return (
    <main className="relative overflow-hidden pb-24">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_0%_0%,rgba(56,189,248,0.18),transparent_55%),radial-gradient(circle_at_80%_20%,rgba(14,165,233,0.16),transparent_65%),radial-gradient(circle_at_40%_80%,rgba(99,102,241,0.15),transparent_60%)]" />

      <section className="mx-auto flex max-w-6xl flex-col gap-16 px-6 pt-24 md:px-10 lg:pt-32">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/60 px-4 py-1.5 text-sm uppercase tracking-[0.2em] text-sky-300">
              <Timer className="h-4 w-4" /> Huberman-informed Protocol
            </span>
            <h1 className="text-4xl font-semibold leading-tight text-slate-50 md:text-5xl lg:text-6xl">
              Build a Morning Runway that Keeps Dopamine, Cortisol, and Circadian Rhythms in Sync
            </h1>
            <p className="text-lg text-slate-300 md:text-xl">
              Designed around Dr. Andrew Huberman&apos;s neuroscience-backed insights, this routine sequences light, movement, and mindset so you launch the day with clarity, elevated mood, and resilient energy.
            </p>
            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-300">
              <div className="flex items-center gap-2 rounded-lg border border-slate-700/70 bg-slate-900/60 px-4 py-2">
                <Sun className="h-4 w-4 text-sky-300" />
                Anchor cortisol pulse
              </div>
              <div className="flex items-center gap-2 rounded-lg border border-slate-700/70 bg-slate-900/60 px-4 py-2">
                <Brain className="h-4 w-4 text-sky-300" />
                Protect ultradian focus
              </div>
              <div className="flex items-center gap-2 rounded-lg border border-slate-700/70 bg-slate-900/60 px-4 py-2">
                <Wind className="h-4 w-4 text-sky-300" />
                Reset with NSDR
              </div>
            </div>
            <a
              href="#routine"
              className="inline-flex w-fit items-center gap-2 rounded-full border border-sky-400/50 bg-sky-500/10 px-6 py-3 text-sm font-semibold text-sky-100 transition hover:border-sky-300 hover:bg-sky-500/20"
            >
              Explore the protocol timeline
            </a>
          </div>
          <div className="space-y-6 rounded-3xl border border-slate-800/70 bg-slate-900/50 p-8 shadow-2xl shadow-sky-900/30">
            <h2 className="text-lg font-medium uppercase tracking-[0.35em] text-slate-400">Daily Pillars</h2>
            <div className="grid gap-6">
              {foundations.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <div key={pillar.label} className="flex items-start gap-4 rounded-2xl border border-slate-800/60 bg-slate-950/60 p-5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-500/15">
                      <Icon className="h-6 w-6 text-sky-300" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-xs uppercase tracking-[0.3em] text-slate-500">{pillar.label}</p>
                      <p className="text-base font-semibold text-slate-100">{pillar.value}</p>
                      <p className="text-sm text-slate-400">{pillar.detail}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section id="routine" className="mx-auto mt-24 max-w-6xl px-6 md:px-10">
        <header className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-sky-200">The Huberman Flow</p>
            <h2 className="text-3xl font-semibold text-slate-50 md:text-4xl">Morning Timeline (First 120 Minutes)</h2>
          </div>
          <p className="max-w-xl text-sm text-slate-400">
            Sequence each block to ride natural ultradian rhythms. Adjust the timing to your wake window, but keep the order to stack dopamine, cortisol, and melatonin correctly.
          </p>
        </header>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {routineBlocks.map((block) => {
            const Icon = block.icon;
            return (
              <article
                key={block.title}
                className="group relative flex h-full flex-col gap-4 rounded-3xl border border-slate-800/70 bg-slate-900/50 p-6 transition hover:border-sky-500/60 hover:bg-slate-900/70"
              >
                <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-sky-400/60 to-transparent opacity-0 transition group-hover:opacity-100" />
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-slate-500">
                  <span>{block.timeWindow}</span>
                  <span>{block.duration}</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-500/15">
                    <Icon className="h-6 w-6 text-sky-300" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-50">{block.title}</h3>
                </div>
                <p className="text-sm text-slate-300">{block.description}</p>
                <div className="space-y-3 rounded-2xl bg-slate-950/50 p-4">
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Protocol</p>
                  <ul className="space-y-2 text-sm text-slate-300">
                    {block.actions.map((action) => (
                      <li key={action} className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-sky-400" />
                        <span>{action}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-2xl border border-slate-800/80 bg-slate-950/60 p-4 text-sm text-slate-400">
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Why it works</p>
                  <p>{block.science}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="mx-auto mt-28 max-w-5xl px-6 md:px-10">
        <header className="mb-12 space-y-3 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-sky-200">Stacked Enhancements</p>
          <h2 className="text-3xl font-semibold text-slate-50 md:text-4xl">Dial in the Routine for Your Goals</h2>
          <p className="mx-auto max-w-3xl text-base text-slate-300">
            Blend these science-backed stacks depending on whether you need neural plasticity, mood regulation, or emotional resilience. Layer them sparingly - one stack per day keeps the routine sustainable.
          </p>
        </header>

        <div className="grid gap-8 md:grid-cols-3">
          {protocolStacks.map((stack) => {
            const Icon = stack.icon;
            return (
              <article key={stack.title} className="flex h-full flex-col gap-4 rounded-3xl border border-slate-800/70 bg-slate-900/60 p-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-500/15">
                    <Icon className="h-6 w-6 text-sky-300" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-50">{stack.title}</h3>
                    <p className="text-xs uppercase tracking-[0.3em] text-slate-500">{stack.subtitle}</p>
                  </div>
                </div>
                <ul className="space-y-3 text-sm text-slate-300">
                  {stack.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-sky-400" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </section>

      <section className="mx-auto mt-28 max-w-4xl px-6 md:px-10">
        <div className="rounded-3xl border border-slate-800/70 bg-slate-900/50 p-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="space-y-2">
              <p className="text-sm uppercase tracking-[0.3em] text-sky-200">Consistency Compass</p>
              <h2 className="text-3xl font-semibold text-slate-50">Personalize & Iterate</h2>
            </div>
            <Moon className="h-12 w-12 text-sky-300" />
          </div>
          <ul className="mt-8 grid gap-4 text-sm text-slate-300">
            {closingReminders.map((reminder) => (
              <li key={reminder} className="flex items-start gap-3">
                <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-sky-400" />
                <span>{reminder}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <footer className="mx-auto mt-24 max-w-6xl px-6 pb-10 text-center text-xs uppercase tracking-[0.4em] text-slate-500">
        Neuroscience-informed. Iterate weekly. Own the morning, shape the day.
      </footer>
    </main>
  );
}
