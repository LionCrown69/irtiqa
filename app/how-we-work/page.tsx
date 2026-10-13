import { Metadata } from 'next';
import HowWeWorkPage from '../../src/components/how-we-work/HowWeWorkPage';

export const metadata: Metadata = {
  title: 'How We Work | IRTIQA',
  description: 'The Diagnose-to-Execute mandate pathway, 8 engagement categories, and the compounding relationship model.',
  keywords: 'Engagement Architecture, Strategic Transformation Methodology, Management Consulting, Operating Model Implementation, Compounding Growth',
};

export default function Page() {
  return <HowWeWorkPage />;
}
