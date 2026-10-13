import { Metadata } from 'next';
import MarketsPage from '../../src/components/markets/MarketsPage';

export const metadata: Metadata = {
  title: 'Markets, Trade & Strategic Alliances | IRTIQA',
  description: 'International expansion, cross-border market access, trade sourcing, and joint-venture alliances across London, Dubai, North America, and Asia-Pacific.',
  keywords: 'International Expansion, Cross-Border Trade, Market Access, Commercial Alliances, Joint Ventures, Supplier Development',
};

export default function Page() {
  return <MarketsPage />;
}
