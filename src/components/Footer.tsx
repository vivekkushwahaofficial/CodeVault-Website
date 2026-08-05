import { FaGithub } from "react-icons/fa6";

const GITHUB = "https://github.com/vivekkushwahaofficial/CodeVault";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#09090b] py-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-3xl border border-white/10 bg-white/5 px-8 py-8 backdrop-blur-xl">

          <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">

            {/* Brand */}
            <div>
              <h2 className="text-3xl font-bold text-white">
                🚀 CodeVault
              </h2>

              <p className="mt-4 max-w-sm text-sm leading-7 text-zinc-400">
                Automatically organize and sync your coding solutions from
                LeetCode directly to GitHub.
              </p>

              <a
                href={GITHUB}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Repository"
                className="mt-6 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-zinc-900 text-white transition hover:border-purple-500 hover:bg-white/10"
              >
                <FaGithub size={18} />
              </a>
            </div>

            {/* Product */}
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.3em] text-purple-400">
                Product
              </h3>

              <ul className="mt-5 space-y-3 text-sm text-zinc-400">
                <li>
                  <a href="#features" className="hover:text-white transition-colors">
                    Features
                  </a>
                </li>

                <li>
                  <a href="#platforms" className="hover:text-white transition-colors">
                    Platforms
                  </a>
                </li>

                <li>
                  <a href="#roadmap" className="hover:text-white transition-colors">
                    Roadmap
                  </a>
                </li>

                <li>
                  <a href="#download" className="hover:text-white transition-colors">
                    Download
                  </a>
                </li>
              </ul>
            </div>

            {/* Community */}
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.3em] text-purple-400">
                Community
              </h3>

              <ul className="mt-5 space-y-3 text-sm text-zinc-400">
                <li>
                  <a
                    href={GITHUB}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    GitHub
                  </a>
                </li>

                <li>
                  <a
                    href={`${GITHUB}/issues`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    Issues
                  </a>
                </li>

                <li>
                  <a
                    href={`${GITHUB}/releases`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    Releases
                  </a>
                </li>
              </ul>
            </div>

          </div>

          <div className="mt-8 border-t border-white/10 pt-5">

            <div className="flex flex-col gap-3 text-center text-sm text-zinc-500 md:flex-row md:items-center md:justify-between">

              <p>
                © {new Date().getFullYear()} CodeVault. All rights reserved.
              </p>

              <p>
                Open Source • MIT License • Built for Developers
              </p>

            </div>

          </div>

        </div>
      </div>
    </footer>
  );
}