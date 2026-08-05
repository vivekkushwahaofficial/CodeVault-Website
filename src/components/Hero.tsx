import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="px-6 py-24">
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
            href="#download"
            className="flex items-center gap-3 rounded-2xl bg-gradient-to-r from-purple-600 via-fuchsia-500 to-pink-500 px-7 py-4 text-base font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(168,85,247,0.35)]"
          >
            <FaGithub size={18} />
            Download Extension
          </a>

          <a
            href="https://github.com/vivekkushwahaofficial/CodeVault"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-7 py-4 text-base font-semibold text-white transition-all duration-300 hover:scale-105 hover:border-purple-500/60 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500/70 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
          >
            <FaGithub size={18} />
            View on GitHub
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mx-auto mt-24 max-w-3xl rounded-[28px] border border-white/10 bg-white/5 p-8 text-left shadow-[0_24px_80px_rgba(0,0,0,0.35)] backdrop-blur"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500">Workflow</p>

          <h3 className="mt-4 text-2xl font-semibold tracking-tight text-white md:text-3xl">
            LeetCode → CodeVault → GitHub
          </h3>

          <p className="mt-4 text-base leading-8 text-zinc-400 md:text-lg">
            Solve a problem once. CodeVault automatically detects accepted
            submissions, extracts metadata, commits your solution, updates your
            repository, and keeps your coding portfolio organized.
          </p>
        </motion.div>
      </div>
    </section>
  );
}