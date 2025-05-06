import './globals.css';

export const metadata = {
  title: 'Rock Paper Scissors',
  description: 'A simple game built with Next.js and Tailwind CSS',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
