'use client';

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AnimationWrapper = ({
  children,
  x = 0,
  y = 0,
  duration = 1,
  delay = 0,
  playOnMount = false,
}) => {
  const ref = useRef(null);
  const triggerRef = useRef(null);

  const animate = () => {
    if (ref.current) {
      gsap.fromTo(
        ref.current,
        { opacity: 0, x, y },
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration,
          delay,
          ease: 'power3.out',
        }
      );
    }
  };

  useEffect(() => {
    if (playOnMount) {
      animate();
    } else if (triggerRef.current) {
      ScrollTrigger.create({
        trigger: triggerRef.current,
        start: 'top 90%',
        onEnter: () => animate(),
        once: true,
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [x, y, duration, delay, playOnMount]);

  return (
    <div ref={triggerRef}>
      <div ref={ref}>{children}</div>
    </div>
  );
};

export default AnimationWrapper;
