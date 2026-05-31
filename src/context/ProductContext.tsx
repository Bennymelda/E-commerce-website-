import { useMemo,  useState, type ReactNode } from "react";
//import useFlyingCart from "../hooks/useFlyingCart";
import { products } from "../data/products";
import { categories } from "../data/categories";

import { ProductContext } from "./ProductContextStore";

export const ProductProvider = ({
 children,
}: {
 children: ReactNode;
}) => {
  
 // SELECTED CATEGORY
 const [selectedCategory, setSelectedCategory] =
 useState<string>("all");
const [expandedCategory, setExpandedCategory] =
 useState<string | null>(null);
 // GROUP PRODUCTS (MAX 6 PER CATEGORY)
 const groupedCategories = useMemo(() => {
 return categories.map((cat) => ({
 ...cat,
 products: products
 .filter((p) => p.category === cat.slug)

 }));
 }, []);

 // ORDER CATEGORIES (SELECTED GOES TOP)
 const orderedCategories = useMemo(() => {
 if (selectedCategory === "all") {
 return groupedCategories;
 }

 const selected = groupedCategories.find(
 (c) => c.slug === selectedCategory
 );

 const others = groupedCategories.filter(
 (c) => c.slug !== selectedCategory
 );

 return selected
 ? [selected, ...others]
 : groupedCategories;
 }, [selectedCategory, groupedCategories]);
const trendingProducts = useMemo(() => {
 return products.filter(
 (product) => product.trending
 );
}, []);
 return (
 <ProductContext.Provider
 value={{
 products,
 categories,
 selectedCategory,
 setSelectedCategory,
expandedCategory, 
setExpandedCategory,
 // NEW IMPORTANT VALUE
 orderedCategories,
 trendingProducts
 }}
 >
 {children}
 </ProductContext.Provider>
 );
};