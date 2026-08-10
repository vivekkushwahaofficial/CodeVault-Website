import { ArrowUpRight, Download, GitBranch } from "lucide-react";

const RELEASE_URL =
  "https://github.com/vivekkushwahaofficial/CodeVault/releases/latest";

const GITHUB_URL =
  "https://github.com/vivekkushwahaofficial/CodeVault";

export default function CTA() {
  return (
    <section
      id="download"
      className="
        relative overflow-hidden
        border-t border-white/[0.06]
        px-5 py-24
        sm:px-6 sm:py-28
        lg:px-8 lg:py-32
      "
    >
      {/* =====================================================
          AMBIENT PURPLE GLOW
      ====================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute left-1/2 top-1/2
          h-[420px] w-[700px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-purple-600/[0.045]
          blur-[130px]
        "
      />

      <div className="relative mx-auto max-w-5xl">

        {/* ===================================================
            CTA CONTAINER
        ==================================================== */}

        <div
          className="
            relative overflow-hidden
            rounded-[28px]
            border border-purple-400/[0.12]
            bg-[#111113]
            px-6 py-12
            text-center
            shadow-[0_30px_100px_rgba(0,0,0,0.35)]
            sm:px-10 sm:py-16
            lg:px-16 lg:py-20
          "
        >
          {/* Top accent */}
          <div
            aria-hidden="true"
            className="
              absolute left-1/2 top-0
              h-px w-24
              -translate-x-1/2
              bg-purple-400/70
            "
          />

          {/* Subtle inner glow */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute left-1/2 top-0
              h-48 w-72
              -translate-x-1/2
              rounded-full
              bg-purple-500/[0.06]
              blur-3xl
            "
          />

          {/* =================================================
              EYEBROW
          ================================================== */}

          <div className="relative inline-flex items-center gap-2">
            <span
              aria-hidden="true"
              className="h-px w-7 bg-purple-400/50"
            />

            <span className="text-xs font-semibold uppercase tracking-[0.28em] text-purple-400">
              Get Started
            </span>

            <span
              aria-hidden="true"
              className="h-px w-7 bg-purple-400/50"
            />
          </div>

          {/* =================================================
              HEADING
          ================================================== */}

          <h2
            className="
              relative mt-6
              text-4xl font-bold
              leading-[1.05]
              tracking-[-0.04em]
              text-white
              sm:text-5xl
              lg:text-6xl
          "
          >
            Ready to automate
            <br className="hidden sm:block" />
            <span className="text-purple-300">
              your coding workflow?
            </span>
          </h2>

          {/* =================================================
              DESCRIPTION
          ================================================== */}

          <p
            className="
              relative mx-auto mt-6
              max-w-2xl
              text-sm leading-7
              text-zinc-400
              sm:text-base sm:leading-8
          "
          >
            Stop manually organizing coding solutions. Install CodeVault
            and let every accepted submission be automatically synchronized
            with your GitHub portfolio.
          </p>

          {/* =================================================
              BUTTONS
          ================================================== */}

          <div className="relative mt-9 flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">

            {/* Download */}
            <a
              href={RELEASE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                inline-flex items-center justify-center gap-2.5
                rounded-xl
                bg-purple-500
                px-6 py-3.5
                text-sm font-semibold
                text-white
                shadow-[0_8px_30px_rgba(168,85,247,0.18)]
                transition-all duration-300
                hover:-translate-y-0.5
                hover:bg-purple-400
                hover:shadow-[0_12px_35px_rgba(168,85,247,0.28)]
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-purple-400
                focus-visible:ring-offset-2
                focus-visible:ring-offset-[#111113]
              "
            >
              <Download
                size={17}
                strokeWidth={2.2}
                className="
                  transition-transform duration-300
                  group-hover:-translate-y-0.5
                "
              />

              Download Extension

              <ArrowUpRight
                size={15}
                className="
                  transition-transform duration-300
                  group-hover:translate-x-0.5
                  group-hover:-translate-y-0.5
                "
              />
            </a>

            {/* GitHub */}
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                inline-flex items-center justify-center gap-2.5
                rounded-xl
                border border-white/[0.1]
                bg-white/[0.035]
                px-6 py-3.5
                text-sm font-semibold
                text-zinc-200
                transition-all duration-300
                hover:-translate-y-0.5
                hover:border-purple-400/30
                hover:bg-white/[0.06]
                hover:text-white
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-purple-400
                focus-visible:ring-offset-2
                focus-visible:ring-offset-[#111113]
              "
            >
              <GitBranch
                size={17}
                className="
                  transition-transform duration-300
                  group-hover:scale-105
                "
              />

              View on GitHub

              <ArrowUpRight
                size={15}
                className="
                  transition-transform duration-300
                  group-hover:translate-x-0.5
                  group-hover:-translate-y-0.5
                "
              />
            </a>
          </div>

          {/* =================================================
              TRUST / PRODUCT INFO
          ================================================== */}

          <div
            className="
              relative mx-auto mt-12
              grid max-w-2xl
              grid-cols-1
              divide-y divide-white/[0.07]
              border-y border-white/[0.07]
              sm:grid-cols-3
              sm:divide-x sm:divide-y-0
            "
          >
            {/* Platforms */}
            <div className="px-4 py-5 sm:py-6">
              <p className="text-2xl font-semibold tracking-tight text-white">
                3
              </p>

              <p className="mt-1.5 text-xs text-zinc-500">
                Supported Platforms
              </p>
            </div>

            {/* Open Source */}
            <div className="px-4 py-5 sm:py-6">
              <p className="text-2xl font-semibold tracking-tight text-white">
                Open
              </p>

              <p className="mt-1.5 text-xs text-zinc-500">
                Source Project
              </p>
            </div>

            {/* GitHub */}
            <div className="px-4 py-5 sm:py-6">
              <p className="text-2xl font-semibold tracking-tight text-white">
                GitHub
              </p>

              <p className="mt-1.5 text-xs text-zinc-500">
                Developer First
              </p>
            </div>
          </div>

          {/* =================================================
              BOTTOM MESSAGE
          ================================================== */}

          <p className="relative mt-7 text-xs text-zinc-600">
            Solve problems. CodeVault handles the rest.
          </p>
        </div>
      </div>
    </section>
  );
}