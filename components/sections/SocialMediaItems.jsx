import { FaInstagram, FaYoutube } from 'react-icons/fa';
import { FaTiktok, FaXTwitter } from 'react-icons/fa6';

export default function SocialMediaItems() {
  return (
    <section
      className={`my-[20px] flex items-center justify-center gap-8 text-white md:justify-start`}
    >
      <a
        href="https://www.instagram.com/tinqlab/"
        target="_blank"
        rel="noopener"
        className=" "
      >
        <FaInstagram
          size={50}
          className="text-darkestBlue text-secondary rounded-[10px] p-2 transition-all duration-300 hover:scale-125 hover:text-mainBlack"
        />{' '}
      </a>
      <a
        href="https://x.com/tinqlabtech"
        target="_blank"
        rel="noopener"
        className=" "
      >
        <FaXTwitter
          size={50}
          className="text-darkestBlue text-secondary rounded-[10px] p-2 transition-all duration-300 hover:scale-125 hover:text-mainBlack"
        />
      </a>
      <a
        href="https://www.facebook.com/people/Tinqlab/100064552795813/"
        target="_blank"
        rel="noopener"
        className=" "
      >
        <FaYoutube
          size={50}
          className="text-darkestBlue text-secondary rounded-[10px] p-2 transition-all duration-300 hover:scale-125 hover:text-mainBlack"
        />
      </a>{' '}
      <a
        href="https://linkedin.com/company/tinqlabtech"
        target="_blank"
        rel="noopener"
        className=""
      >
        <FaTiktok
          size={50}
          className="text-darkestBlue text-secondary rounded-[10px] p-2 transition-all duration-300 hover:scale-125 hover:text-mainBlack"
        />
      </a>
    </section>
  );
}
