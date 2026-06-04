'use client';

import { useState } from 'react';
import { Drawer } from 'rizzui';
import { RiMenu3Fill } from 'react-icons/ri';
import { IoClose } from 'react-icons/io5';
import Link from 'next/link';
import MainButton from '../button/MainButton';
import Navitem from '../typography/Navitem';
import CartIcon from './CartIcon';

export default function MobileNav() {
  const [drawerState, setDrawerState] = useState(false);
  const menuz = [
    { link: '/', title: 'Why  Us' },
    { link: '/', title: 'About Us' },
    { link: '/', title: 'Markets' },
  ];
  return (
    <>
      <div onClick={() => setDrawerState(true)} className="block md:hidden">
        <RiMenu3Fill size={40} />
      </div>
      <Drawer
        isOpen={drawerState}
        onClose={() => setDrawerState(false)}
        placement="left"
        size="sm"
      >
        <div
          onClick={() => setDrawerState(false)}
          className="flex min-h-full flex-col gap-8 bg-mainWhite"
        >
          <div className="flex justify-between border-b-2 px-[20px] py-[10px]">
            <h1 className="text-[30px] font-bold leading-[30px] tracking-tight">
              CnxtHub
            </h1>
            <IoClose size={40} />
          </div>
          <div className="flex flex-col gap-8 px-[20px] py-[10px]">
            {/* menuz links */}
            <div className="flex flex-col gap-8">
              {menuz.map((item, index) => (
                <Link key={index} href={item.link}>
                  <Navitem text={item.title} />
                </Link>
              ))}
            </div>
            {/* sign up */}
            <Link href={'/'}>
              {' '}
              <MainButton text={'Register'} />{' '}
            </Link>{' '}
            <CartIcon />
          </div>{' '}
        </div>
      </Drawer>
    </>
  );
}
