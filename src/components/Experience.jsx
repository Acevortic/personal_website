const Experience = () => {
  const experiences = [
    {
      id: 1,
      company: "Freelance",
      role: "Solutions Architect",
      duration: "August 2025 - Present",
      location: "Austin, TX",
      description: [
        `Architected and deployed an AI-driven lead qualification engine using twilio, openAI, and Elevenlabs, resulting in a 40% increase in sales-qualified leads (SQLs) and reducing manual vetting time by 85%.`,
        `Engineered end-to-end workflow automations via Make and n8n, streamlining operations and saving an estimated 60+ manual hours per month.`,
        `Optimized full-funnel digital marketing strategies, leveraging Google Ads and Google Search SEO frameworks to drive a 25% improvement in conversion rates and a significant boost in organic visibility, as well as web traffic.`,
        `Accelerated development lifecycles by utilizing Cursor for rapid prototyping and deployment of complex workflows, reducing implementation time by 30%.`,
        `Consulted directly with business owners to audit legacy systems and implement scalable architectures that bridge the gap between manual processes and autonomous AI operations.`
      ],
    },
    {
      id: 2,
      company: "Adaptive Insurance",
      role: "Software Engineer",
      duration: "May 2025 - August 2025",
      location: "Bee Cave, TX",
      description: [
        `Architect and maintain NestJS microservices ingesting real-time weather and geospatial data streams, supporting
        automated insurance trigger detection across multiple climate types.`,
        `Design and optimize PostgreSQL schemas and queries for high-volume event data, improving data access speed and
        system reliability by 30%.`,
        `Deploy and scale services on AWS, enhancing fault tolerance and reducing response latency by 15%.`,
        `Build secure APIs enabling automated payout workflows and policy event verification, cutting manual intervention and
        speeding processing time for the CEO by 80%.`
      ],
    },
    {
      id: 3,
      company: "Dun and Bradstreet (D&B)",
      role: "Software Engineering Intern",
      duration: "May 2024 - August 2024",
      location: "Austin, TX",
      description: [
        "Implemented major components of the new website redesign, serving over 12M users globally.",
        `Architected and executed core elements of a website redesign, enhancing user experience for over 12 million monthly
        visitors and increasing functionality with a 20% uplift in user engagement metrics.`,
        `Built and sustained scalable, high-efficiency features using XML, React, TypeScript, and Java, achieving 99.9% uptime
        and cutting maintenance overhead by 15% through streamlined codebases.`,
        `Built customer-facing solutions with Adobe Experience Manager (AEM), boosting performance by 30% and cutting
        deployment time by 25% through a streamlined production pipeline.`,
      ],
    },
    {
      id: 4,
      company: "Amazon.com",
      role: "Software Engineering Intern",
      duration: "May 2023 - August 2023",
      location: "Austin, TX",
      description: [
        `Developed and deployed a customer-facing feature for 50M+ Amazon users to manage cross-context ads, ensuring 100%
        regulatory compliance and improving audit efficiency by 35%.`,
        `Navigated ambiguous project requirements and spearheaded critical design decisions, delivering a fully functional
        internal Amazon solution that reduced operational delays by 20% within three months.`,
        `Executed end-to-end deployment across beta, gamma, and production stages, leveraging Mockito unit tests to achieve
        98% test coverage and validate functionality and compliance with zero critical defects.`,
        `Built and maintained scalable features using Java and React, boosting system reliability to 99.95% uptime and enhancing
        performance by 25% through optimized code.`
      ],
    },
  ]

  return (
    <section id="experience" className="section-container bg-gray-50 dark:bg-gray-900">
      <h2 className="section-title">Work Experience</h2>
      
      <div className="max-w-4xl mx-auto">
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className="bg-white dark:bg-gray-950 rounded-lg shadow-md dark:shadow-black/30 p-6 md:p-8 hover:shadow-lg transition-shadow border border-transparent dark:border-gray-800"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">{exp.role}</h3>
                  <p className="text-xl text-blue-600 dark:text-blue-400 font-semibold mt-1">{exp.company}</p>
                </div>
                <div className="mt-2 md:mt-0 text-right">
                  <p className="text-gray-600 dark:text-gray-300 font-medium">{exp.duration}</p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">{exp.location}</p>
                </div>
              </div>
              
              <ul className="space-y-2 mt-4">
                {exp.description.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start text-gray-700 dark:text-gray-300">
                    <span className="text-blue-600 dark:text-blue-400 mr-3 mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
