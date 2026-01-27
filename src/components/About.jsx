const About = () => {
  return (
    <section id="about" className="section-container bg-white dark:bg-gray-950">
      <h2 className="section-title">About Me</h2>
      
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I'm a passionate full-stack developer with a love for creating elegant solutions 
              to complex problems. With experience in modern web technologies, I specialize in 
              building responsive, user-friendly applications that deliver exceptional user experiences.
            </p>
            
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to 
              open-source projects, or sharing knowledge with other developers, talking about new projects and problems solved. I believe 
              in continuous learning and staying up-to-date with industry best practices.
            </p>
            
            <div className="pt-4">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">Key Highlights</h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-2">✓</span>
                  <span>2+ years of experience in web development</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-2">✓</span>
                  <span>Expertise in React, Node.js, and modern JavaScript, TypeScript, PostgreSQL, MongoDB, and Python.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-2">✓</span>
                  <span>Strong focus on clean code, scalable architecture, and best practices, leveraging AI to enhance productivity and output.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-2">✓</span>
                  <span>Passionate about user experience and design.</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="flex justify-center">
            <div className="w-64 h-64 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center shadow-xl">
              <span className="text-6xl text-white font-bold">MD</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
