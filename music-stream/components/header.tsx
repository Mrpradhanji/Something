'use client'

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useState } from 'react'

export function Header() {
  const router = useRouter()
  const [isAdmin, setIsAdmin] = useState(false) // In a real app, this would come from auth state

  return (
    <header className="h-16 px-6 flex items-center justify-between bg-secondary/50 backdrop-blur-md sticky top-0 z-10">
      <div className="flex items-center gap-2">
        <button
          onClick={() => router.back()}
          className="w-8 h-8 flex items-center justify-center rounded-full bg-black/40 hover:bg-black/60"
        >
          <ChevronLeftIcon className="w-5 h-5" />
        </button>
        <button
          onClick={() => router.forward()}
          className="w-8 h-8 flex items-center justify-center rounded-full bg-black/40 hover:bg-black/60"
        >
          <ChevronRightIcon className="w-5 h-5" />
        </button>
      </div>

      <div className="flex items-center gap-4">
        {isAdmin && (
          <Link
            href="/admin"
            className="text-sm font-medium text-primary hover:text-primary-light transition-colors"
          >
            Admin Panel
          </Link>
        )}
        <button 
          className="text-sm font-medium hover:text-primary transition-colors"
          onClick={() => setIsAdmin(!isAdmin)} // Toggle admin state for demo
        >
          Sign Up
        </button>
        <button className="px-6 py-2 rounded-full bg-white text-black font-medium hover:scale-105 transition-transform">
          Log In
        </button>
      </div>
    </header>
  )
} 