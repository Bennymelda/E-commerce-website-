import { useProducts } from "../../hooks/useProducts";
import CategorySkeleton from "./CategorySkeleton";
const Categories = () => {
 const {
 categories,
 selectedCategory,
 setSelectedCategory,
 } = useProducts();
const isLoading=false
 return (
 <>
 <div className="flex items-center justify-center mb-6">
 <p className="text-2xl md:text-4xl font-bold underline text-green-600">
 Categories
 </p>
 </div>

 <div className="w-full overflow-hidden mb-6">
 <div className="flex gap-4 sm:gap-6 overflow-x-auto px-2 pb-2 scrollbar-hide snap-x snap-mandatory">
 {isLoading ? (
 Array.from({ length: 5 }).map((_, i) => (
 <CategorySkeleton key={i} />
 ))
 ) : (
 categories.map((cat) => (
 <div
 key={cat.id}
 className="flex-shrink-0 w-[100px] sm:w-[130px] md:w-[150px] lg:w-[170px] flex flex-col items-center gap-3 snap-start"
 >
 <div
 onClick={() => setSelectedCategory(cat.slug)}
 className={`w-[70px] h-[70px] sm:w-[90px] sm:h-[90px] md:w-[110px] md:h-[110px] lg:w-[130px] lg:h-[130px] rounded-full flex items-center justify-center overflow-hidden cursor-pointer transition-all duration-300 ${
 selectedCategory === cat.slug
 ? "ring-2 ring-green-600"
 : ""
 }`}
 >
 <img
 src={cat.image}
 alt={cat.name}
 className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
 />
 </div>

 <span
 onClick={() => setSelectedCategory(cat.slug)}
 className={`font-bold text-center text-sm md:text-base cursor-pointer capitalize transition-colors ${
 selectedCategory === cat.slug
 ? "text-green-600 hover:text-green-500"
 : "text-gray-800 hover:text-gray-500 dark:text-white"
 }`}
 >
 {cat.name}
 </span>
 </div>
 ))
 )}
 </div>
 </div>
 </>
);


};

export default Categories;