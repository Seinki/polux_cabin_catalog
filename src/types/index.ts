export interface Product {
  id: string;
  name: string;
  description: string;
  price?: number;
  image: string;
  category: string;
  dimensions: string;
  features?: string[];
}