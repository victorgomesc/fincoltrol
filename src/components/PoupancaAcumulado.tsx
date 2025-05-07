"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Dados brutos mensais
const baseData = [
    { mês: "Jan", valor: 1200 },
    { mês: "Fev", valor: 1600 },
    { mês: "Mar", valor: 1800 },
    { mês: "Abr", valor: 2200 },
    { mês: "Mai", valor: 2500 },
    { mês: "Jun", valor: 3100 },
    { mês: "Jul", valor: 1200 },
    { mês: "Ago", valor: 1000 },
    { mês: "Set", valor: 1800 },
    { mês: "Out", valor: 2200 },
    { mês: "Nov", valor: 2500 },
    { mês: "Dez", valor: 3100 },
];

// Gerar valores acumulados
const accumulatedData = baseData.map((item, index) => {
  const total = baseData
    .slice(0, index + 1)
    .reduce((acc, curr) => acc + curr.valor, 0);
  return { mês: item.mês, acumulado: total };
});

export function AccumulatedSavingsChart() {
  return (
    <section className="bg-[var(--card-bg)] border border-[var(--card-border)] mt-16 w-2/4 p-5 rounded-xl shadow-sm">
      <h2 className="text-lg font-semibold text-[var(--foreground)] mb-4">
        Valor Acumulado da Poupança
      </h2>

      <div className="w-full h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={accumulatedData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#333" />
            <XAxis dataKey="mês" stroke="#888" />
            <YAxis stroke="#888" />
            <Tooltip
              contentStyle={{
                backgroundColor: "#1f1f1f",
                borderColor: "#333",
                color: "#fff",
              }}
              formatter={(value: number) => [`R$ ${value.toLocaleString("pt-BR")}`, "Acumulado"]}
            />
            <Line
              type="monotone"
              dataKey="acumulado"
              stroke="#3b82f6"
              strokeWidth={3}
              dot={{ r: 5, stroke: "#3b82f6", strokeWidth: 2, fill: "#0f172a" }}
              activeDot={{ r: 7 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}
