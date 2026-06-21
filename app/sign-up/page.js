import DoublePageBorders from '@/components/Wrappers/DoublePageBorders';
import SignUpForm from '@/components/form/SignUpForm';

export const metadata = {
  title: 'Mask HR',
  description: 'Sign-Up to Mask HR',
};

export default function Home() {
  return (
    <div className="min-h-screen">
      <DoublePageBorders>
        <SignUpForm />
      </DoublePageBorders>
    </div>
  );
}
