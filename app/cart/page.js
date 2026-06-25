import CartItems from '@/components/sections/CartItems';
import HeaderOne from '@/components/typography/HeaderOne';
import PageBorders from '@/components/wrappers/PageBorders';

export default function CartPage() {
  return (
    <div>
      <PageBorders>
        <div className="flex flex-col gap-8">
          <HeaderOne text={'Cart'} /> <CartItems />
        </div>
      </PageBorders>
    </div>
  );
}
