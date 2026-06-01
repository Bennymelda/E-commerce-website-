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
   <div className="flex items-center mb-5 justify-center">
<p className="text-2xl md:text-4xl font-bold  underline  text-green-600 mb-2">Categories</p>
  </div>

 <div className="flex flex-wrap gap-3 mb-6">
 
   
<div className="flex gap-5 overflow-x-auto items-center   scrollbar-hide snap-x snap-mandatory">
 {isLoading ? (
  Array.from({ length: 5 }).map((_, i) => (
 <CategorySkeleton key={i} />
 ))
 ):(
  categories.map((cat) => (
    <div className="min-w-[140px] sm:min-w-[170px] md:min-w-[200px] lg:min-w-[220px] flex items-center flex-col gap-3 snap-start">
      <div className="bg-gray-100 dark:bg-zinc-500 flex items-center justify-center w-[100px] h-[100px]  rounded-full">
    <img src={cat.image} 
    onClick={() =>
 setSelectedCategory(cat.slug)
 }
    alt="image" 
    className="w-[70px] h-[70px] sm:w-[90px] sm:h-[90px] md:w-[110px] md:h-[110px] lg:w-[120px] lg:h-[120px] object-cover rounded-full transition-transform duration-300 cursor-pointer hover:scale-110"
     />
    </div>
  
 <span
 key={cat.id}
 onClick={() =>
 setSelectedCategory(cat.slug)
 }
 className={` font-bold text-center text-sm md:text-base cursor-pointer capitalize ... ${
 selectedCategory === cat.slug
 ? "text-green-600 hover:text-green-500"
 : "text-gray-800 hover:text-gray-500"
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