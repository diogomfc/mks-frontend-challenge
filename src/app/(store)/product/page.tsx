'use client';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState, Suspense } from 'react';

import { CardProduct } from '@/components/card-product';
import { DropdownMenu } from '@/components/dropdow-menu';

import {
  getProducts,
  GetProductsParams,
  GetProductsResponse
} from '@/api/get-products';
import {
  Container,
  Content,
  FiltersContainer,
  HeaderContainer,
  TitleHeader
} from '@/styles/pages/product';
import { useQuery } from '@tanstack/react-query';

type ResultProducts = {
  products: GetProductsResponse;
  count: number;
};

export default function Product() {
  return (
    <Suspense fallback={<span>Carregando...</span>}>
      <ProductContent />
    </Suspense>
  );
}

function ProductContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const page = searchParams.get('page') ? Number(searchParams.get('page')) : 1;
  const rows = searchParams.get('rows') ? Number(searchParams.get('rows')) : 8;
  const sortBy = searchParams.get('sortBy') || 'name';
  const orderBy = searchParams.get('orderBy') || 'ASC';

  const [filters, setFilters] = useState({
    rows: rows,
    sortBy: sortBy,
    orderBy: orderBy
  });

  const queryParams: GetProductsParams = {
    page,
    rows: filters.rows,
    sortBy: filters.sortBy,
    orderBy: filters.orderBy
  };

  const { data: result, isLoading: isLoadingProducts } = useQuery({
    queryKey: ['products', queryParams],
    queryFn: () => getProducts(queryParams)
  });

  const resultProducts = result as unknown as ResultProducts;
  console.log(resultProducts);

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value
    }));
    router.push(
      `/product?page=1&rows=${filters.rows}&sortBy=${filters.sortBy}&orderBy=${filters.orderBy}`
    );
  };

  return (
    <Container>
      <HeaderContainer>
        <TitleHeader>
          <h1>Lista de produtos</h1>
          <span>{resultProducts?.count} produtos encontrados</span>
        </TitleHeader>
        <FiltersContainer>
          <span>Mostrar:</span>
          <DropdownMenu
            name="rows"
            value={filters.rows.toString()}
            onChange={handleFilterChange}
            menuItems={[
              { value: '8', label: 'Todos' },
              { value: '5', label: '5' },
              { value: '6', label: '6' },
              { value: '7', label: '7' }
            ]}
          />
          <span>Ordenar por:</span>
          <DropdownMenu
            name="sortBy"
            value={filters.sortBy}
            onChange={handleFilterChange}
            menuItems={[
              { value: 'name', label: 'Nome' },
              { value: 'price', label: 'Preço' }
            ]}
          />
          <DropdownMenu
            name="orderBy"
            value={filters.orderBy}
            onChange={handleFilterChange}
            menuItems={[
              { value: 'ASC', label: 'ASC' },
              { value: 'DESC', label: 'DESC' }
            ]}
          />
        </FiltersContainer>
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
