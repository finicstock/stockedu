"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { useParams } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  Award,
  BookOpen,
  CheckCircle2,
  HelpCircle,
  PlayCircle,
  RotateCcw,
  Trophy
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { getModuleById, getNextModule } from "@/data/modules";
import { BadgeCard } from "@/components/BadgeCard";
import { FeedbackCard } from "@/components/FeedbackCard";
import { ProgressBar } from "@/components/ProgressBar";
import { QuizBlock } from "@/components/QuizBlock";
import { SimulationPanel } from "@/components/SimulationPanel";
import { useLearningProgress } from "@/hooks/useLearningProgress";

type ModuleStep = "learn" | "simulation" | "quiz" | "result";

export default function ModuleDetailPage() {
  const params = useParams<{ id: string }>();
  const learningModule = getModuleById(params.id);
  const { state, completeModule } = useLearningProgress();
  const [activeStep, setActiveStep] = useState<ModuleStep>("learn");
  const [selectedChoiceId, setSelectedChoiceId] = useState<"A" | "B" | "C" | undefined>();
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [result, setResult] = useState<ReturnType<typeof completeModule> | undefined>();

  const nextModule = useMemo(() => getNextModule(learningModule?.id), [learningModule?.id]);

  if (!learningModule) {
    return (
      <main className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6 lg:px-8">
        <h1 className="text-3xl font-black text-ink">모듈을 찾을 수 없습니다</h1>
        <p className="mt-3 text-slate-600">주소가 바뀌었거나 없는 미션입니다.</p>
        <Link href="/modules" className="mt-6 inline-flex rounded-lg bg-ink px-5 py-3 font-bold text-white">
          모듈 목록으로
        </Link>
      </main>
    );
  }

  const activeModule = learningModule;
  const completed = state.completedModules[learningModule.id];
  const selectedChoice = learningModule.choices.find((choice) => choice.id === selectedChoiceId);
  const allAnswered = learningModule.quiz.every((question) => answers[question.id] !== undefined);
  const progress = completed || result ? 100 : getStepProgress(activeStep, Boolean(selectedChoiceId), allAnswered);

  function handleFinish() {
    if (!selectedChoiceId) {
      return;
    }

    const nextResult = completeModule(activeModule, selectedChoiceId, answers);
    setResult(nextResult);
    setActiveStep("result");
  }

  function handleRetry() {
    setActiveStep("learn");
    setSelectedChoiceId(undefined);
    setAnswers({});
    setResult(undefined);
  }

  return (
    <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-6 flex items-center justify-between gap-4">
        <Link href="/modules" className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-ink">
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          모듈 목록
        </Link>
        {completed ? (
          <span className="rounded-full bg-mint px-3 py-1 text-sm font-bold text-white">
            완료 {completed.score}점
          </span>
        ) : null}
      </div>

      <section className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <p className="mb-2 text-sm font-bold text-mint">
              {learningModule.difficulty} · 예상 {learningModule.estimatedMinutes}분
            </p>
            <h1 className="text-3xl font-black text-ink">{learningModule.title}</h1>
            <p className="mt-4 max-w-3xl leading-7 text-slate-600">{learningModule.conceptSummary}</p>
          </div>
          <div className="w-full max-w-sm">
            <ProgressBar value={progress} label="현재 미션 흐름" />
          </div>
        </div>
      </section>

      <StepNavigator
        activeStep={activeStep}
        canOpenQuiz={Boolean(selectedChoiceId)}
        canOpenResult={Boolean(result)}
        onChange={setActiveStep}
      />

      {activeStep === "learn" ? (
        <section className="mt-8 grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-soft">
            <div className="mb-3 flex items-center gap-2 font-bold text-ink">
              <BookOpen className="h-5 w-5 text-peach" aria-hidden="true" />
              쉬운 개념 설명
            </div>
            <p className="leading-7 text-slate-700">{learningModule.beginnerExplanation}</p>
            <button
              type="button"
              onClick={() => setActiveStep("simulation")}
              className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-lg bg-ink px-4 font-bold text-white"
            >
              가상 상황으로 이동
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-soft">
            <p className="mb-3 font-bold text-ink">용어 돋보기</p>
            <div className="flex flex-wrap gap-2">
              {learningModule.keyConcepts.map((concept) => (
                <span
                  key={concept.term}
                  title={concept.easyMeaning}
                  className="rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-semibold text-ink"
                >
                  {concept.term}: <span className="font-normal text-slate-600">{concept.easyMeaning}</span>
                </span>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {activeStep === "simulation" ? (
        <>
          <div className="mt-8">
            <SimulationPanel
              learningModule={learningModule}
              selectedChoiceId={selectedChoiceId}
              locked={Boolean(result)}
              onSelect={setSelectedChoiceId}
            />
          </div>

          {selectedChoice ? (
            <section className="mt-8">
              <FeedbackCard
                choice={selectedChoice}
                feedback={learningModule.feedbackByChoice[selectedChoice.id]}
                impactNote={selectedChoice.impact?.note}
              />
              <button
                type="button"
                onClick={() => setActiveStep("quiz")}
                className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-lg bg-ink px-4 font-bold text-white"
              >
                퀴즈로 확인하기
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </section>
          ) : null}
        </>
      ) : null}

      {activeStep === "quiz" ? (
        <section className="mt-8">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-2xl font-black text-ink">퀴즈로 확인하기</h2>
            <span className="text-sm font-semibold text-slate-500">
              {Object.keys(answers).length}/{learningModule.quiz.length}
            </span>
          </div>
          {selectedChoice ? (
            <>
              <QuizBlock
                quiz={learningModule.quiz}
                answers={answers}
                onAnswer={(questionId, answerIndex) =>
                  setAnswers((current) => ({ ...current, [questionId]: answerIndex }))
                }
                showResult={Boolean(result)}
              />
              {!result ? (
                <button
                  type="button"
                  disabled={!allAnswered}
                  onClick={handleFinish}
                  className="mt-5 inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-ink px-6 font-bold text-white transition enabled:hover:bg-slate-700 disabled:cursor-not-allowed disabled:bg-slate-300"
                >
                  점수와 배지 받기
                  <Award className="h-4 w-4" aria-hidden="true" />
                </button>
              ) : null}
            </>
          ) : (
            <div className="rounded-lg border border-dashed border-slate-300 bg-white p-8 text-center text-slate-500">
              먼저 시뮬레이션에서 선택지를 골라주세요.
            </div>
          )}
        </section>
      ) : null}

      {activeStep === "result" && result ? (
        <section className="mt-10 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="rounded-lg border border-mint/30 bg-mint/10 p-6">
            <div className="mb-4 flex items-center gap-3">
              <CheckCircle2 className="h-8 w-8 text-mint" aria-hidden="true" />
              <div>
                <p className="text-sm font-bold text-mint">미션 완료</p>
                <h2 className="text-3xl font-black text-ink">{result.score}점</h2>
              </div>
            </div>
            <p className="leading-7 text-slate-700">
              선택 점수 {result.choicePoints}점과 퀴즈 점수 {result.quizPoints}점을 합산했습니다.
              퀴즈는 {result.correct}/{result.total}개를 맞혔습니다.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                href={`/modules/${nextModule.id}`}
                className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-ink px-4 font-bold text-white"
              >
                다음 모듈
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link href="/results" className="inline-flex min-h-11 items-center rounded-lg border border-slate-300 bg-white px-4 font-bold text-ink">
                결과 보기
              </Link>
              <button
                type="button"
                onClick={handleRetry}
                className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 font-bold text-ink"
              >
                다시 연습
                <RotateCcw className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            <BadgeCard badge={learningModule.rewardBadge} earned />
            <div className="rounded-lg border border-slate-200 bg-white p-5">
              <h3 className="mb-3 text-lg font-black text-ink">핵심 요약</h3>
              <ul className="space-y-2 text-sm leading-6 text-slate-700">
                {learningModule.learningPoints.map((point) => (
                  <li key={point} className="flex gap-2">
                    <CheckCircle2 className="mt-1 h-4 w-4 flex-none text-mint" aria-hidden="true" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      ) : null}
    </main>
  );
}

function getStepProgress(step: ModuleStep, hasChoice: boolean, allAnswered: boolean) {
  if (step === "result") {
    return 100;
  }
  if (step === "quiz") {
    return allAnswered ? 85 : 65;
  }
  if (step === "simulation") {
    return hasChoice ? 55 : 40;
  }
  return 25;
}

function StepNavigator({
  activeStep,
  canOpenQuiz,
  canOpenResult,
  onChange
}: {
  activeStep: ModuleStep;
  canOpenQuiz: boolean;
  canOpenResult: boolean;
  onChange: (step: ModuleStep) => void;
}) {
  const steps: Array<{
    id: ModuleStep;
    label: string;
    icon: LucideIcon;
    enabled: boolean;
  }> = [
    { id: "learn", label: "학습", icon: BookOpen, enabled: true },
    { id: "simulation", label: "시뮬레이션", icon: PlayCircle, enabled: true },
    { id: "quiz", label: "퀴즈", icon: HelpCircle, enabled: canOpenQuiz },
    { id: "result", label: "결과", icon: Trophy, enabled: canOpenResult }
  ];

  return (
    <div className="mt-6 grid grid-cols-2 gap-2 rounded-lg bg-slate-100 p-2 md:grid-cols-4">
      {steps.map((step) => {
        const Icon = step.icon;
        const active = activeStep === step.id;

        return (
          <button
            key={step.id}
            type="button"
            disabled={!step.enabled}
            onClick={() => onChange(step.id)}
            className={
              active
                ? "flex min-h-11 items-center justify-center gap-2 rounded-md bg-white px-3 text-sm font-black text-ink shadow-sm"
                : "flex min-h-11 items-center justify-center gap-2 rounded-md px-3 text-sm font-bold text-slate-500 transition enabled:hover:bg-white enabled:hover:text-ink disabled:cursor-not-allowed disabled:opacity-45"
            }
          >
            <Icon className="h-4 w-4" aria-hidden="true" />
            {step.label}
          </button>
        );
      })}
    </div>
  );
}
