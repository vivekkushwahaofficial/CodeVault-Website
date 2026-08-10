import { useState } from "react";
import { Link } from "react-router-dom";

import {
  ArrowUpRight,
  Download,
  ExternalLink,
  Menu,
  ShieldCheck,
  X,
} from "lucide-react";

import { FaGithub } from "react-icons/fa6";

const sections = [
  {
    number: "01",
    title: "What CodeVault Does",
    content: (
      <p>
        CodeVault automatically detects accepted coding submissions on
        supported coding platforms and allows users to synchronize their
        solutions to their own GitHub repositories after authenticating
        with GitHub.
      </p>
    ),
  },
  {
    number: "02",
    title: "Information We Collect",
    content: (
      <ul className="list-disc space-y-1.5 pl-5">
        <li>
          GitHub authentication information through GitHub OAuth.
        </li>

        <li>
          Selected GitHub repository and extension preferences.
        </li>

        <li>
          Accepted coding solutions and problem metadata that the user
          chooses to synchronize.
        </li>
      </ul>
    ),
  },
  {
    number: "03",
    title: "How We Use Your Information",
    content: (
      <ul className="list-disc space-y-1.5 pl-5">
        <li>Authenticate your GitHub account.</li>

        <li>
          Upload coding solutions to repositories you select.
        </li>

        <li>
          Remember your extension settings and preferences.
        </li>

        <li>
          Provide the functionality of the extension.
        </li>
      </ul>
    ),
  },
  {
    number: "04",
    title: "Data Storage",
    content: (
      <p>
        Extension settings and authentication state are stored locally in
        your browser. CodeVault does not sell your personal information.
      </p>
    ),
  },
  {
    number: "05",
    title: "Third-Party Services",
    content: (
      <ul className="list-disc space-y-1.5 pl-5">
        <li>GitHub</li>
        <li>GitHub API</li>
        <li>CodeVault Backend</li>
      </ul>
    ),
  },
  {
    number: "06",
    title: "Data Sharing",
    content: (
      <p>
        CodeVault does not sell, rent, or trade your personal information.
        Information is shared only with services necessary to provide the
        extension&apos;s functionality.
      </p>
    ),
  },
  {
    number: "07",
    title: "Security",
    content: (
      <p>
        GitHub authentication is handled securely using GitHub OAuth.
        Access tokens are used only for authorized GitHub operations.
      </p>
    ),
  },
  {
    number: "08",
    title: "Changes to This Policy",
    content: (
      <p>
        This Privacy Policy may be updated as CodeVault evolves. Updates
        will always be published on this page.
      </p>
    ),
  },
];

const GITHUB_URL =
  "https://github.com/vivekkushwahaofficial/CodeVault";

const RELEASE_URL =
  "https://github.com/vivekkushwahaofficial/CodeVault/releases/latest";

