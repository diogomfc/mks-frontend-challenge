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
  }

  return (
    <StyledButton type="button" onClick={handleAddProductToCart}>
      <ShoppingBag size={16} />
      <span> Adicionar ao carrinho</span>
    </StyledButton>
  );
}
