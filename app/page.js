import MainHero from '@/components/hero/MainHero';
import CatalogueItems from '@/components/sections/CatalogueItems';
import PageBorders from '@/components/wrappers/PageBorders';

export const metadata = {
  title: 'Marketplace',
  description: 'Welcome to Marketplace',
};
export default function Home() {
  return (
    <div className="">
      {' '}
      <MainHero />
      <PageBorders>
        <CatalogueItems />
      </PageBorders>
    </div>
  );
}