export default function Privacy() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#151515] text-white">
      {/* =====================================================
          FIXED NAVBAR
      ====================================================== */}

      <header className="fixed inset-x-0 top-0 z-50 px-4 pt-3 sm:px-6 lg:px-8">
        <div
          className="
            mx-auto flex max-w-[1440px]
            items-center justify-between
            rounded-[24px]
            border border-white/10
            bg-zinc-950/75
            px-4 py-3
            shadow-[0_12px_50px_rgba(0,0,0,0.25)]
            backdrop-blur-2xl
            sm:px-5
          "
        >
          {/* =================================================
              BRAND
          ================================================== */}

          <Link
            to="/"
            onClick={closeMenu}
            aria-label="CodeVault home"
            className="group flex shrink-0 items-center gap-2.5"
          >
            <img
              src="/logo.png"
              alt="CodeVault"
              className="
                h-9 w-9
                object-contain
                transition-transform duration-300
                group-hover:scale-105
                sm:h-10 sm:w-10
              "
            />

            <span className="text-lg font-bold tracking-tight text-white sm:text-xl">
              CodeVault
            </span>
          </Link>

          {/* =================================================
              DESKTOP NAVIGATION
          ================================================== */}

          <nav
            className="
              absolute left-1/2 hidden
              -translate-x-1/2
              items-center gap-1
              md:flex
            "
            aria-label="Main navigation"
          >
            <a
              href="/#features"
              className="
                relative rounded-xl px-4 py-2
                text-sm text-zinc-400
                transition-colors duration-200
                hover:text-white
              "
            >
              Features
            </a>

            <a
              href="/#platforms"
              className="
                relative rounded-xl px-4 py-2
                text-sm text-zinc-400
                transition-colors duration-200
                hover:text-white
              "
            >
              Platforms
            </a>

            <a
              href="/#roadmap"
              className="
                relative rounded-xl px-4 py-2
                text-sm text-zinc-400
                transition-colors duration-200
                hover:text-white
              "
            >
              Roadmap
            </a>

            <a
              href="/#download"
              className="
                relative rounded-xl px-4 py-2
                text-sm text-zinc-400
                transition-colors duration-200
                hover:text-white
              "
            >
              Download
            </a>

            {/* Active Privacy */}

            <Link
              to="/privacy"
              className="
                relative rounded-xl px-4 py-2
                text-sm text-white
              "
            >
              Privacy

              <span
                aria-hidden="true"
                className="
                  absolute bottom-0 left-1/2
                  h-px w-8
                  -translate-x-1/2
                  bg-purple-400
                "
              />
            </Link>
          </nav>

          {/* =================================================
              RIGHT ACTIONS
          ================================================== */}

          <div className="flex items-center gap-2">
            {/* GitHub */}

            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View CodeVault on GitHub"
              className="
                group inline-flex
                h-10 w-10
                items-center justify-center
                rounded-xl
                border border-white/10
                bg-white/[0.03]
                text-zinc-300
                transition-all duration-200
                hover:border-white/20
                hover:bg-white/[0.07]
                hover:text-white
              "
            >
              <FaGithub
                size={18}
                aria-hidden="true"
                className="
                  transition-transform duration-200
                  group-hover:scale-105
                "
              />
            </a>

            {/* Desktop Download */}

            <a
              href={RELEASE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="
                group hidden
                items-center gap-2
                rounded-xl
                border border-white/10
                bg-white/[0.04]
                px-4 py-2.5
                text-sm font-medium
                text-white
                transition-all duration-200
                hover:border-purple-400/40
                hover:bg-white/[0.08]
                md:inline-flex
              "
            >
              <Download
                size={16}
                aria-hidden="true"
                className="
                  transition-transform duration-200
                  group-hover:-translate-y-0.5
                "
              />

              <span>Download</span>

              <ArrowUpRight
                size={15}
                aria-hidden="true"
                className="
                  text-zinc-500
                  transition-all duration-200
                  group-hover:translate-x-0.5
                  group-hover:-translate-y-0.5
                  group-hover:text-purple-300
                "
              />
            </a>

            {/* Mobile Menu */}

            <button
              type="button"
              onClick={() => setIsOpen((previous) => !previous)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              className="
                inline-flex
                h-10 w-10
                items-center justify-center
                rounded-xl
                border border-white/10
                bg-white/[0.03]
                text-zinc-300
                transition-colors
                hover:bg-white/[0.07]
                hover:text-white
                md:hidden
              "
            >
              {isOpen ? <X size={19} /> : <Menu size={19} />}
            </button>
          </div>
        </div>

        {/* =================================================
            MOBILE NAVIGATION
        ================================================== */}

        {isOpen && (
          <div
            className="
              mx-auto mt-2
              max-w-[1440px]
              overflow-hidden
              rounded-[22px]
              border border-white/10
              bg-zinc-950/95
              shadow-[0_20px_60px_rgba(0,0,0,0.4)]
              backdrop-blur-2xl
              md:hidden
            "
          >
            <nav
              className="flex flex-col p-2"
              aria-label="Mobile navigation"
            >
              <a
                href="/#features"
                onClick={closeMenu}
                className="
                  rounded-xl px-4 py-3.5
                  text-sm text-zinc-400
                  transition-colors
                  hover:bg-white/[0.04]
                  hover:text-white
                "
              >
                Features
              </a>

              <a
                href="/#platforms"
                onClick={closeMenu}
                className="
                  rounded-xl px-4 py-3.5
                  text-sm text-zinc-400
                  transition-colors
                  hover:bg-white/[0.04]
                  hover:text-white
                "
              >
                Platforms
              </a>

              <a
                href="/#roadmap"
                onClick={closeMenu}
                className="
                  rounded-xl px-4 py-3.5
                  text-sm text-zinc-400
                  transition-colors
                  hover:bg-white/[0.04]
                  hover:text-white
                "
              >
                Roadmap
              </a>

              <a
                href="/#download"
                onClick={closeMenu}
                className="
                  rounded-xl px-4 py-3.5
                  text-sm text-zinc-400
                  transition-colors
                  hover:bg-white/[0.04]
                  hover:text-white
                "
              >
                Download
              </a>

              <Link
                to="/privacy"
                onClick={closeMenu}
                className="
                  rounded-xl
                  bg-white/[0.06]
                  px-4 py-3.5
                  text-sm text-white
                "
              >
                Privacy
              </Link>

              <div className="my-1 border-t border-white/10" />

              <a
                href={RELEASE_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="
                  m-1 inline-flex
                  items-center justify-center gap-2
                  rounded-xl
                  bg-purple-500
                  px-4 py-3
                  text-sm font-semibold
                  text-white
                  transition-all
                  hover:bg-purple-400
                "
              >
                <Download size={16} />

                Download Extension

                <ArrowUpRight size={15} />
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* =====================================================
          MAIN
      ====================================================== */}

      <main className="relative overflow-hidden">
        {/* Ambient Glow */}

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute left-1/2 top-0
            h-[400px] w-[650px]
            -translate-x-1/2
            rounded-full
            bg-purple-600/[0.025]
            blur-[120px]
          "
        />

        <div
          className="
            relative mx-auto max-w-5xl
            px-5
            pt-32 pb-14
            sm:px-6
            sm:pt-36 sm:pb-16
            lg:px-8
            lg:pt-40 lg:pb-20
          "
        >
          {/* =================================================
              PAGE INTRO
          ================================================== */}

          <div className="max-w-3xl">
            {/* Eyebrow */}

            <div className="inline-flex items-center gap-2">
              <ShieldCheck
                size={14}
                aria-hidden="true"
                className="text-purple-400"
              />

              <span
                className="
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.28em]
                  text-purple-400
                "
              >
                Privacy
              </span>
            </div>

            {/* Heading */}

            <h1
              className="
                mt-4
                text-4xl
                font-bold
                tracking-[-0.04em]
                text-white
                sm:text-5xl
                lg:text-6xl
              "
            >
              Privacy Policy
            </h1>

            {/* Description */}

            <p
              className="
                mt-4
                text-sm
                leading-7
                text-zinc-400
                sm:text-base
              "
            >
              How CodeVault handles information required to provide its
              functionality.
            </p>

            {/* Updated */}

            <div
              className="
                mt-5
                flex items-center gap-3
                text-xs text-zinc-600
              "
            >
              <span className="h-px w-8 bg-white/10" />

              <span>Last Updated: August 2026</span>
            </div>
          </div>

          {/* =================================================
              POLICY CONTENT
          ================================================== */}

          <div
            className="
              mt-8
              overflow-hidden
              rounded-2xl
              border border-white/[0.08]
              bg-white/[0.018]
            "
          >
            {sections.map((section, index) => (
              <section
                key={section.number}
                className={[
                  "relative px-5 py-5 sm:px-7 sm:py-6 lg:px-8",
                  index !== sections.length - 1
                    ? "border-b border-white/[0.07]"
                    : "",
                ].join(" ")}
              >
                <div className="flex items-start gap-4 sm:gap-6">
                  {/* Section Number */}

                  <span
                    aria-hidden="true"
                    className="
                      shrink-0
                      pt-1
                      font-mono
                      text-[10px]
                      tracking-[0.18em]
                      text-purple-400/60
                    "
                  >
                    {section.number}
                  </span>

                  {/* Section Content */}

                  <div className="min-w-0 flex-1">
                    <h2
                      className="
                        text-lg
                        font-semibold
                        tracking-tight
                        text-white
                        sm:text-xl
                      "
                    >
                      {section.title}
                    </h2>

                    <div
                      className="
                        mt-3
                        text-sm
                        leading-6
                        text-zinc-400
                        sm:text-[15px]
                        sm:leading-7
                      "
                    >
                      {section.content}
                    </div>
                  </div>
                </div>
              </section>
            ))}

            {/* =================================================
                CONTACT — 09
            ================================================== */}

            <section className="px-5 py-6 sm:px-7 sm:py-7 lg:px-8">
              <div className="flex items-start gap-4 sm:gap-6">
                {/* Number */}

                <span
                  aria-hidden="true"
                  className="
                    shrink-0
                    pt-1
                    font-mono
                    text-[10px]
                    tracking-[0.18em]
                    text-purple-400/60
                  "
                >
                  09
                </span>

                {/* Content */}

                <div className="min-w-0 flex-1">
                  <h2
                    className="
                      text-lg
                      font-semibold
                      tracking-tight
                      text-white
                      sm:text-xl
                    "
                  >
                    Contact
                  </h2>

                  <div
                    className="
                      mt-4
                      space-y-3
                      text-sm
                      leading-6
                      text-zinc-400
                      sm:text-[15px]
                      sm:leading-7
                    "
                  >
                    {/* Email */}

                    <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-2">
                      <span>Email:</span>

                      <a
                        href="mailto:vivek39101@gmail.com"
                        className="
                          text-purple-400
                          transition-colors
                          hover:text-purple-300
                        "
                      >
                        vivek39101@gmail.com
                      </a>
                    </div>

                    {/* Website */}

                    <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-2">
                      <span>Website:</span>

                      <a
                        href="https://code-vault-website.vercel.app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          inline-flex
                          items-center
                          gap-1.5
                          text-purple-400
                          transition-colors
                          hover:text-purple-300
                        "
                      >
                        code-vault-website.vercel.app

                        <ExternalLink
                          size={13}
                          aria-hidden="true"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* =================================================
              GITHUB REFERENCE
          ================================================== */}

          <div
            className="
              mt-7
              flex flex-col gap-4
              rounded-2xl
              border border-white/[0.07]
              bg-white/[0.015]
              px-5 py-5
              sm:flex-row
              sm:items-center
              sm:justify-between
              sm:px-6
            "
          >
            <div>
              <p className="text-sm font-medium text-zinc-300">
                CodeVault is open source.
              </p>

              <p className="mt-1 text-xs text-zinc-600">
                Review the project and its development on GitHub.
              </p>
            </div>

            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                inline-flex shrink-0
                items-center justify-center gap-2
                rounded-xl
                border border-white/[0.1]
                bg-white/[0.03]
                px-4 py-2.5
                text-xs font-semibold
                text-zinc-300
                transition-all duration-300
                hover:-translate-y-0.5
                hover:border-purple-400/30
                hover:bg-purple-500/[0.06]
                hover:text-white
                hover:shadow-[0_8px_30px_rgba(168,85,247,0.08)]
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-purple-400/60
              "
            >
              <FaGithub
                size={15}
                aria-hidden="true"
              />

              <span>View GitHub</span>

              <ExternalLink
                size={13}
                aria-hidden="true"
                className="
                  transition-transform duration-300
                  group-hover:translate-x-0.5
                  group-hover:-translate-y-0.5
                "
              />
            </a>
          </div>
        </div>
      </main>

      {/* =====================================================
          FOOTER
      ====================================================== */}

      <footer
        className="
          border-t
          border-white/[0.07]
          py-6
          text-center
          text-xs
          text-zinc-600
        "
      >
        © {new Date().getFullYear()} CodeVault. All rights reserved.
      </footer>
    </div>
  );
}