export default function Features() {
  const features = [
    {
      title: 'Классы и роли',
      desc: 'Выберите свой путь: некроманты, рыцари пепла, жрецы мрака и другие.',
    },
    {
      title: 'Этажи Башни',
      desc: 'От подземелий до небесных шпилей — каждый уровень хранит свои тайны.',
    },
    {
      title: 'Система прогресса',
      desc: 'Развивайте персонажа, открывайте способности и покоряйте испытания.',
    },
  ]

  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="rounded-xl bg-slate-800/50 border border-white/10 p-6">
              <h3 className="text-white font-semibold text-lg">{f.title}</h3>
              <p className="mt-2 text-blue-200/80 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
