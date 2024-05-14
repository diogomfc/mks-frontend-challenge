'use client';

import { useCart } from '@/contexts/cart-context';

import { StyledButton } from './style';

import { ShoppingBag } from 'lucide-react';

export interface AddToCartButtonProps {
  productId: number;
}

export function AddToCartButton({ productId }: AddToCartButtonProps) {
  const { addToCart } = useCart();

  function handleAddProductToCart() {
    addToCart(productId);
    console.log(productId);
  }

  return (
    <StyledButton
      aria-label="Adicionar ao carrinho"
      type="button"
      onClick={handleAddProductToCart}
    >
      <ShoppingBag size={16} aria-label="Sacola de compras" />
      <span> Adicionar ao carrinho</span>
    </StyledButton>
  );
}
