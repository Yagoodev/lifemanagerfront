import { DollarSign } from "lucide-react";

export default function Home() {
  return (
    <div className="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
      <aside className="px-4 py-2">
        <div>
          <h4>Money balance</h4>
          <ul>
            <li>Dashboard</li>
            <li>Balance</li>
          </ul>
        </div>
      </aside>

      <main>
        <div>
          <h1 className="text-4xl font-bold">Money balance</h1>
          <h3 className="text-lg text-zinc-400">Boa noite, Yago Rodrigues Freitas</h3>
        </div>

        <section>
          <div className="grid gap-4 mt-12">
            <div className="rounded-xl border bg-card text-card-foreground shadow">
              <div className="p-6 flex flex-row items-center justify-between space-y-0 pb-2">
                <h3 className="tracking-tight text-sm font-medium">Salário</h3>
                <DollarSign />
              </div>

              <div className="p-6 pt-0">
                <div>
                  <div>R$ 4.200,00</div>
                  <p>+21.5% no último ano</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
