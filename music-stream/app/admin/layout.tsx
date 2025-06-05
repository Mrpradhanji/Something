'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { 
  HomeIcon, 
  UsersIcon, 
  MusicalNoteIcon, 
  Cog6ToothIcon,
  ArrowLeftOnRectangleIcon 
} from '@heroicons/react/24/outline'
import Link from 'next/link'
import { cn } from '@/lib/utils'

interface AdminLayoutProps {
  children: React.ReactNode
}

const navigation = [
  { name: 'Dashboard', href: '/admin', icon: HomeIcon },
  { name: 'Users', href: '/admin/users', icon: UsersIcon },
  { name: 'Content', href: '/admin/content', icon: MusicalNoteIcon },
  { name: 'Settings', href: '/admin/settings', icon: Cog6ToothIcon },
]

export default function AdminLayout({ children }: AdminLayoutProps) {
  const router = useRouter()
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  // In a real app, this would check for admin authentication
  useEffect(() => {
    // Simulated authentication check
    const checkAuth = () => {
      // Replace with actual auth check
      setIsAuthenticated(true)
    }
    checkAuth()
  }, [])

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="bg-secondary/50 p-8 rounded-lg max-w-md w-full">
          <h1 className="text-2xl font-bold mb-6">Admin Login Required</h1>
          <p className="text-gray-400 mb-4">
            Please log in with your admin credentials to access this area.
          </p>
          <button 
            onClick={() => setIsAuthenticated(true)}
            className="w-full bg-primary text-black font-medium py-2 rounded-lg hover:bg-primary-light transition-colors"
          >
            Login as Admin
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen">
      {/* Admin Sidebar */}
      <div className="w-64 bg-secondary border-r border-white/10">
        <div className="p-6">
          <Link href="/" className="flex items-center gap-2 mb-8">
            <MusicalNoteIcon className="w-8 h-8 text-primary" />
            <span className="text-xl font-bold">Admin Panel</span>
          </Link>

          <nav className="space-y-1">
            {navigation.map((item) => {
              const Icon = item.icon
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    'flex items-center gap-3 px-4 py-2 rounded-lg transition-colors text-sm',
                    item.href === '/admin'
                      ? 'bg-primary text-black font-medium'
                      : 'text-gray-400 hover:text-white hover:bg-secondary-light'
                  )}
                >
                  <Icon className="w-5 h-5" />
                  {item.name}
                </Link>
              )
            })}
          </nav>
        </div>

        <div className="absolute bottom-0 w-64 p-4 border-t border-white/10">
          <button 
            onClick={() => setIsAuthenticated(false)}
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors w-full px-4 py-2"
          >
            <ArrowLeftOnRectangleIcon className="w-5 h-5" />
            <span>Logout</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {children}
      </div>
    </div>
  )
} 