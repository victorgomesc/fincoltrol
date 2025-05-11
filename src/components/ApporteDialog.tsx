"use client";

import React, { useState } from "react";

type Aporte = {
  id: number;
  mes: string;
  valor: number;
};

export default function AportesModal() {
  const [showModal, setShowModal] = useState(false);
  const [aportes, setAportes] = useState<Aporte[]>([]);
  const [mes, setMes] = useState("");
  const [valor, setValor] = useState("");
  const [editandoId, setEditandoId] = useState<number | null>(null);

  const abrirModal = () => {
    setMes("");
    setValor("");
    setEditandoId(null);
    setShowModal(true);
  };

  const salvarAporte = () => {
    if (!mes || !valor) return;

    if (editandoId !== null) {
      setAportes((prev) =>
        prev.map((a) => (a.id === editandoId ? { id: a.id, mes, valor: Number(valor) } : a))
      );
    } else {
      setAportes((prev) => [...prev, { id: Date.now(), mes, valor: Number(valor) }]);
    }

    setShowModal(false);
    setMes("");
    setValor("");
    setEditandoId(null);
  };

  const editarAporte = (aporte: Aporte) => {
    setMes(aporte.mes);
    setValor(aporte.valor.toString());
    setEditandoId(aporte.id);
    setShowModal(true);
  };

  const excluirAporte = (id: number) => {
    setAportes((prev) => prev.filter((a) => a.id !== id));
  };

  return (
    <div className="p-4">
      <button
        className="bg-blue-600 flex gap-3 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg shadow"
        onClick={abrirModal}
      >
        Aportes
      </button>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-zinc-900 text-white p-6 rounded-xl w-full max-w-md shadow-xl">
            <h2 className="text-xl font-bold mb-4">
              {editandoId !== null ? "Editar Aporte" : "Novo Aporte"}
            </h2>

            <input
              type="text"
              placeholder="Mês (Ex: Maio/2025)"
              value={mes}
              onChange={(e) => setMes(e.target.value)}
              className="w-full bg-zinc-800 text-white px-4 py-2 mb-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="number"
              placeholder="Valor (Ex: 3000)"
              value={valor}
              onChange={(e) => setValor(e.target.value)}
              className="w-full bg-zinc-800 text-white px-4 py-2 mb-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <div className="flex justify-end gap-2">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-gray-600 hover:bg-gray-700 rounded-md"
              >
                Cancelar
              </button>
              <button
                onClick={salvarAporte}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md"
              >
                {editandoId !== null ? "Salvar" : "Adicionar"}
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="mt-6 space-y-4">
        {aportes.map((a) => (
          <div
            key={a.id}
            className="bg-zinc-800 text-white p-4 rounded-lg flex justify-between items-center"
          >
            <div>
              <strong className="block text-lg">{a.mes}</strong>
              <span className="text-sm text-gray-300">R$ {a.valor.toFixed(2)}</span>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => editarAporte(a)}
                className="bg-yellow-500 hover:bg-yellow-600 text-black px-3 py-1 rounded-md"
              >
                Editar
              </button>
              <button
                onClick={() => excluirAporte(a.id)}
                className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded-md"
              >
                Excluir
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
