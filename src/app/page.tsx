"use client";

import Link from "next/link";
import { ArrowRight, BadgeCheck, BookOpenCheck, Coins, Sparkles } from "lucide-react";
import { learningModules } from "@/data/modules";
import { useLearningProgress } from "@/hooks/useLearningProgress";
import { BadgeCard } from "@/components/BadgeCard";
import { DisclaimerBox } from "@/components/DisclaimerBox";
import { PortfolioSummary } from "@/components/PortfolioSummary";
import { ProgressBar } from "@/components/ProgressBar";

export default function HomePage() {
  const { state } = useLearningProgress();
  const completedCount = Object.keys(state.completedModules).length;
  const progress = (completedCount / learningModules.length) * 100;
  const nextModule =
    learningModules.find((learningModule) => !state.completedModules[learningModule.id]) ??
    learningModules[0];
  const earnedModules = learningModules.filter((learningModule) =>
    state.badges.includes(learningModule.rewardBadge.name)
  );

  return (
    <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-stretch">
        <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft sm:p-8">
          <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-mint/10 px-3 py-1 text-sm font-bold text-mint">
            <Sparkles className="h-4 w-4" aria-hidden="true" />
            오늘의 학습 미션
          </p>
          <h1 className="max-w-3xl text-3xl font-black leading-tight text-ink sm:text-5xl">
            주식이 낯선 초보자를 위한 가상 투자 퀘스트
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">
            짧게 배우고, 가상 상황에서 선택하고, 피드백과 퀴즈로 다시 확인합니다.
            실제 돈은 쓰지 않고 가상 머니로만 연습합니다.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href={`/modules/${nextModule.id}`}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-ink px-5 font-bold text-white transition hover:bg-slate-700"
            >
              오늘의 학습 미션 시작하기
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link
              href="/modules"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-5 font-bold text-ink transition hover:border-mint"
            >
              전체 모듈 보기
            </Link>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
          <StatusTile icon={BookOpenCheck} label="완료 모듈" value={`${completedCount}/${learningModules.length}`} />
          <StatusTile icon={BadgeCheck} label="획득 배지" value={`${state.badges.length}개`} />
          <StatusTile icon={Coins} label="기본 가상 투자금" value="1,000만 원" />
        </div>
      </section>

      <section className="mt-8 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft">
          <ProgressBar value={progress} label="전체 진행률" />
          <p className="mt-4 text-sm leading-6 text-slate-600">
            다음 미션: <span className="font-bold text-ink">{nextModule.title}</span>
          </p>
        </div>
        <DisclaimerBox />
      </section>

      <section className="mt-10">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-2xl font-black text-ink">가상 포트폴리오 요약</h2>
          <Link href="/portfolio" className="text-sm font-bold text-mint">
            자세히 보기
          </Link>
        </div>
        <PortfolioSummary state={state} compact />
      </section>

      <section className="mt-10">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-2xl font-black text-ink">획득 배지</h2>
          <Link href="/results" className="text-sm font-bold text-mint">
            결과 보기
          </Link>
        </div>
        {earnedModules.length > 0 ? (
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {earnedModules.slice(0, 6).map((learningModule) => (
              <BadgeCard key={learningModule.id} badge={learningModule.rewardBadge} earned />
            ))}
          </div>
        ) : (
          <div className="rounded-lg border border-dashed border-slate-300 bg-white p-8 text-center text-slate-500">
            첫 미션을 완료하면 여기에 배지가 채워집니다.
          </div>
        )}
      </section>
    </main>
  );
}

function StatusTile({
  icon: Icon,
  label,
  value
}: {
  icon: typeof BookOpenCheck;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-soft">
      <Icon className="mb-4 h-7 w-7 text-peach" aria-hidden="true" />
      <p className="text-sm font-semibold text-slate-500">{label}</p>
      <p className="mt-1 text-2xl font-black text-ink">{value}</p>
    </div>
  );
}
