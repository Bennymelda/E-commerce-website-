import React, { useRef } from "react";
import { useWishlist } from "../../hooks/useWishlist";
import { useToast } from "../../hooks/useToast";
import type { Product } from "../../types/product.types";
import { useNavigate } from "react-router-dom";
import AddToCartButton from "../home/AddToCartButton";
//import { CiHeart } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa6";
import { motion} from "framer-motion";
//import { useProducts } from "../../context/ProductContextStore";
type ProductCardProps = {
 product: Product;
};


const ProductCard = ({ product }: ProductCardProps) => {
 const { showToast } = useToast();
 const navigate= useNavigate()
 const hasDiscount =
 product.oldPrice && product.discount;
 const { toggleWishlist, isInWishlist } =
 useWishlist();
const imageRef=useRef<HTMLImageElement>(null);
const liked = isInWishlist(product.id);
 const renderStars = (rating: number) => {
 const stars = [];

 for (let i = 1; i <= 5; i++) {
 stars.push(
 <span
 key={i}
 className={
 i <= Math.floor(rating)
 ? "text-yellow-400"
 : "text-gray-300"
 }
 >
 ★
 </span>
 );
 }

 return stars;
 };
const handleWishlist = (id: string) => {
 toggleWishlist(id);

 if (liked) {
 showToast("Removed from wishlist ", "error");
 } else {
 showToast("Added to wishlist ", "success");
 }
};
 return (
 <motion.div
  initial={{
    opacity: 0,
    y: 40,
    scale: 0.97,
  }}
  whileInView={{
    opacity: 1,
    y: 0,
    scale: 1,
  }}
  viewport={{
    once: true,
    amount: 0.15,
  }}
  whileHover={{
    y: -6,
  }}
  transition={{
    duration: 0.6,
    ease: "easeOut",
  }}
  className="
    relative
    group
    w-full
    rounded-xl
    p-4
    shadow-lg
    hover:shadow-xl
    bg-white
    dark:bg-zinc-800
    transition-shadow
    duration-300
  "
>
   {/* WISHLIST BUTTON */}
 
 {/* IMAGE */}
<div className="relative">
 <div className="overflow-hidden rounded-lg h-56 w-full flex items-center justify-center">
 <img
 src={product.image}
 alt={product.name}
 ref={imageRef}
 className="
 w-full
 h-full
 object-contain
 cursor-pointer
 transition-transform
 duration-300
 hover:scale-110
 "
 onClick={() => navigate(`/product/${product.id}`)}
 />
 </div>

 <div className="absolute right-1 bottom-2 ">
 <AddToCartButton product={product} />
 </div>
</div>


 

 {/* NAME */}
 <h2 className="mt-4  text-md dark:text-white font-semibold">
 {product.name}
 </h2>
{/* RATING */}
 {product.rating && (
 <div className="mt-3 flex items-center gap-2">
 <div className="flex text-lg">
 {renderStars(product.rating)}
 </div>

 <p className="text-xs text-gray-900 font-semibold">
 {product.rating} (
 {product.reviewsCount})
 </p>
 </div>
 )}
 
<button
 onClick={() => handleWishlist(product.id)}
 className="
 absolute top-5 right-5
 text-md md:text-lg cursor-pointer
 bg-white dark:bg-zinc-800
 p-2 rounded-full shadow
 hover:scale-110 active:scale-90
 transition-all duration-200

 opacity-100 md:opacity-0 md:group-hover:opacity-100
 "
>
 <span className={liked ? "text-red-500" : "text-gray-700"}>
 <FaRegHeart />
 </span>
</button>

 {/* PRICING */}
 <div className="mt-2 md:flex-row flex md:items-center flex-col gap-2">
 <p className="text-md font-bold">
 ${product.price}
 </p>

 {hasDiscount && (
 <>
 <p className="text-sm text-gray-400 line-through">
 ${product.oldPrice?.toFixed(2)}
 </p>

 
 </>
 )}
 </div>

 

 </motion.div>
 );
};

export default React.memo(ProductCard);