export interface IProduct {
  id: number;
  title: string;
  description: string;
  price: number;
  pictureUrl: string;
  min: number;
  max: number;
}

export type ProductSortType = 'asc' | 'desc' | 'default';
