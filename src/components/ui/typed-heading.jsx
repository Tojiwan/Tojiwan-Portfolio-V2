'use client';

import TextType from '@/components/react-bits/TextType';

export function TypedHeading({ text }) {
  return (
    <span className="typed-heading-layout">
      <span className="typed-heading-measure" aria-hidden="true">{text}</span>
      <TextType
        as="span"
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
