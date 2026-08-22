import { ArrowRight, CheckCircle2, Download } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const GITHUB_URL =
  "https://github.com/vivekkushwahaofficial/CodeVault";

const RELEASE_URL =
  "https://github.com/vivekkushwahaofficial/CodeVault/releases/latest";

export default function CTA() {
  return (
    <section
      id="download"
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
          bg-purple-600/[0.045]
          blur-[120px]
        "
      />

      <div className="relative mx-auto max-w-5xl">
        <div
          className="
            relative overflow-hidden
            rounded-[28px]
            border border-white/[0.08]
            bg-white/[0.02]
            px-6 py-10
            text-center
            shadow-[0_30px_100px_rgba(0,0,0,0.3)]
            sm:px-10 sm:py-14
            lg:px-16 lg:py-16
          "
        >
          {/* Inner glow */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute left-1/2 top-0
              h-40 w-96
              -translate-x-1/2
              rounded-full
              bg-purple-500/[0.07]
              blur-[90px]
            "
          />

          {/* Label */}
          <div className="relative inline-flex items-center gap-3">
            <span
              aria-hidden="true"
              className="h-px w-7 bg-purple-400/60"
            />

            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-purple-400 sm:text-xs">
              Get Started
            </span>

            <span
              aria-hidden="true"
              className="h-px w-7 bg-purple-400/60"
            />
          </div>

          {/* Heading */}
          <h2
            className="
              relative mx-auto mt-5
              max-w-3xl
              text-3xl font-bold
              tracking-[-0.04em]
              text-white
              sm:text-4xl
              lg:text-5xl
            "
          >
            Ready to organize
            <br />
            <span className="text-purple-300">
              your coding journey?
            </span>
          </h2>

          {/* Description */}
          <p
            className="
              relative mx-auto mt-5
              max-w-2xl
              text-sm leading-7
              text-zinc-400
              sm:text-base sm:leading-8
            "
          >
            Let CodeVault automatically detect, organize, and synchronize
            your accepted coding solutions while you focus on solving problems.
          </p>

          {/* Actions */}
          <div
            className="
              relative mt-8
              flex flex-col
              items-stretch justify-center
              gap-3
              sm:flex-row sm:items-center
            "
          >
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
                focus-visible:ring-offset-black
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

              <ArrowRight
                size={16}
                className="
                  transition-transform duration-300
                  group-hover:translate-x-0.5
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
                border border-white/10
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
                focus-visible:ring-offset-black
              "
            >
              <FaGithub
                size={17}
                className="
    transition-transform duration-300
    group-hover:scale-105
  "
              />

              View on GitHub

              <ArrowRight
                size={16}
                className="
                  transition-transform duration-300
                  group-hover:translate-x-0.5
                "
              />
            </a>
          </div>

          {/* Trust points */}
          <div
            className="
              relative mt-8
              flex flex-wrap
              items-center justify-center
              gap-x-6 gap-y-2
              text-[10px]
              uppercase tracking-[0.16em]
              text-zinc-600
              sm:text-[11px]
            "
          >
            <span className="inline-flex items-center gap-2">
              <CheckCircle2
                size={13}
                className="text-emerald-400"
                aria-hidden="true"
              />
              GitHub Sync
            </span>

            <span className="hidden h-3 w-px bg-white/10 sm:block" />

            <span className="inline-flex items-center gap-2">
              <CheckCircle2
                size={13}
                className="text-emerald-400"
                aria-hidden="true"
              />
              Multi-Platform
            </span>

            <span className="hidden h-3 w-px bg-white/10 sm:block" />

            <span className="inline-flex items-center gap-2">
              <CheckCircle2
                size={13}
                className="text-emerald-400"
                aria-hidden="true"
              />
              Portfolio Ready
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}