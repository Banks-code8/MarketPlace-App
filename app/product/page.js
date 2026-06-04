import MainCard from '@/components/cards/MainCard';
import PageBorders from '@/components/wrappers/PageBorders';
import cnxtifi from '@/public/images/cnxtifiImg.png';
import Link from 'next/link';

export const metadata = {
  title: 'CnxtHub Products',
  description: 'Purchase product with CnxtHub',
};
export default function Home() {
  const product = [
    {
      id: '1',
      image: cnxtifi,
      title: 'Summit Vault',
      subtitle: 'Private banking with concierge insights for ambitious teams.',
      cost: 129,
    },
    {
      id: '2',
      image: cnxtifi,
      title: 'Atlas Growth',
      subtitle: 'Automated savings arcs tuned for predictable runway.',
      cost: 89,
    },
    {
      id: '3',
      image: cnxtifi,
      title: 'Crestline Ledger',
      subtitle: 'Unified cashflow tracking with instant dispute tooling.',
      cost: 59,
    },
    {
      id: '4',
      image: cnxtifi,
      title: 'Harbor Shield',
      subtitle: 'Fraud monitoring and instant controls for distributed teams.',
      cost: 39,
    },
  ];
  return (
    <div className="min-h-screen">
      <PageBorders>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4 md:gap-8">
          {product.map((item, index) => (
            <Link key={index} href={`/product/${item.id}`}>
              <MainCard
                image={item.image}
                title={item.title}
                subtitle={item.subtitle}
                cost={item.cost}
              />
            </Link>
          ))}
        </div>
      </PageBorders>
    </div>
  );
}
