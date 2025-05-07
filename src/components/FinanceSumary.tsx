import { ArrowDownCircle, ArrowUpCircle, DollarSign } from "lucide-react";

const cards = [
  {
    title: "Entradas",
    value: "R$ 12.000,00",
    icon: <ArrowUpCircle className="text-emerald-500" size={24} />,
    bg: "bg-emerald-100/5",
  },
  {
    title: "Saídas",
    value: "R$ 7.500,00",
    icon: <ArrowDownCircle className="text-red-500" size={24} />,
    bg: "bg-red-100/5",
  },
  {
    title: "Total",
    value: "R$ 4.500,00",
    icon: <DollarSign className="text-blue-500" size={24} />,
    bg: "bg-blue-100/5",
  },
];

export function FinanceSummary() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-3 gap-16">
      {cards.map(({ title, value, icon, bg }) => (
        <div
          key={title}
          className={`p-5 rounded-xl border border-[var(--card-border)] ${bg} shadow-sm`}
        >
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm text-[var(--muted)] font-medium">
              {title}
            </span>
            {icon}
          </div>
          <div className="text-2xl font-semibold text-[var(--foreground)]">
            {value}
          </div>
        </div>
      ))}
    </section>
  );
}
