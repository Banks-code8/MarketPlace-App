import React from 'react';

const PageBorders = ({ children, background }) => {
  return (
    <section
      className={`${background ? `${background}` : 'bg-mainWhite'} px-[4vw] py-[8vh]`}
    >
      {children}
    </section>
  );
};

export default PageBorders;
