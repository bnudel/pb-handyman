"use client";

import { useEffect, useState } from "react";
import { site, nav } from "@/content/site";
import { Logo } from "./Logo";
import Icon from "./Icon";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-sand-200 bg-sand-50/90 backdrop-blur-md shadow-[0_1px_20px_rgba(10,46,69,0.06)]"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="container-page flex h-20 items-center justify-between gap-4">
        <a href="#top" className="shrink-0" aria-label={`${site.name} home`}>
          <Logo uid="header" />
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-lg px-3.5 py-2 text-sm font-semibold text-navy-800/80 transition hover:bg-navy-900/5 hover:text-navy-900"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={site.smsHref}
            className="rounded-full border-2 border-navy-900/15 px-4 py-2.5 text-sm font-bold text-navy-900 transition hover:border-navy-900/40 hover:bg-navy-900/5"
          >
            Text us
          </a>
          <a
            href={site.phoneHref}
            className="group flex items-center gap-2 rounded-full bg-sunset-500 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-sunset-500/25 transition hover:bg-sunset-600 hover:shadow-xl hover:shadow-sunset-500/30"
          >
            <Icon name="phone" className="h-4 w-4" filled />
            {site.phone}
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="flex h-11 w-11 items-center justify-center rounded-xl border-2 border-navy-900/15 text-navy-900 md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <span className="relative block h-4 w-5">
            <span
              className={`absolute left-0 h-0.5 w-5 rounded bg-current transition-all ${
                open ? "top-1.5 rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute left-0 top-1.5 h-0.5 w-5 rounded bg-current transition-all ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 h-0.5 w-5 rounded bg-current transition-all ${
                open ? "top-1.5 -rotate-45" : "top-3"
              }`}
            />
          </span>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden border-t border-sand-200 bg-sand-50 md:hidden ${
          open ? "max-h-[32rem]" : "max-h-0 border-t-0"
        } transition-all duration-300`}
      >
        <nav className="container-page flex flex-col gap-1 py-4" aria-label="Mobile">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3 text-base font-semibold text-navy-800 transition hover:bg-navy-900/5"
            >
              {item.label}
            </a>
          ))}
          <a
            href={site.phoneHref}
            className="mt-2 flex items-center justify-center gap-2 rounded-full bg-sunset-500 px-5 py-3.5 text-base font-bold text-white"
          >
            <Icon name="phone" className="h-4 w-4" filled />
            Call {site.phone}
          </a>
        </nav>
      </div>
    </header>
  );
}
