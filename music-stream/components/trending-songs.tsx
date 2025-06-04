'use client'

import React, { useState } from 'react'
import { PlayIcon, HeartIcon } from '@heroicons/react/24/outline'
import { HeartIcon as HeartIconSolid } from '@heroicons/react/24/solid'

const trendingSongs = [
  {
    id: '1',
    title: 'Summer Nights',
    artist: 'The Groove',
    album: 'Summer Vibes',
    duration: '3:45',
    plays: '1.2M',
  },
  {
    id: '2',
    title: 'Dancing in the Rain',
    artist: 'Luna & The Stars',
    album: 'Midnight Tales',
    duration: '4:12',
    plays: '956K',
  },
  {
    id: '3',
    title: 'Electric Dreams',
    artist: 'Neon Pulse',
    album: 'Future Beats',
    duration: '3:28',
    plays: '784K',
  },
  {
    id: '4',
    title: 'Mountain High',
    artist: 'The Wanderers',
    album: 'Nature\'s Call',
    duration: '5:02',
    plays: '652K',
  },
  {
    id: '5',
    title: 'City Lights',
    artist: 'Urban Echo',
    album: 'Metropolitan',
    duration: '3:56',
    plays: '543K',
  },
]

export function TrendingSongs() {
  const [likedSongs, setLikedSongs] = useState<Set<string>>(new Set())

  const toggleLike = (songId: string) => {
    setLikedSongs((prev) => {
      const newLiked = new Set(prev)
      if (newLiked.has(songId)) {
        newLiked.delete(songId)
      } else {
        newLiked.add(songId)
      }
      return newLiked
    })
  }

  return (
    <div className="space-y-1">
      {trendingSongs.map((song, index) => (
        <div
          key={song.id}
          className="group flex items-center gap-4 p-2 rounded-lg hover:bg-secondary/50 transition-colors"
        >
          <div className="w-8 text-sm text-gray-400 group-hover:text-white">
            {index + 1}
          </div>
          <div className="w-12 h-12 bg-secondary-light rounded flex-shrink-0" />
          <div className="flex-grow min-w-0">
            <h3 className="font-medium truncate">{song.title}</h3>
            <p className="text-sm text-gray-400 truncate">{song.artist}</p>
          </div>
          <div className="text-sm text-gray-400 hidden md:block">
            {song.album}
          </div>
          <div className="text-sm text-gray-400 hidden md:block">
            {song.plays} plays
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => toggleLike(song.id)}
              className="text-gray-400 hover:text-white transition-colors"
            >
              {likedSongs.has(song.id) ? (
                <HeartIconSolid className="w-5 h-5 text-primary" />
              ) : (
                <HeartIcon className="w-5 h-5" />
              )}
            </button>
            <span className="text-sm text-gray-400">{song.duration}</span>
            <button className="text-gray-400 hover:text-white transition-colors">
              <PlayIcon className="w-5 h-5" />
            </button>
          </div>
        </div>
      ))}
    </div>
  )
} 