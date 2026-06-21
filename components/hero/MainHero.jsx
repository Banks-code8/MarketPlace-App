import React from 'react';
import MainButton from '../button/MainButton';
import Link from 'next/link';

const MainHero = () => {
  return (
    <div className="h-[85vh]">
      <div className="flex h-full w-full bg-Herobg bg-cover bg-top bg-no-repeat">
        {' '}
        <div className="flex h-full w-full items-center justify-center">
          <div className="flex flex-col gap-8">
            <h1 className="text-center text-[55px] font-bold leading-[55px] tracking-tight text-mainWhite">
              Start your marketing and purchasing journey with marketplace
            </h1>{' '}
            <div className="grid justify-items-center">
              <Link href={'/sign-up'}>
                {' '}
                <MainButton
                  text={'Get Started'}
                  bgColor={'bg-primary'}
                  textColor={'text-white'}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainHero;
