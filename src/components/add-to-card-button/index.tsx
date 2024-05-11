'use client';

import { StyledButton } from './style';

import { ShoppingBag } from 'lucide-react';

export interface AddToCartButtonProps {
  productId: number;
}

export function AddToCartButton({ productId }: AddToCartButtonProps) {
  function handleAddProductToCart() {
    console.log(productId);
  }

  return (
    <StyledButton type="button" onClick={handleAddProductToCart}>
      <ShoppingBag size={16} />
      <span> Adicionar ao carrinho</span>
    </StyledButton>
  );
}
