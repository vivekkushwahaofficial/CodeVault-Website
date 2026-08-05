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
      className="border-t border-zinc-800 bg-black px-6 py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="text-purple-400 font-semibold uppercase tracking-widest">
            Features
          </p>

          <h2 className="mt-4 text-5xl font-bold text-white">
            Everything You Need
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-400">
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
                className="group rounded-2xl border border-zinc-800 bg-zinc-900/70 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-purple-500 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-r from-purple-600 to-pink-500">
                  <Icon size={28} className="text-white" />
                </div>

                <h3 className="mt-6 text-2xl font-semibold text-white">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-400">
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