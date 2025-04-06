// src/components/home/AnimatedHero.tsx
import { useEffect, useState } from "react";

const AnimatedHero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className='min-h-screen flex flex-col justify-center px-6 relative overflow-hidden'>
      {/* Animated background elements */}
      <div className='absolute -z-10 top-1/4 left-1/4 w-1/2 h-1/2 bg-gradient-start/20 rounded-full blur-[120px] animate-pulse' />
      <div
        className='absolute -z-10 top-1/3 right-1/3 w-1/3 h-1/3 bg-gradient-end/10 rounded-full blur-[80px] animate-pulse'
        style={{ animationDelay: "1s" }}
      />

      <div className='max-w-3xl mx-auto grid md:grid-cols-[2fr_1fr] gap-8 items-center'>
        {/* Text content */}
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <p className='text-white/80 text-xl mb-4'>Hello! I am</p>

          <h1 className='text-6xl md:text-7xl font-bold mb-6 gradient-text'>
            Your Name
          </h1>

          <div className='mb-6'>
            <h2 className='text-3xl md:text-4xl font-medium'>
              A Software Engineer
            </h2>
            <p className='text-white/60 mt-2'>
              Currently working at{" "}
              <span className='text-white'>Company Name</span>
            </p>
          </div>

          <p className='text-white/80 text-lg max-w-2xl mb-8 leading-relaxed'>
            I create meaningful and delightful digital products that create an
            equilibrium between user needs and business goals.
          </p>

          <a
            href='#contact'
            className='inline-flex items-center text-lg bg-gradient-to-r from-gradient-start to-gradient-end px-6 py-3 rounded-full hover:opacity-90 transition-opacity'
          >
            Get in touch <span className='ml-2'>→</span>
          </a>
        </div>

        {/* Optional stylized avatar/illustration container */}
        <div className='hidden md:flex justify-center'>
          <div className='relative w-48 h-48 rounded-full bg-gradient-to-br from-gradient-start/30 to-gradient-end/30 flex items-center justify-center'>
            {/* You can add an avatar image here or keep it as a decorative element */}
            <div className='absolute inset-2 rounded-full bg-black flex items-center justify-center'>
              <div className='text-4xl'>👨‍💻</div>
              {/* Replace with: <img src="/path-to-your-avatar.png" alt="Your Name" className="rounded-full" /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnimatedHero;
