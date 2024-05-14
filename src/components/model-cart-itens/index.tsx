import Image from 'next/image';

import { Product } from '@/utils/cart-utils';

import {
  CheckoutButton,
  Content,
  EmptyCartContainer,
  FooterContainer,
  Header,
  ModalContainer,
  ProductItem,
  ProductItemQuantity,
  TotalContainer
} from './style';

import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, X } from 'lucide-react';

interface CartProduct {
  productId: string;
  product?: Product;
  quantity: number;
}

interface ModalCartItensProps {
  cartProducts: CartProduct[];
  handleCloseModal: () => void;
  handleRemoveFromCart: (productId: string) => void;
  handleDecreaseQuantity: (productId: string) => void;
  handleIncreaseQuantity: (productId: string) => void;
}

export function ModelCartItens({
  cartProducts,
  handleCloseModal,
  handleRemoveFromCart,
  handleDecreaseQuantity,
  handleIncreaseQuantity
}: ModalCartItensProps) {
  const total = cartProducts
    .reduce((acc, item) => {
      const price = Number(item.product?.price) * item.quantity;
      return acc + price;
    }, 0)
    .toFixed(2)
    .replace('.00', '');

  return (
    <ModalContainer
      id="modal-container"
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
    >
      <Header>
        <h2>Carrinho de compras</h2>
        <button aria-label="Fechar modal" onClick={handleCloseModal}>
          <X size={20} />
        </button>
      </Header>

      {cartProducts.length === 0 && (
        <EmptyCartContainer>
          <ShoppingCart size={50} />
          <h1>Seu carrinho está vazio</h1>
          <p>Adicione produtos ao carrinho para começar a comprar!</p>
        </EmptyCartContainer>
      )}

      <Content>
        <AnimatePresence>
          <ProductItem>
            {cartProducts.map((item) => (
              <motion.li
                layout
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: 'spring' }}
                key={item.productId}
              >
                <div>
                  <Image
                    aria-label="Imagem do produto"
                    src={item.product?.photo ?? ''}
                    alt={item.product?.name ?? ''}
                    width={50}
                    height={50}
                  />
                  <h1>{item.product?.name}</h1>
                </div>

                <ProductItemQuantity>
                  <span>Qtd:</span>
                  <div>
                    <button
                      aria-label="Diminuir quantidade do item"
                      disabled={item.quantity === 1}
                      onClick={() => handleDecreaseQuantity(item.productId)}
                    >
                      -
                    </button>
                    <span>|</span>
                    <h1>{item.quantity}</h1>
                    <span>|</span>
                    <button
                      aria-label="Aumentar quantidade do item"
                      disabled={item.quantity === 10}
                      onClick={() => handleIncreaseQuantity(item.productId)}
                    >
                      +
                    </button>
                  </div>
                </ProductItemQuantity>

                <span>
                  <span>R$</span>
                  {Number(item.product?.price).toFixed(2).replace('.00', '')}
                </span>

                <button
                  aria-label="Remover item do carrinho"
                  onClick={() => handleRemoveFromCart(item.productId)}
                >
                  <X size={20} />
                </button>
              </motion.li>
            ))}
          </ProductItem>
        </AnimatePresence>
      </Content>

      <FooterContainer>
        <TotalContainer>
          <h1>Total:</h1>
          <span>R$ {total}</span>
        </TotalContainer>
        <CheckoutButton>Finalizar compra</CheckoutButton>
      </FooterContainer>
    </ModalContainer>
  );
}
