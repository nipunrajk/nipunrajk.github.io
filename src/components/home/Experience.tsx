interface Job {
  title: string
  company: string
  location: string
  period: string
  responsibilities: string[]
}

const Experience = () => {
  const jobs: Job[] = [
    {
      title: 'Software Engineer (Hybrid)',
      company: 'Mozilor (CookieYes) ',
      location: 'Calicut, Kerala',
      period: 'Nov 2022 - May 2025',
      responsibilities: [
        'Migrated the web application from Vue to React, setting up architecture for routing, authentication, and state management using Zustand and React Query.',
        'Built modular, scalable UI components with Tailwind CSS and improved page load performance by optimizing build setup (Webpack, Vite).',
        'Collaborated on backend microservices in Node.js and Laravel, helping integrate frontend features and contributing to service migration toward Golang.',
        'Led UI updates for GDPR/CCPA compliance (cookie banners, policy UI), and revamped system email templates.',
        'Participated in Agile sprints, handled cross-browser UI bugs, and regularly reviewed pull requests to maintain code quality.',
      ],
    },
  ]

  return (
    <section id='experience' className='py-20 px-6'>
      <div className='max-w-6xl mx-auto'>
        <div className='flex justify-between items-start'>
          <h2 className='text-2xl font-gt-walsheim font-medium'>EXPERIENCE</h2>
          <div className='flex-1 ml-40'>
            {jobs.map((job, index) => (
              <div key={index}>
                <div className='mb-16'>
                  <div className='flex justify-between items-start mb-6'>
                    <div>
                      <h3 className='text-2xl font-medium mb-2'>{job.title}</h3>
                      <p className='text-blue-400'>
                        <a
                          href='https://www.mozilor.com/'
                          target='_blank'
                          rel='noopener noreferrer'
                        >
                          {job.company}
                        </a>
                        {job.location && `/ ${job.location}`}
                      </p>
                    </div>
                    <p className='text-white/60'>{job.period}</p>
                  </div>

                  <ul className='space-y-3'>
                    {job.responsibilities.map((resp, idx) => (
                      <li key={idx} className='flex text-zinc-400'>
                        <span className='mr-2'>-</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* <div className='w-full  border-[0.6px] border-neutral-300' /> */}
      </div>
    </section>
  )
}

export default Experience
