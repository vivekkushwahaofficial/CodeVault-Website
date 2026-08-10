import {
  FolderGit2,
  FileText,
  Database,
  ShieldCheck,
  Zap,
  GitBranch,
} from "lucide-react";

const features = [
  {
    icon: GitBranch,
    title: "GitHub Sync",
    description:
      "Automatically push every accepted solution directly to GitHub.",
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
    icon: Zap,
    title: "One Click Setup",
    description:
      "Authenticate with GitHub once and let CodeVault handle everything afterwards.",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="relative overflow-hidden border-t border-white/[0.06] px-5 py-24 sm:px-6 sm:py-28 lg:px-8 lg:py-32"
    >
      {/* =====================================================
          SUBTLE BACKGROUND
      ====================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute left-1/2 top-20
          h-[420px] w-[650px]
          -translate-x-1/2
          rounded-full
          bg-purple-600/[0.035]
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
              Features
            </span>

            <span
              aria-hidden="true"
              className="h-px w-8 bg-purple-400/60"
            />
          </div>

          {/* Heading */}
          <h2 className="mt-5 text-4xl font-bold tracking-[-0.035em] text-white sm:text-5xl lg:text-[3.4rem]">
            Everything You Need
          </h2>

          {/* Description */}
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-zinc-400 sm:text-base sm:leading-8">
            CodeVault automates your coding portfolio, GitHub repository,
            and solution management with zero repetitive work.
          </p>
        </div>

        {/* ===================================================
            FEATURE GRID
        ==================================================== */}

        <div className="mt-14 grid gap-4 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <article
                key={feature.title}
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
                    HOVER ACCENT
                ================================================== */}

                <div
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute -right-16 -top-16
                    h-32 w-32
                    rounded-full
                    bg-purple-500/[0.06]
                    blur-3xl
                    opacity-0
                    transition-opacity duration-500
                    group-hover:opacity-100
                  "
                />

                {/* Top accent line */}
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
                    bg-purple-500/[0.07]
                    text-purple-300
                    transition-all duration-300
                    group-hover:border-purple-400/30
                    group-hover:bg-purple-500/[0.12]
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

                <h3 className="mt-6 text-lg font-semibold tracking-tight text-white sm:text-xl">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-zinc-400 sm:text-[15px] sm:leading-7">
                  {feature.description}
                </p>

                {/* Feature number */}
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
            Built to remove repetitive developer workflow
          </span>

          <span className="h-px w-8 bg-white/[0.08]" />
        </div>
      </div>
    </section>
  );
}