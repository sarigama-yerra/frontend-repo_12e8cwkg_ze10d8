import { Link, NavLink } from 'react-router-dom'

function NavItem({ to, children }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
          isActive
            ? 'text-white bg-white/10'
            : 'text-blue-200 hover:text-white hover:bg-white/10'
        }`
      }
    >
      {children}
    </NavLink>
  )
}

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 bg-slate-900/80 border-b border-blue-500/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-9 h-9 rounded bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-rose-500 shadow-inner shadow-white/10 ring-1 ring-white/10" />
            <div className="leading-tight">
              <div className="text-white font-semibold">Eternal Tower</div>
              <div className="text-[11px] text-blue-300/70 -mt-0.5">Dark Fantasy GMod</div>
            </div>
          </Link>

          <nav className="flex items-center gap-1">
            <NavItem to="/">Главная</NavItem>
            <NavItem to="/rules">Правила</NavItem>
            <NavItem to="/lore">Лор</NavItem>
            <NavItem to="/donate">Донат</NavItem>
          </nav>
        </div>
      </div>
    </header>
  )
}
