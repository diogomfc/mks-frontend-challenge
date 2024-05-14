import { useState } from 'react';

import { GetProductsResponse, getProducts } from '@/api/get-products';
import { useCart } from '@/contexts/cart-context';
import { getCartProducts } from '@/utils/cart-utils';
import { useQuery } from '@tanstack/react-query';

import { ModelCartItens } from '../model-cart-itens';
import { CartContainer } from './style';

import { ShoppingCart } from 'lucide-react';

export function CartWidget() {
  const { items, removeFromCart, decreaseQuantity, increaseQuantity } =
    useCart();
  const [isOpen, setIsOpen] = useState(false);

  const page = 1;
  const rows = 8;
  const sortBy = 'id';
  const orderBy = 'ASC';

  const { data: allProducts } = useQuery({
    queryKey: ['products', page, rows, sortBy, orderBy],
    queryFn: () => getProducts({ page, rows, sortBy, orderBy })
  });

  const resultProducts = allProducts as unknown as {
    products: GetProductsResponse;
  };

  const cartProducts = getCartProducts(items, resultProducts);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <CartContainer aria-label="Carrinho de compras" onClick={handleOpenModal}>
        <ShoppingCart aria-label="Sacola de compras" size={24} />
        <span aria-label="Quantidade de itens no carrinho">{items.length}</span>
      </CartContainer>
      {isOpen && allProducts && (
        <ModelCartItens
          cartProducts={cartProducts.map((item) => ({
            ...item,
            productId: item.productId.toString()
          }))}
          handleCloseModal={handleCloseModal}
          handleRemoveFromCart={(productId) =>
            removeFromCart(Number(productId))
          }
          handleDecreaseQuantity={(productId) =>
            decreaseQuantity(Number(productId))
          }
          handleIncreaseQuantity={(productId) =>
            increaseQuantity(Number(productId))
          }
        />
      )}
    </div>
  );
}
