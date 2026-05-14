import type { LearningModule } from "@/types/learning";

export function validateLearningModules(modules: LearningModule[]) {
  const ids = new Set<string>();
  const errors: string[] = [];

  modules.forEach((module) => {
    if (ids.has(module.id)) {
      errors.push(`${module.id}: id가 중복되었습니다.`);
    }
    ids.add(module.id);

    if (module.choices.length !== 3) {
      errors.push(`${module.id}: 선택지는 3개여야 합니다.`);
    }

    if (!module.choices.some((choice) => choice.id === module.correctOrRecommendedChoice)) {
      errors.push(`${module.id}: 추천 선택지가 choices에 없습니다.`);
    }

    if (module.quiz.length < 2) {
      errors.push(`${module.id}: 퀴즈는 최소 2개가 필요합니다.`);
    }

    module.quiz.forEach((question) => {
      if (question.answerIndex < 0 || question.answerIndex >= question.options.length) {
        errors.push(`${module.id}/${question.id}: 정답 인덱스가 선택지 범위를 벗어났습니다.`);
      }
    });

    if (module.priceSeries.length < 2) {
      errors.push(`${module.id}: 가격 변화 데이터는 최소 2개가 필요합니다.`);
    }
  });

  return {
    valid: errors.length === 0,
    errors
  };
}
