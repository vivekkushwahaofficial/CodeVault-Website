import { GitBranch, Download } from "lucide-react";

export default function CTA() {
  return (
    <section
      id="download"
      className="border-t border-white/10 bg-[#0b0b0f] py-24"
    >
      <div className="mx-auto max-w-5xl px-6 text-center">
        <span className="text-sm font-semibold uppercase tracking-[0.35em] text-purple-400">
          Get Started
        </span>

        <h2 className="mt-6 text-5xl font-bold tracking-tight text-white md:text-6xl">
          Ready to Automate
          <br />
          Your Coding Journey?
        </h2>

        <p className="mx-auto mt-8 max-w-3xl text-base leading-8 text-zinc-400 md:text-lg">
          Stop manually organizing coding solutions. Install CodeVault and let
          every accepted submission be automatically synchronized with your
          GitHub portfolio.
        </p>

        <div className="mt-14 flex flex-col justify-center gap-4 sm:flex-row sm:gap-5">
          <a
            href="https://github.com/vivekkushwahaofficial/CodeVault/releases/latest"
            className="inline-flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 px-7 py-4 text-base font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(168,85,247,0.3)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500/70 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
          >
            <Download size={18} />
            Download Extension
          </a>

          <a
            href="https://github.com/vivekkushwahaofficial/CodeVault"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-7 py-4 text-base font-semibold text-white transition-all duration-300 hover:border-purple-500/60 hover:bg-white/10 hover:shadow-[0_0_24px_rgba(168,85,247,0.15)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500/70 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
          >
            <GitBranch size={18} />
            Star on GitHub
          </a>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-3xl font-bold tracking-tight text-white">1+</h3>
            <p className="mt-2 text-zinc-400">
              Supported Platform
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-bold tracking-tight text-white">100%</h3>
            <p className="mt-2 text-zinc-400">
              Open Source
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-bold tracking-tight text-white">∞</h3>
            <p className="mt-2 text-zinc-400">
              Future Possibilities
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}