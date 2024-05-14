import { CartWidget } from '@/components/cart-widget';
import { ThemeProvider } from 'styled-components';

import { CartContext, CartItem } from '@/contexts/cart-context';
import { queryClient } from '@/lib/react-query';
import theme from '@/styles/theme';
import { QueryClientProvider } from '@tanstack/react-query';
import { render, screen, fireEvent } from '@testing-library/react';

describe('Component: CartWidget', () => {
  beforeEach(() => {
    const cartContext = {
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
            <CartWidget />
          </QueryClientProvider>
        </CartContext.Provider>
      </ThemeProvider>
    );
  });

  it('renderiza o ícone do carrinho', () => {
    const iconElement = screen.getByLabelText('Sacola de compras');
    expect(iconElement).toBeInTheDocument();
  });

  it('renderiza a quantidade de itens no carrinho', () => {
    const quantityElement = screen.getByLabelText(
      'Quantidade de itens no carrinho'
    );
    expect(quantityElement).toBeInTheDocument();
  });

  it('renderiza o modal de itens do carrinho ao clicar no widget', () => {
    fireEvent.click(screen.getByLabelText('Carrinho de compras'));
    const modalElement = screen.getByLabelText('Carrinho de compras');
    expect(modalElement).toBeInTheDocument();
  });
});
