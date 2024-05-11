'use client';

import { CardProduct } from '@/components/card-product';

import { GetProductsResponse, getProducts } from '@/api/get-products';
import { Container, Content, HeaderContainer } from '@/styles/pages/product';
import { useQuery } from '@tanstack/react-query';

export default function Home() {
  const page = 1;
  const rows = 8;
  const sortBy = 'id';
  const orderBy = 'ASC';

  type ResultProducts = {
    products: GetProductsResponse[];
    count: number;
  };

  const { data: result, isLoading: isLoadingProducts } = useQuery({
    queryKey: ['products', page, rows, sortBy, orderBy],
    queryFn: () => getProducts({ page, rows, sortBy, orderBy })
  });

  const resultProducts = result as unknown as ResultProducts;

  return (
    <Container>
      <HeaderContainer>
        <h1>Lista de produtos</h1>
        <span>{resultProducts?.count} produtos encontrados</span>
      </HeaderContainer>
      <Content>
        {isLoadingProducts && <span>Carregando...</span>}
        {resultProducts?.products.map((product) => (
          <CardProduct key={product.id} product={product} />
        ))}
      </Content>
    </Container>
  );
}
