import { FinanceSummary } from "@/components/FinanceSumary";
import { Header } from "@/components/Header";
import SavingAccountsSumary from "@/components/SavingAccountsSumary";
import { Sidebar } from "@/components/Sidebar";

export default function Home() {
  return (
    <div>
      <div className="fixed top-0 left-0 w-64 h-screen z-20">
      <Sidebar />
      </div>
    <div className="ml-64 flex flex-col">
    <Header />
    <main className="flex-1 px-16">
      <FinanceSummary />
      <SavingAccountsSumary />
    </main>
  </div>
    </div>
  );
}
