export default function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 text-blue-300/70 text-sm flex flex-col sm:flex-row items-center justify-between gap-3">
        <p>© Eternal Tower. Темное фэнтези-сообщество Garry's Mod.</p>
        <div className="flex items-center gap-4">
          <a href="/rules" className="hover:text-white">Правила</a>
          <a href="/lore" className="hover:text-white">Лор</a>
          <a href="/donate" className="hover:text-white">Донат</a>
        </div>
      </div>
    </footer>
  )
}
