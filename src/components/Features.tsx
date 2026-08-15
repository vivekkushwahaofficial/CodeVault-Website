import {
  FolderGit2,
  FileText,
  Database,
  ShieldCheck,
  GitBranch,
  BarChart3,
} from "lucide-react";

const features = [
  {
    icon: GitBranch,
    title: "GitHub Sync",
    description:
      "Authenticate with GitHub once and automatically push every accepted solution directly to your repository.",
  },
  {
    icon: FolderGit2,
    title: "Smart Organization",
    description:
      "Organize solutions by platform, difficulty, topic and programming language.",
  },
  {
    icon: FileText,
    title: "README Generator",
    description:
      "Keep your repository updated with statistics, badges and progress automatically.",
  },
  {
    icon: Database,
    title: "Metadata Extraction",
    description:
      "Capture problem name, tags, difficulty, language and submission date.",
  },
  {
    icon: ShieldCheck,
    title: "Duplicate Detection",
    description:
      "Never commit the same solution twice. CodeVault detects duplicates automatically.",
  },
  {
    icon: BarChart3,
    title: "Portfolio Statistics",
    description:
      "Automatically track Basic, Easy, Medium and Hard problems with platform, language, pattern and topic statistics.",
  },
];

export default function Features() {
  return (
    <section
      id="features"
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
              Features
            </span>

            <span
              aria-hidden="true"
              className="h-px w-7 bg-purple-400/60"
            />
          </div>

          <h2 className="mt-4 text-4xl font-bold tracking-[-0.04em] text-white sm:text-5xl lg:text-[3.25rem]">
            Everything You Need.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-zinc-400 sm:text-base sm:leading-8">
            CodeVault automates your coding portfolio, GitHub repository,
            and solution management with zero repetitive work.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="mt-12 grid gap-4 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <article
                key={feature.title}
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

                {/* Subtle hover glow */}
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
                  {feature.title}
                </h3>

                <p className="relative mt-2.5 text-sm leading-6 text-zinc-400 sm:text-[15px] sm:leading-7">
                  {feature.description}
                </p>

                {/* Feature number */}
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

        {/* Compact footer line */}
        <div className="mt-8 flex items-center justify-center gap-3">
          <span className="h-px w-6 bg-white/[0.07]" />

          <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-600">
            Less repetition. More coding.
          </span>

          <span className="h-px w-6 bg-white/[0.07]" />
        </div>
      </div>
    </section>
  );
}