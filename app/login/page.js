import LoginForm from '@/components/form/LoginForm';
import DoublePageBorders from '@/components/wrappers/DoublePageBorders';

export const metadata = {
  title: 'Marketplace Login',
  description: 'Login to Marketplace',
};

export default function Home() {
  return (
    <div className="min-h-screen">
      <DoublePageBorders>
        {' '}
        <LoginForm />
      </DoublePageBorders>
    </div>
  );
}
