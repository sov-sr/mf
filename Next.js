export default function LandingPage() {
  return (
    <div className="bg-slate-950 text-white">
      <header className="container mx-auto flex items-center justify-between py-6">
        <div className="text-2xl font-bold text-blue-400">LearnFlow Pro</div>
        <nav className="hidden md:flex gap-8 text-sm text-slate-300">
          <a href="#">Özellikler</a>
          <a href="#">Çözümler</a>
          <a href="#">Fiyatlar</a>
          <a href="#">Referanslar</a>
        </nav>
        <button className="rounded-lg bg-blue-600 px-5 py-2 text-sm font-medium">
          Demo İste
        </button>
      </header>

      <main>
        <section className="container mx-auto grid items-center gap-10 py-20 md:grid-cols-2">
          <div>
            <span className="rounded-full bg-blue-900 px-3 py-1 text-xs text-blue-200">
              Eğitim SaaS Platformu
            </span>
            <h1 className="mt-6 text-5xl font-bold leading-tight">
              Eğitim kurumlarınızı tek bir platformda yönetin.
            </h1>
            <p className="mt-6 text-lg text-slate-300">
              Öğretmenler, öğrenciler, abonelikler ve operasyonlar tek panelde.
            </p>
            <div className="mt-8 flex gap-4">
              <button className="rounded-lg bg-blue-600 px-6 py-3 font-medium">
                Ücretsiz Demo
              </button>
              <button className="rounded-lg border border-slate-600 px-6 py-3 font-medium">
                Daha Fazla Bilgi
              </button>
            </div>
          </div>

          <div className="rounded-2xl bg-slate-900 p-4 shadow-2xl">
            <div className="rounded-xl bg-slate-800 p-6">
              <div className="flex justify-between">
                <span className="text-sm text-slate-300">Yönetim Paneli</span>
                <span className="rounded-full bg-emerald-500/20 px-2 py-1 text-xs text-emerald-400">
                  Aktif
                </span>
              </div>
              <div className="mt-6 grid grid-cols-3 gap-4">
                <div className="rounded-xl bg-slate-700 p-4">
                  <p className="text-xs text-slate-400">Öğrenci</p>
                  <p className="mt-2 text-2xl font-bold">24.5K</p>
                </div>
                <div className="rounded-xl bg-slate-700 p-4">
                  <p className="text-xs text-slate-400">Öğretmen</p>
                  <p className="mt-2 text-2xl font-bold">1.2K</p>
                </div>
                <div className="rounded-xl bg-slate-700 p-4">
                  <p className="text-xs text-slate-400">Gelir</p>
                  <p className="mt-2 text-2xl font-bold">$84K</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
