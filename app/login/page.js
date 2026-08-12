import LoginForm from '@/components/form/LoginForm';
import DoublePageBorders from '@/components/wrappers/DoublePageBorders';

export const metadata = {
  title: 'Mask HR',
  description: 'Login to Mask HR',
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
