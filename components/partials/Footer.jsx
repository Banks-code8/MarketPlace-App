import Link from 'next/link';
import React from 'react';
import MainText from '../typography/MainText';
import SocialMediaItems from '../sections/SocialMediaItems';

const Footer = () => {
  return (
    <footer>
      <div className="hap-4 flex flex-col items-center justify-center gap-4 bg-blue-950 px-[6vw] py-[10vh] md:gap-8">
        <div className="flex flex-col gap-4">
          {' '}
          <Link href={'/'}>
            <h1 className="text-center text-[50px] font-bold leading-[50px] tracking-tight text-mainWhite">
              Cnxt
            </h1>
          </Link>
          <MainText
            text={'Office 41, Zawaya Buildin, Ghala Muscat, Sultanate of Oman'}
            textCenter={true}
            color={'text-mainWhite/80'}
          />
        </div>

        {/*  */}
        <Link href={'/'}>
          <MainText
            text={'Privacy Ploicy  |   Terms of use'}
            color={'text-mainWhite/80'}
          />
        </Link>

        {/*  */}
        <SocialMediaItems />
      </div>
    </footer>
  );
};

export default Footer;
