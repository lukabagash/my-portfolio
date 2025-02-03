// app/layout.tsx
import './globals.css'; // Import your global styles

export const metadata = {
  title: 'Modern Gradient Website',
  description: 'A modern animated gradient background website built with Next.js 13.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* You can add additional meta tags, fonts, or links here */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>{children}</body>
    </html>
  );
}
