import { Newspaper } from "lucide-react";
import clsx from "clsx";
import type { LearningModule } from "@/types/learning";
import { ChoiceButton } from "./ChoiceButton";
import { MiniPriceChart } from "./MiniPriceChart";

interface SimulationPanelProps {
  learningModule: LearningModule;
  selectedChoiceId?: "A" | "B" | "C";
  locked?: boolean;
  onSelect: (choiceId: "A" | "B" | "C") => void;
}

export function SimulationPanel({
  learningModule,
  selectedChoiceId,
  locked = false,
  onSelect
}: SimulationPanelProps) {
  return (
    <section className="grid gap-5 lg:grid-cols-[1fr_0.9fr]">
      <div className="space-y-5">
        <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-soft">
          <p className="mb-2 text-sm font-bold text-peach">가상 상황</p>
          <p className="leading-7 text-slate-700">{learningModule.simulationScenario}</p>
        </div>
        <div className="grid gap-3">
          {learningModule.choices.map((choice) => (
            <ChoiceButton
              key={choice.id}
              choice={choice}
              selected={selectedChoiceId === choice.id}
              disabled={locked}
              onSelect={() => onSelect(choice.id)}
            />
          ))}
        </div>
      </div>
      <aside className="space-y-5">
        <MiniPriceChart values={learningModule.priceSeries} />
        <div className="rounded-lg border border-slate-200 bg-white p-4">
          <div className="mb-3 flex items-center gap-2 font-bold text-ink">
            <Newspaper className="h-5 w-5 text-mint" aria-hidden="true" />
            뉴스 카드
          </div>
          <div className="space-y-3">
            {learningModule.newsCards.map((news) => (
              <div
                key={news.headline}
                className={clsx(
                  "rounded-lg border p-3",
                  news.tone === "positive" && "border-mint/30 bg-mint/10",
                  news.tone === "negative" && "border-peach/30 bg-peach/10",
                  news.tone === "neutral" && "border-slate-200 bg-slate-50"
                )}
              >
                <p className="font-semibold text-ink">{news.headline}</p>
                <p className="mt-1 text-sm leading-6 text-slate-600">{news.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </aside>
    </section>
  );
}
