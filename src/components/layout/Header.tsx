import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { SunIcon } from '@assets/icons/SunIcon'
import { MoonIcon } from '@assets/icons/MoonIcon'

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [isScrolled, setIsScrolled] = useState(false)

  // Handle scroll effect for header background change
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
    document.documentElement.classList.toggle('dark')
  }

  return (
    <header
      className={`fixed w-full py-4 px-6 transition-all duration-300 z-50 ${
        isScrolled ? 'bg-black/80 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className='max-w-6xl mx-auto flex justify-between items-center'>
        <Link to='/' className='text-white text-2xl font-light'>
          NR.
        </Link>

        <nav className='flex items-center gap-8'>
          <Link
            to='/projects'
            className='text-white font-light text-lg hover:text-blue-600  transition'
          >
            Projects
          </Link>
          <a
            href='/Nipunraj.pdf'
            className='text-white font-light text-lg hover:text-blue-600 transition cursor-pointer'
            target='_blank'
            rel='noopener noreferrer'
            onClick={(e) => {
              e.preventDefault()
              window.open('/Nipunraj.pdf', '_blank')
            }}
          >
            Resume
          </a>
          <Link
            to='/contact'
            className='text-white font-light text-lg hover:text-blue-600  transition'
          >
            Contact
          </Link>

          {/* Dark/Light Mode Toggle */}
          {/* <button
            onClick={toggleTheme}
            className='text-white ml-4 p-1 rounded-full'
            aria-label='Toggle theme'
          >
            {isDarkMode ? <SunIcon /> : <MoonIcon />}
          </button> */}
        </nav>
      </div>
    </header>
  )
}

export default Header
