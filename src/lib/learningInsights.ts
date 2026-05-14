import type {
  ChoiceQuality,
  LearningModule,
  LearningProgressState,
  SimulationChoice
} from "@/types/learning";

export interface CompletedInsight {
  module: LearningModule;
  score: number;
  selectedChoice: SimulationChoice;
  quizCorrect: number;
  quizTotal: number;
}

export interface LearningInsights {
  completedInsights: CompletedInsight[];
  averageScore: number;
  quizAccuracy: number;
  recommendedCount: number;
  mixedCount: number;
  riskyCount: number;
  profile: {
    title: string;
    description: string;
    traits: string[];
  };
  weakConcepts: Array<{
    moduleId: string;
    title: string;
    reason: string;
  }>;
  reviewTargets: Array<{
    moduleId: string;
    title: string;
    score: number;
    reason: string;
  }>;
  shareText: string;
}

export function getLearningInsights(
  modules: LearningModule[],
  state: LearningProgressState
): LearningInsights {
  const completedInsights = modules.flatMap((module) => {
    const completed = state.completedModules[module.id];
    if (!completed) {
      return [];
    }

    const selectedChoice = module.choices.find((choice) => choice.id === completed.selectedChoiceId);
    if (!selectedChoice) {
      return [];
    }

    return [
      {
        module,
        score: completed.score,
        selectedChoice,
        quizCorrect: completed.quizCorrect,
        quizTotal: completed.quizTotal
      }
    ];
  });

  const averageScore =
    completedInsights.length === 0
      ? 0
      : Math.round(
          completedInsights.reduce((sum, insight) => sum + insight.score, 0) /
            completedInsights.length
        );

  const quizTotal = completedInsights.reduce((sum, insight) => sum + insight.quizTotal, 0);
  const quizCorrect = completedInsights.reduce((sum, insight) => sum + insight.quizCorrect, 0);
  const quizAccuracy = quizTotal === 0 ? 0 : Math.round((quizCorrect / quizTotal) * 100);

  const qualityCounts = countChoiceQualities(completedInsights);
  const profile = getInvestorProfile(qualityCounts, averageScore, quizAccuracy);
  const weakConcepts = getWeakConcepts(completedInsights);
  const reviewTargets = getReviewTargets(completedInsights);

  return {
    completedInsights,
    averageScore,
    quizAccuracy,
    ...qualityCounts,
    profile,
    weakConcepts,
    reviewTargets,
    shareText: createShareText(completedInsights.length, averageScore, profile.title)
  };
}

function countChoiceQualities(completedInsights: CompletedInsight[]) {
  return completedInsights.reduce(
    (counts, insight) => {
      const key = `${insight.selectedChoice.quality}Count` as const;
      counts[key] += 1;
      return counts;
    },
    {
      recommendedCount: 0,
      mixedCount: 0,
      riskyCount: 0
    }
  );
}

function getInvestorProfile(
  qualityCounts: Record<`${ChoiceQuality}Count`, number>,
  averageScore: number,
  quizAccuracy: number
) {
  if (qualityCounts.recommendedCount >= Math.max(2, qualityCounts.riskyCount + qualityCounts.mixedCount)) {
    return {
      title: "근거형 탐험가",
      description: "소문보다 자료와 기준을 먼저 확인하는 선택이 많습니다.",
      traits: ["근거 확인", "리스크 점검", "차분한 판단"]
    };
  }

  if (qualityCounts.riskyCount > qualityCounts.recommendedCount) {
    return {
      title: "속도 조절이 필요한 추격형",
      description: "급등, 소문, 감정에 반응한 선택이 보여 복습 효과가 큰 상태입니다.",
      traits: ["FOMO 주의", "비중 조절", "주문 전 확인"]
    };
  }

  if (quizAccuracy >= 80 && averageScore >= 75) {
    return {
      title: "개념 탄탄형",
      description: "퀴즈 이해도와 의사결정 점수가 안정적으로 쌓이고 있습니다.",
      traits: ["개념 이해", "균형 판단", "복습 효율"]
    };
  }

  return {
    title: "균형 연습형",
    description: "좋은 판단과 흔들리는 판단이 섞여 있어 반복 학습으로 빠르게 좋아질 수 있습니다.",
    traits: ["반복 학습", "약점 확인", "작은 개선"]
  };
}

function getWeakConcepts(completedInsights: CompletedInsight[]) {
  return completedInsights
    .filter((insight) => insight.score < 80 || insight.selectedChoice.quality !== "recommended")
    .slice(0, 4)
    .map((insight) => ({
      moduleId: insight.module.id,
      title: insight.module.title,
      reason:
        insight.selectedChoice.quality === "risky"
          ? "위험한 선택지를 골라 기준 점검이 필요합니다."
          : insight.score < 80
            ? "점수가 낮아 퀴즈와 핵심 요약을 다시 보면 좋습니다."
            : "더 근거 있는 선택지를 비교해볼 만합니다."
    }));
}

function getReviewTargets(completedInsights: CompletedInsight[]) {
  return completedInsights
    .filter((insight) => insight.score < 90 || insight.selectedChoice.quality !== "recommended")
    .sort((a, b) => {
      const qualityWeight = { risky: 0, mixed: 1, recommended: 2 };
      return qualityWeight[a.selectedChoice.quality] - qualityWeight[b.selectedChoice.quality] || a.score - b.score;
    })
    .slice(0, 3)
    .map((insight) => ({
      moduleId: insight.module.id,
      title: insight.module.title,
      score: insight.score,
      reason:
        insight.selectedChoice.quality === "recommended"
          ? "점수 향상을 위해 퀴즈를 다시 풀어보세요."
          : "선택지를 다시 비교하며 근거 기반 판단을 연습해보세요."
    }));
}

function createShareText(completedCount: number, averageScore: number, profileTitle: string) {
  if (completedCount === 0) {
    return "나는 주식 입문 퀘스트를 시작했어요. 가상 시뮬레이션으로 투자 기본기를 연습합니다.";
  }

  return `나는 주식 입문 퀘스트에서 ${completedCount}개 미션을 완료했고 평균 ${averageScore}점을 기록했어요. 현재 학습 성향은 '${profileTitle}'입니다.`;
}
