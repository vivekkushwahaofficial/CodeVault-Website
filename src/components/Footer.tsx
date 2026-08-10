import { FaGithub } from "react-icons/fa6";
import { Link } from "react-router-dom";

const GITHUB =
  "https://github.com/vivekkushwahaofficial/CodeVault";

const OWNER_PROFILE =
  "https://vivekkushwahaofficial.tech/";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#151515] text-white">
      <div className="mx-auto max-w-7xl px-6 py-14 sm:px-8 lg:px-10 lg:py-16">

        {/* =====================================================
            TOP FOOTER
        ====================================================== */}

        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr] lg:gap-16">

          {/* ===================================================
              BRAND
          =================================================== */}

          <div>
            {/* Logo + Brand */}
            <a
              href="/"
              aria-label="CodeVault Home"
              className="group inline-flex items-center gap-3"
            >
              <img
                src="/logo.png"
                alt="CodeVault logo"
                className="h-11 w-11 object-contain transition-transform duration-300 group-hover:scale-105"
              />

              <h2 className="text-3xl font-bold tracking-tight text-white">
                CodeVault
              </h2>
            </a>

            {/* Description */}
            <p className="mt-5 max-w-md text-sm leading-7 text-zinc-400 sm:text-[15px]">
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
                mt-7 inline-flex h-11 w-11 items-center justify-center
                rounded-xl border border-white/10
                bg-zinc-900/80 text-white
                transition-all duration-300
                hover:-translate-y-1
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
              <FaGithub size={19} />
            </a>
          </div>

          {/* ===================================================
              PRODUCT
          =================================================== */}

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.32em] text-purple-400">
              Product
            </h3>

            <ul className="mt-6 space-y-4 text-sm text-zinc-400">
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

          {/* ===================================================
              COMMUNITY
          =================================================== */}

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.32em] text-purple-400">
              Community
            </h3>

            <ul className="mt-6 space-y-4 text-sm text-zinc-400">
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

        <div className="mt-12 border-t border-white/10 pt-10 lg:mt-14 lg:pt-12">

          <div
            className="
              group relative overflow-hidden
              rounded-2xl border border-white/10
              bg-white/[0.025]
              px-5 py-6
              transition-all duration-300
              hover:border-purple-400/20
              hover:bg-white/[0.035]
              sm:px-7 sm:py-7
              lg:px-8
            "
          >
            {/* Subtle purple glow */}
            <div
              className="
                pointer-events-none absolute
                -right-20 -top-20
                h-40 w-40
                rounded-full
                bg-purple-500/[0.05]
                blur-3xl
                transition-opacity duration-500
                group-hover:bg-purple-500/[0.08]
              "
            />

            {/* Owner Label */}
            <p className="relative text-xs font-semibold uppercase tracking-[0.32em] text-purple-400">
              Owner
            </p>

            {/* Owner Content */}
            <div
              className="
                relative mt-6
                grid gap-6
                lg:grid-cols-[auto_1fr_auto]
                lg:items-center
                lg:gap-10
              "
            >

              {/* =================================================
                  PROFILE
              ================================================== */}

              <div className="flex items-center gap-4">
                <div className="relative shrink-0">
                  <img
                    src="/profile.png"
                    alt="Vivek Kumar"
                    className="
                      h-14 w-14
                      rounded-xl
                      border border-white/10
                      object-cover
                      shadow-lg shadow-black/20
                    "
                  />

                  {/* Online indicator */}
                  {/* <span
                    className="
                      absolute -bottom-1 -right-1
                      h-3 w-3
                      rounded-full
                      border-2
                      border-[#151515]
                      bg-emerald-400
                    "
                    aria-hidden="true"
                  /> */}
                </div>

                <div>
                  <h3 className="text-base font-semibold text-white">
                    Vivek Kumar
                  </h3>

                  <p className="mt-1 text-sm text-zinc-400">
                    Founder & Maintainer
                  </p>
                </div>
              </div>

              {/* =================================================
                  OWNER DESCRIPTION
              ================================================== */}

              <p className="max-w-2xl text-sm leading-6 text-zinc-400">
                Building CodeVault to help developers organize and sync
                coding solutions automatically.
              </p>

              {/* =================================================
                  OWNER PROFILE LINK
              ================================================== */}

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
                  className="
                    ml-2
                    transition-transform duration-200
                    group-hover/link:translate-x-1
                  "
                  aria-hidden="true"
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

        <div className="mt-10 border-t border-white/10 pt-6 lg:mt-12">

          <div
            className="
              flex flex-col gap-5
              text-center text-sm text-zinc-500
              md:flex-row
              md:items-center
              md:justify-between
              md:text-left
            "
          >
            {/* Copyright */}
            <p>
              © {new Date().getFullYear()} CodeVault. All rights reserved.
            </p>

            {/* Bottom Links */}
            <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-3 md:justify-end">
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

              <span>MIT License</span>

              <span>Built for Developers</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}