import Cart from '@/components/sections/Cart';
import PageBorders from '@/components/wrappers/PageBorders';

export const metadata = {
  title: 'Welcome to Cnxt Cart',
  description: 'Connect and Collaborate Seamlessly with Cnxt',
};
export default function Home() {
  return (
    <div className="min-h-screen">
      <PageBorders>
        <Cart />
      </PageBorders>
    </div>
  );
}
