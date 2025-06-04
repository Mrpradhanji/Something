'use client'

import { PlayIcon, PauseIcon, BackwardIcon, ForwardIcon, SpeakerWaveIcon } from '@heroicons/react/24/solid'
import { useState } from 'react'

export function Player() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [volume, setVolume] = useState(100)

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-secondary border-t border-white/10 px-4 py-3">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center gap-4 w-1/3">
          <div className="w-14 h-14 bg-secondary-light rounded"></div>
          <div>
            <p className="font-medium">No track playing</p>
            <p className="text-sm text-gray-400">Select a song to play</p>
          </div>
        </div>

        <div className="flex flex-col items-center w-1/3">
          <div className="flex items-center gap-4">
            <button className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-white">
              <BackwardIcon className="w-5 h-5" />
            </button>
            <button 
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-black hover:scale-105 transition-transform"
            >
              {isPlaying ? (
                <PauseIcon className="w-5 h-5" />
              ) : (
                <PlayIcon className="w-5 h-5 ml-0.5" />
              )}
            </button>
            <button className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-white">
              <ForwardIcon className="w-5 h-5" />
            </button>
          </div>
          <div className="w-full mt-2">
            <div className="bg-white/20 h-1 rounded-full">
              <div className="bg-primary h-full w-0 rounded-full"></div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-end gap-2 w-1/3">
          <SpeakerWaveIcon className="w-5 h-5 text-gray-400" />
          <input
            type="range"
            min="0"
            max="100"
            value={volume}
            onChange={(e) => setVolume(Number(e.target.value))}
            className="w-24 accent-primary"
          />
        </div>
      </div>
    </div>
  )
} 