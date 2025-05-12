import { Search } from "lucide-react";
import { Avatar } from "./ui/Avatar";

export function Header() {
  return (
    <header className="w-full px-6 py-3 ml-4 mb-4 backdrop-blur-md bg-background/80 flex items-center justify-between">
      {/* Barra de busca */}
      <div className="relative w-full max-w-md mx-6">
        <Search
          size={18}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--muted)]"
        />
        <input
          type="text"
          placeholder="Buscar..."
          className="w-full pl-10 pr-4 py-2 rounded-lg bg-zinc-950 border border-[var(--card-border)] text-sm text-[var(--foreground)] placeholder-[var(--muted)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] transition"
        />
      </div>

      {/* Avatar ou área de usuário */}
      <div className="flex items-center gap-3 p-3 mr-16">
        <Avatar name="Victor" src="/assets/perfil.jpg" size={36} />
      </div>
    </header>
  );
}