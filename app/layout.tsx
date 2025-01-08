import '@/app/ui/global.css'
import { onest } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${onest.className} antialiased`}>{children}</body>
    </html>
  );
}
