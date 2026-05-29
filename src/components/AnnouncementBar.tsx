import { useState } from 'react';
import { X } from 'lucide-react';
import { P2P_LEARNING_URL } from '../data/links';
import { announcement, isAnnouncementActive } from '../data/announcement';

// Site-wide bar promoting the P2P Learning (Beta) test. Its visibility is
// controlled by src/data/announcement.ts (NOT the events lifecycle), so the
// beta test can run beyond the launch event. Dismissal is remembered per
// announcement id.
//
// NOTE: index.css has a global `p,li,span,div,a,... { text-gray-700 }` rule
// that overrides Tailwind's `text-white`, so text colours here use the `!`
// (important) variant to win — matching the navbar's Support button.
const AnnouncementBar = () => {
  const storageKey = `announcement_dismissed_${announcement.id}`;
  const [dismissed, setDismissed] = useState(
    () => !!localStorage.getItem(storageKey)
  );

  if (!isAnnouncementActive() || dismissed) return null;

  const handleDismiss = () => {
    localStorage.setItem(storageKey, 'true');
    setDismissed(true);
  };

  return (
    <div className="relative bg-gradient-to-r from-purple-800 via-purple-700 to-indigo-700">
      <div className="max-w-7xl mx-auto px-10 sm:px-12 py-2.5 flex flex-wrap items-center justify-center gap-x-3 gap-y-1.5 text-center">
        <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide !text-white bg-white/20 px-2 py-0.5 rounded-full">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-300 opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-400"></span>
          </span>
          Beta
        </span>
        <span className="text-sm sm:text-base font-medium !text-white">
          🚀 Help us test our brand-new{' '}
          <strong className="font-semibold !text-white">Peer 2 Peer Learning</strong> module — give it a go and tell us what you think.
        </span>
        <a
          href={P2P_LEARNING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 whitespace-nowrap rounded-full bg-white px-4 py-1.5 text-sm font-semibold !text-purple-700 shadow hover:bg-purple-50 hover:!text-purple-800 transition-colors"
        >
          Try the Beta →
        </a>
      </div>
      <button
        onClick={handleDismiss}
        aria-label="Dismiss announcement"
        className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 !text-white/90 hover:!text-white"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
};

export default AnnouncementBar;
