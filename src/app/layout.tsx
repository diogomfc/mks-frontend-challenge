'use client';

import { Montserrat } from 'next/font/google';

import { ThemeProvider } from 'styled-components';

import { CartProvider } from '@/contexts/cart-context';
import { queryClient } from '@/lib/react-query';
import { QueryClientProvider } from '@tanstack/react-query';

import GlobalStyles from '../styles/global';
import theme from '../styles/theme';
import StyledComponentsRegistry from './registry';

const montserrat = Montserrat({ subsets: ['latin'] });

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body className={montserrat.className}>
        <CartProvider>
          <QueryClientProvider client={queryClient}>
            <StyledComponentsRegistry>
              <ThemeProvider theme={theme}>
                <GlobalStyles />
                {children}
              </ThemeProvider>
            </StyledComponentsRegistry>
          </QueryClientProvider>
        </CartProvider>
      </body>
    </html>
  );
}
