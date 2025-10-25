export default function Pill({ label, tone = "primary" }) {
  const styles =
    tone === "accent"
      ? "border-[#ffd54f]/40 bg-[#ffd54f]/15 text-[#b08500]"
      : "border-[#6436d8]/30 bg-[#6436d8]/10 text-[#6436d8]";
  return <span className={`rounded-full px-3 py-1 text-xs md:text-sm border ${styles}`}>{label}</span>;
}
        