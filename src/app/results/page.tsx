"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  BarChart3,
  Brain,
  CheckCircle2,
  Clipboard,
  RefreshCw,
  RotateCcw,
  Share2,
  Target,
  Trophy
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { learningModules } from "@/data/modules";
import { BadgeCard } from "@/components/BadgeCard";
import { ProgressBar } from "@/components/ProgressBar";
import { useLearningProgress } from "@/hooks/useLearningProgress";
import { brand } from "@/lib/brand";
import { getLearningInsights } from "@/lib/learningInsights";

export default function ResultsPage() {
  const { state, resetProgress } = useLearningProgress();
  const [copied, setCopied] = useState(false);
  const completedModules = learningModules.filter((learningModule) => state.completedModules[learningModule.id]);
  const nextModule =
    learningModules.find((learningModule) => !state.completedModules[learningModule.id]) ??
    learningModules[0];
  const progress = (completedModules.length / learningModules.length) * 100;
  const insights = getLearningInsights(learningModules, state);
  const averageScore = insights.averageScore;

  async function handleCopyShareText() {
    const text = `${insights.shareText}\n${brand.productionUrl}`;

    if (typeof navigator !== "undefined" && navigator.clipboard) {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    }
  }

  function handleResetProgress() {
    if (typeof window !== "undefined" && window.confirm("모든 학습 기록과 가상 포트폴리오를 초기화할까요?")) {
      resetProgress();
    }
  }

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

      <section className="mt-8 grid gap-5 xl:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft">
          <div className="mb-4 flex items-center gap-3">
            <div className="grid h-11 w-11 place-items-center rounded-full bg-mint/10 text-mint">
              <Brain className="h-5 w-5" aria-hidden="true" />
            </div>
            <div>
              <p className="text-sm font-bold text-mint">나의 학습 성향 리포트</p>
              <h2 className="text-2xl font-black text-ink">{insights.profile.title}</h2>
            </div>
          </div>
          <p className="leading-7 text-slate-700">{insights.profile.description}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {insights.profile.traits.map((trait) => (
              <span key={trait} className="rounded-full bg-skysoft px-3 py-2 text-sm font-bold text-ink">
                {trait}
              </span>
            ))}
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <InsightMetric
            icon={Target}
            label="근거 있는 선택"
            value={`${insights.recommendedCount}회`}
            description="추천 선택지를 고른 횟수입니다."
          />
          <InsightMetric
            icon={RefreshCw}
            label="복습 필요 선택"
            value={`${insights.mixedCount + insights.riskyCount}회`}
            description="다시 비교하면 점수가 오를 수 있습니다."
          />
          <InsightMetric
            icon={BarChart3}
            label="퀴즈 정답률"
            value={`${insights.quizAccuracy}%`}
            description="개념 이해도를 보여주는 학습용 지표입니다."
          />
          <InsightMetric
            icon={Share2}
            label="완료 미션"
            value={`${completedModules.length}개`}
            description="전체 12개 중 완료한 미션입니다."
          />
        </div>
      </section>

      <section className="mt-8 grid gap-5 lg:grid-cols-[1fr_0.85fr]">
        <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft">
          <div className="mb-5 flex items-center justify-between gap-3">
            <div>
              <p className="text-sm font-bold text-peach">복습 추천</p>
              <h2 className="text-2xl font-black text-ink">점수가 오를 수 있는 미션</h2>
            </div>
            <Link href="/modules" className="text-sm font-bold text-mint">
              전체 보기
            </Link>
          </div>
          {insights.reviewTargets.length > 0 ? (
            <div className="grid gap-3">
              {insights.reviewTargets.map((target) => (
                <Link
                  key={target.moduleId}
                  href={`/modules/${target.moduleId}`}
                  className="rounded-lg border border-slate-200 bg-slate-50 p-4 transition hover:border-mint hover:bg-skysoft"
                >
                  <div className="flex items-center justify-between gap-3">
                    <p className="font-black text-ink">{target.title}</p>
                    <span className="rounded-full bg-white px-3 py-1 text-sm font-bold text-peach">
                      {target.score}점
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{target.reason}</p>
                </Link>
              ))}
            </div>
          ) : (
            <div className="rounded-lg border border-dashed border-slate-300 p-6 text-center text-slate-500">
              아직 복습 추천이 없습니다. 미션을 완료하면 약점이 자동으로 정리됩니다.
            </div>
          )}
        </div>

        <div className="rounded-lg border border-ink bg-ink p-6 text-white shadow-soft">
          <p className="mb-2 text-sm font-bold text-lemon">공유용 결과 카드</p>
          <h2 className="text-2xl font-black">나의 주식 입문 퀘스트</h2>
          <div className="mt-5 rounded-lg bg-white/10 p-4">
            <p className="text-sm leading-7 text-white/85">{insights.shareText}</p>
          </div>
          <button
            type="button"
            onClick={handleCopyShareText}
            className="mt-5 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-lg bg-white px-4 text-sm font-bold text-ink transition hover:bg-lemon"
          >
            <Clipboard className="h-4 w-4" aria-hidden="true" />
            {copied ? "복사 완료" : "공유 문구 복사"}
          </button>
          <button
            type="button"
            onClick={handleResetProgress}
            className="mt-3 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-lg border border-white/20 bg-transparent px-4 text-sm font-bold text-white transition hover:bg-white/10"
          >
            <RotateCcw className="h-4 w-4" aria-hidden="true" />
            학습 기록 초기화
          </button>
        </div>
      </section>

      <section className="mt-8 rounded-lg border border-slate-200 bg-white p-6 shadow-soft">
        <div className="mb-5 flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-full bg-peach/10 text-peach">
            <Target className="h-5 w-5" aria-hidden="true" />
          </div>
          <div>
            <p className="text-sm font-bold text-peach">약점 개념</p>
            <h2 className="text-2xl font-black text-ink">다음 복습 때 먼저 볼 부분</h2>
          </div>
        </div>
        {insights.weakConcepts.length > 0 ? (
          <div className="grid gap-3 md:grid-cols-2">
            {insights.weakConcepts.map((concept) => (
              <Link
                key={concept.moduleId}
                href={`/modules/${concept.moduleId}`}
                className="rounded-lg border border-slate-200 bg-slate-50 p-4 transition hover:border-peach"
              >
                <p className="font-black text-ink">{concept.title}</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">{concept.reason}</p>
              </Link>
            ))}
          </div>
        ) : (
          <p className="rounded-lg bg-slate-50 p-4 text-sm leading-6 text-slate-600">
            아직 약점 데이터가 충분하지 않습니다. 미션을 몇 개 완료하면 자동으로 추천됩니다.
          </p>
        )}
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

function InsightMetric({
  icon: Icon,
  label,
  value,
  description
}: {
  icon: LucideIcon;
  label: string;
  value: string;
  description: string;
}) {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-soft">
      <Icon className="mb-4 h-6 w-6 text-peach" aria-hidden="true" />
      <p className="text-sm font-semibold text-slate-500">{label}</p>
      <p className="mt-1 text-2xl font-black text-ink">{value}</p>
      <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
    </div>
  );
}
