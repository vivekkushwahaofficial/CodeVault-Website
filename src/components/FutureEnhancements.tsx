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
      "Support for Codeforces, CodeChef, AtCoder, and more coding platforms.",
  },
  {
    icon: Bot,
    title: "AI-Powered Classification",
    description:
      "Automatically detect problem patterns, topics, tags, and estimate complexity.",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description:
      "Track progress, streaks, language usage, platform statistics, and coding insights.",
  },
  {
    icon: CalendarClock,
    title: "Smart Revision System",
    description:
      "Receive automated reminders to revisit solved problems using spaced repetition.",
  },
  {
    icon: FolderKanban,
    title: "Portfolio Generator",
    description:
      "Generate a professional coding portfolio with README, heatmaps, and achievements.",
  },
  {
    icon: Search,
    title: "Advanced Search",
    description:
      "Quickly find solutions by platform, difficulty, topic, pattern, language, or tags.",
  },
];

export default function FutureEnhancements() {
  return (
    <section
      className="
        relative overflow-hidden
        border-t border-white/[0.06]
        px-5 py-24
        sm:px-6 sm:py-28
        lg:px-8 lg:py-32
      "
    >
      {/* =====================================================
          SUBTLE BACKGROUND
      ====================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute left-1/3 top-20
          h-[420px] w-[650px]
          rounded-full
          bg-purple-600/[0.025]
          blur-[120px]
        "
      />

      <div className="relative mx-auto max-w-7xl">

        {/* ===================================================
            SECTION HEADER
        ==================================================== */}

        <div className="mx-auto max-w-3xl text-center">

          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2">
            <span
              aria-hidden="true"
              className="h-px w-8 bg-purple-400/60"
            />

            <span className="text-xs font-semibold uppercase tracking-[0.28em] text-purple-400">
              Future Enhancements
            </span>

            <span
              aria-hidden="true"
              className="h-px w-8 bg-purple-400/60"
            />
          </div>

          {/* Heading */}
          <h2 className="mt-5 text-4xl font-bold tracking-[-0.035em] text-white sm:text-5xl lg:text-[3.4rem]">
            The Road Ahead
          </h2>

          {/* Description */}
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-zinc-400 sm:text-base sm:leading-8">
            CodeVault is continuously evolving into a complete developer
            productivity platform with AI-powered automation, analytics,
            and multi-platform support.
          </p>
        </div>

        {/* ===================================================
            FUTURE FEATURES
        ==================================================== */}

        <div className="mt-14 grid gap-4 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {futureEnhancements.map((item, index) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="
                  group relative overflow-hidden
                  rounded-2xl
                  border border-white/[0.08]
                  bg-white/[0.02]
                  p-6
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:border-purple-400/25
                  hover:bg-white/[0.035]
                  hover:shadow-[0_20px_60px_rgba(0,0,0,0.25)]
                  sm:p-7
                "
              >
                {/* Top accent */}
                <div
                  aria-hidden="true"
                  className="
                    absolute left-0 top-0
                    h-px w-0
                    bg-purple-400
                    transition-all duration-500
                    group-hover:w-20
                  "
                />

                {/* Hover glow */}
                <div
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute -right-16 -top-16
                    h-32 w-32
                    rounded-full
                    bg-purple-500/[0.05]
                    blur-3xl
                    opacity-0
                    transition-opacity duration-500
                    group-hover:opacity-100
                  "
                />

                {/* =================================================
                    ICON
                ================================================== */}

                <div
                  className="
                    relative
                    flex h-11 w-11
                    items-center justify-center
                    rounded-xl
                    border border-purple-400/15
                    bg-purple-500/[0.06]
                    text-purple-300
                    transition-all duration-300
                    group-hover:border-purple-400/30
                    group-hover:bg-purple-500/[0.10]
                    group-hover:text-purple-200
                  "
                >
                  <Icon
                    size={20}
                    strokeWidth={1.8}
                    aria-hidden="true"
                    className="
                      transition-transform duration-300
                      group-hover:scale-105
                    "
                  />
                </div>

                {/* =================================================
                    CONTENT
                ================================================== */}

                <h3 className="relative mt-6 text-xl font-semibold tracking-tight text-white">
                  {item.title}
                </h3>

                <p className="relative mt-3 text-sm leading-6 text-zinc-400 sm:text-[15px] sm:leading-7">
                  {item.description}
                </p>

                {/* Future indicator */}
                <div className="relative mt-6 flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-purple-400/70" />

                  <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-zinc-600">
                    Planned
                  </span>
                </div>

                {/* Number */}
                <span
                  aria-hidden="true"
                  className="
                    absolute bottom-5 right-6
                    font-mono text-[10px]
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

        {/* ===================================================
            BOTTOM STATEMENT
        ==================================================== */}

        <div className="mt-10 flex items-center justify-center gap-3 text-center">
          <span className="h-px w-8 bg-white/[0.08]" />

          <span className="text-xs text-zinc-600">
            More capabilities are coming
          </span>

          <span className="h-px w-8 bg-white/[0.08]" />
        </div>
      </div>
    </section>
  );
}