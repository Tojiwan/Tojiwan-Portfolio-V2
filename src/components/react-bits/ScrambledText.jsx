'use client';

// Adapted from React Bits ScrambledText; see LICENSE.md. Scramble-only variant.
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { SplitText } from 'gsap/SplitText';
import { ScrambleTextPlugin } from 'gsap/ScrambleTextPlugin';
import { usePageReady } from '@/components/layout/page-intro';

gsap.registerPlugin(SplitText, ScrambleTextPlugin);

export default function ScrambledText({ children, className = '' }) {
  const ready = usePageReady();
  const rootRef = useRef(null);
  const textRef = useRef(null);
  const introduced = useRef(false);

  useEffect(() => {
    if (!ready) return;
    const root = rootRef.current;
    const text = textRef.current;
    let live = true;
    const media = gsap.matchMedia();
    document.fonts.ready.then(() => {
      if (!live) return;
      media.add('(prefers-reduced-motion: no-preference)', () => {
        const split = SplitText.create(text, { type: 'chars', smartWrap: true, aria: 'none' });
        const chars = split.chars;
        const originals = chars.map(char => char.textContent);
        const glyphs = chars.map((char, i) => {
          const sizer = document.createElement('span');
          const glyph = document.createElement('span');
          sizer.textContent = originals[i];
          sizer.style.visibility = 'hidden';
          glyph.textContent = originals[i];
          glyph.style.cssText = 'position:absolute;top:0;left:50%;transform:translateX(-50%);white-space:pre';
          char.replaceChildren(sizer, glyph);
          return glyph;
        });
        const scramble = (i, duration, delay = 0) => gsap.to(glyphs[i], {
          duration, delay, overwrite: true, ease: 'none',
          scrambleText: { text: originals[i], chars: '.:', speed: 0.5 },
        });
        const observer = new IntersectionObserver(([entry]) => {
          if (!entry.isIntersecting || !entry.intersectionRect.width || !entry.intersectionRect.height) return;
          observer.disconnect();
          if (introduced.current) return;
          introduced.current = true;
          glyphs.forEach((_, i) => scramble(i, 0.3 + 0.9 * i / glyphs.length));
        }, { threshold: 0.1 });
        observer.observe(root);
        let frame = 0;
        const distanceFrom = (char, event) => {
          const rect = char.getBoundingClientRect();
          return Math.hypot(event.clientX - rect.x - rect.width / 2, event.clientY - rect.y - rect.height / 2);
        };
        const move = event => {
          if (event.pointerType === 'touch') return;
          cancelAnimationFrame(frame);
          frame = requestAnimationFrame(() => {
            chars.forEach((char, i) => {
              const distance = distanceFrom(char, event);
              if (distance < 100) scramble(i, Math.max(0.1, 1.2 * (1 - distance / 100)));
            });
          });
        };
        const click = event => {
          if (event.button !== 0) return;
          chars.forEach((char, i) => scramble(i, 0.6, distanceFrom(char, event) / 1100));
        };
        root.addEventListener('pointermove', move);
        root.addEventListener('click', click);
        return () => {
          observer.disconnect();
          cancelAnimationFrame(frame);
          root.removeEventListener('pointermove', move);
          root.removeEventListener('click', click);
          gsap.killTweensOf(glyphs);
          split.revert();
        };
      });
    });
    return () => { live = false; media.revert(); };
  }, [children, ready]);

  return (
    <p ref={rootRef} className={`scrambled-text ${className}`}>
      <span style={{ position: 'absolute', width: 1, height: 1, padding: 0, margin: -1, overflow: 'hidden', clipPath: 'inset(50%)', whiteSpace: 'nowrap' }}>{children}</span>
      <span ref={textRef} aria-hidden="true">{children}</span>
    </p>
  );
}
