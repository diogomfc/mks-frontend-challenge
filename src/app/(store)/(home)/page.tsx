'use client';

import { CardProduct } from '@/components/card-product';

import { Container, Content } from './style';

export default function Home() {
  return (
    <Container>
      <Content>
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
      </Content>
    </Container>
  );
}
