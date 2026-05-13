interface MiniPriceChartProps {
  values: number[];
  label?: string;
}

export function MiniPriceChart({ values, label }: MiniPriceChartProps) {
  const width = 280;
  const height = 120;
  const min = Math.min(...values);
  const max = Math.max(...values);
  const range = Math.max(1, max - min);
  const points = values
    .map((value, index) => {
      const x = (index / Math.max(1, values.length - 1)) * width;
      const y = height - ((value - min) / range) * (height - 18) - 9;
      return `${x},${y}`;
    })
    .join(" ");

  return (
    <div className="rounded-lg border border-slate-200 bg-white p-4">
      <div className="mb-3 flex items-center justify-between text-sm">
        <span className="font-semibold text-ink">{label ?? "가상 가격 변화"}</span>
        <span className="text-slate-500">교육용</span>
      </div>
      <svg viewBox={`0 0 ${width} ${height}`} className="h-32 w-full" role="img" aria-label="가상 가격 변화 그래프">
        <defs>
          <linearGradient id="chartLine" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="#2fbf9f" />
            <stop offset="55%" stopColor="#38bdf8" />
            <stop offset="100%" stopColor="#ff8f70" />
          </linearGradient>
        </defs>
        <line x1="0" y1={height - 8} x2={width} y2={height - 8} stroke="#e2e8f0" strokeWidth="2" />
        <polyline points={points} fill="none" stroke="url(#chartLine)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5" />
        {values.map((value, index) => {
          const x = (index / Math.max(1, values.length - 1)) * width;
          const y = height - ((value - min) / range) * (height - 18) - 9;
          return <circle key={`${value}-${index}`} cx={x} cy={y} r="4" fill="#213547" />;
        })}
      </svg>
    </div>
  );
}
