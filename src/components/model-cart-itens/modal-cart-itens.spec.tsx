import { CartWidget } from '@/components/cart-widget';
import { ModelCartItens } from '@/components/model-cart-itens';
import { ThemeProvider } from 'styled-components';

import { CartContext, CartItem } from '@/contexts/cart-context';
import { queryClient } from '@/lib/react-query';
import theme from '@/styles/theme';
import { QueryClientProvider } from '@tanstack/react-query';
import { render, screen, fireEvent, within } from '@testing-library/react';

describe('Component: ModalCartItens', () => {
  const mockCartProducts = [
    {
      productId: '1',
      product: {
        id: 1,
        name: 'Produto Teste 1',
        brand: 'Marca Teste',
        description: 'Descrição do produto teste',
        photo: '/imagem-teste.jpg',
        price: '10,00',
        createdAt: '2023-04-06T12:00:00.000Z',
        updatedAt: '2023-04-06T12:00:00.000Z'
      },
      quantity: 1
    },
    {
      productId: '2',
      product: {
        id: 2,
        name: 'Produto Teste 2',
        brand: 'Marca Teste',
        description: 'Descrição do produto teste',
        photo: '/imagem-teste.jpg',
        price: '20,00',
        createdAt: '2023-04-06T12:00:00.000Z',
        updatedAt: '2023-04-06T12:00:00.000Z'
      },
      quantity: 2
    }
  ];

  const handleCloseModal = jest.fn();
  const handleRemoveFromCart = jest.fn();
  const handleDecreaseQuantity = jest.fn();
  const handleIncreaseQuantity = jest.fn();

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
            <ModelCartItens
              cartProducts={mockCartProducts}
              handleCloseModal={handleCloseModal}
              handleRemoveFromCart={handleRemoveFromCart}
              handleDecreaseQuantity={handleDecreaseQuantity}
              handleIncreaseQuantity={handleIncreaseQuantity}
            />
          </QueryClientProvider>
        </CartContext.Provider>
      </ThemeProvider>
    );
  });

  it('verifica se o modal é renderizado corretamente', () => {
    fireEvent.click(screen.getByLabelText('Carrinho de compras'));
    const modalElement = screen.getByLabelText('Carrinho de compras');
    expect(modalElement).toBeInTheDocument();
  });

  it('verifica se os itens do carrinho são renderizados corretamente', () => {
    const productItems = screen.getAllByRole('listitem');
    expect(productItems).toHaveLength(mockCartProducts.length);

    mockCartProducts.forEach((product, index) => {
      const item = productItems[index];

      const image = within(item).getByRole('img');
      expect(image).toBeInTheDocument();

      const imageLabel = screen.getByAltText(product.product.name);
      expect(imageLabel).toBeInTheDocument();

      expect(within(item).getByText(product.product.name)).toBeInTheDocument();

      expect(
        within(item).getByText(product.quantity.toString())
      ).toBeInTheDocument();

      expect(
        within(item).getByText(
          `${Number(product.product.price).toFixed(2).replace('.00', '')}`
        )
      ).toBeInTheDocument();
    });
  });

  it('chama a função de remover item do carrinho ao clicar no botão de remover', () => {
    const removeButtons = screen.getAllByRole('button', {
      name: /remover item do carrinho/i
    });

    removeButtons.forEach((button, index) => {
      fireEvent.click(button);
      expect(handleRemoveFromCart).toHaveBeenCalledWith(
        mockCartProducts[index].productId
      );
    });

    expect(handleRemoveFromCart).toHaveBeenCalledTimes(mockCartProducts.length);
  });

  it('chama a função de aumentar quantidade do item ao clicar no botão de adicionar quantidade', () => {
    const increaseButtons = screen.getAllByRole('button', {
      name: /aumentar quantidade do item/i
    });

    increaseButtons.forEach((button, index) => {
      fireEvent.click(button);
      expect(handleIncreaseQuantity).toHaveBeenCalledWith(
        mockCartProducts[index].productId
      );
    });

    expect(handleIncreaseQuantity).toHaveBeenCalledTimes(
      mockCartProducts.length
    );
  });

  it('chama a função de diminuir quantidade do item ao clicar no botão de diminuir quantidade', () => {
    const decreaseButtons = screen.getAllByRole('button', {
      name: /diminuir quantidade do item/i
    });

    decreaseButtons.forEach((button, index) => {
      if (mockCartProducts[index].quantity === 1) {
        expect(button).toBeDisabled();
      } else {
        fireEvent.click(button);
        expect(handleDecreaseQuantity).toHaveBeenCalledWith(
          mockCartProducts[index].productId
        );
      }
    });

    expect(handleDecreaseQuantity).toHaveBeenCalledTimes(
      mockCartProducts.filter((product) => product.quantity > 1).length
    );
  });

  it('verifica se o modal é fechado ao clicar no botão de fechar', () => {
    fireEvent.click(screen.getByLabelText('Carrinho de compras'));
    fireEvent.click(screen.getByRole('button', { name: 'Fechar modal' }));
    expect(handleCloseModal).toHaveBeenCalled();
  });
});
