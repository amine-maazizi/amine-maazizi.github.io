import React, { useState } from 'react';

interface ExpandableTextProps {
  text: string;
  previewChars?: number;
  showMoreLabel: string;
  showLessLabel: string;
  className?: string;
}

const ExpandableText: React.FC<ExpandableTextProps> = ({
  text,
  previewChars = 280,
  showMoreLabel,
  showLessLabel,
  className = '',
}) => {
  const [expanded, setExpanded] = useState(false);
  const isLong = text.length > previewChars;
  const paragraphs = text.split(/\n{2,}/);

  return (
    <div className={className}>
      {expanded ? (
        <div className="space-y-3">
          {paragraphs.map((p, i) => (
            <p key={i}>{p.trim()}</p>
          ))}
        </div>
      ) : (
        <p>{isLong ? text.slice(0, previewChars).trimEnd() + '\u2026' : text}</p>
      )}
      {isLong && (
        <button
          type="button"
          onClick={() => setExpanded((e) => !e)}
          aria-expanded={expanded}
          className="mt-2 text-sm font-medium text-[var(--color-accent)] hover:text-[var(--color-accent-strong)] hover:underline underline-offset-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] rounded"
        >
          {expanded ? showLessLabel : showMoreLabel}
        </button>
      )}
    </div>
  );
};

export default ExpandableText;
