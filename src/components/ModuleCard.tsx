import Link from "next/link";
import { ArrowRight, Clock3, Medal } from "lucide-react";
import type { LearningModule } from "@/types/learning";

interface ModuleCardProps {
  learningModule: LearningModule;
  completed?: boolean;
  score?: number;
}

export function ModuleCard({ learningModule, completed = false, score }: ModuleCardProps) {
  return (
    <Link
      href={`/modules/${learningModule.id}`}
      className="group block rounded-lg border border-slate-200 bg-white p-5 shadow-soft transition hover:-translate-y-0.5 hover:border-mint"
    >
      <div className="mb-4 flex items-start justify-between gap-3">
        <div>
          <p className="mb-2 inline-flex rounded-full bg-skysoft px-3 py-1 text-xs font-bold text-ink">
            {learningModule.difficulty}
          </p>
          <h3 className="text-lg font-black text-ink">{learningModule.title}</h3>
        </div>
        <span className={completed ? "rounded-full bg-mint px-3 py-1 text-xs font-bold text-white" : "rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-500"}>
          {completed ? `${score ?? 0}점` : "진행 전"}
        </span>
      </div>
      <p className="line-clamp-2 min-h-12 text-sm leading-6 text-slate-600">{learningModule.conceptSummary}</p>
      <div className="mt-5 grid gap-2 text-sm text-slate-500">
        <div className="flex items-center gap-2">
          <Clock3 className="h-4 w-4 text-peach" aria-hidden="true" />
          예상 {learningModule.estimatedMinutes}분
        </div>
        <div className="flex items-center gap-2">
          <Medal className="h-4 w-4 text-lemon" aria-hidden="true" />
          {learningModule.rewardBadge.name}
        </div>
      </div>
      <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4 text-sm font-bold text-mint">
        <span>미션 열기</span>
        <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden="true" />
      </div>
    </Link>
  );
}
