import {
  CheckCircle2,
  Clock3,
  Code2,
  Trophy,
  BookOpen,
  Terminal,
} from "lucide-react";

const platforms = [
  {
    title: "LeetCode",
    description:
      "Automatically detect accepted submissions and sync solutions directly to GitHub.",
    icon: CheckCircle2,
    status: "Supported",
    supported: true,
  },
  {
    title: "GeeksforGeeks",
    description:
      "Capture accepted solutions, metadata, and organize them automatically in GitHub.",
    icon: BookOpen,
    status: "Supported",
    supported: true,
  },
  {
    title: "HackerRank",
    description:
      "Detect accepted submissions and synchronize your coding solutions automatically.",
    icon: Terminal,
    status: "Supported",
    supported: true,
  },
  {
    title: "Codeforces",
    description:
      "Competitive programming support planned for an upcoming CodeVault release.",
    icon: Trophy,
    status: "Coming Soon",
    supported: false,
  },
  {
    title: "CodeChef",
    description:
      "Contest and practice solutions will be synchronized automatically.",
    icon: Code2,
    status: "Coming Soon",
    supported: false,
  },
  {
    title: "AtCoder",
    description:
      "International competitive programming support planned for future releases.",
    icon: Clock3,
    status: "Coming Soon",
    supported: false,
  },
];

export default function Platforms() {
  return (
    <section
      id="platforms"
      className="relative overflow-hidden border-t border-white/[0.06] px-5 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28"
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
              Supported Platforms
            </span>

            <span
              aria-hidden="true"
              className="h-px w-7 bg-purple-400/60"
            />
          </div>

          <h2 className="mt-4 text-4xl font-bold tracking-[-0.04em] text-white sm:text-5xl lg:text-[3.25rem]">
            One Extension.
            <br />
            <span className="text-purple-300">
              Every Coding Platform.
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-zinc-400 sm:text-base sm:leading-8">
            Start with LeetCode, GeeksforGeeks, and HackerRank today.
            More platforms are being added as CodeVault evolves.
          </p>
        </div>

        {/* Platform Grid */}
        <div className="mt-12 grid gap-4 sm:mt-14 md:grid-cols-2 xl:grid-cols-3">
          {platforms.map((platform, index) => {
            const Icon = platform.icon;

            return (
              <article
                key={platform.title}
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

                {/* Header */}
                <div className="relative flex items-center justify-between gap-3">

                  <div
                    className={`
                      flex h-10 w-10 items-center justify-center
                      rounded-xl border
                      transition-all duration-300
                      ${platform.supported
                        ? "border-emerald-400/15 bg-emerald-400/[0.05] text-emerald-400 group-hover:bg-emerald-400/[0.08]"
                        : "border-purple-400/15 bg-purple-400/[0.05] text-purple-300 group-hover:bg-purple-400/[0.08]"
                      }
                    `}
                  >
                    <Icon
                      size={18}
                      strokeWidth={1.8}
                      aria-hidden="true"
                      className="transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>

                  <span
                    className={`
                      inline-flex items-center gap-1.5
                      rounded-full border
                      px-2.5 py-1
                      text-[10px] font-semibold
                      tracking-wide
                      ${platform.supported
                        ? "border-emerald-400/15 bg-emerald-400/[0.05] text-emerald-400"
                        : "border-purple-400/15 bg-purple-400/[0.05] text-purple-300"
                      }
                    `}
                  >
                    {platform.supported ? (
                      <CheckCircle2 size={10} aria-hidden="true" />
                    ) : (
                      <Clock3 size={10} aria-hidden="true" />
                    )}

                    {platform.status}
                  </span>
                </div>

                {/* Content */}
                <h3 className="relative mt-5 text-lg font-semibold tracking-tight text-white sm:text-xl">
                  {platform.title}
                </h3>

                <p className="relative mt-2.5 max-w-[32rem] text-sm leading-6 text-zinc-400">
                  {platform.description}
                </p>

                {/* Index */}
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

        {/* Legend */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[11px] text-zinc-500">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Currently supported
          </div>

          <span className="hidden h-3 w-px bg-white/10 sm:block" />

          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-purple-400" />
            Coming in future releases
          </div>
        </div>
      </div>
    </section>
  );
}