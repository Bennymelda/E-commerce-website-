const ProductSkeleton = () => {
 return (
 <div className="animate-pulse bg-white p-4 rounded-xl shadow">

 {/* IMAGE */}
 <div className="h-40 bg-gray-300 rounded-lg"></div>

 {/* TEXT */}
 <div className="mt-3 space-y-2">
 <div className="h-4 bg-gray-300 w-3/4 rounded"></div>
 <div className="h-4 bg-gray-300 w-1/2 rounded"></div>
 </div>

 {/* PRICE */}
 <div className="h-4 bg-gray-300 w-1/3 mt-3 rounded"></div>
 <div className="h-4 bg-gray-300 w-1/4 mt-3 rounded"></div>

 </div>
 );
};

export default ProductSkeleton;