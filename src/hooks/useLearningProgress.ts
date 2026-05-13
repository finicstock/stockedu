"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import type {
  DecisionSummary,
  LearningModule,
  LearningProgressState
} from "@/types/learning";
import {
  applyPortfolioImpact,
  getPortfolioSummary,
  initialProgressState
} from "@/lib/portfolio";
import { calculateModuleScore } from "@/lib/scoring";

const STORAGE_KEY = "stock-starter-quest-progress";

function createInitialState(): LearningProgressState {
  return {
    ...initialProgressState,
    holdings: [],
    completedModules: {},
    scores: {},
    badges: [],
    moduleDecisions: {}
  };
}

function readProgressFromStorage(): LearningProgressState {
  if (typeof window === "undefined" || !window.localStorage) {
    return createInitialState();
  }

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return createInitialState();
    }

    const parsed = JSON.parse(raw) as Partial<LearningProgressState>;

    return {
      ...createInitialState(),
      ...parsed,
      holdings: parsed.holdings ?? [],
      completedModules: parsed.completedModules ?? {},
      scores: parsed.scores ?? {},
      badges: parsed.badges ?? [],
      moduleDecisions: parsed.moduleDecisions ?? {}
    };
  } catch {
    return createInitialState();
  }
}

export function useLearningProgress() {
  const [state, setState] = useState<LearningProgressState>(() => createInitialState());
  const [hasHydrated, setHasHydrated] = useState(false);

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      setState(readProgressFromStorage());
      setHasHydrated(true);
    }, 0);

    return () => window.clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    if (!hasHydrated || typeof window === "undefined" || !window.localStorage) {
      return;
    }

    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }, [hasHydrated, state]);

  const completeModule = useCallback(
    (
      learningModule: LearningModule,
      selectedChoiceId: "A" | "B" | "C",
      answers: Record<string, number>
    ) => {
      const selectedChoice = learningModule.choices.find((choice) => choice.id === selectedChoiceId);
      if (!selectedChoice) {
        throw new Error(`Unknown choice: ${selectedChoiceId}`);
      }

      const result = calculateModuleScore(learningModule, selectedChoiceId, answers);
      const decision: DecisionSummary = {
        moduleId: learningModule.id,
        moduleTitle: learningModule.title,
        selectedChoiceId,
        selectedChoiceLabel: selectedChoice.label,
        feedback: learningModule.feedbackByChoice[selectedChoiceId],
        score: result.score,
        badgeName: learningModule.rewardBadge.name
      };

      setState((current) => {
        const wasCompleted = Boolean(current.completedModules[learningModule.id]);
        const nextBase = wasCompleted
          ? current
          : applyPortfolioImpact(current, selectedChoice.impact);

        const nextScore = Math.max(current.scores[learningModule.id] ?? 0, result.score);

        return {
          ...nextBase,
          completedModules: {
            ...nextBase.completedModules,
            [learningModule.id]: {
              moduleId: learningModule.id,
              score: nextScore,
              selectedChoiceId,
              quizCorrect: result.correct,
              quizTotal: result.total,
              completedAt: new Date().toISOString()
            }
          },
          scores: {
            ...nextBase.scores,
            [learningModule.id]: nextScore
          },
          badges: Array.from(new Set([...nextBase.badges, learningModule.rewardBadge.name])),
          moduleDecisions: {
            ...nextBase.moduleDecisions,
            [learningModule.id]: decision
          },
          lastDecision: decision
        };
      });

      return {
        ...result,
        decision,
        impactNote: selectedChoice.impact?.note
      };
    },
    []
  );

  const resetProgress = useCallback(() => {
    setState(createInitialState());
    if (typeof window !== "undefined" && window.localStorage) {
      window.localStorage.removeItem(STORAGE_KEY);
    }
  }, []);

  const portfolioSummary = useMemo(() => getPortfolioSummary(state), [state]);

  return {
    state,
    hasHydrated,
    completeModule,
    resetProgress,
    portfolioSummary
  };
}
