import CheckoutForm from '@/components/form/CheckoutForm';
import OrderItems from '@/components/sections/OrderItems';
import OrderSummary from '@/components/sections/OrderSummary';
import HeaderOne from '@/components/typography/HeaderOne';
import PageBorders from '@/components/wrappers/PageBorders';

export const metadata = {
  title: 'Marketplace Checkout',
  description: 'Complete your Marketplace order ',
};

export default function CheckoutPage() {
  return (
    <PageBorders>
      <div className="space-y-8">
        <HeaderOne text="Checkout" />

        <div className="grid gap-8 lg:grid-cols-3">
          <div className="space-y-6">
            <OrderItems />
            <OrderSummary />
          </div>{' '}
          <div className="space-y-8 lg:col-span-2">
            <CheckoutForm />
          </div>
        </div>
      </div>
    </PageBorders>
  );
}
