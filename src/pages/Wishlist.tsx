import { useMemo } from "react";
import { useWishlist } from "../hooks/useWishlist";
import { products } from "../data/products";
import { FaHeart } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import Footer from "../components/layout/Footer";
import { useNavigate } from "react-router-dom";

const WishlistPage = () => {
 const { wishlist, toggleWishlist } = useWishlist();

 const wishlistProducts = useMemo(() => {
 return products.filter((product) =>
 wishlist.includes(product.id)
 );
 }, [wishlist]);
const navigate=useNavigate()
 return (
 <div className="min-h-screen md:pt-23 pt-4 px-4 bg-gray-50 dark:bg-black">

 {/* HEADER */}
 <div className="flex items-center gap-3 mb-8">

 <h1 className="text-2xl md:text-4xl font-bold dark:text-white">
 My Wishlist
 </h1>
  <FaHeart className="text-red-500 text-3xl" />
 </div>

 {/* EMPTY STATE */}
 {wishlistProducts.length === 0 ? (
 <div className="flex flex-col items-center justify-center mt-20 text-center">
 <FaHeart className="text-gray-300 text-6xl mb-4" />
 <h2 className="text-xl font-semibold text-gray-600 dark:text-gray-300">
 Your wishlist is empty
 </h2>
 <p className="text-gray-500 mt-2">
 Save your favourite products here ❤️
 </p>
 </div>
 ) : (
 <div className="
 grid
 grid-cols-1
 sm:grid-cols-2
 md:grid-cols-3
 lg:grid-cols-4
 gap-6
 mb-10
 ">

 {wishlistProducts.map((product) => (
 <div
 key={product.id}
 className="
 bg-white dark:bg-zinc-900
 rounded-2xl
 shadow-sm
 hover:shadow-lg
 transition
 overflow-hidden
 group
 "
 >

 {/* IMAGE */}
<div className="relative group">

 <img
 src={product.image}
 className="
 w-full h-60 md:h-48
 object-cover
 group-hover:scale-105
 transition duration-300
 cursor-pointer
 "
 onClick={()=> navigate(`/product/${product.id}`)}
 />

 {/* DELETE BUTTON */}
 <button
 onClick={() =>
 toggleWishlist(product.id)
 }
 className="
 absolute top-3 right-3
 bg-white/90 dark:bg-black/60
 p-2 rounded-full
 shadow-md
 text-red-500
 hover:bg-red-500
 hover:text-white
 transition
 flex items-center justify-center
 "
 >
 <MdDelete className="text-xl" />
 </button>

</div>

 {/* CONTENT */}
 <div className="p-4 space-y-2">

 <h2 className="font-semibold text-lg dark:text-white">
 {product.name}
 </h2>

 <p className="text-sm text-gray-500">
 {product.category}
 </p>

 <p className="font-bold text-green-600">
 ${product.price}
 </p>

 

 </div>
 </div>
 ))}

 </div>
 )}
 <Footer />
 </div>
 );
};

export default WishlistPage;