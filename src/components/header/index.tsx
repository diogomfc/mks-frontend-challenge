'use client';

import { CartWidget } from '../cart-widget';
import { Container, Logo } from './style';

export function Header() {
  return (
    <Container>
      <Logo>
        <h1>MKS</h1>
        <span>Sistemas</span>
      </Logo>

      <CartWidget />
    </Container>
  );
}
