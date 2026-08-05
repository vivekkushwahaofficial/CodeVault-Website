import {
  FolderGit2,
  FileText,
  Database,
  ShieldCheck,
  Zap,
  GitBranch,
} from "lucide-react";

const features = [
  {
    icon: GitBranch,
    title: "GitHub Sync",
    description:
      "Automatically push every accepted solution directly to GitHub.",
  },
  {
    icon: FolderGit2,
    title: "Smart Organization",
    description:
      "Organize solutions by platform, difficulty, topic and programming language.",
  },
  {
    icon: FileText,
    title: "README Generator",
    description:
      "Keep your repository updated with statistics, badges and progress automatically.",
  },
  {
    icon: Database,
    title: "Metadata Extraction",
    description:
      "Capture problem name, tags, difficulty, language and submission date.",
  },
  {
    icon: ShieldCheck,
    title: "Duplicate Detection",
    description:
      "Never commit the same solution twice. CodeVault detects duplicates automatically.",
  },
  {
    icon: Zap,
    title: "One Click Setup",
    description:
      "Authenticate with GitHub once and let CodeVault handle everything afterwards.",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="border-t border-white/10 bg-black/40 px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-purple-400">
            Features
          </p>

          <h2 className="mt-4 text-5xl font-bold tracking-tight text-white">
            Everything You Need
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-zinc-400">
            CodeVault is built to automate your coding portfolio, GitHub
            repository and solution management with zero manual work.
          </p>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group rounded-[28px] border border-white/10 bg-white/5 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-purple-500/50 hover:bg-white/[0.07] hover:shadow-[0_24px_80px_rgba(168,85,247,0.12)]"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-purple-600 to-pink-500 shadow-[0_10px_30px_rgba(168,85,247,0.25)]">
                  <Icon size={24} className="text-white" />
                </div>

                <h3 className="mt-6 text-2xl font-semibold text-white">
                  {feature.title}
                </h3>

                <p className="mt-4 text-base leading-8 text-zinc-400">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}