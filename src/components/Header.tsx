"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BarChart3, Home, Trophy, WalletCards } from "lucide-react";
import clsx from "clsx";

const navItems = [
  { href: "/", label: "홈", icon: Home },
  { href: "/modules", label: "모듈", icon: BarChart3 },
  { href: "/portfolio", label: "포트폴리오", icon: WalletCards },
  { href: "/results", label: "결과", icon: Trophy }
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-lg bg-ink text-lg font-black text-white">S</span>
          <span>
            <span className="block text-lg font-black text-ink">Stock Starter Quest</span>
            <span className="block text-xs font-semibold text-slate-500">주식 입문 퀘스트</span>
          </span>
        </Link>
        <nav className="grid grid-cols-4 gap-2 rounded-lg bg-slate-100 p-1">
          {navItems.map((item) => {
            const active = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={clsx(
                  "flex min-h-10 items-center justify-center gap-2 rounded-md px-3 text-sm font-bold transition",
                  active ? "bg-white text-ink shadow-sm" : "text-slate-500 hover:text-ink"
                )}
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
