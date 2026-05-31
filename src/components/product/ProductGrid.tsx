import ProductCard from "./ProductCard";
import ProductSkeleton from "./ProductSkeleton";
import type { Product } from "../../types/product.types";

type ProductGridProps = {
 products: Product[];
 loading?: boolean;
};

const ProductGrid = ({ products, loading }: ProductGridProps) => {
const skeletonCount =
 window.innerWidth < 768
 ? 2
 : window.innerWidth < 1024
 ? 3
 : 5;

 return (
 <div className="grid grid-cols-1 w-full md:grid-cols-2 lg:grid-cols-5 gap-4">

 {/* LOADING STATE */}
 {loading
 ? Array.from({ length: skeletonCount }).map((_, i) => (
 <ProductSkeleton key={i} />
 ))
 : products.map((product) => (
 <ProductCard key={product.id} product={product} />
 ))}
 </div>
 );
};

export default ProductGrid;