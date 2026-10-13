import { Metadata } from 'next';
import R30PartnerPage from '../../src/components/r30/R30PartnerPage';

export const metadata: Metadata = {
  title: 'R/30 Revenue Partner Program | IRTIQA',
  description: 'A global network of senior revenue partners built on disciplined execution. Identify enterprise constraints, establish strategic relevance, and share in real growth.',
  keywords: 'Revenue Partners, R/30, Irtiqa AI, Strategic Growth, Commercial Partnerships, Enterprise Mandates',
};

export default function Page() {
  return <R30PartnerPage />;
}
