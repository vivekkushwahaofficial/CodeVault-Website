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
      "Automatically push every accepted solution directly to your GitHub repository.",
  },
  {
    icon: FolderGit2,
    title: "Smart Organization",
    description:
      "Solutions are organized by platform, difficulty and problem name automatically.",
  },
  {
    icon: FileText,
    title: "README Generation",
    description:
      "Keep your repository updated with generated statistics and documentation.",
  },
  {
    icon: Database,
    title: "Metadata Extraction",
    description:
      "Store problem title, difficulty, language and additional information.",
  },
  {
    icon: ShieldCheck,
    title: "Duplicate Detection",
    description:
      "Avoid duplicate commits by detecting already synchronized submissions.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description:
      "Detect accepted submissions instantly and sync them within seconds.",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="mx-auto max-w-7xl px-6 py-28"
    >
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold">
          Everything You Need
        </h2>

        <p className="mt-5 text-zinc-400 text-lg max-w-2xl mx-auto">
          CodeVault automates your coding workflow so you can focus on solving
          problems instead of managing repositories.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => {
          const Icon = feature.icon;

          return (
            <div
              key={feature.title}
              className="group rounded-2xl border border-zinc-800 bg-zinc-900 p-8 transition-all duration-300 hover:border-violet-500 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(139,92,246,.25)]"
            >
              <div className="mb-6 inline-flex rounded-xl bg-violet-600/20 p-4 text-violet-400">
                <Icon size={28} />
              </div>

              <h3 className="mb-3 text-2xl font-semibold">
                {feature.title}
              </h3>

              <p className="text-zinc-400 leading-7">
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}