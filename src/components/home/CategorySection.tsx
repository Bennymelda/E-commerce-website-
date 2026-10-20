//import { Link } from "react-router-dom";
import type { Category } from "../../types/categories";
import type { Product } from "../../types/product.types";
import ProductGrid from "../product/ProductGrid";
import { useProducts } from "../../hooks/useProducts";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
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
 setVisibleCount(4); // desktop
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
 <motion.section
  initial={{
    opacity: 0,
    y: 50,
  }}
  whileInView={{
    opacity: 1,
    y: 0,
  }}
  viewport={{
    once: true,
    amount: 0.15,
  }}
  transition={{
    duration: 0.7,
    ease: "easeOut",
  }}
  className="mb-12 mt-20 px-4"
>
  {/* HEADER */}
  <motion.div
    initial={{
      opacity: 0,
      y: 25,
    }}
    whileInView={{
      opacity: 1,
      y: 0,
    }}
    viewport={{
      once: true,
    }}
    transition={{
      duration: 0.6,
      ease: "easeOut",
    }}
    className="flex items-center justify-between mb-5"
  >
    <h2 className="text-4xl font-bold md:text-4xl">
      {category.name}
    </h2>

    <motion.button
      onClick={handleToggle}
      whileHover={{
        scale: 1.05,
        x: -3,
      }}
      whileTap={{
        scale: 0.95,
      }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 15,
      }}
      className="
        text-sm
        font-medium
        text-green-600
        hover:text-green-700
        transition-colors
        duration-200
      "
    >
      {isExpanded ? "Show Less" : "See All"}
    </motion.button>
  </motion.div>

  {/* PRODUCTS */}
  <motion.div
    initial={{
      opacity: 0,
      y: 35,
    }}
    whileInView={{
      opacity: 1,
      y: 0,
    }}
    viewport={{
      once: true,
      amount: 0.1,
    }}
    transition={{
      duration: 0.7,
      delay: 0.15,
      ease: "easeOut",
    }}
  >
    <ProductGrid
      products={displayedProducts}
      loading={isLoading}
    />
  </motion.div>
</motion.section>
 );
};

export default CategorySection;