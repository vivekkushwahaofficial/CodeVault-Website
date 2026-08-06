import { useState } from "react";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { Menu, X } from "lucide-react";

const GITHUB = "https://github.com/vivekkushwahaofficial/CodeVault";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-zinc-950/75 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">

        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => setIsOpen(false)}
        >
          <img
            src="/logo.png"
            alt="CodeVault"
            className="h-10 w-10 sm:h-11 sm:w-11"
          />

          <span className="text-xl font-extrabold tracking-tight text-white sm:text-2xl">
            CodeVault
          </span>
        </Link>

        {/* Desktop Navigation */}
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

        {/* Right Side */}
        <div className="flex items-center gap-3">

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

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-xl border border-white/10 bg-white/5 p-2.5 text-white transition md:hidden"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="border-t border-white/10 bg-zinc-950/95 md:hidden">
          <div className="flex flex-col px-6 py-4 text-zinc-300">

            <a
              href="#features"
              onClick={() => setIsOpen(false)}
              className="py-3 transition-colors hover:text-white"
            >
              Features
            </a>

            <a
              href="#roadmap"
              onClick={() => setIsOpen(false)}
              className="py-3 transition-colors hover:text-white"
            >
              Roadmap
            </a>

            <a
              href="#download"
              onClick={() => setIsOpen(false)}
              className="py-3 transition-colors hover:text-white"
            >
              Download
            </a>

            <Link
              to="/privacy"
              onClick={() => setIsOpen(false)}
              className="py-3 transition-colors hover:text-white"
            >
              Privacy
            </Link>

          </div>
        </nav>
      )}
    </header>
  );
}