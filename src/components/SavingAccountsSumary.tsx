import React from 'react'
import { SavingsChart } from './Poupanca'
import { AccumulatedSavingsChart } from './PoupancaAcumulado'

const SavingAccountsSumary = () => {
  return (
    <div className="flex-1 overflow-y-auto">
        <div>
            <h3 className="text-3xl mt-20 font-bold">Resumo da Poupança</h3>
        </div>
      <div className="flex gap-6">
        <SavingsChart />
        <AccumulatedSavingsChart />
      </div>
    </div>
  )
}

export default SavingAccountsSumary