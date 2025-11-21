import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Donate() {
  const [customAmount, setCustomAmount] = useState(0)
  const [places, setPlaces] = useState(1)

  const currencyRate = 5 // 1 донат-валюта = 5 рублей

  const packs = [
    { name: 'Набор Скиталец', price: 200, perks: ['Стартовые ресурсы', 'Косметический значок', '+2 слота в инвентаре'] },
    { name: 'Набор Рыцарь Пепла', price: 500, perks: ['Уникальный скин', 'Титул в чате', '+5 слотов в инвентаре'] },
    { name: 'Набор Властитель Башни', price: 1200, perks: ['Эксклюзивная аура', 'Уникальный питомец', '+10 слотов в инвентаре'] },
  ]

  const subs = [
    { name: 'Восставший', priceMonthly: 199, features: ['+5% к наградам', 'Еженедельный набор', 'Роль в Discord'] },
    { name: 'Перерождённый', priceMonthly: 349, features: ['+10% к наградам', 'Редкие косметические предметы', 'Приоритетная очередь'] },
    { name: 'Древний', priceMonthly: 599, features: ['+15% к наградам', 'Эксклюзивные ивенты', 'Прямой канал с админами'] },
  ]

  const calcRubles = () => customAmount * places * currencyRate

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <Navbar />
      <main className="pt-28 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h1 className="text-3xl font-bold text-white mb-6">Поддержать Eternal Tower</h1>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Packs */}
            <div className="lg:col-span-2 space-y-6">
              <section className="bg-slate-800/50 border border-white/10 rounded-xl p-6">
                <h2 className="text-xl font-semibold text-white mb-4">Наборы</h2>
                <div className="grid md:grid-cols-3 gap-4">
                  {packs.map((p) => (
                    <div key={p.name} className="rounded-lg border border-white/10 bg-slate-900/40 p-5">
                      <div className="text-white font-semibold">{p.name}</div>
                      <div className="text-2xl text-indigo-400 font-bold mt-2">{p.price} D</div>
                      <ul className="mt-3 text-sm text-blue-200/90 space-y-1">
                        {p.perks.map((perk) => (
                          <li key={perk}>• {perk}</li>
                        ))}
                      </ul>
                      <button className="mt-4 w-full py-2 rounded bg-indigo-600 hover:bg-indigo-700 text-white font-semibold">Купить</button>
                    </div>
                  ))}
                </div>
              </section>

              {/* Custom amount with slider and places */}
              <section className="bg-slate-800/50 border border-white/10 rounded-xl p-6">
                <h2 className="text-xl font-semibold text-white mb-4">Свободный донат</h2>
                <div className="grid sm:grid-cols-2 gap-6 items-center">
                  <div>
                    <label className="block text-sm text-blue-200/80 mb-2">Сумма (в донат-валюте)</label>
                    <input
                      type="range"
                      min="0"
                      max="1000"
                      step="10"
                      value={customAmount}
                      onChange={(e) => setCustomAmount(parseInt(e.target.value))}
                      className="w-full"
                    />
                    <div className="mt-2 text-white font-medium">{customAmount} D</div>
                  </div>

                  <div>
                    <label className="block text-sm text-blue-200/80 mb-2">Количество мест</label>
                    <input
                      type="number"
                      min="1"
                      max="100"
                      value={places}
                      onChange={(e) => setPlaces(Math.max(1, parseInt(e.target.value) || 1))}
                      className="w-full bg-slate-900/50 border border-white/10 rounded px-3 py-2 text-white"
                    />
                    <div className="mt-2 text-blue-200/90 text-sm">К оплате: ~ {calcRubles()} ₽ (1 D = {currencyRate} ₽)</div>
                    <button className="mt-3 w-full py-2 rounded bg-emerald-600 hover:bg-emerald-700 text-white font-semibold">Задонатить</button>
                  </div>
                </div>
              </section>
            </div>

            {/* Subscriptions */}
            <aside className="space-y-6">
              <section className="bg-slate-800/50 border border-white/10 rounded-xl p-6">
                <h2 className="text-xl font-semibold text-white mb-4">Подписки</h2>
                <div className="space-y-4">
                  {subs.map((s) => (
                    <div key={s.name} className="rounded-lg border border-white/10 bg-slate-900/40 p-5">
                      <div className="flex items-center justify-between">
                        <div className="text-white font-semibold">{s.name}</div>
                        <div className="text-2xl text-indigo-400 font-bold">{s.priceMonthly} ₽/мес</div>
                      </div>
                      <ul className="mt-3 text-sm text-blue-200/90 space-y-1">
                        {s.features.map((f) => (
                          <li key={f}>• {f}</li>
                        ))}
                      </ul>
                      <button className="mt-4 w-full py-2 rounded bg-indigo-600 hover:bg-indigo-700 text-white font-semibold">Оформить</button>
                    </div>
                  ))}
                </div>
              </section>
            </aside>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
