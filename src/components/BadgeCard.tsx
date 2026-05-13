import {
  BadgeCheck,
  BarChart3,
  Calculator,
  CandlestickChart,
  ListTree,
  MousePointerClick,
  Newspaper,
  PackageCheck,
  PieChart,
  SearchCheck,
  ShieldCheck,
  Sprout,
  TrafficCone
} from "lucide-react";
import type { LearningModule } from "@/types/learning";

const iconMap = {
  seedling: Sprout,
  newspaper: Newspaper,
  "mouse-pointer-click": MousePointerClick,
  "list-tree": ListTree,
  "candlestick-chart": CandlestickChart,
  calculator: Calculator,
  "bar-chart-3": BarChart3,
  "pie-chart": PieChart,
  "shield-check": ShieldCheck,
  "traffic-cone": TrafficCone,
  "package-check": PackageCheck,
  "search-check": SearchCheck
};

interface BadgeCardProps {
  badge: LearningModule["rewardBadge"];
  earned?: boolean;
}

export function BadgeCard({ badge, earned = false }: BadgeCardProps) {
  const Icon = iconMap[badge.icon as keyof typeof iconMap] ?? BadgeCheck;

  return (
    <div
      className={
        earned
          ? "rounded-lg border border-mint/30 bg-mint/10 p-4 text-ink"
          : "rounded-lg border border-slate-200 bg-white p-4 text-slate-500"
      }
    >
      <div className="mb-3 flex items-center gap-3">
        <div className={earned ? "rounded-full bg-mint p-2 text-white" : "rounded-full bg-slate-100 p-2 text-slate-400"}>
          <Icon className="h-5 w-5" aria-hidden="true" />
        </div>
        <div>
          <h3 className="font-bold">{badge.name}</h3>
          <p className="text-xs">{earned ? "획득 완료" : "획득 가능"}</p>
        </div>
      </div>
      <p className="text-sm leading-6">{badge.description}</p>
    </div>
  );
}
