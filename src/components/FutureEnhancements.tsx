const futureEnhancements = [
  {
    icon: "🌐",
    title: "Expanded Platform Support",
    description:
      "Support for Codeforces, CodeChef, AtCoder, and more coding platforms.",
  },
  {
    icon: "🤖",
    title: "AI-Powered Classification",
    description:
      "Automatically detect problem patterns, topics, tags, and estimate complexity.",
  },
  {
    icon: "📊",
    title: "Analytics Dashboard",
    description:
      "Track progress, streaks, language usage, platform statistics, and coding insights.",
  },
  {
    icon: "📅",
    title: "Smart Revision System",
    description:
      "Receive automated reminders to revisit solved problems using spaced repetition.",
  },
  {
    icon: "📂",
    title: "Portfolio Generator",
    description:
      "Generate a professional coding portfolio with README, heatmaps, and achievements.",
  },
  {
    icon: "🔍",
    title: "Advanced Search",
    description:
      "Quickly find solutions by platform, difficulty, topic, pattern, language, or tags.",
  },
];

export default function FutureEnhancements() {
  return (
    <section id="future" className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-purple-400">
            Future Enhancements
          </p>

          <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
            The Road Ahead
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-zinc-400">
            CodeVault is continuously evolving into a complete developer
            productivity platform with AI-powered automation, analytics, and
            multi-platform support.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {futureEnhancements.map((item) => (
            <div
              key={item.title}
              className="group rounded-3xl border border-white/10 bg-white/5 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/40 hover:bg-white/[0.07]"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 text-2xl shadow-lg">
                {item.icon}
              </div>

              <h3 className="mt-6 text-xl font-semibold text-white">
                {item.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-zinc-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}