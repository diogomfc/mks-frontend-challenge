'use client';

import { ReactNode } from 'react';

import { Footer } from '@/components/footer';
import { Header } from '@/components/header';

import { Container, Main } from '@/styles/pages/app';

export default function StoreLayout({ children }: { children: ReactNode }) {
  return (
    <Container>
      <Header />

      <Main>{children}</Main>

      <Footer />
    </Container>
  );
}
