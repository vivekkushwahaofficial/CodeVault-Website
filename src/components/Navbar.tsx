import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";

const GITHUB = "https://github.com/vivekkushwahaofficial/CodeVault";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-zinc-950/75 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2"
        >
          <img
            src="/logo.png"
            alt="CodeVault"
            className="h-11 w-11"
          />

          <span className="text-2xl font-extrabold tracking-tight text-white">
            CodeVault
          </span>
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-8 text-sm text-zinc-400 md:flex">
          <a href="#features" className="transition-colors hover:text-white">
            Features
          </a>

          <a href="#roadmap" className="transition-colors hover:text-white">
            Roadmap
          </a>

          <a href="#download" className="transition-colors hover:text-white">
            Download
          </a>

          <Link
            to="/privacy"
            className="transition-colors hover:text-white"
          >
            Privacy
          </Link>
        </nav>

        {/* GitHub */}
        <a
          href={GITHUB}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View CodeVault on GitHub"
          className="rounded-xl border border-white/10 bg-white/5 p-2.5 text-white transition-all duration-300 hover:border-purple-500/60 hover:bg-white/10 hover:shadow-[0_0_24px_rgba(168,85,247,0.18)]"
        >
          <FaGithub size={18} />
        </a>

      </div>
    </header>
  );
}