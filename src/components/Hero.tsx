import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="px-6 pt-32 pb-28">
      <div className="mx-auto max-w-6xl text-center">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center rounded-full border border-purple-600/40 bg-purple-500/10 px-5 py-2 text-sm text-purple-300"
        >
          🚀 v1.0.0 Released
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mx-auto mt-8 max-w-5xl text-6xl font-extrabold leading-tight text-white md:text-7xl"
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
          className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-gray-400"
        >
          CodeVault detects accepted LeetCode submissions, extracts your
          solution and problem details, then automatically organizes and pushes
          everything to your GitHub repository.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12 flex flex-wrap justify-center gap-6"
        >
          <a
            href="#download"
            className="flex items-center gap-3 rounded-xl bg-gradient-to-r from-purple-600 to-fuchsia-500 px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(168,85,247,0.45)]"
          >
            <FaGithub />
            Download Extension
          </a>

          <a
            href="https://github.com/vivekkushwahaofficial/CodeVault"
            target="_blank"
            className="flex items-center gap-3 rounded-xl border border-gray-700 px-8 py-4 font-semibold text-white transition-all duration-300 hover:border-purple-500 hover:bg-zinc-900 hover:scale-105"
          >
            <FaGithub />
            View on GitHub
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mx-auto mt-24 max-w-3xl rounded-3xl border border-zinc-800 bg-zinc-900/70 p-10 text-left backdrop-blur"
        >
          <p className="text-sm text-gray-500">Workflow</p>

          <h3 className="mt-4 text-4xl font-bold text-white">
            LeetCode → CodeVault → GitHub
          </h3>

          <p className="mt-4 text-lg text-gray-400">
            Solve a problem once. CodeVault automatically detects accepted
            submissions, extracts metadata, commits your solution, updates your
            repository, and keeps your coding portfolio organized.
          </p>
        </motion.div>
      </div>
    </section>
  );
}