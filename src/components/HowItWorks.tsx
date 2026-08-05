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
    <section id="how" className="py-28 px-6">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-center text-5xl font-bold text-white">
          How It Works
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-center text-lg text-gray-400">
          Three simple steps. Solve problems as usual, CodeVault handles the
          rest automatically.
        </p>

        <div className="mt-20 grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="rounded-2xl border border-zinc-800 bg-zinc-900 p-8 transition duration-300 hover:border-purple-500 hover:-translate-y-2"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-pink-500 text-xl font-bold text-white">
                {index + 1}
              </div>

              <h3 className="text-2xl font-semibold text-white">
                {step.title}
              </h3>

              <p className="mt-4 leading-7 text-gray-400">
                {step.description}
              </p>

              {index !== steps.length - 1 && (
                <ArrowRight className="mt-8 text-purple-400" size={28} />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}