'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { HomeIcon, MagnifyingGlassIcon, HeartIcon, PlusCircleIcon } from '@heroicons/react/24/outline'
import { cn } from '@/lib/utils'

const navigation = [
  { name: 'Home', href: '/', icon: HomeIcon },
  { name: 'Search', href: '/search', icon: MagnifyingGlassIcon },
  { name: 'Liked Songs', href: '/liked', icon: HeartIcon },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="w-64 bg-secondary p-6 flex flex-col h-full">
      <Link href="/" className="text-2xl font-bold mb-8">
        Music Stream
      </Link>

      <nav className="space-y-4">
        {navigation.map((item) => {
          const Icon = item.icon
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                'flex items-center gap-3 px-4 py-2 rounded-lg transition-colors',
                pathname === item.href
                  ? 'bg-primary text-white'
                  : 'hover:bg-secondary-light'
              )}
            >
              <Icon className="w-5 h-5" />
              {item.name}
            </Link>
          )
        })}
      </nav>

      <div className="mt-8">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-semibold text-gray-400">YOUR PLAYLISTS</h3>
          <button className="text-gray-400 hover:text-white">
            <PlusCircleIcon className="w-5 h-5" />
          </button>
        </div>
        <div className="space-y-2">
          {/* Placeholder for playlists - will be populated dynamically */}
          <p className="text-sm text-gray-400 px-4">Create your first playlist</p>
        </div>
      </div>
    </div>
  )
} 