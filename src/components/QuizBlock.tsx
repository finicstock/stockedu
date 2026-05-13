import { CheckCircle2 } from "lucide-react";
import clsx from "clsx";
import type { QuizQuestion } from "@/types/learning";

interface QuizBlockProps {
  quiz: QuizQuestion[];
  answers: Record<string, number>;
  onAnswer: (questionId: string, answerIndex: number) => void;
  showResult?: boolean;
}

export function QuizBlock({ quiz, answers, onAnswer, showResult = false }: QuizBlockProps) {
  return (
    <div className="space-y-4">
      {quiz.map((question, questionIndex) => (
        <div key={question.id} className="rounded-lg border border-slate-200 bg-white p-5">
          <div className="mb-4 flex items-start gap-3">
            <span className="grid h-7 w-7 flex-none place-items-center rounded-full bg-peach/15 text-sm font-bold text-peach">
              {questionIndex + 1}
            </span>
            <h3 className="font-bold leading-7 text-ink">{question.question}</h3>
          </div>
          <div className="grid gap-2">
            {question.options.map((option, optionIndex) => {
              const selected = answers[question.id] === optionIndex;
              const isAnswer = question.answerIndex === optionIndex;
              return (
                <button
                  key={option}
                  type="button"
                  onClick={() => onAnswer(question.id, optionIndex)}
                  disabled={showResult}
                  className={clsx(
                    "flex items-center justify-between rounded-lg border px-4 py-3 text-left text-sm transition",
                    selected && !showResult && "border-mint bg-mint/10 text-ink",
                    !selected && !showResult && "border-slate-200 bg-slate-50 hover:border-mint",
                    showResult && isAnswer && "border-mint bg-mint/10 text-ink",
                    showResult && selected && !isAnswer && "border-peach bg-peach/10 text-ink",
                    showResult && !selected && !isAnswer && "border-slate-200 bg-slate-50 text-slate-500"
                  )}
                >
                  <span>{option}</span>
                  {showResult && isAnswer ? <CheckCircle2 className="h-4 w-4 text-mint" aria-hidden="true" /> : null}
                </button>
              );
            })}
          </div>
          {showResult ? (
            <p className="mt-3 rounded-lg bg-slate-50 p-3 text-sm leading-6 text-slate-600">
              {question.explanation}
            </p>
          ) : null}
        </div>
      ))}
    </div>
  );
}
