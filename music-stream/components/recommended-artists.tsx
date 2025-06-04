'use client'

import React from 'react'
import Link from 'next/link'

const artists = [
  {
    id: '1',
    name: 'Luna & The Stars',
    genre: 'Indie Pop',
    monthlyListeners: '2.5M',
  },
  {
    id: '2',
    name: 'The Groove',
    genre: 'Electronic',
    monthlyListeners: '1.8M',
  },
  {
    id: '3',
    name: 'Neon Pulse',
    genre: 'Synthwave',
    monthlyListeners: '1.2M',
  },
  {
    id: '4',
    name: 'Urban Echo',
    genre: 'Hip Hop',
    monthlyListeners: '950K',
  },
  {
    id: '5',
    name: 'The Wanderers',
    genre: 'Folk Rock',
    monthlyListeners: '820K',
  },
]

export function RecommendedArtists() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {artists.map((artist) => (
        <Link
          key={artist.id}
          href={`/artist/${artist.id}`}
          className="group flex flex-col items-center text-center p-4 rounded-lg hover:bg-secondary/50 transition-all"
        >
          <div className="relative w-32 h-32 mb-4">
            <div className="w-full h-full rounded-full bg-secondary-light overflow-hidden transform transition-transform group-hover:scale-105">
              <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary-light" />
            </div>
          </div>
          <h3 className="font-medium mb-1 group-hover:text-primary transition-colors">
            {artist.name}
          </h3>
          <p className="text-sm text-gray-400">
            {artist.genre}
          </p>
          <p className="text-xs text-gray-500 mt-1">
            {artist.monthlyListeners} monthly listeners
          </p>
        </Link>
      ))}
    </div>
  )
} 