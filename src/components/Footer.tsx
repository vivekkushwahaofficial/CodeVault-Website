import { FaGithub } from "react-icons/fa6";
import { Link } from "react-router-dom";

const GITHUB =
  "https://github.com/vivekkushwahaofficial/CodeVault";

const GITLAB =
  "https://gitlab.com/vivekkushwahaofficial/codevault";

const OWNER_PROFILE =
  "https://vivekkushwahaofficial.tech/";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#151515] text-white">
      <div className="mx-auto max-w-7xl px-6 pt-10 pb-4 sm:px-8 lg:px-10 lg:pt-12 lg:pb-5">
        {/* =====================================================
            TOP FOOTER
        ====================================================== */}

        <div className="grid gap-8 md:grid-cols-[1.5fr_1fr_1fr] lg:gap-12">
          {/* Brand */}
          <div>
            <a
              href="/"
              aria-label="CodeVault Home"
              className="group inline-flex items-center gap-3"
            >
              <img
                src="/logo.png"
                alt="CodeVault logo"
                className="
                  h-10 w-10
                  object-contain
                  transition-transform duration-300
                  group-hover:scale-105
                "
              />

              <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                CodeVault
              </h2>
            </a>

            <p className="mt-4 max-w-md text-sm leading-7 text-zinc-400 sm:text-[15px]">
              Automatically organize and sync your coding solutions from
              LeetCode, GeeksforGeeks, and HackerRank directly to GitHub.
            </p>

            {/* GitHub */}
            <a
              href={GITHUB}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open CodeVault GitHub repository"
              className="
                mt-6 inline-flex h-10 w-10
                items-center justify-center
                rounded-xl
                border border-white/10
                bg-zinc-900/80
                text-white
                transition-all duration-300
                hover:-translate-y-0.5
                hover:border-purple-400/40
                hover:bg-purple-500/10
                hover:text-purple-300
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-purple-400
                focus-visible:ring-offset-2
                focus-visible:ring-offset-[#151515]
              "
            >
              <FaGithub size={18} />
            </a>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-[10px] font-semibold uppercase tracking-[0.3em] text-purple-400 sm:text-xs">
              Product
            </h3>

            <ul className="mt-5 space-y-3 text-sm text-zinc-400">
              <li>
                <a
                  href="#features"
                  className="transition-colors duration-200 hover:text-white"
                >
                  Features
                </a>
              </li>

              <li>
                <a
                  href="#platforms"
                  className="transition-colors duration-200 hover:text-white"
                >
                  Platforms
                </a>
              </li>

              <li>
                <a
                  href="#roadmap"
                  className="transition-colors duration-200 hover:text-white"
                >
                  Roadmap
                </a>
              </li>

              <li>
                <a
                  href="#download"
                  className="transition-colors duration-200 hover:text-white"
                >
                  Download
                </a>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="text-[10px] font-semibold uppercase tracking-[0.3em] text-purple-400 sm:text-xs">
              Community
            </h3>

            <ul className="mt-5 space-y-3 text-sm text-zinc-400">
              <li>
                <a
                  href={GITHUB}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors duration-200 hover:text-white"
                >
                  GitHub
                </a>
              </li>

              <li>
                <a
                  href={GITLAB}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors duration-200 hover:text-white"
                >
                  GitLab
                </a>
              </li>

              <li>
                <a
                  href={`${GITHUB}/issues`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors duration-200 hover:text-white"
                >
                  Issues
                </a>
              </li>

              <li>
                <a
                  href={`${GITHUB}/releases`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors duration-200 hover:text-white"
                >
                  Releases
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* =====================================================
            OWNER SECTION
        ====================================================== */}

        <div className="mt-10 border-t border-white/10 pt-8 lg:mt-12 lg:pt-10">
          <div
            className="
              group relative overflow-hidden
              rounded-2xl
              border border-white/[0.08]
              bg-white/[0.02]
              px-5 py-5
              transition-all duration-300
              hover:border-purple-400/20
              hover:bg-white/[0.035]
              sm:px-6 sm:py-6
              lg:px-7
            "
          >
            {/* Subtle glow */}
            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute -right-16 -top-16
                h-32 w-32
                rounded-full
                bg-purple-500/[0.05]
                blur-3xl
                opacity-70
                transition-opacity duration-500
                group-hover:opacity-100
              "
            />

            {/* Label */}
            <p className="relative text-[10px] font-semibold uppercase tracking-[0.3em] text-purple-400 sm:text-xs">
              Owner
            </p>

            {/* Owner Content */}
            <div
              className="
                relative mt-5
                grid gap-5
                lg:grid-cols-[auto_1fr_auto]
                lg:items-center
                lg:gap-8
              "
            >
              {/* Profile */}
              <div className="flex items-center gap-3.5">
                <img
                  src="/profile.png"
                  alt="Vivek Kumar"
                  className="
                    h-12 w-12
                    rounded-xl
                    border border-white/10
                    object-cover
                    shadow-lg shadow-black/20
                  "
                />

                <div>
                  <h3 className="text-sm font-semibold text-white sm:text-base">
                    Vivek Kumar
                  </h3>

                  <p className="mt-0.5 text-xs text-zinc-400 sm:text-sm">
                    Founder & Maintainer
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="max-w-2xl text-sm leading-6 text-zinc-400">
                Building CodeVault to help developers organize and sync
                coding solutions automatically.
              </p>

              {/* Profile Link */}
              <a
                href={OWNER_PROFILE}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group/link inline-flex
                  items-center
                  text-sm font-medium
                  text-purple-400
                  transition-colors duration-200
                  hover:text-purple-300
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-purple-400
                  focus-visible:ring-offset-4
                  focus-visible:ring-offset-[#151515]
                "
              >
                <span>View Owner Profile</span>

                <span
                  aria-hidden="true"
                  className="
                    ml-2
                    transition-transform duration-200
                    group-hover/link:translate-x-1
                  "
                >
                  →
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* =====================================================
            BOTTOM FOOTER
        ====================================================== */}

        <div className="mt-8 border-t border-white/10 pt-5 lg:mt-10">
          <div
            className="
              flex flex-col gap-4
              text-center text-xs text-zinc-500
              md:flex-row
              md:items-center
              md:justify-between
              md:text-left
            "
          >
            <p>
              © {new Date().getFullYear()} CodeVault. All rights reserved.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 md:justify-end">
              <Link
                to="/privacy"
                className="transition-colors duration-200 hover:text-white"
              >
                Privacy Policy
              </Link>

              <a
                href={GITHUB}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-200 hover:text-white"
              >
                GitHub
              </a>

              <span>Apache License 2.0</span>

              <span>Built for Developers</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}