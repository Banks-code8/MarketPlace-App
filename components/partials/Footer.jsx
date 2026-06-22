import Link from 'next/link';
import SocialMediaItem from '@/components/sections/SocialMediaItems';
import ImageWrapper from '../wrappers/ImageWrapper';
import MainText from '@/components/typography/MainText';
import PageBorders from '../wrappers/PageBorders';
import HeaderOne from '../typography/HeaderOne';
import MainButton from '../button/MainButton';

export default function Footer() {
  // const t = useTranslations("Footer");

  const usefulLinks = [
    // {
    //   title: "Industry",
    //   link: "/industry",
    // },
    {
      title: 'Software Engineering',
      link: '/services/software-engineering',
    },
    {
      title: 'Product Design',
      link: '/services/product-design',
    },
    {
      title: 'Consulting',
      link: '/services/consulting',
    },
    {
      title: 'Career',
      link: '/career',
    },
    {
      title: 'About',
      link: '/about',
    },
    {
      title: 'Cookie policy',
      link: '/cookie-policy',
    },
  ];

  return (
    <PageBorders background={'bg-primary'}>
      <div className="flex gap-8">
        <div className="flex flex-col items-start justify-start gap-4">
          <h1 className="text-[32px] text-mainWhite"> MarketPlace</h1>
          {usefulLinks.map((item, index) => (
            <div key={index}>
              {' '}
              <Link href={item.link}>
                <MainText
                  text={item.title}
                  color={
                    'text-[#BDBDBD] opacity-80 hover:text-white hover:opacity-100'
                  }
                />
              </Link>
            </div>
          ))}{' '}
        </div>
        <div className="col-span-3 mb-[20px]">
          <div className="flex flex-col items-start justify-center gap-8">
            <div>
              {' '}
              <HeaderOne
                text="The key to success is action, start today!"
                color={'text-white md:w-3/4'}
              />
            </div>
            <Link href={'/contact-us'}>
              <MainButton text={'Schedule a call'} />
            </Link>{' '}
            <SocialMediaItem />
          </div>
        </div>
      </div>

      <hr className="border-[.2px] border-[#C4C4C4] border-opacity-30"></hr>
      <div className="px-[10px] md:pb-[20px] lg:px-[10px]">
        <div>
          <div className="item-start grid grid-cols-1 py-[20px] text-left text-[10px] font-normal leading-[10px] md:flex md:pb-0 md:text-[14px] md:leading-[14px]">
            <section className="order-2 flex items-center justify-start pt-[20px] text-center md:pt-0 md:text-left lg:text-right">
              <p
                className={`text-[10px] font-normal leading-[10px] text-white md:text-[12px] md:leading-[16px]`}
              >
                {`© ${new Date().getFullYear()} Marketplace All rights reserved`}
              </p>
            </section>
          </div>
        </div>
      </div>
    </PageBorders>
  );
}
