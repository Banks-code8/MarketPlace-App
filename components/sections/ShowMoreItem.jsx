'use client';

import { useState } from 'react';

export default function ShowMore({ subtitle, children }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="w-full">
      <p className="text-[14px] font-normal leading-[24px] tracking-normal text-mainGray md:text-[16px]">
        {subtitle}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="ml-2 inline-block text-sm font-semibold text-black hover:text-primary"
        >
          {isExpanded ? 'Show less' : 'Show more'}
        </button>
      </p>

      {isExpanded && <div className="mt-4 pt-2">{children}</div>}
    </div>
  );
}
