import { FaGithub } from "react-icons/fa";
import { Download } from "lucide-react";
import { motion } from "framer-motion";

const REPOSITORY_URL =
  "https://github.com/vivekkushwahaofficial/CodeVault";

const RELEASE_URL =
  "https://github.com/vivekkushwahaofficial/CodeVault/releases/latest";

export default function Hero() {
  return (
    <section className="mx-auto w-[calc(100%-2rem)] max-w-full pt-10 pb-20 sm:w-auto sm:px-6 sm:pt-12 sm:pb-24">
      <div className="mx-auto max-w-6xl text-center">

        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center rounded-full border border-purple-600/30 bg-purple-600/10 px-4 py-1.5 text-xs font-medium tracking-[0.24em] text-purple-200"
        >
          🚀 v1.2.0 Released
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mx-auto mt-6 max-w-[12ch] text-5xl font-extrabold leading-tight tracking-tight text-white sm:mt-8 sm:max-w-5xl sm:text-6xl sm:leading-[0.94] md:text-7xl"
        >
          Automatically Sync Your
          <br className="hidden sm:block" />
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Coding Solutions
          </span>
          <br className="hidden sm:block" />
          to GitHub
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35 }}
          className="mx-auto mt-8 max-w-4xl text-base leading-8 text-zinc-400 md:text-lg"
        >
          CodeVault detects accepted submissions from LeetCode, GeeksforGeeks, and HackerRank,
          <br className="hidden sm:block" />
          then automatically extracts, organizes, and pushes your solutions to GitHub.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:mt-12 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4 lg:gap-6"
        >
          <a
            href={RELEASE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 px-7 py-4 text-base font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(168,85,247,0.35)] sm:w-auto"
          >
            <Download size={20} strokeWidth={2.5} />
            Download Extension
          </a>

          <a
            href={REPOSITORY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-7 py-4 text-base font-semibold text-white transition-all duration-300 hover:scale-105 hover:border-purple-600/60 hover:bg-white/10 sm:w-auto"
          >
            <FaGithub size={18} />
            View on GitHub
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mx-auto mt-16 max-w-[1080px] overflow-hidden rounded-[36px] border border-white/10 bg-[#1a1630]/95 p-3 shadow-[0_32px_90px_rgba(0,0,0,0.42)] ring-1 ring-white/5 backdrop-blur-xl sm:mt-24 sm:p-5 lg:p-5"
        >
          <div className="grid grid-cols-2 items-stretch gap-2 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,1fr)_minmax(0,1fr)] lg:items-start lg:gap-5">

            {/* ==================== 50% — WORKFLOW ==================== */}
            <div className="col-span-2 min-w-0 flex h-full flex-col justify-center text-left lg:col-span-1 lg:pr-2">

              <p className="inline-flex w-fit items-center rounded-full border border-purple-600/20 bg-purple-600/10 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.34em] text-purple-200">
                Workflow
              </p>

              <h3 className="mt-4 text-3xl font-bold tracking-tight text-white sm:max-w-none sm:text-4xl">
                One Submission.
                <br />
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Automatic Sync.
                </span>
              </h3>

              <p className="mt-6 max-w-xl text-base leading-7 text-zinc-400 sm:text-lg sm:leading-8">
                Keep solving coding problems as usual. CodeVault detects accepted
                submissions, extracts your solution and metadata, organizes the files,
                and pushes everything directly to GitHub.
              </p>

              {/* Workflow Steps */}
              <div className="mt-10 grid grid-cols-3 gap-2 sm:max-w-lg sm:gap-3">

                <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-3 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] sm:px-4">
                  <p className="text-xs font-semibold text-blue-400">01</p>
                  <p className="mt-1 text-sm font-semibold text-white">Detect</p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-3 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] sm:px-4">
                  <p className="text-xs font-semibold text-purple-400">02</p>
                  <p className="mt-1 text-sm font-semibold text-white">Organize</p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-3 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] sm:px-4">
                  <p className="text-xs font-semibold text-pink-400">03</p>
                  <p className="mt-1 text-sm font-semibold text-white">Push</p>
                </div>

              </div>
            </div>


            {/* ==================== 25% — SYNC FLOW ==================== */}
            <div className="flex h-full w-full min-w-0 items-stretch justify-center self-stretch lg:h-full lg:w-full lg:self-stretch">

              <div className="flex h-full w-full min-w-0 flex-col items-center justify-center rounded-[28px] border border-white/10 bg-white/[0.03] px-4 py-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] sm:px-5 sm:py-6 lg:h-full lg:w-full lg:justify-start">

                {/* LeetCode */}
                <div className="flex flex-col items-center text-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-orange-400/10 bg-orange-600/10 text-2xl">
                    🟠
                  </div>

                  <p className="mt-2 text-sm font-semibold text-white">
                    LeetCode
                  </p>

                  <p className="text-xs text-zinc-600">
                    Accepted Submission
                  </p>
                </div>

                {/* Connector */}
                <div className="my-3 h-8 w-px bg-gradient-to-b from-pink-600 to-purple-600" />

                {/* CodeVault */}
                <div className="flex flex-col items-center text-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-purple-400/10 bg-purple-600/10 text-2xl">
                    🚀
                  </div>

                  <p className="mt-2 text-sm font-semibold text-white">
                    CodeVault
                  </p>

                  <p className="text-xs text-zinc-600">
                    Detect • Extract • Commit
                  </p>
                </div>

                {/* Connector */}
                <div className="my-3 h-8 w-px bg-gradient-to-b from-purple-600 to-blue-600" />

                {/* GitHub */}
                <div className="flex flex-col items-center text-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-400/10 bg-blue-600/10">
                    <FaGithub size={27} className="text-white" />
                  </div>

                  <p className="mt-2 text-sm font-semibold text-white">
                    GitHub
                  </p>

                  <p className="text-xs text-zinc-600">
                    Repository Updated
                  </p>
                </div>

              </div>
            </div>


            {/* ==================== 25% — REPOSITORY TREE ==================== */}
            <div className="min-w-0 h-full w-full max-w-full self-stretch overflow-x-auto overflow-y-auto rounded-[28px] border border-white/8 bg-[#12111f]/95 p-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden transition-colors duration-300 hover:border-white/10 sm:p-5 lg:h-full lg:self-stretch lg:p-5">

              <pre className="w-full max-w-full text-left font-mono text-[12px] leading-[1.8] text-zinc-400 sm:text-[12px]">
                {"\n"}
                <span className="text-white">codevault-solutions/</span>
                {"\n"}

                <span className="text-zinc-600">├── </span>
                <span className="text-orange-400">GFG/</span>
                {"\n"}

                <span className="text-zinc-600">│   └── </span>
                <span className="text-blue-400">Java/</span>
                {"\n"}

                <span className="text-zinc-600">│       └── </span>
                <span className="text-emerald-400">Easy/</span>
                {"\n"}

                <span className="text-zinc-600">│           └── </span>
                <span className="text-zinc-300">Missing-in-Array/</span>
                {"\n"}

                <span className="text-zinc-600">│               └── </span>
                <span className="text-yellow-400">Solution.java</span>

                {"\n\n"}

                <span className="text-zinc-600">├── </span>
                <span className="text-purple-400">HackerRank/</span>
                {"\n"}

                <span className="text-zinc-600">│   └── </span>
                <span className="text-blue-400">Java/</span>
                {"\n"}

                <span className="text-zinc-600">│       └── </span>
                <span className="text-red-400">Hard/</span>
                {"\n"}

                <span className="text-zinc-600">│           └── </span>
                <span className="text-zinc-300">Array-Manipulation/</span>
                {"\n"}

                <span className="text-zinc-600">│               └── </span>
                <span className="text-yellow-400">Solution.java</span>

                {"\n\n"}

                <span className="text-zinc-600">└── </span>
                <span className="text-orange-400">LeetCode/</span>
                {"\n"}

                <span className="text-zinc-600">    └── </span>
                <span className="text-blue-400">C++/</span>
                {"\n"}

                <span className="text-zinc-600">        └── </span>
                <span className="text-emerald-400">Easy/</span>
                {"\n"}

                <span className="text-zinc-600">            └── </span>
                <span className="text-zinc-300">Two-Sum/</span>
                {"\n"}

                <span className="text-zinc-600">                └── </span>
                <span className="text-yellow-400">Solution.cpp</span>

              </pre>
            </div>

          </div>
        </motion.div>

      </div >
    </section >
  );
}