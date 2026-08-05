import { GitBranch, Download } from "lucide-react";

export default function CTA() {
  return (
    <section
      id="download"
      className="border-t border-white/10 bg-[#0b0b0f] py-32"
    >
      <div className="mx-auto max-w-5xl px-6 text-center">
        <span className="text-sm font-semibold uppercase tracking-[0.35em] text-purple-400">
          Get Started
        </span>

        <h2 className="mt-6 text-5xl font-bold text-white md:text-6xl">
          Ready to Automate
          <br />
          Your Coding Journey?
        </h2>

        <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-zinc-400">
          Stop manually organizing coding solutions. Install CodeVault and let
          every accepted submission be automatically synchronized with your
          GitHub portfolio.
        </p>

        <div className="mt-14 flex flex-col justify-center gap-5 sm:flex-row">
          <a
            href="#"
            className="inline-flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 px-9 py-5 text-lg font-semibold text-white transition hover:scale-105"
          >
            <Download size={22} />
            Download Extension
          </a>

          <a
            href="https://github.com/vivekkushwahaofficial/CodeVault"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-3 rounded-2xl border border-white/10 px-9 py-5 text-lg font-semibold text-white transition hover:border-purple-500 hover:bg-white/5"
          >
            <GitBranch size={22} />
            Star on GitHub
          </a>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-4xl font-bold text-white">1+</h3>
            <p className="mt-2 text-zinc-400">
              Supported Platform
            </p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-white">100%</h3>
            <p className="mt-2 text-zinc-400">
              Open Source
            </p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-white">∞</h3>
            <p className="mt-2 text-zinc-400">
              Future Possibilities
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}