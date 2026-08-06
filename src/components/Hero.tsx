import { FaGithub } from "react-icons/fa";
import { Download } from "lucide-react";
import { motion } from "framer-motion";

const REPOSITORY_URL =
  "https://github.com/vivekkushwahaofficial/CodeVault";

const RELEASE_URL =
  "https://github.com/vivekkushwahaofficial/CodeVault/releases/latest";

export default function Hero() {
  return (
    <section className="px-6 pt-12 pb-24">
      <div className="mx-auto max-w-6xl text-center">

        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-1.5 text-xs font-medium tracking-[0.24em] text-purple-200"
        >
          🚀 v1.0.0 Released
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mx-auto mt-8 max-w-5xl text-6xl font-extrabold leading-[0.94] tracking-tight text-white md:text-7xl"
        >
          Automatically Sync Your
          <br />
          <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Coding Solutions
          </span>
          <br />
          to GitHub
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35 }}
          className="mx-auto mt-8 max-w-3xl text-base leading-8 text-zinc-400 md:text-lg"
        >
          CodeVault detects accepted LeetCode submissions, extracts your
          solution and problem details, then automatically organizes and pushes
          everything to your GitHub repository.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12 flex flex-wrap justify-center gap-4 sm:gap-6"
        >
          <a
            href={RELEASE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-2xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 px-7 py-4 text-base font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(168,85,247,0.35)]"
          >
            <Download size={20} strokeWidth={2.5} />
            Download Extension
          </a>

          <a
            href={REPOSITORY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-7 py-4 text-base font-semibold text-white transition-all duration-300 hover:scale-105 hover:border-purple-500/60 hover:bg-white/10"
          >
            <FaGithub size={18} />
            View on GitHub
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mx-auto mt-24 max-w-5xl rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl shadow-[0_24px_80px_rgba(0,0,0,0.35)]"
        >
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

            <div className="text-left">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-purple-300">
                Workflow
              </p>

              <h3 className="mt-3 text-3xl font-bold text-white">
                One Submission.
                <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  {" "}Automatic Sync.
                </span>
              </h3>

              <p className="mt-4 max-w-xl text-lg leading-8 text-zinc-400">
                Keep solving coding problems as usual. CodeVault automatically
                detects accepted submissions, extracts metadata, commits your
                solution, updates your repository, and maintains your GitHub
                portfolio.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-zinc-950/50 p-6 lg:min-w-[340px]">
              <div className="space-y-5">

                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-500/15 text-2xl">
                    🟠
                  </div>

                  <div className="flex-1 text-left">
                    <p className="font-semibold text-white">
                      LeetCode
                    </p>

                    <p className="text-sm text-zinc-500">
                      Accepted Submission
                    </p>
                  </div>
                </div>

                <div className="ml-5 h-8 w-px bg-gradient-to-b from-purple-500 to-pink-500" />

                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-500/15">
                    🚀
                  </div>

                  <div className="flex-1 text-left">
                    <p className="font-semibold text-white">
                      CodeVault
                    </p>

                    <p className="text-sm text-zinc-500">
                      Detect • Extract • Commit
                    </p>
                  </div>
                </div>

                <div className="ml-5 h-8 w-px bg-gradient-to-b from-purple-500 to-blue-500" />

                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/15">
                    <FaGithub size={20} />
                  </div>

                  <div className="flex-1 text-left">
                    <p className="font-semibold text-white">
                      GitHub
                    </p>

                    <p className="text-sm text-zinc-500">
                      Repository Updated
                    </p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}