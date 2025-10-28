import React, { Suspense } from 'react';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import Story from './components/Story';
import CookieConsent from './components/CookieConsent';

function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <Hero />
      <Suspense fallback={<div className="px-6 py-16 text-neutral-600">Loading experience…</div>}>
        <Gallery />
        <Story />
      </Suspense>
      <footer className="border-t border-neutral-200 px-6 py-10 text-center text-sm text-neutral-600">
        © {new Date().getFullYear()} Silver Fox Photography · All rights reserved.
      </footer>
      <CookieConsent />
    </div>
  );
}

export default App;
