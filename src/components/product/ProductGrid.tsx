import { useState } from "react";
import ProductCard from "./ProductCard";
import ProductSkeleton from "./ProductSkeleton";
import type { Product } from "../../types/product.types";

type ProductGridProps = {
 products: Product[];
 loading?: boolean;
};

const ProductGrid = ({ products, loading }: ProductGridProps) => {
 const [currentPage, setCurrentPage] = useState(1);

 const productsPerPage = 12;
 const totalPages = Math.ceil(products.length / productsPerPage);

 const startIndex = (currentPage - 1) * productsPerPage;

 const currentProducts = products.slice(
 startIndex,
 startIndex + productsPerPage
 );

 const skeletonCount =
 window.innerWidth < 768
 ? 2
 : window.innerWidth < 1024
 ? 3
 : 4;

 const handlePageChange = (page: number) => {
 setCurrentPage(page);
 window.scrollTo({ top: 0, behavior: "smooth" });
 };

 return (
 <>
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 w-full">
 
 {loading
 ? Array.from({ length: skeletonCount }).map((_, i) => (
 <ProductSkeleton key={i} />
 ))
 : currentProducts.map((product) => (
 <ProductCard key={product.id} product={product} />
 ))}
 </div>

 {!loading && totalPages > 1 && (
 <div className="flex items-center justify-center gap-2 mt-8">
 <button
 onClick={() => handlePageChange(currentPage - 1)}
 disabled={currentPage === 1}
 className="px-3 py-2 rounded-lg border border-zinc-300 disabled:opacity-40"
 >
 Previous
 </button>

 {Array.from(
 { length: totalPages },
 (_, index) => index + 1
 ).map((page) => (
 <button
 key={page}
 onClick={() => handlePageChange(page)}
 className={`px-3 py-2 cursor-pointer rounded-lg ${
 currentPage === page
 ? "bg-green-600 text-white"
 : "border border-zinc-300 "
 }`}
 >
 {page}
 </button>
 ))}

 <button
 onClick={() => handlePageChange(currentPage + 1)}
 disabled={currentPage === totalPages}
 className="px-3 py-2 rounded-lg border border-zinc-300 disabled:opacity-40"
 >
 Next
 </button>
 </div>
 )}
 </>
 );
};
 
export default ProductGrid;