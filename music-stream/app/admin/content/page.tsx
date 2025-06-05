'use client'

import { useState } from 'react'
import { 
  MusicalNoteIcon,
  ListBulletIcon,
  PencilIcon,
  TrashIcon,
  MagnifyingGlassIcon,
  ArrowTopRightOnSquareIcon
} from '@heroicons/react/24/outline'

interface Song {
  id: string
  title: string
  artist: string
  album: string
  duration: string
  plays: number
  uploadDate: string
}

interface Playlist {
  id: string
  title: string
  creator: string
  songCount: number
  followers: number
  lastUpdated: string
}

const mockSongs: Song[] = [
  {
    id: '1',
    title: 'Summer Nights',
    artist: 'The Groove',
    album: 'Summer Vibes',
    duration: '3:45',
    plays: 125000,
    uploadDate: '2024-02-15',
  },
  {
    id: '2',
    title: 'Dancing in the Rain',
    artist: 'Luna & The Stars',
    album: 'Midnight Tales',
    duration: '4:12',
    plays: 95600,
    uploadDate: '2024-01-20',
  },
  {
    id: '3',
    title: 'Electric Dreams',
    artist: 'Neon Pulse',
    album: 'Future Beats',
    duration: '3:28',
    plays: 78400,
    uploadDate: '2024-03-01',
  },
]

const mockPlaylists: Playlist[] = [
  {
    id: '1',
    title: 'Top Hits 2024',
    creator: 'Music Stream',
    songCount: 50,
    followers: 25000,
    lastUpdated: '2024-03-20',
  },
  {
    id: '2',
    title: 'Chill Vibes',
    creator: 'John Doe',
    songCount: 75,
    followers: 15000,
    lastUpdated: '2024-03-15',
  },
  {
    id: '3',
    title: 'Workout Mix',
    creator: 'Sarah Smith',
    songCount: 100,
    followers: 18000,
    lastUpdated: '2024-03-18',
  },
]

export default function ContentPage() {
  const [activeTab, setActiveTab] = useState<'songs' | 'playlists'>('songs')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredSongs = mockSongs.filter(song =>
    song.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    song.artist.toLowerCase().includes(searchQuery.toLowerCase()) ||
    song.album.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const filteredPlaylists = mockPlaylists.filter(playlist =>
    playlist.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    playlist.creator.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Content Management</h1>
        <button className="bg-primary text-black px-4 py-2 rounded-lg font-medium hover:bg-primary-light transition-colors">
          Upload Content
        </button>
      </div>

      <div className="mb-6 space-y-4">
        <div className="flex gap-4">
          <button
            onClick={() => setActiveTab('songs')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
              activeTab === 'songs'
                ? 'bg-primary text-black font-medium'
                : 'bg-secondary/50 text-gray-400 hover:text-white'
            }`}
          >
            <MusicalNoteIcon className="w-5 h-5" />
            Songs
          </button>
          <button
            onClick={() => setActiveTab('playlists')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
              activeTab === 'playlists'
                ? 'bg-primary text-black font-medium'
                : 'bg-secondary/50 text-gray-400 hover:text-white'
            }`}
          >
            <ListBulletIcon className="w-5 h-5" />
            Playlists
          </button>
        </div>

        <div className="relative">
          <MagnifyingGlassIcon className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder={`Search ${activeTab}...`}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-secondary/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
      </div>

      <div className="bg-secondary/50 rounded-lg overflow-hidden">
        {activeTab === 'songs' ? (
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10">
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Song</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Album</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Duration</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Plays</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Upload Date</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-400 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              {filteredSongs.map((song) => (
                <tr key={song.id} className="hover:bg-secondary/70">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="font-medium">{song.title}</div>
                      <div className="text-sm text-gray-400">{song.artist}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
                    {song.album}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
                    {song.duration}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
                    {song.plays.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
                    {song.uploadDate}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button className="text-gray-400 hover:text-white mr-3">
                      <PencilIcon className="w-5 h-5" />
                    </button>
                    <button className="text-gray-400 hover:text-red-400">
                      <TrashIcon className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10">
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Playlist</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Songs</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Followers</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Last Updated</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-400 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              {filteredPlaylists.map((playlist) => (
                <tr key={playlist.id} className="hover:bg-secondary/70">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="font-medium">{playlist.title}</div>
                      <div className="text-sm text-gray-400">by {playlist.creator}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
                    {playlist.songCount}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
                    {playlist.followers.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
                    {playlist.lastUpdated}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button className="text-gray-400 hover:text-white mr-3">
                      <ArrowTopRightOnSquareIcon className="w-5 h-5" />
                    </button>
                    <button className="text-gray-400 hover:text-red-400">
                      <TrashIcon className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  )
} 