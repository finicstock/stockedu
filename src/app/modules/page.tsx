"use client";

import { learningModules } from "@/data/modules";
import { ModuleCard } from "@/components/ModuleCard";
import { ProgressBar } from "@/components/ProgressBar";
import { useLearningProgress } from "@/hooks/useLearningProgress";

export default function ModulesPage() {
  const { state } = useLearningProgress();
  const completedCount = Object.keys(state.completedModules).length;
  const progress = (completedCount / learningModules.length) * 100;

  return (
    <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <section className="mb-8 rounded-lg border border-slate-200 bg-white p-6 shadow-soft">
        <p className="mb-2 text-sm font-bold text-mint">전체 학습 모듈</p>
        <h1 className="text-3xl font-black text-ink">12개 기초 개념을 미션으로 연습하기</h1>
        <p className="mt-3 max-w-3xl leading-7 text-slate-600">
          각 카드에는 짧은 설명, 가상 시뮬레이션, 선택지 피드백, 퀴즈가 포함됩니다.
          완료하면 점수와 배지가 저장됩니다.
        </p>
        <div className="mt-6 max-w-xl">
          <ProgressBar value={progress} label="모듈 완료율" />
        </div>
      </section>

      <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {learningModules.map((learningModule) => {
          const completed = state.completedModules[learningModule.id];
          return (
            <ModuleCard
              key={learningModule.id}
              learningModule={learningModule}
              completed={Boolean(completed)}
              score={completed?.score}
            />
          );
        })}
      </section>
    </main>
  );
}
