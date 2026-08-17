import SignUpForm from '@/components/form/SignUpForm';
import DoublePageBorders from '@/components/wrappers/DoublePageBorders';

export const metadata = {
  title: 'Marketplace Sign-up',
  description: 'Sign-Up to Marketplace',
};

export default function Home() {
  return (
    <div className="min-h-screen">
      <DoublePageBorders>
        {' '}
        <SignUpForm />
      </DoublePageBorders>
    </div>
  );
}
