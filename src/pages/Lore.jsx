import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Lore() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <Navbar />
      <main className="pt-28 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h1 className="text-3xl font-bold text-white mb-6">Лор: Вечная Башня</h1>
          <div className="prose prose-invert prose-slate max-w-none">
            <p>
              Когда солнце иссякло, небеса почернели, и мир погрузился в вечные сумерки. В центре руин выросла Башня — бесконечная, шепчущая, зовущая. Каждый её этаж — отражение забытых эпох и проклятых богов.
            </p>
            <p>
              Восставшие — души, вернувшиеся из небытия — поднимаются по ступеням в поисках искры истины. Одни заключают сделки с тенями, другие куют свою судьбу из пепла. Но чем выше, тем сильнее тянет вниз зов Бездны.
            </p>
            <h2>Фракции</h2>
            <ul>
              <li><strong>Орден Пепельной Клятвы:</strong> рыцари, следящие за равновесием между светом и мраком.</li>
              <li><strong>Ковен Теней:</strong> маги, питающие силы из шепота глубин.</li>
              <li><strong>Стражи Сутеней:</strong> охотники, выслеживающие тех, кто нарушил клятвы.</li>
            </ul>
            <h2>Сущности Башни</h2>
            <p>
              На границе между этажами бродят Хранители — существа, сотканные из воспоминаний мира. Их благосклонность не купить, но можно заслужить.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
