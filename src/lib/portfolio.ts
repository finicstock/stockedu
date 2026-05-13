import type { Holding, LearningProgressState, PortfolioImpact } from "@/types/learning";

export const INITIAL_CASH = 10_000_000;

export const initialProgressState: LearningProgressState = {
  cash: INITIAL_CASH,
  holdings: [],
  completedModules: {},
  scores: {},
  badges: [],
  moduleDecisions: {},
  riskAdjustment: 0,
  diversificationAdjustment: 0
};

export function applyPortfolioImpact(
  state: LearningProgressState,
  impact?: PortfolioImpact
): LearningProgressState {
  if (!impact) {
    return state;
  }

  const nextHoldings = [...state.holdings];

  impact.holdings?.forEach((change) => {
    const existingIndex = nextHoldings.findIndex((holding) => holding.symbol === change.symbol);
    if (existingIndex === -1) {
      nextHoldings.push({ ...change });
      return;
    }

    const existing = nextHoldings[existingIndex];
    const totalQuantity = existing.quantity + change.quantity;
    const totalCost =
      existing.averagePrice * existing.quantity + change.averagePrice * change.quantity;

    nextHoldings[existingIndex] = {
      ...existing,
      quantity: totalQuantity,
      averagePrice: Math.round(totalCost / totalQuantity),
      currentPrice: change.currentPrice
    };
  });

  return {
    ...state,
    cash: Math.max(0, state.cash + (impact.cashChange ?? 0)),
    holdings: nextHoldings,
    riskAdjustment: state.riskAdjustment + (impact.riskDelta ?? 0),
    diversificationAdjustment:
      state.diversificationAdjustment + (impact.diversificationDelta ?? 0)
  };
}

export function getHoldingValue(holding: Holding) {
  return holding.quantity * holding.currentPrice;
}

export function getPortfolioCost(holding: Holding) {
  return holding.quantity * holding.averagePrice;
}

export function getPortfolioSummary(state: LearningProgressState) {
  const investedValue = state.holdings.reduce((sum, holding) => sum + getHoldingValue(holding), 0);
  const investedCost = state.holdings.reduce((sum, holding) => sum + getPortfolioCost(holding), 0);
  const totalValue = state.cash + investedValue;
  const returnRate = investedCost === 0 ? 0 : ((investedValue - investedCost) / investedCost) * 100;
  const sectorCount = new Set(state.holdings.map((holding) => holding.sector)).size;
  const concentrationPenalty = state.holdings.length <= 1 ? 18 : Math.max(0, 12 - sectorCount * 3);
  const riskScore = clamp(
    45 + concentrationPenalty + state.riskAdjustment - state.diversificationAdjustment,
    5,
    95
  );
  const diversificationScore = clamp(
    25 + sectorCount * 18 + state.diversificationAdjustment - Math.max(0, state.riskAdjustment / 2),
    0,
    100
  );

  return {
    investedValue,
    investedCost,
    totalValue,
    returnRate,
    riskScore,
    diversificationScore,
    sectorCount
  };
}

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, Math.round(value)));
}
