interface Job {
  title: string;
  company: string;
  location: string;
  period: string;
  responsibilities: string[];
}

const Experience = () => {
  const jobs: Job[] = [
    {
      title: "Software Engineer (Hybrid)",
      company: "CookieYes",
      location: "Calicut, Kerala",
      period: "Nov 2022 - Present",
      responsibilities: [
        "Developing screens and UI components for the web application using React and Tailwind.",
        "Fixing UI issues and integrating backend APIs with Redux Saga.",
      ],
    },
  ];

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
                        {job.company} {job.location && `/ ${job.location}`}
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
  );
};

export default Experience;
