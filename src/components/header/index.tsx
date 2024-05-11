import { ButtonCar, Container, Logo } from './style';

import { ShoppingCart } from 'lucide-react';

export function Header() {
  return (
    <Container>
      <Logo>
        <h1>MKS</h1>
        <span>Sistemas</span>
      </Logo>
      <ButtonCar>
        <ShoppingCart />
        <span>0</span>
      </ButtonCar>
    </Container>
  );
}
