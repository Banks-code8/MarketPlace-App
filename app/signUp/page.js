import PageBorders from '@/components/wrappers/PageBorders';
import SignUpForm from '@/components/forms/SignUpForm';
import MainHero from '@/components/hero/MainHero';
import LoginForm from '@/components/forms/LoginForm';

export const metadata = {
  title: 'SignUp to Cnxt',
  description: 'Be one of us join Cnxt',
};
export default function Home() {
  return (
    <div className="min-h-screen">
      {/* thisis a landing page */}
      <div>
        <PageBorders>
          <div className="flex w-full justify-center">
            <SignUpForm />
          </div>
        </PageBorders>
      </div>
    </div>
  );
}
