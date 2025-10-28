import React from 'react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  const handleScrollToGallery = () => {
    const el = document.getElementById('gallery');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlay to enhance text contrast; never block Spline interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/10 to-white/90" />

      <div className="relative z-10 flex h-full items-center justify-center px-6">
        <div className="max-w-3xl text-center">
          <h1 className="text-4xl font-semibold tracking-tight text-neutral-900 sm:text-5xl md:text-6xl">
            Silver Fox Photography
          </h1>
          <p className="mt-4 text-base text-neutral-700 sm:text-lg">
            Cinematic storytelling through light, shadow, and motion. Immerse yourself in a
            modern, minimalist experience inspired by Apple’s design language.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <button
              onClick={handleScrollToGallery}
              className="rounded-full bg-neutral-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-neutral-300"
            >
              Explore Gallery
            </button>
            <a
              href="#story"
              className="rounded-full border border-neutral-300 px-6 py-3 text-sm font-medium text-neutral-900 transition hover:bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-neutral-300"
            >
              Behind the lens
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
