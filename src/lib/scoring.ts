import type { LearningModule } from "@/types/learning";

export function calculateQuizResult(
  module: Pick<LearningModule, "quiz">,
  answers: Record<string, number>
) {
  const correct = module.quiz.reduce((count, question) => {
    return answers[question.id] === question.answerIndex ? count + 1 : count;
  }, 0);

  return {
    correct,
    total: module.quiz.length,
    quizPoints: Math.round((correct / module.quiz.length) * 50)
  };
}

export function calculateModuleScore(
  module: Pick<LearningModule, "choices" | "quiz">,
  selectedChoiceId: "A" | "B" | "C",
  answers: Record<string, number>
) {
  const selectedChoice = module.choices.find((choice) => choice.id === selectedChoiceId);
  const choicePoints = selectedChoice?.points ?? 0;
  const quizResult = calculateQuizResult(module, answers);

  return {
    score: Math.min(100, choicePoints + quizResult.quizPoints),
    choicePoints,
    ...quizResult
  };
}
