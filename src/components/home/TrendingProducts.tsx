
import { useProducts } from "../../hooks/useProducts";
import ProductCard from "../product/ProductCard";
import TrendingSkeleton from "./TrendingSkeleton";

const TrendingSection = () => {
 const { trendingProducts } = useProducts();
const isLoading=false
 return (
 <section className="mb-20 px-4">
 {/* HEADER */}
 <div className="mb-6">
 <h2 className="text-4xl md:text-5xl font-bold">
 Trending Products
 </h2>

 <p className="text-gray-500 mt-1 text-lg">
 Most popular products right now
 </p>
 </div>

{isLoading ? (
    <div className="flex gap-4 overflow-x-auto scrollbar-hide">

 {Array.from({ length: 5 }).map((_, i) => (
 <TrendingSkeleton key={i} />
 ))}

 </div>
):(
 <div className="flex gap-5 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory">
 {trendingProducts.map((product) => (
 <div
 key={product.id}
 className="min-w-[300px]   md:min-w-[240px] h-full snap-start"
 >
 <ProductCard product={product} />
 </div>
 ))}
 </div>   
)}
 
 </section>
 );
};

export default TrendingSection;