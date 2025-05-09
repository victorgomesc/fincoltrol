import { Home, BarChart2, DollarSign, Settings } from "lucide-react";
import Link from "next/link";

const navItems = [
  { label: "Dashboard", icon: <Home size={20} />, href: "/" },
  { label: "Gastos", icon: <DollarSign size={20} />, href: "/gastos" },
  { label: "Estatísticas", icon: <BarChart2 size={20} />, href: "/estatisticas" },
  { label: "Configurações", icon: <Settings size={20} />, href: "/configuracoes" },
];

export function Sidebar() {
  return (
    <aside className="h-screen fixed left-0 top-0 w-64 z-20 bg-zinc-950 border-r border-[var(--card-border)] p-4 flex flex-col">
      <h2 className="text-lg font-semibold text-[var(--foreground)] mb-6">Fincontrol</h2>

      <nav className="flex flex-col gap-2">
        {navItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-[var(--muted)] hover:bg-[var(--primary)] hover:text-white transition-colors"
          >
            {item.icon}
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>

      {/* Espaço reservado para versão futura com colapso, avatar ou logout */}
      <div className="mt-auto text-xs text-muted-foreground px-3">© 2025 Victor</div>
    </aside>
  );
}
