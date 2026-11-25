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
 variants={{
 hidden: { opacity: 0, y: 40, scale: 0.98 },
 visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.9, ease: "easeOut" } },
 }}
 initial="hidden"
 whileInView="visible"
 viewport={{ once: true, amount: 0.15 }}
 whileHover={{ y: -4 }}
 className="group w-full rounded-2xl bg-white p-2 shadow-md transition-shadow duration-300 hover:shadow-xl dark:bg-zinc-800"
 >
{/* IMAGE with overlays */}
<div className="relative aspect-square w-full overflow-hidden rounded-xl bg-white dark:bg-zinc-700">
 <img
 src={product.image}
 alt={product.name}
 ref={imageRef}
 onClick={() => navigate(`/product/${product.id}`)}
 className="h-full w-full cursor-pointer object-contain p-2 transition-transform duration-300 hover:scale-105"
 />

 {/* Heart: top right */}
 <button
 onClick={() => handleWishlist(product.id)}
 aria-label="Toggle wishlist"
 className="absolute right-2 top-2 rounded-full bg-white p-1.5 text-sm shadow active:scale-90 dark:bg-zinc-800"
 >
 <span className={liked ? "text-red-500" : "text-gray-700 dark:text-gray-300"}>
 <FaRegHeart />
 </span>
 </button>

 {/* Cart: bottom right, grows leftward over the image */}
 <div className="absolute bottom-2 right-2">
 <AddToCartButton product={product} />
 </div>
</div>

<div className="px-1 pb-1 pt-3">
 <h2 className="truncate text-sm font-semibold dark:text-white">{product.name}</h2>

 {product.rating && (
 <div className="mt-1 flex items-center gap-1">
 <div className="flex text-xs">{renderStars(product.rating)}</div>
 <p className="text-[10px] font-semibold text-gray-900 dark:text-gray-300">
 {product.rating} ({product.reviewsCount})
 </p>
 </div>
 )}

 {/* PRICE: now has the full width to itself */}
 <div className="mt-2 flex items-baseline gap-2">
 <p className="text-sm font-bold dark:text-white">${product.price}</p>
 {hasDiscount && (
 <p className="text-xs text-gray-400 line-through">
 ${product.oldPrice?.toFixed(2)}
 </p>
 )}
 </div>
</div>
 </motion.div>
);


};

export default React.memo(ProductCard);