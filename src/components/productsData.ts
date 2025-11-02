export interface ProductData {
  id: number;
  name: string;
  category: string;
  price: string;
  rating: number;
  reviews: number;
  location: string;
  inStock: boolean;
  image: string;
  vendor: string;
  description?: string;
  features?: string[];
  specifications?: { label: string; value: string }[];
}

export const productsData: ProductData[] = [];
