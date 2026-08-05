import { FaGithub } from "react-icons/fa";
export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-zinc-950/75 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        <h2 className="text-xl font-semibold tracking-tight text-white">
          🚀 CodeVault
        </h2>

        <nav className="hidden gap-8 text-sm text-zinc-400 md:flex">
          <a href="#features" className="transition-colors hover:text-white">
            Features
          </a>

          <a href="#roadmap" className="transition-colors hover:text-white">
            Roadmap
          </a>

          <a href="#download" className="transition-colors hover:text-white">
            Download
          </a>
        </nav>

        <a
          href="https://github.com/vivekkushwahaofficial/CodeVault"
          target="_blank"
          rel="noreferrer"
          aria-label="View CodeVault on GitHub"
          className="rounded-xl border border-white/10 bg-white/5 p-2.5 text-white transition-all duration-300 hover:border-purple-500/60 hover:bg-white/10 hover:shadow-[0_0_24px_rgba(168,85,247,0.18)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500/70 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
        >
          <FaGithub size={18} />
        </a>

      </div>
    </header>
  );
}