import React from 'react';
import MainButton from '../button/MainButton';
import Link from 'next/link';
import MainText from '../typography/MainText';

const MainHero = () => {
  return (
    <div className="h-[85vh]">
      <div className="flex h-full w-full bg-Herobg bg-cover bg-top bg-no-repeat">
        {' '}
        <div className="flex items-center justify-start pl-[20px]">
          <div className="flex w-[60vw] flex-col gap-8 rounded-[10px] bg-mainWhite p-[20px] shadow-custom-primary md:w-[30vw]">
            <MainText
              text={
                'Start your marketing and purchasing journey with marketplace'
              }
              color={'text-mainGray'}
            />
            <Link href={'/upload'}>
              {' '}
              <MainButton
                text={'Sell now'}
                bgColor={'bg-primary'}
                textColor={'text-white'}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainHero;
