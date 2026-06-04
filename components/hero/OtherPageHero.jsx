import React from 'react';
import MainText from '../typography/MainText';
import Link from 'next/link';
import MainButton from '../button/MainButton';
import ImageWrapper from '../wrappers/ImageWrapper';

const OtherPageHero = ({ title, subtitle, btnText, btnLink, image }) => {
  return (
    <div className="flex h-[80vh] flex-col gap-8 bg-primary">
      {' '}
      <div className="grid h-full grid-cols-1 items-center justify-start px-[4vw] md:grid-cols-2">
        {' '}
        <div className="flex flex-col gap-8">
          <h1 className="text-start text-[55px] font-bold leading-[55px] tracking-tight text-mainWhite">
            {title}{' '}
          </h1>{' '}
          <MainText text={subtitle} />
          <Link href={btnLink}>
            {' '}
            <MainButton text={btnText} bgColor={'bg-white'} />
          </Link>
        </div>{' '}
        <div className="hidden justify-items-center md:grid">
          <ImageWrapper
            src={image}
            alt={`welcome to cnxt ${title}`}
            width={300}
            height={300}
            styles={'bg-no-repeat bg-cover h-full'}
          />{' '}
        </div>
      </div>
    </div>
  );
};

export default OtherPageHero;
