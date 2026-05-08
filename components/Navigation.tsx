'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Blog', href: '/blog' },
  { name: 'Music', href: '/music' },
  { name: 'Videos', href: '/videos' },
  { name: 'Bio', href: '/bio' },
  { name: 'Portfolio', href: '/portfolio' },
]

export default function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="bg-tan-200 border-b border-tan-300">
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="text-xl font-bold tracking-wide">
            CHARLES LUEKER OFFICIAL
          </Link>
          <div className="flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm hover:text-tan-700 transition-colors ${
                  pathname === item.href ? 'text-tan-900 font-semibold' : 'text-tan-600'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
