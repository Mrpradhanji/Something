'use client'

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import { useRouter } from 'next/navigation'

export function Header() {
  const router = useRouter()

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
        <button className="text-sm font-medium hover:text-primary transition-colors">
          Sign Up
        </button>
        <button className="px-6 py-2 rounded-full bg-white text-black font-medium hover:scale-105 transition-transform">
          Log In
        </button>
      </div>
    </header>
  )
} 