import React, { useEffect, useState } from 'react';

const STORAGE_KEY = 'cookie-consent';

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (!saved) setVisible(true);
    } catch (e) {
      // If storage is unavailable, still show once
      setVisible(true);
    }
  }, []);

  const setChoice = (value) => {
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch (e) {
      // no-op
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 mx-auto w-full max-w-5xl p-4">
      <div className="flex flex-col items-start justify-between gap-3 rounded-2xl border border-neutral-200 bg-white/95 p-4 shadow-lg backdrop-blur sm:flex-row sm:items-center">
        <p className="text-sm text-neutral-700">
          We use cookies to understand how you use this site and to improve your experience. You can
          choose to accept or decline analytics tracking.
        </p>
        <div className="flex gap-2">
          <button
            onClick={() => setChoice('declined')}
            className="rounded-full border border-neutral-300 px-4 py-2 text-sm font-medium text-neutral-900 hover:bg-neutral-50"
          >
            Decline
          </button>
          <button
            onClick={() => setChoice('accepted')}
            className="rounded-full bg-neutral-900 px-4 py-2 text-sm font-medium text-white hover:bg-neutral-800"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
