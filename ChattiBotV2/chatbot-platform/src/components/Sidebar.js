'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/', label: 'Home', icon: 'home' },
  { href: '/analytics', label: 'Analytics', icon: 'bar_chart' },
  { href: '/chatbots', label: 'Chatbots', icon: 'forum' },
  { href: '/flow-builder', label: 'Flow Builder', icon: 'hub' },
  { href: '/deploy', label: 'Deploy', icon: 'code' },
  { href: '/settings', label: 'Settings', icon: 'settings' },
];

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="flex flex-col w-64 bg-surface/30 p-4 border-r border-muted/20 shrink-0 h-screen sticky top-0">
      <div className="flex items-center gap-3 mb-8">
        <div className="bg-primary/20 rounded-lg p-2 flex items-center justify-center">
          <span className="material-symbols-outlined text-primary text-3xl">smart_toy</span>
        </div>
        <div className="flex flex-col">
          <h1 className="text-white text-lg font-bold">BotPlatform</h1>
          <p className="text-muted text-sm">SaaS Platform</p>
        </div>
      </div>
      <nav className="flex flex-col gap-2 flex-grow">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`flex items-center gap-3 px-3 py-2 transition-colors duration-200 rounded-lg ${
                isActive
                  ? 'text-white bg-primary/20'
                  : 'text-muted hover:text-white'
              }`}
            >
              <span className={`material-symbols-outlined text-lg ${isActive ? '!font-bold text-primary' : ''}`}>
                {link.icon}
              </span>
              <p className="text-sm font-medium">{link.label}</p>
            </Link>
          );
        })}
      </nav>
      <div className="flex flex-col gap-1 mt-auto">
        <Link href="/profile" className={`flex items-center gap-3 px-3 py-2 rounded-lg ${pathname === '/profile' ? 'text-white bg-primary/20' : 'text-muted hover:text-white'}`}>
          <span className="material-symbols-outlined text-lg">account_circle</span>
          <p className="text-sm font-medium">User Profile</p>
        </Link>
        <a href="#" className="flex items-center gap-3 px-3 py-2 text-muted hover:text-white transition-colors duration-200 rounded-lg">
          <span className="material-symbols-outlined text-lg">logout</span>
          <p className="text-sm font-medium">Log out</p>
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;
