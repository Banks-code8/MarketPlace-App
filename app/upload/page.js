import UploadForm from '@/components/form/UploadForm';
import PageBorders from '@/components/wrappers/PageBorders';

export const metadata = {
  title: 'Marketplace Upload',
  description: 'Upload your Marketplace product',
};
export default function Home() {
  return (
    <div className="">
      <PageBorders>
        <UploadForm />
      </PageBorders>
    </div>
  );
}
