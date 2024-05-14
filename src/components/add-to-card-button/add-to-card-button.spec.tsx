'use client';
import { AddToCartButton } from '@/components/add-to-card-button';
import { ThemeProvider } from 'styled-components';

import {
  CartContext,
  CartContextType,
  CartItem
} from '@/contexts/cart-context';
import { queryClient } from '@/lib/react-query';
import theme from '@/styles/theme';
import { QueryClientProvider } from '@tanstack/react-query';
import { render, screen, fireEvent } from '@testing-library/react';

describe('Component: AddToCartButton', () => {
  const productId = 1;
  let cartContext: CartContextType;

  beforeEach(() => {
    cartContext = {
      items: [] as CartItem[],
      addToCart: jest.fn(),
      increaseQuantity: jest.fn(),
      decreaseQuantity: jest.fn(),
      removeFromCart: jest.fn()
    };

    render(
      <ThemeProvider theme={theme}>
        <CartContext.Provider value={cartContext}>
          <QueryClientProvider client={queryClient}>
            <AddToCartButton productId={productId} />
          </QueryClientProvider>
        </CartContext.Provider>
      </ThemeProvider>
    );
  });

  it('renderiza o botão com o texto "Adicionar ao carrinho"', () => {
    const buttonText = screen.getByText('Adicionar ao carrinho');
    expect(buttonText).toBeInTheDocument();
  });

  it('renderiza o ícone ShoppingBag', () => {
    const iconElement = screen.getByLabelText('Sacola de compras');
    expect(iconElement).toBeInTheDocument();
  });

  it('chama a função addToCart ao clicar no botão', () => {
    fireEvent.click(screen.getByText('Adicionar ao carrinho'));
    expect(cartContext.addToCart).toHaveBeenCalledWith(productId);
  });

  it('verifica se o botão recebe a prop productId', () => {
    fireEvent.click(screen.getByText('Adicionar ao carrinho'));
    expect(cartContext.addToCart).toHaveBeenCalledWith(productId);
  });
});
