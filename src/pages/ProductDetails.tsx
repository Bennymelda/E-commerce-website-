import { useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../data/products";

import { useWishlist } from "../hooks/useWishlist";
import ProductGrid from "../components/product/ProductGrid";
import { FaRegHeart } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import AddToCartButton from "../components/home/AddToCartButton";
import { useToast } from "../hooks/useToast";
import Footer from "../components/layout/Footer";
export default function ProductDetails() {
 const { id } = useParams();
const { showToast } = useToast();
 const product = products.find((p) => p.id === id);

 const { toggleWishlist, isInWishlist } = useWishlist();
const handleWishlist = (id: string) => {
 toggleWishlist(id);

 if (liked) {
 showToast("Removed from wishlist 🗑", "error");
 } else {
 showToast("Added to wishlist ❤️", "success");
 }
};
 const [selectedImage, setSelectedImage] = useState("");
 const liked = product ? isInWishlist(product.id) : false;
 const activeImage =
  product?.images?.includes(selectedImage)
   ? selectedImage
   : product?.images?.[0] ?? "";

 const relatedProducts = useMemo(() => {
 if (!product) return [];

 return products
 .filter(
 (p) =>
 p.category === product.category &&
 p.id !== product.id
 )
 .slice(0, 8);
 }, [product]);

 if (!product) {
 return (
 <div className="flex items-center justify-center h-screen text-3xl font-bold">
 Product not found
 </div>
 );
 }

 return (
 <div className="min-h-screen bg-white dark:bg-black px-5  ">

 {/* BREADCRUMB */}
 <div className="mb-8 text-sm text-gray-500">
  {product.name}
  
 </div>

 {/* MAIN SECTION */}
 <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

 {/* LEFT IMAGES */}
 <div>

 {/* MAIN IMAGE */}
 <div className="bg-gray-100 dark:bg-zinc-900 rounded-3xl overflow-hidden">
 <img
 key={activeImage}
 src={activeImage}
 alt={product.name}
 className="w-full h-87.5 md:h-125 object-cover"
 />
 </div>

 {/* THUMBNAILS */}
 <div className="flex gap-4 mt-5 overflow-x-auto scrollbar-hide">
 {product.images?.map((img) => (
 <button
 key={img}
 onClick={() => setSelectedImage(img)}
 className={`
 min-w-22.5
 h-22.5
 rounded-2xl
 overflow-hidden
 border-2
 transition
 cursor-pointer
 ${
 selectedImage === img
 ? "border-green-600"
 : "border-transparent"
 }
 `}
 >
 <img
 
 src={img}
 alt="thumbnail"
 className="w-full h-full object-cover"
 />
 </button>
 ))}
 </div>
 </div>

 

{/* RIGHT CONTENT */}
 <div>

 {/* BADGES */}
 <div className="flex gap-3 flex-wrap mb-4">
 {product.organic && (
 <span className="bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-semibold">
 Organic
 </span>
 )}

 {product.trending && (
 <span className="bg-orange-100 text-orange-600 px-4 py-1 rounded-full text-sm font-semibold">
 Trending
 </span>
 )}
 </div>

<div className="flex gap-4 items-center">
 <h1 className="text-3xl md:text-5xl font-bold dark:text-white mb-4">
 {product.name}
 </h1>
{product.discount && (
 <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full font-semibold text-sm">
 -{product.discount}%
 </span>
 )}
</div>
 {/* TITLE */}

 {/* RATING */}
 <div className="flex items-center gap-3 mb-5">
 <div className="text-amber-400 text-lg">
 ★★★★★
 </div>

 <p className="text-gray-600 dark:text-gray-300">
 {product.rating} ({product.reviewsCount} reviews)
 </p>
 </div>

 {/* PRICE */}
 <div className="flex items-center gap-4 mb-6 flex-wrap">
 <h2 className="text-4xl font-bold text-green-600">
 ${product.price}
 </h2>

 {product.oldPrice && (
 <p className="text-2xl line-through text-gray-400">
 ${product.oldPrice}
 </p>
 )}

 
 </div>

 {/* DESCRIPTION */}
 <p className="text-gray-600 dark:text-gray-300 leading-8 mb-8 text-lg">
 {product.description}
 </p>

 {/* DELIVERY + STOCK */}
 <div className="flex flex-col gap-4 mb-8">
 <div className="flex items-center gap-2">
 <span className="font-semibold">Delivery:</span>
 <span>{product.deliveryTime}</span>
 </div>

 <div className="flex items-center gap-2">
 <span className="font-semibold">Stock:</span>
 <span
 className={`
 font-semibold
 ${
 product.stock > 0
 ? "text-green-600"
 : "text-red-500"
 }
 `}
 >
 {product.stock > 0
 ? `${product.stock} Available`
 : "Out of Stock"}
 </span>
 </div>

 <div className="flex items-center gap-2">
 <span className="font-semibold">Unit:</span>
 <span>{product.unit}</span>
 </div>
 </div>

 {/* ACTION BUTTONS */}
 <div className="flex gap-4 flex-wrap mb-10">
    <div className="border border-gray-200 rounded-full p-2">
   <AddToCartButton product={product} />
    </div>

 <button
onClick={() => handleWishlist(product.id)}
 className="border border-gray-300 dark:border-zinc-700 px-4 py-4 rounded-full text-2xl cursor-pointer"
 >
 {liked ? (
 <FaHeart className="text-red-500" />
 ) : (
 <FaRegHeart />
 )}
 </button>
 </div>

 {/* INGREDIENTS */}
 <div className="mb-10">
 <div className="flex items-center gap-4 my-6">
 <div className="flex-1 h-px bg-gray-300" />

 <span className="text-green-600 font-bold uppercase tracking-wider">
 Ingredients
 </span>

 <div className="flex-1 h-px bg-gray-300" />
 </div>

 <div className="flex gap-3 flex-wrap">
 {product.ingredients?.map((item) => (
 <span
 key={item}
 className="bg-gray-100 dark:bg-zinc-800 px-4 py-2 rounded-full"
 >
 {item}
 </span>
 ))}
 </div>
 </div>

 {/* NUTRITION */}
 <div>
 <div className="flex items-center gap-4 my-6">
 <div className="flex-1 h-px bg-gray-300" />

 <span className="text-green-600 font-bold uppercase tracking-wider">
 Nutrition
 </span>

 <div className="flex-1 h-px bg-gray-300" />
 </div>

 <div className="grid grid-cols-2 gap-4">
 <div className="bg-gray-100 dark:bg-zinc-900 rounded-2xl p-5">
 <p className="text-gray-500">Calories</p>
 <h3 className="text-2xl font-bold mt-2">
 {product.nutrition?.calories ?? "-"}
 </h3>
 </div>

 <div className="bg-gray-100 dark:bg-zinc-900 rounded-2xl p-5">
 <p className="text-gray-500">Carbs</p>
 <h3 className="text-2xl font-bold mt-2">
 {product.nutrition?.carbs ?? "-"}
 </h3>
 </div>

 <div className="bg-gray-100 dark:bg-zinc-900 rounded-2xl p-5">
 <p className="text-gray-500">Fiber</p>
 <h3 className="text-2xl font-bold mt-2">
 {product.nutrition?.fiber ?? "-"}
 </h3>
 </div>

 <div className="bg-gray-100 dark:bg-zinc-900 rounded-2xl p-5">
 <p className="text-gray-500">Protein</p>
 <h3 className="text-2xl font-bold mt-2">
 {product.nutrition?.protein ?? "-"}
 </h3>
 </div>
 </div>
 </div>
 </div>
 </div>

 {/* RELATED PRODUCTS */}
 <div className="mt-25">

 <div className="flex items-center gap-4 mb-10">
 <div className="flex-1 h-px bg-gray-300" />

 <span className="text-green-600 font-bold uppercase tracking-wider text-xl">
 Related Products
 </span>

 <div className="flex-1 h-px bg-gray-300" />
 </div>

 <ProductGrid products={relatedProducts} />
 </div>

 <Footer />
 </div>
 );
}