import Navigation from '@/components/Navigation'
import Link from 'next/link'

// TODO: This will be replaced with actual blog posts from markdown files or CMS
const blogPosts = [
  {
    id: 1,
    title: "Early story: Truck Tire Rodeo",
    excerpt: "Summer of 1992, band practice with our Band Desperado in Mt. Vernon, IL. Jeff Bradley loves to tell this story and the rest of the band...",
    date: "Jun 23, 2022",
    readTime: "2 min read"
  },
  {
    id: 2,
    title: "Let's Go To Luckenbach Texas...",
    excerpt: "In 2014, when I lived in Austin, my buddy Jeff Bradley just happened to be in town as a guest speaker for a conference. We decided to use...",
    date: "Jun 21, 2022",
    readTime: "1 min read"
  }
]

export default function BlogPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-tan-50">
        <div className="section">
          <div className="container-custom max-w-4xl">
            <h1 className="text-5xl font-bold mb-4 text-center">Blog</h1>
            <div className="flex justify-center mb-12">
              <button className="text-tan-600 hover:text-tan-800">All Posts</button>
            </div>
            
            <div className="space-y-8">
              {blogPosts.map((post) => (
                <article key={post.id} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <span>Charles Lueker</span>
                    <span className="mx-2">•</span>
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h2 className="text-3xl font-bold mb-4 hover:text-tan-700 transition-colors">
                    <Link href={`/blog/${post.id}`}>
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-gray-700 mb-4">
                    {post.excerpt}
                  </p>
                  <Link 
                    href={`/blog/${post.id}`}
                    className="text-tan-600 hover:text-tan-800 font-semibold"
                  >
                    Read More →
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
