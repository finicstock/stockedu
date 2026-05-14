import { ExternalLink, MessageCircle } from "lucide-react";
import clsx from "clsx";
import { brand } from "@/lib/brand";

const SMALL_TALK_URL = brand.smallTalkUrl;

interface SmallTalkPromoProps {
  variant?: "banner" | "footer";
}

export function SmallTalkPromo({ variant = "banner" }: SmallTalkPromoProps) {
  if (variant === "footer") {
    return (
      <p className="mt-4 text-sm font-semibold text-ink">
        투자에 대한 진짜 이야기는 &apos;
        <PromoLink className="text-mint underline decoration-mint/40 underline-offset-4 transition hover:text-ink" />
        &apos;에서
      </p>
    );
  }

  return (
    <section className="mt-6 overflow-hidden rounded-lg bg-ink text-white shadow-soft">
      <a
        href={SMALL_TALK_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="닉스의 스몰톡에서 투자에 대한 진짜 이야기 보기"
        className="group flex flex-col gap-4 p-5 transition hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-lemon focus:ring-offset-2 focus:ring-offset-ink sm:flex-row sm:items-center sm:justify-between sm:p-6"
      >
        <div className="flex gap-3">
          <div className="grid h-11 w-11 flex-none place-items-center rounded-full bg-white/12">
            <MessageCircle className="h-5 w-5 text-lemon" aria-hidden="true" />
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-lemon">More Stories</p>
            <p className="mt-1 text-lg font-black leading-7 sm:text-xl">
              투자에 대한 진짜 이야기는{" "}
              <span className="font-black text-lemon underline decoration-lemon/50 underline-offset-4 transition group-hover:text-white">
                닉스의 스몰톡
              </span>
              에서
            </p>
            <p className="mt-1 text-sm leading-6 text-white/75">
              시뮬레이션으로 기본기를 익힌 뒤, 실제 투자 관점의 읽을거리를 이어서 만나보세요.
            </p>
          </div>
        </div>
        <span className="inline-flex min-h-11 flex-none items-center justify-center gap-2 rounded-lg bg-white px-4 text-sm font-bold text-ink transition group-hover:bg-lemon">
          보러 가기
          <ExternalLink className="h-4 w-4" aria-hidden="true" />
        </span>
      </a>
    </section>
  );
}

function PromoLink({ className }: { className?: string }) {
  return (
    <a
      href={SMALL_TALK_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={clsx("font-black", className)}
    >
      닉스의 스몰톡
    </a>
  );
}
