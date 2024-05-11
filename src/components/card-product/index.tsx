import Image from 'next/image';

import { AddToCartButton } from '@/components/add-to-card-button';

import { Container, Content } from './style';

type Product = {
  id: number;
  name: string;
  brand: string;
  description: string;
  photo: string;
  price: string;
  createdAt: string;
  updatedAt: string;
};

type CardProductProps = {
  product: Product;
};

export function CardProduct({ product }: CardProductProps) {
  return (
    <Container whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
      <Image src={product.photo} alt={product.name} width={111} height={138} />

      <Content>
        <div>
          <h1>{product.name}</h1>
          <div>
            <span>R${product.price}</span>
          </div>
        </div>
        <span>{product.description}</span>
      </Content>

      <AddToCartButton productId={product.id} />
    </Container>
  );
}
