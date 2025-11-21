export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-16">
      <div className="absolute inset-0 opacity-[0.07] bg-[radial-gradient(circle_at_20%_10%,#a78bfa,transparent_30%),radial-gradient(circle_at_80%_0%,#60a5fa,transparent_25%),radial-gradient(circle_at_50%_100%,#f472b6,transparent_30%)]" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
              Eternal Tower
            </h1>
            <p className="mt-4 text-blue-200/90 text-lg">
              Темный фэнтези-мир на базе Garry's Mod, где восставшие сражаются за этажи Вечной Башни. Вступай, выбирай путь и поднимайся выше.
            </p>
            <div className="mt-8 flex gap-3">
              <a href="/donate" className="px-5 py-2.5 rounded-md bg-indigo-500 hover:bg-indigo-600 text-white font-semibold shadow">
                Поддержать проект
              </a>
              <a href="/rules" className="px-5 py-2.5 rounded-md bg-white/10 hover:bg-white/20 text-white font-semibold">
                Правила сервера
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-video rounded-2xl bg-gradient-to-br from-indigo-500/40 via-fuchsia-500/30 to-rose-500/30 border border-white/10 shadow-2xl backdrop-blur flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl">🗼</div>
                <div className="mt-3 text-blue-100/90">Добро пожаловать в Вечную Башню</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
