import { GetProductsResponse } from '@/api/get-products';

interface Item {
  productId: number;
  quantity: number;
}

export interface Product {
  id: number;
  name: string;
  brand: string;
  description: string;
  photo: string;
  price: string;
  createdAt: string;
  updatedAt: string;
}

interface AllProducts {
  products: GetProductsResponse | undefined;
}

export function getCartProducts(
  items: Item[],
  allProducts: AllProducts
): (Item & { product?: Product })[] {
  return items.map((item) => {
    const product = allProducts?.products?.find(
      (product) => product.id === item.productId
    );
    return product ? { ...item, product } : item;
  });
}
