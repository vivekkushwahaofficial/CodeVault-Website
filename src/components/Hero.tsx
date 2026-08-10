import { FaGithub } from "react-icons/fa";
import { Download, ArrowUpRight, Check, GitBranch } from "lucide-react";
import { motion } from "framer-motion";

const REPOSITORY_URL =
  "https://github.com/vivekkushwahaofficial/CodeVault";

const RELEASE_URL =
  "https://github.com/vivekkushwahaofficial/CodeVault/releases/latest";

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-4 pb-12 pt-24 sm:px-6 sm:pb-16 sm:pt-28 lg:pb-20 lg:pt-22">      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute left-1/2 top-0 h-[520px] w-[760px] -translate-x-1/2 rounded-full bg-purple-600/[0.045] blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* =====================================================
            HERO INTRO
        ====================================================== */}

        <div className="mx-auto max-w-5xl text-center">
          {/* Release Badge */}
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-purple-400/20 bg-purple-500/[0.07] px-4 py-2 text-xs font-medium tracking-[0.2em] text-purple-300"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-purple-400 shadow-[0_0_10px_rgba(168,85,247,0.8)]" />

            <span>v1.2.0 Released</span>

            <ArrowUpRight size={13} />
          </motion.div>

          {/* =================================================
              MAIN HEADING
          ================================================== */}

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12, duration: 0.6 }}
            className="mx-auto mt-6 max-w-5xl font-bold tracking-[-0.045em] text-white"
          >
            {/* Desktop / Tablet */}
            <span className="hidden sm:block">
              <span className="block text-5xl leading-[1.04] sm:text-6xl md:text-7xl lg:text-[5.25rem]">
                Automatically sync your
              </span>

              <span className="mt-1 block text-5xl leading-[1.04] text-purple-300 sm:text-6xl md:text-7xl lg:text-[5.25rem]">
                coding solutions
              </span>

              <span className="mt-1 block text-5xl leading-[1.04] sm:text-6xl md:text-7xl lg:text-[5.25rem]">
                to GitHub.
              </span>
            </span>

            {/* Mobile */}
            <span className="block sm:hidden">
              <span className="block text-[2.75rem] leading-[1.02]">
                Automatically sync
              </span>

              <span className="mt-1 block text-[2.75rem] leading-[1.02]">
                your{" "}
                <span className="text-purple-300">coding</span>
              </span>

              <span className="mt-1 block text-[2.75rem] leading-[1.02] text-purple-300">
                solutions
              </span>

              <span className="mt-1 block text-[2.75rem] leading-[1.02] text-white">
                to GitHub.
              </span>
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.5 }}
            className="mx-auto mt-6 max-w-3xl text-sm leading-7 text-zinc-400 sm:text-lg sm:leading-8"
          >
            CodeVault detects accepted submissions from LeetCode,
            GeeksforGeeks, and HackerRank, then automatically extracts,
            organizes, and pushes your solutions directly to GitHub.
          </motion.p>

          {/* =================================================
              CTA BUTTONS
          ================================================== */}

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.38, duration: 0.5 }}
            className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center"
          >
            {/* Download */}
            <a
              href={RELEASE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2.5 rounded-xl bg-purple-500 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_8px_30px_rgba(168,85,247,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-purple-400 hover:shadow-[0_12px_35px_rgba(168,85,247,0.28)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              <Download
                size={17}
                strokeWidth={2.2}
                className="transition-transform duration-300 group-hover:-translate-y-0.5"
              />

              Download Extension

              <ArrowUpRight
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>

            {/* GitHub */}
            <a
              href={REPOSITORY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2.5 rounded-xl border border-white/10 bg-white/[0.035] px-6 py-3.5 text-sm font-semibold text-zinc-200 transition-all duration-300 hover:-translate-y-0.5 hover:border-purple-400/30 hover:bg-white/[0.06] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              <FaGithub
                size={17}
                className="transition-transform duration-300 group-hover:scale-110"
              />

              View on GitHub

              <ArrowUpRight
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </motion.div>
        </div>

        {/* =====================================================
            PRODUCT WORKFLOW
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.7 }}
          className="mx-auto mt-10 max-w-6xl overflow-hidden rounded-[28px] border border-white/[0.08] bg-[#111113] shadow-[0_30px_100px_rgba(0,0,0,0.4)] sm:mt-14"
        >
          {/* Top bar */}
          <div className="flex items-center justify-between border-b border-white/[0.07] px-5 py-4 sm:px-6">
            <div className="flex items-center gap-2.5">
              <GitBranch size={15} className="text-purple-400" />

              <span className="text-xs font-medium uppercase tracking-[0.24em] text-zinc-500">
                CodeVault Workflow
              </span>
            </div>

            <div className="hidden items-center gap-2 text-xs text-zinc-500 sm:flex">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.7)]" />
              System ready
            </div>
          </div>

          {/* Main content */}
          <div className="grid lg:grid-cols-[1.05fr_0.95fr_1fr]">
            {/* =================================================
                WORKFLOW
            ================================================== */}

            <div className="border-b border-white/[0.07] p-6 sm:p-8 lg:border-b-0 lg:border-r">
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-purple-400">
                Workflow
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                One submission.
                <br />

                <span className="text-purple-300">
                  Automatic sync.
                </span>
              </h2>

              <p className="mt-5 max-w-md text-sm leading-7 text-zinc-400 sm:text-base">
                Keep solving problems as usual. CodeVault handles detection,
                extraction, organization, and GitHub synchronization in the
                background.
              </p>

              <div className="mt-8 grid grid-cols-3 gap-2">
                {[
                  {
                    number: "01",
                    title: "Detect",
                    color: "text-blue-400",
                  },
                  {
                    number: "02",
                    title: "Organize",
                    color: "text-purple-400",
                  },
                  {
                    number: "03",
                    title: "Push",
                    color: "text-emerald-400",
                  },
                ].map((step) => (
                  <div
                    key={step.number}
                    className="rounded-xl border border-white/[0.07] bg-white/[0.025] px-3 py-3"
                  >
                    <span
                      className={`text-[11px] font-semibold ${step.color}`}
                    >
                      {step.number}
                    </span>

                    <p className="mt-1.5 text-xs font-medium text-zinc-200 sm:text-sm">
                      {step.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* =================================================
                SYNC FLOW
            ================================================== */}

            <div className="border-b border-white/[0.07] p-6 sm:p-8 lg:border-b-0 lg:border-r">
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-purple-400">
                Sync flow
              </p>

              <div className="mt-6 flex items-center justify-center">
                <div className="flex w-full max-w-[250px] flex-col items-center">
                  {/* LeetCode */}
                  <div className="w-full rounded-xl border border-white/[0.08] bg-white/[0.025] p-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-500/10 text-lg">
                        🟠
                      </div>

                      <div>
                        <p className="text-sm font-semibold text-white">
                          LeetCode
                        </p>

                        <p className="mt-0.5 text-[11px] text-zinc-500">
                          Accepted submission
                        </p>
                      </div>

                      <Check
                        size={15}
                        className="ml-auto text-emerald-400"
                      />
                    </div>
                  </div>

                  <div className="h-8 w-px bg-gradient-to-b from-orange-400/40 to-purple-400/60" />

                  {/* CodeVault */}
                  <div className="w-full rounded-xl border border-purple-400/20 bg-purple-500/[0.06] p-4 shadow-[0_0_35px_rgba(168,85,247,0.07)]">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-purple-400/20 bg-purple-500/10">
                        <img
                          src="/logo.png"
                          alt="CodeVault"
                          className="h-7 w-7 object-contain"
                        />
                      </div>

                      <div>
                        <p className="text-sm font-semibold text-white">
                          CodeVault
                        </p>

                        <p className="mt-0.5 text-[11px] text-zinc-500">
                          Detect • Extract • Commit
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="h-8 w-px bg-gradient-to-b from-purple-400/60 to-blue-400/50" />

                  {/* GitHub */}
                  <div className="w-full rounded-xl border border-white/[0.08] bg-white/[0.025] p-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10">
                        <FaGithub size={21} className="text-zinc-200" />
                      </div>

                      <div>
                        <p className="text-sm font-semibold text-white">
                          GitHub
                        </p>

                        <p className="mt-0.5 text-[11px] text-zinc-500">
                          Repository updated
                        </p>
                      </div>

                      <Check
                        size={15}
                        className="ml-auto text-emerald-400"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* =================================================
                REPOSITORY TREE
            ================================================== */}

            <div className="min-w-0 p-6 sm:p-8">
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-purple-400">
                Repository
              </p>

              <div className="mt-6 min-w-0 overflow-hidden rounded-xl border border-white/[0.07] bg-[#0c0c0e]">
                <div className="flex items-center gap-1.5 border-b border-white/[0.06] px-4 py-3">
                  <span className="h-2 w-2 rounded-full bg-red-400/70" />
                  <span className="h-2 w-2 rounded-full bg-yellow-400/70" />
                  <span className="h-2 w-2 rounded-full bg-emerald-400/70" />
                </div>

                <pre className="max-w-full overflow-x-auto p-4 text-left font-mono text-[11px] leading-[1.6] text-zinc-500 sm:text-[8px]">
                  <span className="text-zinc-200">
                    codevault-solutions/
                  </span>
                  {"\n"}
                  <span>├── </span>
                  <span className="text-orange-400">GFG/</span>
                  {"\n"}
                  <span>│   └── </span>
                  <span className="text-blue-400">Java/</span>
                  {"\n"}
                  <span>│       └── </span>
                  <span className="text-emerald-400">Easy/</span>
                  {"\n"}
                  <span>│           └── </span>
                  <span className="text-zinc-300">
                    Missing-in-Array/
                  </span>
                  {"\n"}
                  <span>│               └── </span>
                  <span className="text-yellow-400">
                    Solution.java
                  </span>
                  {"\n\n"}
                  <span>├── </span>
                  <span className="text-purple-400">
                    HackerRank/
                  </span>
                  {"\n"}
                  <span>│   └── </span>
                  <span className="text-blue-400">Java/</span>
                  {"\n"}
                  <span>│       └── </span>
                  <span className="text-red-400">Hard/</span>
                  {"\n"}
                  <span>│           └── </span>
                  <span className="text-zinc-300">
                    Array-Manipulation/
                  </span>
                  {"\n"}
                  <span>│               └── </span>
                  <span className="text-yellow-400">
                    Solution.java
                  </span>
                  {"\n\n"}
                  <span>└── </span>
                  <span className="text-orange-400">
                    LeetCode/
                  </span>
                  {"\n"}
                  <span>    └── </span>
                  <span className="text-blue-400">C++/</span>
                  {"\n"}
                  <span>        └── </span>
                  <span className="text-emerald-400">Easy/</span>
                  {"\n"}
                  <span>            └── </span>
                  <span className="text-zinc-300">
                    Two-Sum/
                  </span>
                  {"\n"}
                  <span>                └── </span>
                  <span className="text-yellow-400">
                    Solution.cpp
                  </span>
                </pre>
              </div>
            </div>
          </div>

          {/* Bottom status */}
          <div className="flex flex-col gap-3 border-t border-white/[0.07] px-5 py-4 text-xs text-zinc-500 sm:flex-row sm:items-center sm:justify-between sm:px-6">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Ready to sync
            </div>

            <span className="text-left sm:text-right">
              LeetCode · GeeksforGeeks · HackerRank → GitHub
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}