import WishlistItems from '@/components/sections/WishlistItems';
import HeaderOne from '@/components/typography/HeaderOne';
import PageBorders from '@/components/wrappers/PageBorders';

export default function WishlistPage() {
  return (
    <div>
      <PageBorders>
        <div className="flex flex-col gap-8">
          <HeaderOne text={'WishList'} /> <WishlistItems />
        </div>
      </PageBorders>
    </div>
  );
}
