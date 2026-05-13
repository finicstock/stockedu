export type Difficulty = "입문" | "기초" | "연습";

export type ChoiceQuality = "recommended" | "mixed" | "risky";

export interface HoldingChange {
  symbol: string;
  name: string;
  sector: string;
  quantity: number;
  averagePrice: number;
  currentPrice: number;
}

export interface PortfolioImpact {
  cashChange?: number;
  holdings?: HoldingChange[];
  riskDelta?: number;
  diversificationDelta?: number;
  note: string;
}

export interface SimulationChoice {
  id: "A" | "B" | "C";
  label: string;
  detail: string;
  quality: ChoiceQuality;
  points: number;
  impact?: PortfolioImpact;
}

export interface NewsCard {
  headline: string;
  tone: "positive" | "neutral" | "negative";
  detail: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  answerIndex: number;
  explanation: string;
}

export interface LearningModule {
  id: string;
  title: string;
  difficulty: Difficulty;
  estimatedMinutes: number;
  conceptSummary: string;
  beginnerExplanation: string;
  simulationScenario: string;
  choices: SimulationChoice[];
  correctOrRecommendedChoice: "A" | "B" | "C";
  feedbackByChoice: Record<"A" | "B" | "C", string>;
  quiz: QuizQuestion[];
  rewardBadge: {
    name: string;
    description: string;
    icon: string;
  };
  learningPoints: string[];
  keyConcepts: {
    term: string;
    easyMeaning: string;
  }[];
  newsCards: NewsCard[];
  priceSeries: number[];
}

export interface Holding {
  symbol: string;
  name: string;
  sector: string;
  quantity: number;
  averagePrice: number;
  currentPrice: number;
}

export interface CompletedModule {
  moduleId: string;
  score: number;
  selectedChoiceId: "A" | "B" | "C";
  quizCorrect: number;
  quizTotal: number;
  completedAt: string;
}

export interface DecisionSummary {
  moduleId: string;
  moduleTitle: string;
  selectedChoiceId: "A" | "B" | "C";
  selectedChoiceLabel: string;
  feedback: string;
  score: number;
  badgeName: string;
}

export interface LearningProgressState {
  cash: number;
  holdings: Holding[];
  completedModules: Record<string, CompletedModule>;
  scores: Record<string, number>;
  badges: string[];
  moduleDecisions: Record<string, DecisionSummary>;
  lastDecision?: DecisionSummary;
  riskAdjustment: number;
  diversificationAdjustment: number;
}
