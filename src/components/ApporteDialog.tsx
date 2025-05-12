"use client";

import React, { useState } from "react";
import { Plus, Edit2, Trash2 } from "lucide-react";

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

  const abrirModal = (aporte?: Aporte) => {
    if (aporte) {
      setMes(aporte.mes);
      setValor(aporte.valor.toString());
      setEditandoId(aporte.id);
    } else {
      setMes("");
      setValor("");
      setEditandoId(null);
    }
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

  const excluirAporte = (id: number) => {
    setAportes((prev) => prev.filter((a) => a.id !== id));
  };

  return (
    <div className="p-6">
      <div className="flex justify-end gap-3">
        <button
          onClick={() => abrirModal()}
          className="p-2 bg-green-600 hover:bg-green-700 rounded-full"
        >
          <Plus className="w-4 h-4 text-white" />
        </button>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-zinc-900 text-white p-8 rounded-xl w-full max-w-md shadow-2xl">
            <h2 className="text-2xl font-bold mb-6 text-center">
              {editandoId !== null ? "Edit Contribution" : "New Contribution"}
            </h2>

            <input
              type="text"
              placeholder="Month (e.g., May/2025)"
              value={mes}
              onChange={(e) => setMes(e.target.value)}
              className="w-full bg-zinc-800 text-white px-4 py-3 mb-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="number"
              placeholder="Value (e.g., 3000)"
              value={valor}
              onChange={(e) => setValor(e.target.value)}
              className="w-full bg-zinc-800 text-white px-4 py-3 mb-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-gray-600 hover:bg-gray-700 rounded-lg"
              >
                Cancel
              </button>
              <button
                onClick={salvarAporte}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg"
              >
                {editandoId !== null ? "Save" : "Add"}
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="mt-8 space-y-4">
        {aportes.map((a) => (
          <div
            key={a.id}
            className="bg-zinc-800 text-white p-4 rounded-lg flex justify-between items-center shadow"
          >
            <div>
              <strong className="block text-lg">{a.mes}</strong>
              <span className="text-sm text-gray-300">R$ {a.valor.toFixed(2)}</span>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => abrirModal(a)}
                className="p-2 bg-yellow-500 hover:bg-yellow-600 rounded-full"
              >
                <Edit2 className="w-4 h-4 text-black" />
              </button>
              <button
                onClick={() => excluirAporte(a.id)}
                className="p-2 bg-red-600 hover:bg-red-700 rounded-full"
              >
                <Trash2 className="w-4 h-4 text-white" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
