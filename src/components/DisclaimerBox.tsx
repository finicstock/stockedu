import { ShieldAlert } from "lucide-react";

export function DisclaimerBox() {
  return (
    <div className="flex gap-3 rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm text-amber-950">
      <ShieldAlert className="mt-0.5 h-5 w-5 flex-none text-amber-600" aria-hidden="true" />
      <p>
        본 서비스는 투자 학습을 위한 가상 시뮬레이션입니다. 특정 종목의 매수·매도
        추천이나 투자 자문을 제공하지 않습니다.
      </p>
    </div>
  );
}
