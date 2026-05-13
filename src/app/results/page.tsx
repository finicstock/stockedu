"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2, Trophy } from "lucide-react";
import { learningModules } from "@/data/modules";
import { BadgeCard } from "@/components/BadgeCard";
import { ProgressBar } from "@/components/ProgressBar";
import { useLearningProgress } from "@/hooks/useLearningProgress";

export default function ResultsPage() {
  const { state } = useLearningProgress();
  const completedModules = learningModules.filter((learningModule) => state.completedModules[learningModule.id]);
  const nextModule =
    learningModules.find((learningModule) => !state.completedModules[learningModule.id]) ??
    learningModules[0];
  const progress = (completedModules.length / learningModules.length) * 100;
  const averageScore =
    completedModules.length === 0
      ? 0
      : Math.round(
          completedModules.reduce((sum, learningModule) => sum + state.completedModules[learningModule.id].score, 0) /
            completedModules.length
        );

  return (
    <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <section className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft">
          <Trophy className="mb-5 h-10 w-10 text-lemon" aria-hidden="true" />
          <p className="mb-2 text-sm font-bold text-mint">전체 학습 결과</p>
          <h1 className="text-3xl font-black text-ink">{averageScore}점 평균</h1>
          <p className="mt-3 leading-7 text-slate-600">
            {completedModules.length > 0
              ? `${completedModules.length}개 미션을 완료했습니다. 선택 기록과 배지를 아래에서 확인할 수 있습니다.`
              : "아직 완료한 미션이 없습니다. 첫 미션부터 차근차근 시작해 보세요."}
          </p>
          <div className="mt-6">
            <ProgressBar value={progress} label="전체 완료율" />
          </div>
          <Link
            href={`/modules/${nextModule.id}`}
            className="mt-6 inline-flex min-h-12 items-center gap-2 rounded-lg bg-ink px-5 font-bold text-white"
          >
            다음 추천 모듈: {nextModule.title}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
        <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft">
          <h2 className="mb-5 text-2xl font-black text-ink">획득 배지</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {learningModules.map((learningModule) => (
              <BadgeCard
                key={learningModule.id}
                badge={learningModule.rewardBadge}
                earned={state.badges.includes(learningModule.rewardBadge.name)}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="mt-8 rounded-lg border border-slate-200 bg-white p-6 shadow-soft">
        <h2 className="mb-5 text-2xl font-black text-ink">의사결정 요약</h2>
        {completedModules.length > 0 ? (
          <div className="grid gap-4">
            {completedModules.map((learningModule) => {
              const decision = state.moduleDecisions[learningModule.id];
              const completed = state.completedModules[learningModule.id];
              return (
                <div key={learningModule.id} className="rounded-lg border border-slate-200 bg-slate-50 p-5">
                  <div className="mb-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <h3 className="text-lg font-black text-ink">{learningModule.title}</h3>
                    <span className="rounded-full bg-white px-3 py-1 text-sm font-bold text-mint">{completed.score}점</span>
                  </div>
                  <p className="text-sm font-semibold text-slate-500">
                    선택: {decision?.selectedChoiceId}. {decision?.selectedChoiceLabel}
                  </p>
                  <p className="mt-2 leading-7 text-slate-700">{decision?.feedback}</p>
                  <div className="mt-4 grid gap-2">
                    {learningModule.learningPoints.map((point) => (
                      <p key={point} className="flex gap-2 text-sm text-slate-600">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-mint" aria-hidden="true" />
                        <span>{point}</span>
                      </p>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="rounded-lg border border-dashed border-slate-300 p-8 text-center text-slate-500">
            완료 기록이 없습니다. 모듈을 완료하면 선택, 피드백, 배운 개념이 저장됩니다.
          </div>
        )}
      </section>
    </main>
  );
}
