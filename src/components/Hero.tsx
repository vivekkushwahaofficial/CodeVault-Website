import { FaGithub } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="bg-zinc-950 text-white">
      <div className="mx-auto flex min-h-[90vh] max-w-7xl flex-col items-center justify-center px-6 text-center">

        <span className="mb-6 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-sm text-purple-300">
          🚀 v1.0.0 Released
        </span>

        <h1 className="max-w-5xl text-5xl font-extrabold leading-tight md:text-7xl">
          Automatically Sync Your
          <span className="block bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Coding Solutions
          </span>
          to GitHub
        </h1>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-400 md:text-xl">
          CodeVault detects accepted LeetCode submissions,
          extracts your solution and problem details,
          then automatically organizes and pushes everything
          to your GitHub repository.
        </p>

        <div className="mt-12 flex flex-col gap-4 sm:flex-row">

          <a
            href="https://github.com/vivekkushwahaofficial/CodeVault/releases/latest"
            className="flex items-center justify-center gap-2 rounded-xl bg-purple-600 px-8 py-4 font-semibold transition hover:bg-purple-700"
          >
            <FaGithub size={20} />
            Download Extension
          </a>

          <a
            href="https://github.com/vivekkushwahaofficial/CodeVault"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 rounded-xl border border-zinc-700 px-8 py-4 font-semibold transition hover:border-purple-500"
          >
            <FaGithub size={20} />
            View on GitHub
          </a>

        </div>

        <div className="mt-16 rounded-2xl border border-zinc-800 bg-zinc-900 p-8 shadow-2xl">

          <div className="text-left">

            <p className="text-sm text-zinc-500">
              Workflow
            </p>

            <h3 className="mt-4 text-2xl font-bold">
              LeetCode → CodeVault → GitHub
            </h3>

            <p className="mt-4 text-zinc-400">
              Solve a problem once.
              CodeVault takes care of everything else.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}