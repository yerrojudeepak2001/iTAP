export default function Footer() {
  return (
    <footer
      className="border-t border-blue-100 text-slate-600"
      style={{ background: "linear-gradient(165deg, #ffffff 0%, #f4f8ff 30%, #f6efe6 100%)" }}
    >
      <div className="mx-auto max-w-6xl px-6 py-6 text-sm">
        <span className="font-semibold text-[color:var(--brand-blue)]">iTAP Technologies</span>
        <span className="mx-2">|</span>
        itap@gmail.com
      </div>
    </footer>
  );
}
