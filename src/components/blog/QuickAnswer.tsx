'use client';

type QuickAnswerProps = {
  answer: string;
  question: string;
};

export function QuickAnswer({ answer, question }: QuickAnswerProps) {
  return (
    <aside
      aria-label="Quick answer"
      className="rounded-2xl border-l-4 border-magenta bg-lavender px-6 py-5 mb-10"
    >
      <p className="text-[0.65rem] tracking-micro uppercase text-magenta font-medium mb-2">
        Quick Answer
      </p>
      <p className="text-base sm:text-[1.0625rem] text-slate leading-relaxed font-medium">
        {answer}
      </p>
    </aside>
  );
}
