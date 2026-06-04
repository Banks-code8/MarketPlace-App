'use client';

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import ImageWrapper from '../wrappers/ImageWrapper';
import cnxtifi from '@/public/images/cnxtifiImg.png';

const AdsContent = () => {
  const ourServices = [
    {
      icon: cnxtifi,
    },
    {
      icon: cnxtifi,
    },
    {
      icon: cnxtifi,
    },
    {
      icon: cnxtifi,
    },
    {
      icon: cnxtifi,
    },
    {
      icon: cnxtifi,
    },
  ];

  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    // ensure it starts all the way right
    gsap.set(slider, { xPercent: 100 });

    gsap.to(slider, {
      xPercent: -100,
      duration: 12,
      ease: 'linear',
      repeat: -1,
    });
  }, []);
  return (
    <div className="w-full overflow-hidden">
      <div ref={sliderRef} className="flex w-full items-center gap-4 md:gap-8">
        {ourServices.map((item, index) => (
          <div key={index} className="flex-shrink-0">
            {' '}
            <ImageWrapper
              src={item.icon}
              alt={item}
              width={80}
              height={80}
              styles="bg-norepeat bg-contain bg-center"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdsContent;
