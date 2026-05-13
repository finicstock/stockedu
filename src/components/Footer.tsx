import { DisclaimerBox } from "./DisclaimerBox";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <DisclaimerBox />
        <p className="mt-4 text-sm font-semibold text-ink">
          투자에 대한 진짜 이야기는 &apos;
          <a
            href="https://contents.premium.naver.com/finics/bubu"
            target="_blank"
            rel="noopener noreferrer"
            className="text-mint underline decoration-mint/40 underline-offset-4 transition hover:text-ink"
          >
            닉스의 스몰톡
          </a>
          &apos;에서
        </p>
        <p className="mt-4 text-sm text-slate-500">
          모든 기업명, 가격, 뉴스, 포트폴리오 결과는 교육용 가상 데이터입니다.
        </p>
      </div>
    </footer>
  );
}
