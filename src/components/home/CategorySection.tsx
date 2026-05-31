//import { Link } from "react-router-dom";
import type { Category } from "../../types/categories";
import type { Product } from "../../types/product.types";
import ProductGrid from "../product/ProductGrid";
import { useProducts } from "../../hooks/useProducts";
import { useEffect, useState } from "react";

type CategorySectionProps = {
  category: Category & { products: Product[] };
};

const CategorySection = ({ category }: CategorySectionProps) => {
 const {
 expandedCategory,
 setExpandedCategory,
 } = useProducts();
const [visibleCount, setVisibleCount] = useState(5);
const isLoading=false
useEffect(() => {
 const updateCount = () => {
 if (window.innerWidth < 768) {
 setVisibleCount(4); // mobile
 } else if (window.innerWidth < 1024) {
 setVisibleCount(3); // tablet
 } else {
 setVisibleCount(5); // desktop
 }
 };

 updateCount();

 window.addEventListener("resize", updateCount);

 return () => {
 window.removeEventListener("resize", updateCount);
 };
}, []);
 // IS CURRENT CATEGORY EXPANDED?
 const isExpanded =
 expandedCategory === category.slug;

 // PRODUCTS TO SHOW
 const displayedProducts = isExpanded
 ? category.products
: category.products.slice(0, visibleCount);

 // TOGGLE EXPAND
 const handleToggle = () => {
 if (isExpanded) {
 setExpandedCategory(null);
 } else {
 setExpandedCategory(category.slug);
 }
 };

 return (
 <section className="mb-12 mt-20 px-4">
 {/* HEADER */}
 <div className="flex items-center justify-between mb-5">
 <h2 className="text-4xl font-bold md:text-4xl">
 {category.name}
 </h2>

 <button
 onClick={handleToggle}
 className="text-sm font-medium text-green-600"
 >
 {isExpanded
 ? "Show Less"
 : "See All"}
 </button>
 </div>

 {/* PRODUCTS */}
 <ProductGrid
 products={displayedProducts}
 loading={isLoading}
 />
 </section>
 );
};

export default CategorySection;