import { Metadata } from 'next';
import ContactPage from '../../src/components/contact/ContactPage';

export const metadata: Metadata = {
  title: 'Discuss a Mandate | IRTIQA',
  description: 'Initiate a confidential discussion regarding corporate mandates, strategic transformation, R/30 Revenue Partner onboarding, or joint-venture alliances.',
  keywords: 'Executive Consultation, Corporate Mandate, Strategic Advisory Inquiry, R/30 Partner Application, Institutional Alliances',
};

export default function Page() {
  return <ContactPage />;
}
