import { ArrowRight } from "lucide-react";

const steps = [
  {
    title: "Solve on LeetCode",
    description:
      "Solve any coding problem and submit your solution normally.",
  },
  {
    title: "CodeVault Detects",
    description:
      "The extension automatically detects accepted submissions and extracts metadata.",
  },
  {
    title: "Push to GitHub",
    description:
      "Your solution is organized, committed, and pushed directly to your GitHub repository.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-center text-5xl font-bold tracking-tight text-white">
          How It Works
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-center text-base leading-8 text-zinc-400">
          Three simple steps. Solve problems as usual, CodeVault handles the
          rest automatically.
        </p>

        <div className="mt-20 grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="rounded-[28px] border border-white/10 bg-white/5 p-8 transition duration-300 hover:-translate-y-2 hover:border-purple-500/50 hover:bg-white/[0.07] hover:shadow-[0_24px_80px_rgba(168,85,247,0.12)]"
            >
              <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-pink-500 text-lg font-bold text-white shadow-[0_10px_30px_rgba(168,85,247,0.25)]">
                {index + 1}
              </div>

              <h3 className="text-2xl font-semibold tracking-tight text-white">
                {step.title}
              </h3>

              <p className="mt-4 text-base leading-8 text-zinc-400">
                {step.description}
              </p>

              {index !== steps.length - 1 && (
                <ArrowRight className="mt-8 text-purple-400" size={24} />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}