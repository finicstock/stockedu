import { CheckCircle2, Lightbulb, TriangleAlert } from "lucide-react";
import type { SimulationChoice } from "@/types/learning";

interface FeedbackCardProps {
  choice: SimulationChoice;
  feedback: string;
  impactNote?: string;
}

export function FeedbackCard({ choice, feedback, impactNote }: FeedbackCardProps) {
  const isRecommended = choice.quality === "recommended";
  const Icon = isRecommended ? CheckCircle2 : choice.quality === "mixed" ? Lightbulb : TriangleAlert;

  return (
    <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-soft">
      <div className="mb-3 flex items-center gap-3">
        <div className={isRecommended ? "rounded-full bg-mint p-2 text-white" : "rounded-full bg-lemon/70 p-2 text-ink"}>
          <Icon className="h-5 w-5" aria-hidden="true" />
        </div>
        <div>
          <p className="text-sm font-semibold text-slate-500">선택 피드백</p>
          <h3 className="text-lg font-bold text-ink">{choice.label}</h3>
        </div>
      </div>
      <p className="leading-7 text-slate-700">{feedback}</p>
      {impactNote ? (
        <p className="mt-4 rounded-lg bg-skysoft p-3 text-sm leading-6 text-ink">{impactNote}</p>
      ) : null}
    </div>
  );
}
