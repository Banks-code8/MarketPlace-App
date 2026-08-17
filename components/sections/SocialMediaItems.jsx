import { FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { FaFacebook, FaTiktok, FaXTwitter } from 'react-icons/fa6';

export default function SocialMediaItems() {
  return (
    <section
      className={`my-[20px] flex items-center justify-center gap-8 text-white md:justify-start`}
    >
      <a
        href="https://www.instagram.com/banksengineeringtechservices"
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
        href="https://www.x.com/Bankole5257145"
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
        href="https://www.facebook.com/Banks jnr"
        target="_blank"
        rel="noopener"
        className=" "
      >
        <FaFacebook
          size={50}
          className="text-darkestBlue text-secondary rounded-[10px] p-2 transition-all duration-300 hover:scale-125 hover:text-mainBlack"
        />
      </a>{' '}
      <a
        href="https://linkedin.com/company/banks-engineering-tech-services"
        target="_blank"
        rel="noopener"
        className=""
      >
        <FaLinkedinIn
          size={50}
          className="text-darkestBlue text-secondary rounded-[10px] p-2 transition-all duration-300 hover:scale-125 hover:text-mainBlack"
        />
      </a>
    </section>
  );
}
