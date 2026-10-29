'use client';

import TextType from '@/components/react-bits/TextType';

export function HeroHeading() {
  return (
    <h1 id="hero-heading" className="hero-heading hero-heading-layout" style={{ display: 'grid' }}>
      <span className="hero-heading-measure" aria-hidden="true" style={{ visibility: 'hidden', gridArea: '1 / 1', paddingRight: '.15em' }}>Hi, I&apos;m Tojiwan.</span>
      <TextType
        as="span"
        style={{ gridArea: '1 / 1', paddingRight: '.15em' }}
        className="hero-typed-heading"
        text="Hi, I'm Tojiwan."
        typingSpeed={80}
        pauseDuration={3000}
        deletingSpeed={40}
        deleteMode="backspace"
        typeEffect="fade"
        mistakes={2}
        loop={true}
        cursorStyle="bar"
        cursorColor="var(--accent-strong)"
        cursorGlide
        showCursor
      />
    </h1>
  );
}
