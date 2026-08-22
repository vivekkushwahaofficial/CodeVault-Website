import {
  Globe2,
  Bot,
  BarChart3,
  CalendarClock,
  FolderKanban,
  Search,
} from "lucide-react";

const futureEnhancements = [
  {
    icon: Globe2,
    title: "Expanded Platform Support",
    description:
      "Add Codeforces, CodeChef, AtCoder, and additional coding platforms to CodeVault.",
  },
  {
    icon: Bot,
    title: "Advanced AI Assistance",
    description:
      "Introduce AI-powered explanations, solution notes, interview questions, and personalized coding insights.",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description:
      "Provide deeper progress analytics, streaks, platform comparisons, language usage, and coding trends.",
  },
  {
    icon: CalendarClock,
    title: "Smart Revision System",
    description:
      "Add spaced-repetition reminders and personalized revision schedules for previously solved problems.",
  },
  {
    icon: FolderKanban,
    title: "Developer Portfolio",
    description:
      "Expand the existing portfolio into a richer developer profile with achievements, insights, and progress highlights.",
  },
  {
    icon: Search,
    title: "Advanced Search",
    description:
      "Provide faster and more flexible solution discovery across platforms, difficulty, topics, patterns, languages, and tags.",
  },
];

export default function FutureEnhancements() {
  return (
    <section
      className="
        relative overflow-hidden
        border-t border-white/[0.06]
        px-5 py-20
        sm:px-6 sm:py-24
        lg:px-8 lg:py-28
      "
    >
      {/* Subtle background glow */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute left-1/2 top-0
          h-[420px] w-[700px]
          -translate-x-1/2
          rounded-full
          bg-purple-600/[0.025]
          blur-[120px]
        "
      />

      <div className="relative mx-auto max-w-7xl">

        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">

          <div className="inline-flex items-center gap-3">
            <span
              aria-hidden="true"
              className="h-px w-7 bg-purple-400/60"
            />

            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-purple-400 sm:text-xs">
              Future Enhancements
            </span>

            <span
              aria-hidden="true"
              className="h-px w-7 bg-purple-400/60"
            />
          </div>

          <h2 className="mt-4 text-4xl font-bold tracking-[-0.04em] text-white sm:text-5xl lg:text-[3.25rem]">
            The Road Ahead
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-zinc-400 sm:text-base sm:leading-8">
            CodeVault is evolving into a complete developer productivity
            platform with AI-powered automation, analytics, and
            multi-platform support.
          </p>
        </div>

        {/* Future Features */}
        <div className="mt-12 grid gap-4 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3">
          {futureEnhancements.map((item, index) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="
                  group relative overflow-hidden
                  rounded-2xl
                  border border-white/[0.07]
                  bg-white/[0.02]
                  p-5
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:border-purple-400/20
                  hover:bg-white/[0.035]
                  hover:shadow-[0_18px_50px_rgba(0,0,0,0.22)]
                  sm:p-6
                "
              >
                {/* Animated top accent */}
                <div
                  aria-hidden="true"
                  className="
                    absolute left-0 top-0
                    h-px w-0
                    bg-purple-400
                    transition-all duration-500
                    group-hover:w-16
                  "
                />

                {/* Hover glow */}
                <div
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute -right-12 -top-12
                    h-28 w-28
                    rounded-full
                    bg-purple-500/[0.05]
                    blur-3xl
                    opacity-0
                    transition-opacity duration-500
                    group-hover:opacity-100
                  "
                />

                {/* Icon */}
                <div
                  className="
                    relative
                    flex h-10 w-10
                    items-center justify-center
                    rounded-xl
                    border border-purple-400/15
                    bg-purple-500/[0.05]
                    text-purple-300
                    transition-all duration-300
                    group-hover:border-purple-400/25
                    group-hover:bg-purple-500/[0.08]
                  "
                >
                  <Icon
                    size={18}
                    strokeWidth={1.8}
                    aria-hidden="true"
                    className="
                      transition-transform duration-300
                      group-hover:scale-105
                    "
                  />
                </div>

                {/* Content */}
                <h3 className="relative mt-5 text-lg font-semibold tracking-tight text-white sm:text-xl">
                  {item.title}
                </h3>

                <p className="relative mt-2.5 text-sm leading-6 text-zinc-400 sm:text-[15px] sm:leading-7">
                  {item.description}
                </p>

                {/* Planned status */}
                <div className="relative mt-5 flex items-center gap-2">
                  <span
                    aria-hidden="true"
                    className="h-1.5 w-1.5 rounded-full bg-purple-400/70"
                  />

                  <span className="text-[9px] font-medium uppercase tracking-[0.2em] text-zinc-600">
                    Planned
                  </span>
                </div>

                {/* Number */}
                <span
                  aria-hidden="true"
                  className="
                    absolute bottom-5 right-6
                    font-mono text-[9px]
                    tracking-[0.2em]
                    text-zinc-700
                    transition-colors duration-300
                    group-hover:text-purple-400/40
                  "
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}