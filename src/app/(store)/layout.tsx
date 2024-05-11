'use client';

import { ReactNode } from 'react';

import { Footer } from '@/components/footer';
import { Header } from '@/components/header';

import { Container } from './style';

export default function StoreLayout({ children }: { children: ReactNode }) {
  return (
    <Container>
      <Header />
      <div>{children}</div>
      <Footer />
    </Container>
  );
}
