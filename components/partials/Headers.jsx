import Link from 'next/link';
import React from 'react';
import MainButton from '../button/MainButton';
import Navitem from '../typography/Navitem';
import MobileNav from './MobileNav';
import SearchBar from '../forms/SearchBar';
import MainHero from '../hero/MainHero';
import CartIcon from './CartIcon';
import LoginIcon from './LoginIcon';

const Headers = () => {
  const navigations = [
    { link: '/', title: 'Why  Us' },
    { link: '/', title: 'About Us' },
    { link: '/', title: 'Blog' },
  ];
  return (
    <header className="">
      <div className="flex w-full items-center justify-between gap-4 bg-black bg-transparent/5 px-[6vw] py-[4vh] shadow-lg backdrop-blur-[10px]">
        {' '}
        {/* logo */}
        <Link href={'/'}>
          <h1 className="text-[30px] font-bold leading-[30px] tracking-tight">
            CnxtHub
          </h1>
        </Link>
        {/* navigation */}
        <div className="hidden gap-8 md:flex md:justify-center">
          {navigations.map((item, index) => (
            <Link key={index} href={item.link}>
              <Navitem text={item.title} />
            </Link>
          ))}
        </div>
        <div className="flex justify-end gap-4">
          <LoginIcon />
          <CartIcon />
          <SearchBar />
          <Link href={'/signUp'} className="hidden md:block">
            {' '}
            <MainButton text={'SignUp | Login'} bgColor={'bg-mainWhite'} />{' '}
          </Link>
          {/* mobile nav */}
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Headers;
