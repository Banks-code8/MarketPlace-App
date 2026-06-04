import MainText from '../typography/MainText';
import ImageWrapper from '../wrappers/ImageWrapper';
import icon from '@/public/images/cnxtifiImg.png';

const MainCard = ({ image, title, subtitle, cost }) => {
  return (
    <div className="flex flex-col gap-4 overflow-hidden rounded-[10px] shadow-custom-primary">
      <ImageWrapper
        src={image}
        alt={`welcome to cnxt ${title}`}
        width={300}
        height={300}
        styles={'bg-no-repeat bg-cover w-full'}
      />
      <div className="flex flex-col gap-2 px-[20px] py-[10px]">
        <MainText text={title} />
        <MainText text={subtitle} color={'text-mainGray'} />{' '}
        <span> $ {cost}</span>
      </div>
    </div>
  );
};

export default MainCard;
