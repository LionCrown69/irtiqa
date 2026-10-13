import { Metadata } from 'next';
import InstitutionalHome from '../../src/components/home/InstitutionalHome';

export const metadata: Metadata = {
  title: 'IRTIQA | Strategic Growth & Transformation',
  description: 'Irtiqa helps businesses transform Strategy, Operations, Revenue and Technology into scalable growth. A multidisciplinary strategic institution.',
  keywords: 'Strategic Growth, Corporate Transformation, Operating Model Design, Revenue Architecture, AI Strategy, Capital Structuring',
};

export default function Page() {
  return <InstitutionalHome />;
}
