import { Link } from "react-router-dom";

import {
  ArrowLeft,
  ExternalLink,
  ShieldCheck,
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
      <ul className="list-disc space-y-2 pl-5">
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
      <ul className="list-disc space-y-2 pl-5">
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
      <ul className="list-disc space-y-2 pl-5">
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

export default function Privacy() {
  return (
    <div className="min-h-screen bg-[#151515] text-white">

      {/* =====================================================
          HEADER
      ====================================================== */}

      <header className="sticky top-0 z-50 border-b border-white/[0.07] bg-[#151515]/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8">

          {/* Logo */}
          <Link
            to="/"
            aria-label="CodeVault Home"
            className="group flex items-center gap-3"
          >
            <img
              src="/logo.png"
              alt="CodeVault logo"
              className="h-9 w-9 object-contain transition-transform duration-300 group-hover:scale-105"
            />

            <span className="text-lg font-bold tracking-tight text-white sm:text-xl">
              CodeVault
            </span>
          </Link>

          {/* Back to Home */}
          <Link
            to="/"
            className="
              group
              inline-flex items-center gap-2
              rounded-xl
              border border-white/[0.1]
              bg-white/[0.03]
              px-3.5 py-2
              text-xs font-medium
              text-zinc-300
              transition-all duration-300
              hover:border-purple-400/30
              hover:bg-purple-500/[0.06]
              hover:text-white
              sm:px-4 sm:text-sm
            "
          >
            <ArrowLeft
              size={15}
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:-translate-x-0.5"
            />

            Back to Home
          </Link>
        </div>
      </header>

      {/* =====================================================
          MAIN
      ====================================================== */}

      <main className="relative overflow-hidden">

        {/* Ambient glow */}
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

        <div className="relative mx-auto max-w-5xl px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">

          {/* =================================================
              PAGE INTRO
          ================================================== */}

          <div className="max-w-3xl">

            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2">
              <ShieldCheck
                size={14}
                className="text-purple-400"
                aria-hidden="true"
              />

              <span className="text-xs font-semibold uppercase tracking-[0.28em] text-purple-400">
                Privacy
              </span>
            </div>

            <h1 className="mt-5 text-4xl font-bold tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
              Privacy Policy
            </h1>

            <p className="mt-5 text-sm leading-7 text-zinc-400 sm:text-base">
              How CodeVault handles information required to provide its
              functionality.
            </p>

            <div className="mt-6 flex items-center gap-3 text-xs text-zinc-600">
              <span className="h-px w-8 bg-white/10" />

              <span>
                Last Updated: August 2026
              </span>
            </div>
          </div>

          {/* =================================================
              POLICY CONTENT
          ================================================== */}

          <div className="mt-14 overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02]">

            {sections.map((section, index) => (
              <section
                key={section.number}
                className={`
                  relative
                  px-6 py-8
                  sm:px-8 sm:py-9
                  lg:px-10
                  ${index !== sections.length - 1
                    ? "border-b border-white/[0.07]"
                    : ""
                  }
                `}
              >
                <div className="flex items-start gap-5 sm:gap-7">

                  {/* Section number */}
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

                  <div className="min-w-0">

                    <h2 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
                      {section.title}
                    </h2>

                    <div className="mt-4 text-sm leading-7 text-zinc-400 sm:text-[15px]">
                      {section.content}
                    </div>

                  </div>
                </div>
              </section>
            ))}

            {/* =================================================
                CONTACT
            ================================================== */}

            <section className="relative px-6 py-8 sm:px-8 sm:py-9 lg:px-10">

              <div className="flex items-start gap-5 sm:gap-7">

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

                <div className="min-w-0">

                  <h2 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
                    Contact
                  </h2>

                  <div className="mt-5 space-y-4 text-sm leading-7 text-zinc-400 sm:text-[15px]">

                    {/* Email */}
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-2">
                      <span>Email:</span>

                      <a
                        href="mailto:vivek39101@gmail.com"
                        className="text-purple-400 transition-colors hover:text-purple-300"
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
                          items-center gap-1.5
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
              mt-8
              flex flex-col gap-4
              rounded-2xl
              border border-white/[0.07]
              bg-white/[0.015]
              px-6 py-5
              sm:flex-row
              sm:items-center
              sm:justify-between
              sm:px-7
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
              href="https://github.com/vivekkushwahaofficial/CodeVault"
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

              <span>
                View GitHub
              </span>

              <ExternalLink
                size={13}
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>

          </div>
        </div>
      </main>

      {/* =====================================================
          FOOTER
      ====================================================== */}

      <footer className="border-t border-white/[0.07] py-7 text-center text-xs text-zinc-600">
        © {new Date().getFullYear()} CodeVault. All rights reserved.
      </footer>

    </div>
  );
}