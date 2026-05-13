import { describe, expect, it } from "vitest";
import { calculateModuleScore } from "./scoring";
import type { LearningModule } from "@/types/learning";

const moduleFixture = {
  choices: [
    { id: "A", points: 50 },
    { id: "B", points: 30 },
    { id: "C", points: 10 }
  ],
  quiz: [
    { id: "q1", answerIndex: 0 },
    { id: "q2", answerIndex: 1 }
  ]
} as LearningModule;

describe("calculateModuleScore", () => {
  it("combines decision points and quiz points", () => {
    const result = calculateModuleScore(moduleFixture, "A", { q1: 0, q2: 1 });

    expect(result.score).toBe(100);
    expect(result.correct).toBe(2);
  });

  it("keeps risky choices from receiving full score", () => {
    const result = calculateModuleScore(moduleFixture, "C", { q1: 0, q2: 1 });

    expect(result.score).toBe(60);
  });
});
