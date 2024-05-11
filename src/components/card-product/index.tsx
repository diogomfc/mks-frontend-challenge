'use client';

import Image from 'next/image';

import { ButtonCard, Container, Content } from './style';

import { ShoppingBag } from 'lucide-react';

export function CardProduct() {
  return (
    <Container>
      <Image
        src="/AppleWatch.png"
        alt="Apple Watch Series 4 GPS"
        width={111}
        height={138}
      />

      <Content>
        <div>
          <h1>Apple Watch Series 4 GPS</h1>
          <div>
            <span>R$399</span>
          </div>
        </div>
        <span>Redesigned from scratch and completely revised.</span>
      </Content>

      <ButtonCard>
        <ShoppingBag size={16} />
        <span>COMPRAR</span>
      </ButtonCard>
    </Container>
  );
}
