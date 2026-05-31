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
    <div className="min-w-[180px]  md:min-w-[230px] flex items-center flex-col gap-2 snap-start">
      <div className="bg-gray-100 dark:bg-zinc-500 flex items-center justify-center w-[100px] h-[100px]  rounded-full">
    <img src={cat.image} 
    onClick={() =>
 setSelectedCategory(cat.slug)
 }
    alt="image" className="w-[80px] transition-transform duration-300 cursor-pointer hover:scale-110 rounded-full h-[80px] object-center " />
      </div>
  
 <span
 key={cat.id}
 onClick={() =>
 setSelectedCategory(cat.slug)
 }
 className={` font-bold text-center cursor-pointer capitalize ${
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