import { api } from '@/lib/axios';

export interface GetProductsParams {
  page: number;
  rows: number;
  sortBy: string;
  orderBy: string;
}

export type GetProductsResponse = {
  id: number;
  name: string;
  brand: string;
  description: string;
  photo: string;
  price: string;
  createdAt: string;
  updatedAt: string;
};

export async function getProducts({
  page,
  rows,
  sortBy,
  orderBy
}: GetProductsParams): Promise<GetProductsResponse> {
  const response = await api.get<GetProductsResponse>('/products', {
    params: {
      page,
      rows,
      sortBy,
      orderBy
    }
  });

  return response.data;
}
