import React from 'react';
import MainButton from '../button/MainButton';
import Link from 'next/link';
import Headers from '../partials/Headers';

const MainHero = () => {
  return (
    <div className="h-screen">
      <div className="flex h-full w-full bg-Herobg bg-cover bg-top bg-no-repeat">
        {' '}
        <div className="flex h-full w-full items-center justify-center">
          <div className="flex flex-col gap-8">
            <h1 className="text-center text-[55px] font-bold leading-[55px] tracking-tight text-mainWhite">
              Get Started Digital Learning{' '}
            </h1>{' '}
            <div className="grid justify-items-center">
              <Link href={'/product'}>
                {' '}
                <MainButton text={'Get Started'} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainHero;
