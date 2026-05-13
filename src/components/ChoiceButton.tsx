import { CheckCircle2, HelpCircle, TriangleAlert } from "lucide-react";
import clsx from "clsx";
import type { SimulationChoice } from "@/types/learning";

interface ChoiceButtonProps {
  choice: SimulationChoice;
  selected: boolean;
  disabled?: boolean;
  onSelect: () => void;
}

export function ChoiceButton({ choice, selected, disabled = false, onSelect }: ChoiceButtonProps) {
  const Icon = selected ? CheckCircle2 : choice.quality === "risky" ? TriangleAlert : HelpCircle;

  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onSelect}
      className={clsx(
        "w-full rounded-lg border p-4 text-left transition focus:outline-none focus:ring-2 focus:ring-mint",
        selected
          ? "border-mint bg-mint/10 shadow-soft"
          : "border-slate-200 bg-white hover:border-mint/60 hover:bg-skysoft",
        disabled && "cursor-not-allowed opacity-80"
      )}
    >
      <div className="flex gap-3">
        <Icon className={clsx("mt-0.5 h-5 w-5 flex-none", selected ? "text-mint" : "text-slate-400")} aria-hidden="true" />
        <div>
          <p className="font-bold text-ink">
            {choice.id}. {choice.label}
          </p>
          <p className="mt-1 text-sm leading-6 text-slate-600">{choice.detail}</p>
        </div>
      </div>
    </button>
  );
}
