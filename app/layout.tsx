import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: `CardioGuard — Advanced heart tests your doctor won't order`,
  description: `Get the best heart health tests before 50 with advanced biomarkers like ApoB and Lp(a). Skip insurance hassles and get cardiologist-recommended screening.`,
  openGraph: {
    title: `CardioGuard — Advanced heart tests your doctor won't order`,
    description: `Get the best heart health tests before 50 with advanced biomarkers like ApoB and Lp(a). Skip insurance hassles and get cardiologist-recommended screening.`,
    type: 'website',
    siteName: `CardioGuard`,
  },
  twitter: {
    card: 'summary_large_image',
    title: `CardioGuard — Advanced heart tests your doctor won't order`,
    description: `Get the best heart health tests before 50 with advanced biomarkers like ApoB and Lp(a). Skip insurance hassles and get cardiologist-recommended screening.`,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Source+Sans+Pro:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-background text-text min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
