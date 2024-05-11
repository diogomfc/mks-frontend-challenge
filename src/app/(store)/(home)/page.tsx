'use client';

import { CardProduct } from '@/components/card-product';

import { Container, Content, HeaderContainer } from '@/styles/pages/home';

export default function Home() {
  return (
    <Container>
      <HeaderContainer>
        <form>
          <input type="text" placeholder="Buscar produtos..." />
          <button type="submit">Search</button>
        </form>
        {/* Pagination */}

        <div>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>4</button>
          <button>5</button>
        </div>
      </HeaderContainer>
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
