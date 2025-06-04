'use client'

import React from 'react'
import Link from 'next/link'
import { PlayIcon } from '@heroicons/react/24/solid'

const playlists = [
  {
    id: '1',
    title: 'Chill Vibes',
    description: 'Relaxing beats for your peaceful moments',
    songCount: 25,
  },
  {
    id: '2',
    title: 'Workout Mix',
    description: 'High-energy tracks to fuel your workout',
    songCount: 32,
  },
  {
    id: '3',
    title: 'Focus Flow',
    description: 'Concentration-enhancing instrumental tracks',
    songCount: 40,
  },
  {
    id: '4',
    title: 'Party Hits',
    description: 'Top party tracks that never fail',
    songCount: 28,
  },
]

export function FeaturedPlaylists() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {playlists.map((playlist) => (
        <Link
          key={playlist.id}
          href={`/playlist/${playlist.id}`}
          className="group bg-secondary/50 rounded-lg p-4 transition-all hover:bg-secondary"
        >
          <div className="relative aspect-square mb-4">
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
              <button className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-black transform translate-y-2 group-hover:translate-y-0 transition-transform">
                <PlayIcon className="w-6 h-6" />
              </button>
            </div>
            <div className="w-full h-full bg-secondary-light rounded-lg" />
          </div>
          <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors">
            {playlist.title}
          </h3>
          <p className="text-sm text-gray-400 line-clamp-2">
            {playlist.description}
          </p>
          <p className="text-xs text-gray-500 mt-2">
            {playlist.songCount} songs
          </p>
        </Link>
      ))}
    </div>
  )
} 