import {
  GitBranch,
  Mail,
  Heart,
  ExternalLink,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#09090b]">
      <div className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-12 md:grid-cols-4">

          {/* Brand */}
          <div className="md:col-span-2">
            <h2 className="text-2xl font-semibold tracking-tight text-white">
              🚀 CodeVault
            </h2>

            <p className="mt-5 max-w-md text-base leading-8 text-zinc-400">
              Automatically organize, version and synchronize your coding
              solutions from LeetCode and other coding platforms directly to
              GitHub.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-white">
              Product
            </h3>

            <ul className="mt-5 space-y-3 text-sm text-zinc-400">
              <li>
                <a href="#features" className="transition-colors hover:text-white">
                  Features
                </a>
              </li>

              <li>
                <a href="#roadmap" className="transition-colors hover:text-white">
                  Roadmap
                </a>
              </li>

              <li>
                <a href="#download" className="transition-colors hover:text-white">
                  Download
                </a>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-white">
              Community
            </h3>

            <div className="mt-5 flex flex-col gap-4">

              <a
                href="https://github.com/vivekkushwahaofficial/CodeVault"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500/70 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
              >
                <GitBranch size={16} />
                GitHub
                <ExternalLink size={14} />
              </a>

              <a
                href="https://github.com/vivekkushwahaofficial/CodeVault/issues"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500/70 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
              >
                <Mail size={16} />
                Issues
              </a>

            </div>
          </div>

        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-zinc-500 md:flex-row">

          <p>
            © {new Date().getFullYear()} CodeVault. All rights reserved.
          </p>

          <p className="flex items-center gap-2">
            Built with
            <Heart
              className="text-pink-500"
              size={14}
              fill="currentColor"
            />
            for Developers
          </p>

        </div>

      </div>
    </footer>
  );
}