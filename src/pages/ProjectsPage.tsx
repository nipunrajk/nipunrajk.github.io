const ProjectsPage = () => {
  return (
    <div className='min-h-screen flex items-center justify-center px-6'>
      <div className='max-w-2xl mx-auto text-center'>
        <h1 className='text-6xl font-raleway font-normal text-neutral-300 mb-6'>
          Projects
        </h1>

        <div className='relative'>
          <div className='absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-3xl' />
          <div className='relative bg-black/50 backdrop-blur-sm border border-white/10 rounded-xl p-8'>
            <h2 className='text-2xl text-white/90 font-medium mb-4'>
              Under Construction
            </h2>
            <p className='text-white/70 text-lg leading-relaxed'>
              I'm currently working on showcasing my projects here. Check back
              soon to see my latest work in web development, including
              full-stack applications, UI/UX designs, and more.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectsPage
