import MainHero from '@/components/hero/MainHero';
import CategoryItems from '@/components/sections/CategoryItems';
import FilterItems from '@/components/sections/FilterItems';
import RelatedItems from '@/components/sections/RelatedItems';
import FilterWrapper from '@/components/wrappers/FilterWrapper';

export const metadata = {
  title: 'Marketplace',
  description: 'Welcome to Marketplace',
};
export default function Home() {
  return (
    <div className="">
      {' '}
      <MainHero />
      <CategoryItems />
      <FilterWrapper />
      <RelatedItems />
    </div>
  );
}
