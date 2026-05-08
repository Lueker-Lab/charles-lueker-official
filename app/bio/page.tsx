import Navigation from '@/components/Navigation'

export default function BioPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-tan-50">
        <div className="section">
          <div className="container-custom max-w-4xl">
            <h1 className="text-5xl font-bold mb-12 text-center">About Charles</h1>
            
            <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
              <div className="grid md:grid-cols-[300px,1fr] gap-8 mb-8">
                <div>
                  <div className="aspect-square bg-tan-300 rounded-lg flex items-center justify-center">
                    <span className="text-tan-600">Photo</span>
                    {/* TODO: Add bio photo */}
                  </div>
                </div>
                <div>
                  <h2 className="text-3xl font-bold mb-4">Singer/Songwriter/Performer</h2>
                  <p className="text-lg leading-relaxed text-gray-700">
                    Born into a musical family, Charles has been writing music and performing from an early age.
                  </p>
                </div>
              </div>

              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 mb-4">
                  {/* TODO: Add full bio content from Wix */}
                  Charles Lueker's musical journey began in his childhood, surrounded by the rich traditions 
                  of American music. Growing up in a household where melody and harmony were as common as 
                  conversation, he developed a deep appreciation for storytelling through song.
                </p>
                
                <p className="text-gray-700 mb-4">
                  Over the years, Charles has honed his craft as both a performer and songwriter, drawing 
                  inspiration from classic country, folk, and contemporary singer-songwriter traditions. 
                  His music reflects personal experiences, universal themes, and the landscapes that have 
                  shaped his life.
                </p>

                <p className="text-gray-700">
                  Today, Charles continues to write, record, and perform, sharing his music with audiences 
                  who appreciate authentic storytelling and heartfelt performances.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
