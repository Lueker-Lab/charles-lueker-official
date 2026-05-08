import Navigation from '@/components/Navigation'

export default function VideosPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-tan-50">
        <div className="section">
          <div className="container-custom">
            <h1 className="text-5xl font-bold mb-12 text-center">Videos</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Video 1 */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="aspect-video bg-tan-300 flex items-center justify-center">
                  <span className="text-tan-600">Video Thumbnail</span>
                  {/* TODO: Add video embed or thumbnail */}
                </div>
                <div className="p-4">
                  <h3 className="font-semibold mb-2">Performance Video</h3>
                  <p className="text-sm text-gray-600">Live performance footage</p>
                </div>
              </div>

              {/* Video 2 */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="aspect-video bg-tan-300 flex items-center justify-center">
                  <span className="text-tan-600">Video Thumbnail</span>
                  {/* TODO: Add video embed or thumbnail */}
                </div>
                <div className="p-4">
                  <h3 className="font-semibold mb-2">Music Video</h3>
                  <p className="text-sm text-gray-600">Official music video</p>
                </div>
              </div>

              {/* Add more videos as needed */}
            </div>

            <div className="mt-12 text-center">
              <p className="text-gray-600">
                Videos will be embedded from YouTube. Upload your content and we'll integrate it here.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
