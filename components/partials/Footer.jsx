import Link from 'next/link';
import SocialMediaItem from '@/components/sections/SocialMediaItems';
import ImageWrapper from '../wrappers/ImageWrapper';
import MainText from '@/components/typography/MainText';
import PageBorders from '../wrappers/PageBorders';
import HeaderOne from '../typography/HeaderOne';
import MainButton from '../button/MainButton';
import TitleText from '../typography/TitleText';

export default function Footer() {
  const routeLinks = [
    {
      title: 'Company',
      items: [
        { path: '/', subtitle: 'Careers' },
        { path: '/', subtitle: 'About' },
        { path: '/', subtitle: 'Services' },
        { path: '/', subtitle: 'Blog' },
      ],
    },

    {
      title: 'Support',
      items: [
        { path: '/', subtitle: 'Contact us' },
        { path: '/', subtitle: 'Schedule demo' },
        { path: '/', subtitle: 'Support' },
        { path: '/', subtitle: 'FAQs' },
      ],
    },

    {
      title: 'info',
      items: [
        { path: '/', subtitle: 'Terms of use' },
        { path: '/', subtitle: 'License' },
        { path: '/', subtitle: 'Privacy Policy' },
        { path: '/', subtitle: 'Privacy' },
      ],
    },
  ];

  return (
    <PageBorders background={'bg-primary'}>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="flex flex-col items-start justify-start gap-4">
          <h1 className="text-[32px] text-mainWhite"> MarketPlace</h1>
          <div className="flex flex-col items-start justify-center gap-8">
            <HeaderOne
              text="The key to success is action, buy today!"
              color={'text-white md:w-3/4'}
            />

            <SocialMediaItem />
          </div>
        </div>
        <div className="grid w-full grid-cols-3 gap-4 md:gap-8">
          {routeLinks.map((section, i) => (
            <div key={i} className="flex flex-col gap-4">
              <TitleText
                text={section.title}
                textLeft={true}
                color={'text-white/80'}
              />
              <div className="flex flex-col gap-2">
                {section.items.map((item, index) => (
                  <Link key={index} href={item.path} className="">
                    <MainText
                      text={item.subtitle}
                      textLeft={true}
                      color={
                        'text-white/80 hover:text-mainBlack hover:font-semibold'
                      }
                    />
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <hr className="border-[0.2px] border-[#C4C4C4] border-opacity-30"></hr>
      <div className="item-start flex py-[20px]">
        <p
          className={`text-[10px] font-normal leading-[10px] text-white md:text-[12px] md:leading-[16px]`}
        >
          {`© ${new Date().getFullYear()} Marketplace All rights reserved`}
        </p>
      </div>
    </PageBorders>
  );
}
