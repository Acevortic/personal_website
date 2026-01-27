const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend",
      skills: ["React", "Vue.js", "TypeScript", "HTML5", "CSS3", "Tailwind CSS",],
    },
    {
      category: "Backend",
      skills: ["Node.js", "Express", "Python", "Django", "REST APIs", "Java", "NestJS"],
    },
    {
      category: "Database",
      skills: ["MongoDB", "PostgreSQL", "Redis"],
    },
    {
      category: "Tools & Others",
      skills: ["Git", "Cursor", "Claude Code", "Docker", "AWS", "CI/CD", "Jest", "Webpack", "Vite"],
    },
  ]

  return (
    <section id="skills" className="section-container bg-white dark:bg-gray-950">
      <h2 className="section-title">Skills & Technologies</h2>
      
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 shadow-sm hover:shadow-md dark:shadow-black/30 transition-shadow border border-transparent dark:border-gray-800"
            >
              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-4">{category.category}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-4 py-2 bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-lg text-gray-700 dark:text-gray-200 font-medium hover:border-blue-500 hover:text-blue-600 dark:hover:border-blue-400 dark:hover:text-blue-300 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
