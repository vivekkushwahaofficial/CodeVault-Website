import {
  GitBranch,
  Mail,
  Heart,
  ExternalLink,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#09090b]">
      <div className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-12 md:grid-cols-4">

          {/* Brand */}
          <div className="md:col-span-2">
            <h2 className="text-3xl font-bold text-white">
              🚀 CodeVault
            </h2>

            <p className="mt-5 max-w-md text-lg leading-8 text-zinc-400">
              Automatically organize, version and synchronize your coding
              solutions from LeetCode and other coding platforms directly to
              GitHub.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-lg font-semibold text-white">
              Product
            </h3>

            <ul className="mt-5 space-y-3 text-zinc-400">
              <li>
                <a href="#features" className="hover:text-white">
                  Features
                </a>
              </li>

              <li>
                <a href="#roadmap" className="hover:text-white">
                  Roadmap
                </a>
              </li>

              <li>
                <a href="#download" className="hover:text-white">
                  Download
                </a>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="text-lg font-semibold text-white">
              Community
            </h3>

            <div className="mt-5 flex flex-col gap-4">

              <a
                href="https://github.com/vivekkushwahaofficial/CodeVault"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-zinc-400 hover:text-white"
              >
                <GitBranch size={18} />
                GitHub
                <ExternalLink size={15} />
              </a>

              <a
                href="mailto:your@email.com"
                className="inline-flex items-center gap-2 text-zinc-400 hover:text-white"
              >
                <Mail size={18} />
                Contact
              </a>

            </div>
          </div>

        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-zinc-500 md:flex-row">

          <p>
            © {new Date().getFullYear()} CodeVault. All rights reserved.
          </p>

          <p className="flex items-center gap-2">
            Built with
            <Heart
              className="text-pink-500"
              size={16}
              fill="currentColor"
            />
            for Developers
          </p>

        </div>

      </div>
    </footer>
  );
}