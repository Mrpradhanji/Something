import { FeaturedPlaylists } from '@/components/featured-playlists'
import { TrendingSongs } from '@/components/trending-songs'
import { RecommendedArtists } from '@/components/recommended-artists'

export default function Home() {
  return (
    <div className="space-y-8">
      <section>
        <h1 className="text-3xl font-bold mb-6">Welcome Back!</h1>
        <FeaturedPlaylists />
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Trending Now</h2>
        <TrendingSongs />
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Artists You Might Like</h2>
        <RecommendedArtists />
      </section>
    </div>
  )
} 