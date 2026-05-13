"use client";

import Link from "next/link";
import { Info, RotateCcw } from "lucide-react";
import { PortfolioSummary } from "@/components/PortfolioSummary";
import { useLearningProgress } from "@/hooks/useLearningProgress";
import { formatPercent, formatWon } from "@/lib/format";
import { getHoldingValue, getPortfolioCost } from "@/lib/portfolio";

export default function PortfolioPage() {
  const { state, portfolioSummary, resetProgress } = useLearningProgress();

  return (
    <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <section className="mb-8 rounded-lg border border-slate-200 bg-white p-6 shadow-soft">
        <p className="mb-2 text-sm font-bold text-mint">가상 포트폴리오</p>
        <h1 className="text-3xl font-black text-ink">선택이 만든 학습용 자산 현황</h1>
        <p className="mt-3 max-w-3xl leading-7 text-slate-600">
          각 미션의 선택에 따라 일부 가상 종목과 현금 흐름이 바뀝니다. 결과는 투자 성과 평가가 아니라
          의사결정 습관을 돌아보기 위한 학습 자료입니다.
        </p>
      </section>

      <PortfolioSummary state={state} />

      <section className="mt-8 grid gap-5 lg:grid-cols-[1fr_0.6fr]">
        <div className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-soft">
          <div className="border-b border-slate-200 p-5">
            <h2 className="text-xl font-black text-ink">보유 가상 종목</h2>
          </div>
          {state.holdings.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full min-w-[720px] text-left text-sm">
                <thead className="bg-slate-50 text-slate-500">
                  <tr>
                    <th className="px-5 py-3">종목</th>
                    <th className="px-5 py-3">산업</th>
                    <th className="px-5 py-3">수량</th>
                    <th className="px-5 py-3">평균 단가</th>
                    <th className="px-5 py-3">현재가</th>
                    <th className="px-5 py-3">가상 평가</th>
                    <th className="px-5 py-3">수익률</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {state.holdings.map((holding) => {
                    const value = getHoldingValue(holding);
                    const cost = getPortfolioCost(holding);
                    const returnRate = cost === 0 ? 0 : ((value - cost) / cost) * 100;
                    return (
                      <tr key={holding.symbol}>
                        <td className="px-5 py-4">
                          <p className="font-bold text-ink">{holding.name}</p>
                          <p className="text-xs text-slate-500">{holding.symbol}</p>
                        </td>
                        <td className="px-5 py-4 text-slate-600">{holding.sector}</td>
                        <td className="px-5 py-4 text-slate-600">{holding.quantity}</td>
                        <td className="px-5 py-4 text-slate-600">{formatWon(holding.averagePrice)}</td>
                        <td className="px-5 py-4 text-slate-600">{formatWon(holding.currentPrice)}</td>
                        <td className="px-5 py-4 font-bold text-ink">{formatWon(value)}</td>
                        <td className={returnRate >= 0 ? "px-5 py-4 font-bold text-mint" : "px-5 py-4 font-bold text-peach"}>
                          {formatPercent(returnRate)}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="p-8 text-center text-slate-500">
              아직 가상 종목이 없습니다. 모듈을 완료하면 선택 결과가 여기에 반영됩니다.
            </div>
          )}
        </div>

        <aside className="space-y-5">
          <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-soft">
            <div className="mb-3 flex items-center gap-2 font-bold text-ink">
              <Info className="h-5 w-5 text-mint" aria-hidden="true" />
              학습용 피드백
            </div>
            <p className="leading-7 text-slate-700">
              {portfolioSummary.diversificationScore >= 70
                ? "여러 산업과 자산으로 위험을 나누는 선택이 늘었습니다."
                : "아직 특정 선택이나 산업에 위험이 몰릴 수 있습니다. 분산투자 모듈을 연습해 보세요."}
            </p>
            <p className="mt-3 leading-7 text-slate-700">
              {portfolioSummary.riskScore <= 45
                ? "기준 기반 선택이 많아 리스크 점수가 안정적인 편입니다."
                : "급등 추격, 전액 배분, 감정적 선택이 위험 점수에 반영되었습니다."}
            </p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-5">
            <h2 className="mb-3 text-lg font-black text-ink">다음 행동</h2>
            <div className="grid gap-3">
              <Link href="/modules" className="inline-flex min-h-11 items-center justify-center rounded-lg bg-ink px-4 font-bold text-white">
                모듈 계속하기
              </Link>
              <button
                type="button"
                onClick={resetProgress}
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-4 font-bold text-ink"
              >
                진행 상태 초기화
                <RotateCcw className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
          </div>
        </aside>
      </section>
    </main>
  );
}
