import React from 'react';

const HeaderOne = ({ color, text, textCenter }) => {
  return (
    <h1
      className={`${color ? color : 'text-mainBlack'} ${textCenter ? 'text-center' : 'text-left'} text-[32px] font-bold leading-[32px] tracking-normal text-mainBlack md:text-[45px] md:leading-[45px]`}
    >
      {text}
    </h1>
  );
};

export default HeaderOne;
