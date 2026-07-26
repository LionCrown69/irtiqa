import type { Metadata } from 'next';
import ProgramClient from '../../src/components/ProgramClient';

export const metadata: Metadata = {
  title: "Revenue Growth Partner Programme | Irtiqa AI",
  description: "A performance-based commercial programme for ambitious people ready to work with real business opportunities, build practical capability and demonstrate their execution.",
  keywords: "Revenue Growth Partner Programme, Irtiqa AI, Commercial Leadership, Business Development, Revenue Operations",
  alternates: {
    canonical: "https://www.irtiqaaiagency.com/program",
  },
  openGraph: {
    title: "Revenue Growth Partner Programme | Irtiqa AI",
    description: "Thirty days. Real markets. Measurable commercial contribution.",
    url: "https://www.irtiqaaiagency.com/program",
    type: "website",
    images: [
      {
        url: "https://www.irtiqaaiagency.com/irtiqa-logo-solid.png",
        alt: "Irtiqa AI Program",
      }
    ]
  }
};

export default function ProgramPage() {
  return <ProgramClient />;
}
