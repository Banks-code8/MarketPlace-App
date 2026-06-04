import cnxtifi from '@/public/images/cnxtifiImg.png'; // make sure this path is correct

const products = [
  {
    id: '1',
    image: cnxtifi,
    title: 'Summit Vault',
    subtitle: 'Private banking with concierge insights for ambitious teams.',
    cost: 129,
    slug: 'summit-vault',
  },
  {
    id: '2',
    image: cnxtifi,
    title: 'Atlas Growth',
    subtitle: 'Automated savings arcs tuned for predictable runway.',
    cost: 89,
    slug: 'atlas-growth',
  },
  {
    id: '3',
    image: cnxtifi,
    title: 'Crestline Ledger',
    subtitle: 'Unified cashflow tracking with instant dispute tooling.',
    cost: 59,
    slug: 'crestline-ledger',
  },
  {
    id: '4',
    image: cnxtifi,
    title: 'Harbor Shield',
    subtitle: 'Fraud monitoring and instant controls for distributed teams.',
    cost: 39,
    slug: 'harbor-shield',
  },
];

// ✅ Correct default export
export default products;
