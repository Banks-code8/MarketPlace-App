import MainHero from '@/components/hero/MainHero';

export const metadata = {
  title: 'Welcome to Cnxt',
  description: 'Connect and Collaborate Seamlessly with Cnxt',
};
export default function Home() {
  return (
    <div className="">
      {' '}
      <MainHero />
    </div>
  );
}
