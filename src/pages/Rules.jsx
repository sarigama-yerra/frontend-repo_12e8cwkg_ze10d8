import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Rules() {
  const rules = [
    {
      title: 'Общее поведение',
      items: [
        'Уважайте игроков и администрацию. Оскорбления, токсичность и дискриминация запрещены.',
        'Запрещены баг-юз и использование стороннего софта.',
        'Реклама сторонних проектов без согласования запрещена.',
      ],
    },
    {
      title: 'RP-правила',
      items: [
        'Соблюдайте роль. Метагейминг, пауэргейминг и нон-рп — запрещены.',
        'Смерть персонажа — часть мира. Потеря памяти о событиях перед смертью обязательна.',
        'PvP допускается в рамках сценариев и правил фракций.',
      ],
    },
    {
      title: 'Коммуникация',
      items: [
        'В голосовых каналах — отсутствие шумов и помех, в чате — без спама.',
        'Контент 18+ — только с пометками и в соответствующих зонах.',
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <Navbar />
      <main className="pt-28 pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h1 className="text-3xl font-bold text-white mb-6">Правила сервера</h1>

          <div className="space-y-6">
            {rules.map((block) => (
              <div key={block.title} className="bg-slate-800/50 border border-white/10 rounded-xl p-6">
                <h2 className="text-xl font-semibold text-white mb-3">{block.title}</h2>
                <ul className="list-disc pl-6 space-y-2 text-blue-200/90">
                  {block.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
