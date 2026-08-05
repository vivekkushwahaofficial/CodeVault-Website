import {
  CheckCircle2,
  Clock3,
  Code2,
  Trophy,
  BookOpen,
  Terminal,
} from "lucide-react";

const platforms = [
  {
    title: "LeetCode",
    description:
      "Accepted submissions are detected automatically and pushed directly to your GitHub repository.",
    icon: CheckCircle2,
    status: "Supported",
    statusColor:
      "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",
  },
  {
    title: "GeeksforGeeks",
    description:
      "Automatic solution synchronization is currently under active development.",
    icon: BookOpen,
    status: "Coming Soon",
    statusColor:
      "bg-purple-500/10 text-purple-300 border border-purple-500/20",
  },
  {
    title: "Codeforces",
    description:
      "Competitive programming submissions will be supported in an upcoming release.",
    icon: Trophy,
    status: "Coming Soon",
    statusColor:
      "bg-purple-500/10 text-purple-300 border border-purple-500/20",
  },
  {
    title: "HackerRank",
    description:
      "Automatically organize interview practice and certification solutions.",
    icon: Terminal,
    status: "Coming Soon",
    statusColor:
      "bg-purple-500/10 text-purple-300 border border-purple-500/20",
  },
  {
    title: "CodeChef",
    description:
      "Contest problems and practice solutions will sync automatically.",
    icon: Code2,
    status: "Coming Soon",
    statusColor:
      "bg-purple-500/10 text-purple-300 border border-purple-500/20",
  },
  {
    title: "AtCoder",
    description:
      "International competitive programming support is planned for future releases.",
    icon: Clock3,
    status: "Coming Soon",
    statusColor:
      "bg-purple-500/10 text-purple-300 border border-purple-500/20",
  },
];

export default function Platforms() {
  return (
    <section
      id="platforms"
      className="border-t border-white/10 bg-[#0b0b0f] py-28"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.35em] text-purple-400">
            Supported Platforms
          </span>

          <h2 className="mt-5 text-4xl font-bold text-white md:text-6xl">
            One Extension.
            <br />
            Every Coding Platform.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
            Start with LeetCode today. More coding platforms are being added
            continuously as CodeVault evolves.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {platforms.map((platform) => {
            const Icon = platform.icon;

            return (
              <div
                key={platform.title}
                className="group rounded-3xl border border-white/10 bg-zinc-900/60 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-purple-500/50 hover:shadow-[0_0_40px_rgba(168,85,247,0.15)]"
              >
                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500">
                  <Icon className="h-8 w-8 text-white" />
                </div>

                <div className="flex items-center justify-between">
                  <h3 className="text-3xl font-bold text-white">
                    {platform.title}
                  </h3>

                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${platform.statusColor}`}
                  >
                    {platform.status}
                  </span>
                </div>

                <p className="mt-6 text-lg leading-8 text-zinc-400">
                  {platform.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}