'use client';

import TextType from '@/components/react-bits/TextType';

export function TypedHeading({ text }) {
  return (
    <span className="typed-heading-layout" style={{ display: 'grid' }}>
      <span className="typed-heading-measure" aria-hidden="true" style={{ visibility: 'hidden', gridArea: '1 / 1', paddingRight: '.15em', minWidth: 0 }}>{text}</span>
      <TextType
        as="span"
        style={{ gridArea: '1 / 1', paddingRight: '.15em', minWidth: 0 }}
        text={text}
        typingSpeed={80}
        typeEffect="fade"
        loop={false}
        cursorStyle="bar"
        cursorColor="var(--accent-strong)"
        cursorGlide
        showCursor
        startOnVisible
      />
    </span>
  );
}
