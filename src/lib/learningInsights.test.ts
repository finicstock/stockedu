import { describe, expect, it } from "vitest";
import { learningModules } from "../data/modules";
import type { LearningProgressState } from "../types/learning";
import { initialProgressState } from "./portfolio";
import { getLearningInsights } from "./learningInsights";
import { validateLearningModules } from "./moduleValidation";

describe("learning insights", () => {
  it("validates module content shape", () => {
    const result = validateLearningModules(learningModules);

    expect(result.valid).toBe(true);
    expect(result.errors).toEqual([]);
  });

  it("creates a risk-aware profile from completed choices", () => {
    const state: LearningProgressState = {
      ...initialProgressState,
      completedModules: {
        "what-is-stock": {
          moduleId: "what-is-stock",
          score: 62,
          selectedChoiceId: "C",
          quizCorrect: 2,
          quizTotal: 2,
          completedAt: new Date().toISOString()
        },
        diversification: {
          moduleId: "diversification",
          score: 100,
          selectedChoiceId: "B",
          quizCorrect: 2,
          quizTotal: 2,
          completedAt: new Date().toISOString()
        }
      },
      scores: {
        "what-is-stock": 62,
        diversification: 100
      },
      badges: [],
      moduleDecisions: {},
      holdings: []
    };

    const insights = getLearningInsights(learningModules, state);

    expect(insights.completedInsights).toHaveLength(2);
    expect(insights.riskyCount).toBe(1);
    expect(insights.reviewTargets[0].moduleId).toBe("what-is-stock");
  });
});
