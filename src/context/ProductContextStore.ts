import { createContext } from "react";
import type { Dispatch, SetStateAction } from "react";
import type { Product } from "../types/product.types";
import type { Category } from "../types/categories";
export interface ProductContextType {
  products: Product[];
  categories: Category[];
  selectedCategory: string;
  orderedCategories: (Category & { products: Product[] })[];
  setSelectedCategory: Dispatch<SetStateAction<string>>;
    expandedCategory: string | null;
    setExpandedCategory: Dispatch<SetStateAction<string | null>>;
    trendingProducts: Product[];
}

export const ProductContext = createContext<ProductContextType | undefined>(undefined);
