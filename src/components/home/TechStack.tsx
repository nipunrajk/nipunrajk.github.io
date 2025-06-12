const TechStack = () => {
  const techCategories = [
    {
      name: 'Languages',
      technologies: [
        { name: 'Javascript' },
        { name: 'Typescript' },
        { name: 'HTML' },
        { name: 'CSS' },
      ],
    },
    {
      name: 'Frontend Engineering & Design',
      technologies: [
        { name: 'React JS' },
        { name: 'Vue 3' },
        { name: 'Next.JS' },
        { name: 'Tailwind CSS' },
        { name: 'Vitest / Jest' },
        { name: 'Figma' },
      ],
    },
    {
      name: 'Backend Engineering',
      technologies: [
        { name: 'Node.js' },
        { name: 'Laravel' },
        { name: 'RESTful APIs' },
      ],
    },
    {
      name: 'DevOps & Infra',
      technologies: [
        { name: 'Docker' },
        { name: 'Nginx' },
        { name: 'Bitbucket' },
        { name: 'GitHub Actions' },
        { name: 'Linux' },
      ],
    },
    {
      name: 'Tools & Productivity',
      technologies: [
        { name: 'ChatGPT' },
        { name: 'Cursor' },
        { name: 'Claude.ai' },
      ],
    },
  ]

  return (
    <section id='tech-stack' className='mb-20 mx-16'>
      <div className='max-w-6xl mx-auto'>
        <div className='mb-36'>
          <h2 className='text-neutral-300 font-raleway text-6xl font-normal mb-4'>
            These are the
            <br />
            technologies I've been using
          </h2>
        </div>
      </div>
      <div className='grid grid-cols-5 gap-16'>
        {techCategories.map((category, index) => (
          <div
            key={index}
            className='bg-dark backdrop-blur-sm rounded-lg p-6 border border-white/5 h-fit
                transition-all duration-300 hover:border-white/20 hover:bg-grey-900/80 
                hover:transform hover:-translate-y-1 hover:shadow-lg hover:shadow-black/40'
          >
            <h3 className='text-white/80 text-sm font-medium mb-4'>
              {category.name}
            </h3>

            <div className='space-y-3'>
              {category.technologies.map((tech, idx) => (
                <div
                  key={idx}
                  className='flex items-center space-x-3 group cursor-pointer 
                      transition-colors duration-200 hover:bg-grey-800/50 rounded-lg p-2 -mx-2'
                >
                  <span className='text-white/90 transition-colors duration-200 group-hover:text-white'>
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TechStack
