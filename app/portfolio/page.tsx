import Navigation from '@/components/Navigation'

const projects = [
  {
    title: "Warrior Screener",
    description: "Pre-market stock screener built with React and Vite, using Polygon.io API. Implements Ross Cameron's Warrior Trading criteria for identifying high-probability trading opportunities.",
    tech: ["React", "Vite", "Polygon.io API", "Tailwind CSS"],
    github: "https://github.com/Lueker-Lab/warrior-screener",
    demo: "https://lueker-lab.github.io/warrior-screener",
    aiRole: "Claude assisted with API integration, data visualization, and deployment configuration."
  },
  {
    title: "Kristi Cook Website",
    description: "Professional website for cybersecurity speaker Kristi Cook. Full-stack React + Node.js application with LinkedIn content integration.",
    tech: ["React", "Node.js", "Express", "LinkedIn API"],
    github: "https://github.com/Lueker-Lab/kristi-cook-website",
    aiRole: "Claude scaffolded the project structure, integrated LinkedIn data, and designed responsive layouts."
  },
  {
    title: "BreatheEasy: AI Wellness Companion",
    description: "Base44 App featuring AI-powered wellness tools and mindfulness features for mental health support.",
    tech: ["JavaScript", "AI/ML Integration"],
    github: "https://github.com/Lueker-Lab/breatheeasy-ai-wellness-companion",
    private: true,
    aiRole: "Claude contributed to conversational AI features and wellness content generation."
  }
]

export default function PortfolioPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-tan-50">
        <div className="section">
          <div className="container-custom">
            <h1 className="text-5xl font-bold mb-6 text-center">AI-Assisted Portfolio</h1>
            <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              A collection of projects built with Claude AI assistance through the Lueker Lab organization
            </p>
            
            <div className="space-y-12">
              {projects.map((project, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-8 md:p-12">
                  <div className="flex items-start justify-between mb-4">
                    <h2 className="text-3xl font-bold">{project.title}</h2>
                    {project.private && (
                      <span className="bg-tan-300 text-tan-800 text-xs px-3 py-1 rounded-full">
                        Private
                      </span>
                    )}
                  </div>
                  
                  <p className="text-gray-700 text-lg mb-6">
                    {project.description}
                  </p>

                  <div className="mb-6">
                    <h3 className="font-semibold text-tan-700 mb-2">Technologies Used:</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <span 
                          key={i}
                          className="bg-tan-100 text-tan-800 px-3 py-1 rounded-md text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6 bg-tan-50 p-4 rounded-lg border-l-4 border-tan-400">
                    <h3 className="font-semibold text-tan-700 mb-2">🤖 AI Contribution:</h3>
                    <p className="text-gray-700">{project.aiRole}</p>
                  </div>

                  <div className="flex gap-4">
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
                    >
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      View on GitHub
                    </a>
                    {project.demo && (
                      <a 
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-6 py-3 bg-tan-600 text-white rounded-lg hover:bg-tan-700 transition-colors"
                      >
                        Live Demo →
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-4">About This Portfolio</h2>
              <p className="text-gray-700 max-w-2xl mx-auto">
                All projects in this portfolio were developed with Claude AI assistance through Anthropic's 
                platform. This collaboration demonstrates the potential of AI-assisted development for rapid 
                prototyping, code generation, and problem-solving in modern web development.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
