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
      className="border-t border-white/10 bg-[#0b0b0f] py-24"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.35em] text-purple-400">
            Workflow
          </span>

          <h2 className="mt-5 text-5xl font-bold tracking-tight text-white">
            Three Simple Steps
          </h2>

          <p className="mt-6 text-base leading-8 text-zinc-400">
            Keep solving coding problems as usual. CodeVault automates everything
            after your submission is accepted.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="group rounded-[28px] border border-white/10 bg-white/5 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-purple-500/50 hover:bg-white/[0.07] hover:shadow-[0_24px_80px_rgba(168,85,247,0.12)]"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 text-2xl font-bold text-white shadow-[0_10px_30px_rgba(168,85,247,0.22)]">
                {step.number}
              </div>

              <h3 className="mt-8 text-2xl font-bold tracking-tight text-white">
                {step.title}
              </h3>

              <p className="mt-6 text-base leading-8 text-zinc-400">
                {step.description}
              </p>

              {index !== steps.length - 1 && (
                <ArrowRight className="mt-10 h-6 w-6 text-purple-400 transition-transform duration-300 group-hover:translate-x-2" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}