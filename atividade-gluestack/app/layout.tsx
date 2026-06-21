import './globals.css';
import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider';
import { AuthProvider } from '@/contexts/auth-context';

export const metadata = {
  title: 'Tutorial gluestack-ui',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <GluestackUIProvider mode="light">
          <AuthProvider>{children}</AuthProvider>
        </GluestackUIProvider>
      </body>
    </html>
  );
}