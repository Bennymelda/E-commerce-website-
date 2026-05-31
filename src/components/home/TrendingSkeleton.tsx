const TrendingSkeleton = () => {
 return (
 <div className="min-w-[180px] animate-pulse bg-white dark:bg-zinc-800 rounded-xl p-4 shadow">

 {/* IMAGE */}
 <div className="h-40 bg-gray-300 dark:bg-zinc-700 rounded-lg"></div>

 {/* TITLE */}
 <div className="mt-3 h-4 bg-gray-300 dark:bg-zinc-700 rounded w-3/4"></div>

 {/* PRICE */}
 <div className="mt-2 h-4 bg-gray-300 dark:bg-zinc-700 rounded w-1/2"></div>
<div className="mt-2 h-4 bg-gray-300 dark:bg-zinc-700 rounded w-1/3"></div>

 </div>
 );
};

export default TrendingSkeleton;