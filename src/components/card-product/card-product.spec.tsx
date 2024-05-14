'use client';
import { CardProduct } from '@/components/card-product';
import { ThemeProvider } from 'styled-components';

import { queryClient } from '@/lib/react-query';
import theme from '@/styles/theme';
import { QueryClientProvider } from '@tanstack/react-query';
import { render, screen } from '@testing-library/react';

const mockProduct = {
  id: 1,
  name: 'Produto Teste',
  brand: 'Marca Teste',
  description: 'Descrição do produto teste',
  photo: '/imagem-teste.jpg',
  price: '10,00',
  createdAt: '2023-04-06T12:00:00.000Z',
  updatedAt: '2023-04-06T12:00:00.000Z'
};

describe('Component: CardProduct', () => {
  beforeEach(() => {
    render(
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <CardProduct product={mockProduct} />
        </ThemeProvider>
      </QueryClientProvider>
    );
  });

  it('renderiza a imagem do produto', () => {
    const imageElement = screen.getByRole('img', { name: mockProduct.name });
    expect(imageElement).toBeInTheDocument();
  });

  it('renderiza o nome do produto', () => {
    const nameElement = screen.getByRole('heading', { name: mockProduct.name });
    expect(nameElement).toBeInTheDocument();
  });

  it('renderiza o preço do produto', () => {
    const currencySymbol = screen.getByText('R$');
    expect(currencySymbol).toBeInTheDocument();

    const priceValue = screen.getByText(mockProduct.price);
    expect(priceValue).toBeInTheDocument();
  });

  it('renderiza a descrição do produto', () => {
    const descriptionElement = screen.getByText(mockProduct.description);
    expect(descriptionElement).toBeInTheDocument();
  });

  it('renderiza o botão com o texto "Adicionar ao carrinho"', () => {
    const addToCartButton = screen.getByRole('button', {
      name: 'Adicionar ao carrinho'
    });
    expect(addToCartButton).toBeInTheDocument();
  });
});
