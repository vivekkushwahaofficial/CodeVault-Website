import { ArrowRight, Check, GitBranch, Search, Upload } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Solve on a Supported Platform",
    description:
      "Solve and submit a coding problem normally on LeetCode, GeeksforGeeks, or HackerRank.",
    icon: Search,
  },
  {
    number: "02",
    title: "CodeVault Detects",
    description:
      "The extension automatically detects an accepted submission and extracts your solution and problem metadata.",
    icon: GitBranch,
  },
  {
    number: "03",
    title: "Push to GitHub",
    description:
      "CodeVault organizes your solution, prevents duplicate syncs, commits the files, and pushes them directly to your GitHub repository.",
    icon: Upload,
  },
];

export default function Roadmap() {
  return (
    <section
      id="roadmap"
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
          absolute left-1/2 top-24
          h-[420px] w-[650px]
          -translate-x-1/2
          rounded-full
          bg-purple-600/[0.025]
          blur-[120px]
        "
      />

      <div className="relative mx-auto max-w-7xl">

        {/* ===================================================
            HEADER
        ==================================================== */}

        <div className="mx-auto max-w-3xl text-center">

          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2">
            <span
              aria-hidden="true"
              className="h-px w-8 bg-purple-400/60"
            />

            <span className="text-xs font-semibold uppercase tracking-[0.28em] text-purple-400">
              Workflow
            </span>

            <span
              aria-hidden="true"
              className="h-px w-8 bg-purple-400/60"
            />
          </div>

          {/* Heading */}
          <h2 className="mt-5 text-4xl font-bold tracking-[-0.035em] text-white sm:text-5xl lg:text-[3.4rem]">
            Three Simple Steps
          </h2>

          {/* Description */}
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-zinc-400 sm:text-base sm:leading-8">
            Keep solving coding problems as usual. CodeVault automates
            everything after your submission is accepted.
          </p>
        </div>

        {/* ===================================================
            WORKFLOW
        ==================================================== */}

        <div className="relative mt-14 sm:mt-16">

          {/* Desktop connecting line */}
          <div
            aria-hidden="true"
            className="
              absolute left-[16.66%] right-[16.66%]
              top-[28px]
              hidden
              h-px
              bg-gradient-to-r
              from-purple-400/20
              via-purple-400/40
              to-purple-400/20
              md:block
            "
          />

          <div className="grid gap-5 md:grid-cols-3 md:gap-6">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <article
                  key={step.number}
                  className="
                    group relative
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

                  {/* =================================================
                      STEP HEADER
                  ================================================== */}

                  <div className="relative flex items-center justify-between">

                    {/* Step number */}
                    <div
                      className="
                        relative z-10
                        flex h-14 w-14
                        items-center justify-center
                        rounded-full
                        border border-purple-400/20
                        bg-[#151515]
                        text-sm font-semibold
                        text-purple-300
                        shadow-[0_0_0_6px_#151515]
                        transition-all duration-300
                        group-hover:border-purple-400/40
                        group-hover:bg-purple-500/[0.08]
                      "
                    >
                      {step.number}
                    </div>

                    {/* Icon */}
                    <div
                      className="
                        flex h-10 w-10
                        items-center justify-center
                        rounded-xl
                        border border-white/[0.07]
                        bg-white/[0.025]
                        text-zinc-500
                        transition-all duration-300
                        group-hover:border-purple-400/20
                        group-hover:text-purple-300
                      "
                    >
                      <Icon
                        size={18}
                        strokeWidth={1.8}
                        aria-hidden="true"
                      />
                    </div>
                  </div>

                  {/* =================================================
                      CONTENT
                  ================================================== */}

                  <h3 className="mt-7 text-xl font-semibold tracking-tight text-white">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-zinc-400 sm:text-[15px] sm:leading-7">
                    {step.description}
                  </p>

                  {/* Completed workflow indicator */}
                  <div className="mt-6 flex items-center gap-2">
                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-400/10 text-emerald-400">
                      <Check
                        size={12}
                        strokeWidth={2.5}
                        aria-hidden="true"
                      />
                    </div>

                    <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-zinc-600">
                      Automated
                    </span>
                  </div>

                  {/* Mobile arrow */}
                  {index !== steps.length - 1 && (
                    <div
                      aria-hidden="true"
                      className="
                        mt-5
                        flex justify-center
                        text-purple-400/50
                        md:hidden
                      "
                    >
                      <ArrowRight size={18} />
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        </div>

        {/* ===================================================
            BOTTOM FLOW
        ==================================================== */}

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
          <span className="text-xs text-zinc-600">
            Solve
          </span>

          <ArrowRight
            size={14}
            className="hidden text-purple-400/50 sm:block"
            aria-hidden="true"
          />

          <span className="text-xs text-purple-300">
            Detect & Organize
          </span>

          <ArrowRight
            size={14}
            className="hidden text-purple-400/50 sm:block"
            aria-hidden="true"
          />

          <span className="text-xs text-zinc-600">
            Push to GitHub
          </span>
        </div>
      </div>
    </section>
  );
}