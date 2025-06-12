// src/components/home/Hero.tsx
import { useEffect, useState } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Animation on load
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className='px-6 relative z-0'>
      {/* Optional background gradient */}
      <div className='absolute -z-10 top-1/4 left-1/4 w-1/2 h-1/2 bg-gradient-start/20 rounded-full blur-[120px]' />

      <div className='max-w-6xl mx-auto w-full flex'>
        {/* Intro text with animation */}
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <p className='text-white text-base font-light mb-4'>Hey, I'm</p>

          {/* Name with gradient */}
          <h1 className='font-gt-walsheim text-8xl font-medium mb-6 hero-text'>
            Nipun Raj
          </h1>

          {/* Professional title */}
          {/* <h2 className='text-3xl md:text-4xl font-medium mb-6'>
            A Software Engineer
          </h2> */}

          {/* Brief bio */}
          <p className='text-zinc-100 text-lg font-light leading-6 text-justify  max-w-6xl mb-10'>
            I'm a software engineer based in India. I enjoy creating things that
            live on the internet, whether that be websites, applications, or
            anything in between. I've been freelancing for a year now while
            studying and have gained valuable knowledge from different fields.
          </p>

          {/* CTA Button */}
          <a
            href='#contact'
            className='inline-flex items-center text-lg border-2 border-white/20 px-6 py-3 rounded-full hover:border-gradient-start transition-colors'
          >
            Say hi <span className='ml-2'>→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
