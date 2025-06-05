'use client'

import { useState, useEffect } from 'react'
import { 
  UserIcon, 
  MusicalNoteIcon, 
  ListBulletIcon,
  ChartBarIcon 
} from '@heroicons/react/24/outline'

interface Stats {
  totalUsers: number
  totalSongs: number
  totalPlaylists: number
  activeUsers: number
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<Stats>({
    totalUsers: 0,
    totalSongs: 0,
    totalPlaylists: 0,
    activeUsers: 0
  })

  // In a real app, this would fetch from your API
  useEffect(() => {
    // Simulated data for demonstration
    setStats({
      totalUsers: 1250,
      totalSongs: 5000,
      totalPlaylists: 850,
      activeUsers: 325
    })
  }, [])

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard
          title="Total Users"
          value={stats.totalUsers}
          icon={UserIcon}
          trend="+12%"
        />
        <StatCard
          title="Total Songs"
          value={stats.totalSongs}
          icon={MusicalNoteIcon}
          trend="+5%"
        />
        <StatCard
          title="Total Playlists"
          value={stats.totalPlaylists}
          icon={ListBulletIcon}
          trend="+8%"
        />
        <StatCard
          title="Active Users"
          value={stats.activeUsers}
          icon={ChartBarIcon}
          trend="+15%"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-secondary/50 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
          <div className="space-y-4">
            <ActivityItem
              action="New user registered"
              user="john.doe@example.com"
              time="5 minutes ago"
            />
            <ActivityItem
              action="New playlist created"
              user="sarah.smith@example.com"
              time="15 minutes ago"
            />
            <ActivityItem
              action="Song uploaded"
              user="mike.wilson@example.com"
              time="1 hour ago"
            />
          </div>
        </div>

        <div className="bg-secondary/50 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">System Health</h2>
          <div className="space-y-4">
            <HealthItem
              label="Server Status"
              status="Operational"
              statusColor="text-green-400"
            />
            <HealthItem
              label="Database Status"
              status="Operational"
              statusColor="text-green-400"
            />
            <HealthItem
              label="Storage Usage"
              status="75%"
              statusColor="text-yellow-400"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

function StatCard({ title, value, icon: Icon, trend }: {
  title: string
  value: number
  icon: any
  trend: string
}) {
  return (
    <div className="bg-secondary/50 rounded-lg p-6">
      <div className="flex items-center justify-between mb-4">
        <Icon className="w-6 h-6 text-primary" />
        <span className="text-sm text-green-400">{trend}</span>
      </div>
      <h3 className="text-lg font-medium text-gray-400">{title}</h3>
      <p className="text-2xl font-bold">{value.toLocaleString()}</p>
    </div>
  )
}

function ActivityItem({ action, user, time }: {
  action: string
  user: string
  time: string
}) {
  return (
    <div className="flex items-center justify-between">
      <div>
        <p className="font-medium">{action}</p>
        <p className="text-sm text-gray-400">{user}</p>
      </div>
      <span className="text-sm text-gray-500">{time}</span>
    </div>
  )
}

function HealthItem({ label, status, statusColor }: {
  label: string
  status: string
  statusColor: string
}) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-gray-400">{label}</span>
      <span className={statusColor}>{status}</span>
    </div>
  )
} 