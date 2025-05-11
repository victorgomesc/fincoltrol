"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { mês: "Jan", valor: 1200 },
  { mês: "Fev", valor: 1600 },
  { mês: "Mar", valor: 1800 },
  { mês: "Abr", valor: 2200 },
  { mês: "Mai", valor: 2500 },
  { mês: "Jun", valor: 3100 },
  { mês: "Jul", valor: 1200 },
  { mês: "Ago", valor: 1600 },
  { mês: "Set", valor: 1800 },
  { mês: "Out", valor: 2200 },
  { mês: "Nov", valor: 2500 },
  { mês: "Dez", valor: 3100 },
];

export function SavingsChart() {
  return (
    <section className="bg-zinc-950 border border-[var(--card-border)] mt-16 w-2/4 p-5 rounded-xl shadow-sm">
      <h2 className="text-lg font-semibold text-[var(--foreground)] mb-4">
        Aportes - 2025
      </h2>

      <div className="w-full h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#333" />
            <XAxis dataKey="mês" stroke="#888" />
            <YAxis stroke="#888" />
            <Tooltip
              contentStyle={{
                backgroundColor: "#1f1f1f",
                borderColor: "#333",
                color: "#fff",
              }}
            />
            <Bar dataKey="valor" fill="#10b981" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}
