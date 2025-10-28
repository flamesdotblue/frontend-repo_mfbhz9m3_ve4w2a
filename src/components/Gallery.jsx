import React, { useEffect, useRef, useState } from 'react';

// Cloudinary demo media (optimized via f_auto,q_auto). Replace with your own later.
const IMAGES = [
  'https://res.cloudinary.com/demo/image/upload/f_auto,q_auto,w_1200/samples/landscapes/nature-mountains.jpg',
  'https://res.cloudinary.com/demo/image/upload/f_auto,q_auto,w_1200/samples/people/boy-snow-hood.jpg',
  'https://res.cloudinary.com/demo/image/upload/f_auto,q_auto,w_1200/samples/landscapes/architecture-signs.jpg',
  'https://res.cloudinary.com/demo/image/upload/f_auto,q_auto,w_1200/samples/people/kitchen-bar.jpg',
  'https://res.cloudinary.com/demo/image/upload/f_auto,q_auto,w_1200/samples/animals/kitten-playing.jpg',
  'https://res.cloudinary.com/demo/image/upload/f_auto,q_auto,w_1200/samples/people/bicycle.jpg',
  'https://res.cloudinary.com/demo/image/upload/f_auto,q_auto,w_1200/samples/landscapes/beach-boat.jpg',
  'https://res.cloudinary.com/demo/image/upload/f_auto,q_auto,w_1200/samples/landscapes/sea-scape.jpg',
];

const useRevealOnView = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);
  return { ref, visible };
};

const Lightbox = ({ src, alt, onClose }) => {
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Image lightbox"
      onClick={onClose}
    >
      <img
        src={src}
        alt={alt}
        className="max-h-[90vh] max-w-[92vw] rounded-lg shadow-xl"
        onClick={(e) => e.stopPropagation()}
      />
      <button
        onClick={onClose}
        className="absolute right-4 top-4 rounded-full bg-white/90 px-3 py-1 text-sm font-medium text-neutral-900 shadow hover:bg-white"
        aria-label="Close lightbox"
      >
        Close
      </button>
    </div>
  );
};

const Gallery = () => {
  const [active, setActive] = useState(null);
  const { ref, visible } = useRevealOnView();

  return (
    <section id="gallery" ref={ref} className="relative mx-auto max-w-7xl px-6 py-16">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl">Featured Works</h2>
          <p className="mt-2 text-neutral-600">A curated selection across portraits, weddings, and street stories.</p>
        </div>
        <a href="#" className="text-sm font-medium text-neutral-900 underline-offset-4 hover:underline">
          View all
        </a>
      </div>

      <div
        className={`grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 transition-opacity duration-700 ${
          visible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {IMAGES.map((src, idx) => (
          <button
            key={src}
            className="group relative overflow-hidden rounded-xl border border-neutral-200 bg-white"
            onClick={() => setActive({ src, alt: `Gallery image ${idx + 1}` })}
          >
            <img
              src={src}
              srcSet={`${src.replace('w_1200', 'w_480')} 480w, ${src.replace('w_1200', 'w_800')} 800w, ${src} 1200w`}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              alt={`Gallery image ${idx + 1}`}
              loading="lazy"
              className="h-64 w-full object-cover transition duration-700 group-hover:scale-105"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </button>
        ))}
      </div>

      {active && (
        <Lightbox src={active.src} alt={active.alt} onClose={() => setActive(null)} />)
      }
    </section>
  );
};

export default Gallery;
