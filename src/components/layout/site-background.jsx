'use client';

import { useSyncExternalStore } from 'react';
import CursorGrid from '@/components/react-bits/CursorGrid';

const motionQuery = '(prefers-reduced-motion: reduce)';

function subscribe(update) {
  const observer = new MutationObserver(update);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
  const motion = window.matchMedia(motionQuery);
  motion.addEventListener('change', update);
  return () => {
    observer.disconnect();
    motion.removeEventListener('change', update);
  };
}

function snapshot() {
  if (window.matchMedia(motionQuery).matches) return 'static';
  return document.documentElement.classList.contains('dark') ? 'dark' : 'light';
}

export function SiteBackground() {
  const mode = useSyncExternalStore(subscribe, snapshot, () => 'static');
  return (
    <div className="site-background" aria-hidden="true">
      {mode !== 'static' && (
        <CursorGrid
          cellSize={34}
          color="#0ea5e9"
          gridColor={mode === 'dark' ? '#b3bdcb' : '#3e4850'}
          lightMode={mode === 'light'}
          radius={90}
          holdTime={150}
          fadeDuration={800}
          fillOpacity={0.06}
          gridOpacity={0.29}
          spotlight={1}
          clickPulse
          ambient={0}
          intro={false}
          edgeFade={0}
          dpr={1.5}
        />
      )}
    </div>
  );
}
