import { Metadata } from 'next';
import CapabilitiesPage from '../../src/components/capabilities/CapabilitiesPage';

export const metadata: Metadata = {
  title: 'Integrated Capability Platform | IRTIQA',
  description: 'Ten corporate capability families (A-J) spanning strategic advisory, operations, revenue development, technology, capital, and cross-border expansion.',
  keywords: 'Capability Architecture, Corporate Strategy, Operating Model, Revenue Architecture, AI Transformation, Trade Sourcing, Capital Structuring',
};

export default function Page() {
  return <CapabilitiesPage />;
}
