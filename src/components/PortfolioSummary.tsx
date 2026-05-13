import { Activity, Banknote, ChartPie, Gauge } from "lucide-react";
import type { LearningProgressState } from "@/types/learning";
import { formatPercent, formatWon } from "@/lib/format";
import { getPortfolioSummary } from "@/lib/portfolio";
import { ProgressBar } from "./ProgressBar";

interface PortfolioSummaryProps {
  state: LearningProgressState;
  compact?: boolean;
}

export function PortfolioSummary({ state, compact = false }: PortfolioSummaryProps) {
  const summary = getPortfolioSummary(state);

  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      <MetricCard icon={Banknote} label="가상 현금" value={formatWon(state.cash)} />
      <MetricCard icon={Activity} label="총 가상 자산" value={formatWon(summary.totalValue)} />
      <MetricCard icon={Gauge} label="가상 수익률" value={formatPercent(summary.returnRate)} />
      <MetricCard icon={ChartPie} label="보유 가상 종목" value={`${state.holdings.length}개`} />
      {!compact ? (
        <div className="rounded-lg border border-slate-200 bg-white p-5 md:col-span-2">
          <ProgressBar value={100 - summary.riskScore} label="리스크 관리 점수" />
          <p className="mt-3 text-sm leading-6 text-slate-600">
            점수가 높을수록 가상 포트폴리오가 한쪽 위험에 덜 몰려 있습니다.
          </p>
        </div>
      ) : null}
      {!compact ? (
        <div className="rounded-lg border border-slate-200 bg-white p-5 md:col-span-2">
          <ProgressBar value={summary.diversificationScore} label="분산투자 점수" />
          <p className="mt-3 text-sm leading-6 text-slate-600">
            산업과 자산이 나뉠수록 점수가 좋아집니다. 수익을 보장하는 지표는 아닙니다.
          </p>
        </div>
      ) : null}
    </div>
  );
}

function MetricCard({
  icon: Icon,
  label,
  value
}: {
  icon: typeof Banknote;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-soft">
      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-skysoft text-mint">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </div>
      <p className="text-sm font-semibold text-slate-500">{label}</p>
      <p className="mt-1 text-xl font-black text-ink">{value}</p>
    </div>
  );
}
