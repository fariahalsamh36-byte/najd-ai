export function Logo({ className }: { className?: string }) {
  return (
    <span className={`inline-flex items-baseline font-black tracking-tight ${className ?? ""}`}>
      <span className="text-2xl leading-none">نجد</span>
      <span className="ms-1 text-sm font-bold leading-none opacity-80">AI</span>
    </span>
  )
}
