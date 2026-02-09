import { projects } from '../data/projects'

const Projects = () => {
  return (
    <section id="projects" className="section-container bg-gray-50 dark:bg-gray-900">
      <h2 className="section-title">Featured Projects</h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white dark:bg-gray-950 rounded-lg shadow-md dark:shadow-black/30 overflow-hidden hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 border border-transparent dark:border-gray-800"
          >
            <div className="h-48 bg-gray-200 dark:bg-gray-800 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-3">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-100 text-blue-700 dark:bg-blue-950/50 dark:text-blue-200 text-sm rounded-full border border-transparent dark:border-blue-900/60"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-4">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-semibold flex items-center gap-2"
                >
                  Live Demo
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
