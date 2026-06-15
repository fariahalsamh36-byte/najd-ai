"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Logo } from "./logo"

const navLinks = [
  { label: "المميزات", href: "/features" },
  { label: "من نحن", href: "/#about" },
  { label: "تواصل معنا", href: "/#contact" },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 rounded-full border border-white/40 bg-white/30 px-5 py-3 shadow-lg backdrop-blur-md md:px-7">
        {/* Logo */}
        <a href="/" className="flex items-center" aria-label="نجد - الصفحة الرئيسية">
          <Logo className="h-7 w-auto text-primary" />
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-primary/90 transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Login button */}
        <a
          href="/#contact"
          className="hidden rounded-full bg-primary px-6 py-2.5 text-sm font-bold text-primary-foreground shadow-md transition-transform hover:scale-105 md:inline-block"
        >
          تسجيل الدخول
        </a>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground md:hidden"
          aria-label="القائمة"
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="mx-auto mt-2 max-w-5xl rounded-3xl border border-white/40 bg-white/80 p-4 shadow-lg backdrop-blur-md md:hidden">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-right text-sm font-medium text-primary transition-colors hover:bg-muted"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/#contact"
              onClick={() => setOpen(false)}
              className="mt-1 rounded-xl bg-primary px-4 py-3 text-center text-sm font-bold text-primary-foreground"
            >
              تسجيل الدخول
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
