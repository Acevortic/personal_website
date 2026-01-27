const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-950 dark:via-gray-950 dark:to-gray-900 pt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-gray-100 animate-fade-in">
            <span className="block">Hi, I'm</span>
            <span className="block text-blue-600 dark:text-blue-400 mt-2">Michael DeCuire</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Software Engineer & Solutions Architect
          </p>
          
          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
            Building innovative applications end to end with modern technologies and best practices.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              View Projects
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 bg-white dark:bg-gray-900 text-blue-600 dark:text-blue-300 border-2 border-blue-600 dark:border-blue-400 rounded-lg font-semibold hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
