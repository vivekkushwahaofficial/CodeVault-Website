import { FaGithub } from "react-icons/fa";
export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800 bg-zinc-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

        <h2 className="text-2xl font-bold">
          🚀 CodeVault
        </h2>

        <nav className="hidden gap-8 text-zinc-400 md:flex">
          <a href="#features" className="hover:text-white">
            Features
          </a>

          <a href="#roadmap" className="hover:text-white">
            Roadmap
          </a>

          <a href="#download" className="hover:text-white">
            Download
          </a>
        </nav>

        <a
          href="https://github.com/vivekkushwahaofficial/CodeVault"
          target="_blank"
          rel="noreferrer"
          className="rounded-lg border border-zinc-700 p-3 transition hover:border-purple-500"
        >
          <FaGithub size={20} />
        </a>

      </div>
    </header>
  );
}