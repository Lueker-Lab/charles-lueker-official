import Navigation from '@/components/Navigation'

export default function MusicPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-tan-50">
        <div className="section">
          <div className="container-custom">
            <h1 className="text-5xl font-bold mb-12 text-center">Music</h1>
            
            {/* Album: When You Say You Love Me */}
            <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
              <div className="grid md:grid-cols-[300px,1fr] gap-8">
                <div>
                  <div className="aspect-square bg-tan-300 rounded-lg flex items-center justify-center">
                    <span className="text-tan-600">Album Cover</span>
                    {/* TODO: Add album cover image */}
                  </div>
                </div>
                <div>
                  <h2 className="text-3xl font-bold mb-2">When You Say You Love Me</h2>
                  <p className="text-tan-600 mb-6">Charles Lueker</p>
                  
                  <div className="space-y-3">
                    <div className="border-b border-tan-200 pb-3">
                      <p className="font-semibold">1. When You Say You Love Me</p>
                      <p className="text-sm text-gray-500">3:22</p>
                    </div>
                    <div className="border-b border-tan-200 pb-3">
                      <p className="font-semibold">2. Your Turn</p>
                      <p className="text-sm text-gray-500">3:45</p>
                    </div>
                    <div className="border-b border-tan-200 pb-3">
                      <p className="font-semibold">3. Day Drinkin'</p>
                      <p className="text-sm text-gray-500">3:18</p>
                    </div>
                    <div className="border-b border-tan-200 pb-3">
                      <p className="font-semibold">4. This Is War</p>
                      <p className="text-sm text-gray-500">4:02</p>
                    </div>
                    <div className="border-b border-tan-200 pb-3">
                      <p className="font-semibold">5. Let's Talk It Out</p>
                      <p className="text-sm text-gray-500">3:56</p>
                    </div>
                  </div>
                  
                  {/* TODO: Embed Wix Music Player or migrate to SoundCloud/Bandcamp */}
                  <div className="mt-6">
                    <p className="text-sm text-gray-500">
                      Music player coming soon. Listen on your favorite streaming platform.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Album: Moonshine Honey */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="grid md:grid-cols-[300px,1fr] gap-8">
                <div>
                  <div className="aspect-square bg-tan-300 rounded-lg flex items-center justify-center">
                    <span className="text-tan-600">Album Cover</span>
                    {/* TODO: Add album cover image */}
                  </div>
                </div>
                <div>
                  <h2 className="text-3xl font-bold mb-2">Moonshine Honey</h2>
                  <p className="text-tan-600 mb-6">Charles Lueker</p>
                  
                  <div className="space-y-3">
                    <div className="border-b border-tan-200 pb-3">
                      <p className="font-semibold">1. Moonshine Honey</p>
                      <p className="text-sm text-gray-500">3:30</p>
                    </div>
                    {/* Add more tracks as needed */}
                  </div>
                  
                  <div className="mt-6">
                    <p className="text-sm text-gray-500">
                      Music player coming soon. Listen on your favorite streaming platform.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
