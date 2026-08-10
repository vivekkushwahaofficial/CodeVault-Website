import {
  ArrowRight,
  Check,
  GitBranch,
  Search,
  Upload,
} from "lucide-react";

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
      "CodeVault organizes your solution, prevents duplicate syncs, commits the files, and pushes them directly to GitHub.",
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

        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">

          <div className="inline-flex items-center gap-3">
            <span
              aria-hidden="true"
              className="h-px w-7 bg-purple-400/60"
            />

            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-purple-400 sm:text-xs">
              Workflow
            </span>

            <span
              aria-hidden="true"
              className="h-px w-7 bg-purple-400/60"
            />
          </div>

          <h2 className="mt-4 text-4xl font-bold tracking-[-0.04em] text-white sm:text-5xl lg:text-[3.25rem]">
            Three Simple Steps.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-zinc-400 sm:text-base sm:leading-8">
            Keep solving coding problems as usual. CodeVault automates
            everything after your submission is accepted.
          </p>
        </div>

        {/* Workflow */}
        <div className="relative mt-12 sm:mt-14">

          {/* Desktop connecting line */}
          <div
            aria-hidden="true"
            className="
              absolute
              left-[16.66%]
              right-[16.66%]
              top-5
              hidden
              h-px
              bg-gradient-to-r
              from-purple-400/10
              via-purple-400/35
              to-purple-400/10
              md:block
            "
          />

          <div className="grid gap-4 md:grid-cols-3 md:gap-5">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <article
                  key={step.number}
                  className="
                    group relative
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
                  {/* Top accent */}
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

                  {/* Step header */}
                  <div className="relative flex items-center justify-between">

                    {/* Number */}
                    <div
                      className="
                        flex h-11 w-11
                        items-center justify-center
                        rounded-full
                        border border-purple-400/20
                        bg-[#151515]
                        text-xs font-semibold
                        text-purple-300
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
                        flex h-9 w-9
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
                        size={17}
                        strokeWidth={1.8}
                        aria-hidden="true"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="mt-5 text-lg font-semibold tracking-tight text-white sm:text-xl">
                    {step.title}
                  </h3>

                  <p className="mt-2.5 text-sm leading-6 text-zinc-400 sm:text-[15px] sm:leading-7">
                    {step.description}
                  </p>

                  {/* Automated indicator */}
                  <div className="mt-5 flex items-center gap-2">
                    <span
                      className="
                        flex h-5 w-5
                        items-center justify-center
                        rounded-full
                        bg-emerald-400/10
                        text-emerald-400
                      "
                    >
                      <Check
                        size={11}
                        strokeWidth={2.5}
                        aria-hidden="true"
                      />
                    </span>

                    <span className="text-[9px] font-medium uppercase tracking-[0.2em] text-zinc-600">
                      Automated
                    </span>
                  </div>

                  {/* Mobile flow arrow */}
                  {index !== steps.length - 1 && (
                    <div
                      aria-hidden="true"
                      className="
                        mt-4
                        flex justify-center
                        text-purple-400/40
                        md:hidden
                      "
                    >
                      <ArrowRight size={16} />
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}