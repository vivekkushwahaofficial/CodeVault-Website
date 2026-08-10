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
      "Accepted submissions are detected automatically and pushed directly to your GitHub repository.",
    icon: CheckCircle2,
    status: "Supported",
    statusColor:
      "border-emerald-400/15 bg-emerald-400/[0.06] text-emerald-400",
  },
  {
    title: "GeeksforGeeks",
    description:
      "Accepted submissions are detected automatically and pushed directly to your GitHub repository.",
    icon: BookOpen,
    status: "Supported",
    statusColor:
      "border-emerald-400/15 bg-emerald-400/[0.06] text-emerald-400",
  },
  {
    title: "HackerRank",
    description:
      "Automatically detect accepted submissions and sync your solutions directly to GitHub.",
    icon: Terminal,
    status: "Supported",
    statusColor:
      "border-emerald-400/15 bg-emerald-400/[0.06] text-emerald-400",
  },
  {
    title: "Codeforces",
    description:
      "Competitive programming submissions will be supported in an upcoming release.",
    icon: Trophy,
    status: "Coming Soon",
    statusColor:
      "border-purple-400/15 bg-purple-400/[0.06] text-purple-300",
  },
  {
    title: "CodeChef",
    description:
      "Contest problems and practice solutions will sync automatically.",
    icon: Code2,
    status: "Coming Soon",
    statusColor:
      "border-purple-400/15 bg-purple-400/[0.06] text-purple-300",
  },
  {
    title: "AtCoder",
    description:
      "International competitive programming support is planned for future releases.",
    icon: Clock3,
    status: "Coming Soon",
    statusColor:
      "border-purple-400/15 bg-purple-400/[0.06] text-purple-300",
  },
];

export default function Platforms() {
  return (
    <section
      id="platforms"
      className="relative overflow-hidden border-t border-white/[0.06] px-5 py-24 sm:px-6 sm:py-28 lg:px-8 lg:py-32"
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute right-1/4 top-20
          h-[400px] w-[600px]
          rounded-full
          bg-purple-600/[0.03]
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
              Supported Platforms
            </span>

            <span
              aria-hidden="true"
              className="h-px w-8 bg-purple-400/60"
            />
          </div>

          {/* Heading */}
          <h2 className="mt-5 text-4xl font-bold tracking-[-0.035em] text-white sm:text-5xl lg:text-[3.4rem]">
            One Extension.
            <br />

            <span className="text-purple-300">
              Every Coding Platform.
            </span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-zinc-400 sm:text-base sm:leading-8">
            Start with LeetCode, GeeksforGeeks, and HackerRank today.
            More coding platforms are being added as CodeVault evolves.
          </p>
        </div>

        {/* ===================================================
            PLATFORM GRID
        ==================================================== */}

        <div className="mt-14 grid gap-4 sm:mt-16 md:grid-cols-2 xl:grid-cols-3">
          {platforms.map((platform, index) => {
            const Icon = platform.icon;

            const isSupported =
              platform.status === "Supported";

            return (
              <article
                key={platform.title}
                className="
                  group relative overflow-hidden
                  rounded-2xl
                  border border-white/[0.08]
                  bg-white/[0.025]
                  p-6
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:border-purple-400/25
                  hover:bg-white/[0.04]
                  hover:shadow-[0_20px_60px_rgba(0,0,0,0.25)]
                  sm:p-7
                "
              >
                {/* =================================================
                    TOP ACCENT
                ================================================== */}

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

                {/* Subtle hover glow */}
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
                    ICON + STATUS
                ================================================== */}

                <div className="relative flex items-start justify-between gap-4">

                  {/* Icon */}
                  <div
                    className={`
                      flex h-11 w-11 shrink-0
                      items-center justify-center
                      rounded-xl
                      border
                      transition-all duration-300
                      ${isSupported
                        ? "border-emerald-400/15 bg-emerald-400/[0.06] text-emerald-400 group-hover:border-emerald-400/25 group-hover:bg-emerald-400/[0.09]"
                        : "border-purple-400/15 bg-purple-400/[0.06] text-purple-300 group-hover:border-purple-400/25 group-hover:bg-purple-400/[0.09]"
                      }
                    `}
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

                  {/* Status */}
                  <span
                    className={`
                      inline-flex
                      shrink-0
                      items-center gap-1.5
                      rounded-full
                      border
                      px-2.5 py-1
                      text-[10px]
                      font-semibold
                      tracking-wide
                      ${platform.statusColor}
                    `}
                  >
                    {isSupported ? (
                      <CheckCircle2
                        size={11}
                        aria-hidden="true"
                      />
                    ) : (
                      <Clock3
                        size={11}
                        aria-hidden="true"
                      />
                    )}

                    {platform.status}
                  </span>
                </div>

                {/* =================================================
                    CONTENT
                ================================================== */}

                <h3 className="relative mt-6 text-xl font-semibold tracking-tight text-white">
                  {platform.title}
                </h3>

                <p className="relative mt-3 text-sm leading-6 text-zinc-400 sm:text-[15px] sm:leading-7">
                  {platform.description}
                </p>

                {/* Platform number */}
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
            STATUS LEGEND
        ==================================================== */}

        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs text-zinc-500">
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