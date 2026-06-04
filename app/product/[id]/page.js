import PageBorders from '@/components/wrappers/PageBorders';
import HeaderOne from '@/components/typography/HeaderOne';
import ImageWrapper from '@/components/wrappers/ImageWrapper';
import cnxtifi from '@/public/images/cnxtifiImg.png';
import MainText from '@/components/typography/MainText';
import AddToCartButton from '@/components/button/AddToCartButton';

const productItem = [
  {
    id: '0',
    image: cnxtifi,
    title: 'Awlad Hossain',
    subtitle: 'UIUX Designer',
    description:
      'Welcome to the Complete Web Development Bootcamp, the only course you need to learn to code and become a full-stack web developer. With 150,000+ ratings and a 4.8 average, my Web Development course is one of the HIGHEST RATED courses in the history of Udemy! At 62+ hours, this Web Development course is without a doubt the most comprehensive web development course available online. Even if you have zero programming experience, this course will take you from beginner to mastery.',
    cost: 25,
  },
  {
    id: '1',
    image: cnxtifi,
    title: 'Jannatul Islam',
    subtitle: 'Motion Design',
    description:
      'Welcome to the Complete Web Development Bootcamp, the only course you need to learn to code and become a full-stack web developer. With 150,000+ ratings and a 4.8 average, my Web Development course is one of the HIGHEST RATED courses in the history of Udemy! At 62+ hours, this Web Development course is without a doubt the most comprehensive web development course available online. Even if you have zero programming experience, this course will take you from beginner to mastery.',
    cost: 25,
  },
  {
    id: '2',
    image: cnxtifi,
    title: 'Imran Hossain',
    subtitle: 'Graphic Designer',
    description:
      'Welcome to the Complete Web Development Bootcamp, the only course you need to learn to code and become a full-stack web developer. With 150,000+ ratings and a 4.8 average, my Web Development course is one of the HIGHEST RATED courses in the history of Udemy! At 62+ hours, this Web Development course is without a doubt the most comprehensive web development course available online. Even if you have zero programming experience, this course will take you from beginner to mastery.',
    cost: 25,
  },
  {
    id: '3',
    image: cnxtifi,
    title: 'Nishi Akter',
    subtitle: 'Web Developer',
    description:
      'Welcome to the Complete Web Development Bootcamp, the only course you need to learn to code and become a full-stack web developer. With 150,000+ ratings and a 4.8 average, my Web Development course is one of the HIGHEST RATED courses in the history of Udemy! At 62+ hours, this Web Development course is without a doubt the most comprehensive web development course available online. Even if you have zero programming experience, this course will take you from beginner to mastery.',
    cost: 25,
  },
];

export const metadata = {
  title: 'Cnxt course Details',
  description: 'View product details on Cnxt',
};

export default async function ProductPage({ params }) {
  const { id } = await params;
  const product = productItem.find((item) => item.id === id);

  if (!product) {
    return (
      <div className="flex items-center justify-center">
        <HeaderOne text={'product not found'} />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <PageBorders>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="col-span-1 space-y-4 md:space-y-6">
            {' '}
            <div className="overflow-hidden rounded-[10px] shadow-custom-primary">
              <ImageWrapper
                src={product.image}
                alt={`welcome to cnxt ${product.title}`}
                width={300}
                height={300}
                styles={'bg-no-repeat bg-cover w-full '}
              />
            </div>
          </div>

          <div className="col-span-2 flex flex-col gap-4">
            <HeaderOne text={product.title} />
            <MainText text={product.subtitle} color={'text-mainGray'} />
            <MainText text={product.description} />{' '}
            <MainText text={product.cost} />
            <AddToCartButton text={'Add  to cart'} product={product} />
          </div>
        </div>
      </PageBorders>{' '}
    </div>
  );
}
