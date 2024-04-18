export default function Home() {
  return (
    <div>
      <header>Header</header>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div>
          <h1>Boa noite, Yago Rodrigues Freitas</h1>
          <p>Seu balanço do mês está em R$ 2.399,75</p>
        </div>
        <aside>
          <ul>
            <li>Dashboard</li>
            <li>Balance</li>
          </ul>
        </aside>
      </main>
    </div>
  );
}
