import { ArrowRight } from "lucide-react";

const steps = [
  {
    number: "1",
    title: "Solve on LeetCode",
    description:
      "Solve any coding problem and submit your solution normally.",
  },
  {
    number: "2",
    title: "CodeVault Detects",
    description:
      "The extension automatically detects accepted submissions and extracts metadata.",
  },
  {
    number: "3",
    title: "Push to GitHub",
    description:
      "Your solution is organized, committed and pushed directly to your GitHub repository.",
  },
];

export default function Roadmap() {
  return (
    <section
      id="roadmap"
      className="border-t border-white/10 bg-[#0b0b0f] py-28"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.35em] text-purple-400">
            Workflow
          </span>

          <h2 className="mt-5 text-4xl font-bold text-white md:text-6xl">
            Three Simple Steps
          </h2>

          <p className="mt-6 text-lg leading-8 text-zinc-400">
            Keep solving coding problems as usual. CodeVault automates everything
            after your submission is accepted.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="group rounded-3xl border border-white/10 bg-zinc-900/60 p-10 transition-all duration-300 hover:-translate-y-2 hover:border-purple-500/50 hover:shadow-[0_0_40px_rgba(168,85,247,0.15)]"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 text-3xl font-bold text-white">
                {step.number}
              </div>

              <h3 className="mt-8 text-4xl font-bold text-white">
                {step.title}
              </h3>

              <p className="mt-6 text-lg leading-8 text-zinc-400">
                {step.description}
              </p>

              {index !== steps.length - 1 && (
                <ArrowRight className="mt-10 h-8 w-8 text-purple-400 transition-transform duration-300 group-hover:translate-x-2" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}