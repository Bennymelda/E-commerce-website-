const CategorySkeleton = () => {
 return (
 <div className="
 min-w-[180px]
 md:min-w-[230px]
 flex-shrink-0
 flex
 flex-col
 items-center
 gap-3
 animate-pulse
 ">

 {/* IMAGE */}
 <div className="
 w-[150px]
 h-[150px]
 rounded-full
 bg-gray-300
 dark:bg-zinc-700
 " />

 {/* TEXT */}
 <div className="
 w-24
 h-4
 rounded
 bg-gray-300
 dark:bg-zinc-700
 " />

 </div>
 );
};

export default CategorySkeleton;