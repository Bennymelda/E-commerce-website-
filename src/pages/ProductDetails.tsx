import { useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../data/products";
import { motion } from "framer-motion";
import { useWishlist } from "../hooks/useWishlist";
import ProductGrid from "../components/product/ProductGrid";
import { FaRegHeart } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import AddToCartButton from "../components/home/AddToCartButton";
import { useToast } from "../hooks/useToast";
import Footer from "../components/layout/Footer";
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
export default function ProductDetails() {
 const { id } = useParams();
const { showToast } = useToast();
 const product = products.find((p) => p.id === id);
const navigate=useNavigate()
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
 <div className="min-h-screen md:pt-28 bg-white dark:bg-black ">
   {/* 
<div className="text-sm text-gray-500 mb-6">
 <span
 className="cursor-pointer hover:text-green-600"
 onClick={() => navigate("/")}
 >
 Home
 </span>

 {" / "}

 <span
 className="cursor-pointer hover:text-green-600"
 onClick={() => navigate("/products")}
 >
 Products
 </span>

 {" / "}

 <span className="text-green-600 font-medium">
 {product.name}
 </span>
</div>
 <div className="mb-8 text-sm text-gray-500">
  {product.name}
  
 </div>
*/}



 {/* MAIN SECTION */}
 <div className="relative w-full lg:flex">

 {/* LEFT IMAGES */}
 <div className="relative w-full lg:flex-2">

  {/* MAIN IMAGE */}
 <motion.div
  initial={{ opacity: 0, scale: 0.96 }}
animate={{ opacity: 1, scale: 1 }}
transition={{
  duration: 0.8,
  ease: "easeOut",
}}
  className="w-full h-100.5 md:h-150 bg-gray-100 dark:bg-zinc-900 overflow-hidden"
>
    <img
      key={activeImage}
      src={activeImage}
      alt={product.name}
      className="w-full h-full object-cover object-center md:rounded-2xl"
    />
  </motion.div>

  {/* TOP ICONS */}
  <div className="absolute top-5 left-5 right-5 flex items-center justify-between z-10">

    {/* BACK ARROW */}
    <button
      onClick={() => navigate(-1)}
      className="bg-white/30 backdrop-blur-md border border-white/20 p-3 rounded-full text-xl hover:bg-white/50 transition"
    >
      <IoIosArrowBack className="text-black"/>
    </button>

    {/* WISHLIST */}
    <button
      onClick={() => handleWishlist(product.id)}
      className="bg-white dark:bg-zinc-800 p-3 rounded-full shadow-md text-xl hover:scale-110 transition"
    >
      {liked ? (
        <FaHeart className="text-red-500" />
      ) : (
        <FaRegHeart className="text-gray-700 dark:text-white" />
      )}
    </button>

  </div>

  {/* THUMBNAILS ON IMAGE RIGHT */}
  <div className="absolute right-3 top-1/2 -translate-y-1/2 flex flex-col gap-3 max-h-100 overflow-y-auto scrollbar-hide z-10">

    {product.images?.map((img, index) => (
<motion.button
  key={img}
 initial={{ opacity: 0, x: 25 }}
animate={{ opacity: 1, x: 0 }}
transition={{
  duration: 0.6,
  delay: 1.2 + index * 0.18,
  ease: [0.22, 1, 0.36, 1],
}}
 
  onClick={() => setSelectedImage(img)}
  className={`shrink-0 w-14 h-16 md:w-20 md:h-20 rounded-xl overflow-hidden border-2 bg-white shadow-md transition ${
    selectedImage === img
      ? "border-green-600"
      : "border-transparent"
  }`}
>
        <img
          src={img}
          alt="thumbnail"
          className="w-full h-full object-cover"
        />
      </motion.button>
    ))}

  </div>

</div>

{/* RIGHT CONTENT */}
<motion.div
 initial={{ opacity: 0, y: 60 }}
animate={{ opacity: 1, y: 0 }}
transition={{
  duration: 0.8,
  delay: 0.4,
  ease: "easeOut",
}}
  className="
    relative
    md:flex-2
    z-20
    -mt-8
    px-4
    py-6
    bg-white
    dark:bg-black
    rounded-t-[1.5rem]
  "
>
<div className="flex justify-between">
<div>
<div className="flex gap-4 items-center">
 <h1 className="text-2xl md:text-3xl font-semibold dark:text-white mb-4">
 {product.name}
 </h1>

</div>
 {/* RATING */}
 

<div className="flex items-center gap-3 mb-5">

  {/* STARS */}
  <div className="text-amber-400 text-lg">
    ★
  </div>

  <p className="text-gray-600 font-semibold dark:text-gray-300 text-sm">
    {product.rating} 
  </p>


  {/* OVERLAPPING CIRCLES */}
  <div className="flex items-center -space-x-3">
    <div className="w-6 h-6 rounded-full bg-green-500 border-2 border-white dark:border-black" />

    <div className="w-6 h-6 rounded-full bg-orange-400 border-2 border-white dark:border-black" />

    <div className="w-6 h-6 rounded-full bg-blue-500 border-2 border-white dark:border-black" />
  </div>

  {/* REVIEW COUNT */}
  <p className="text-gray-600 dark:text-gray-300 text-sm">
  +{product.reviewsCount} Reviews
  </p>

</div>







</div>

 <div className="flex items-center gap-4 mb-6 flex-wrap">
 <h2 className="text-xl md:text-2xl font-semibold text-green-600">
 ${product.price}
 </h2>
 
 </div>
</div>



 {/* DESCRIPTION */}
 <p className="font-semibold text-lg mb-2">Description</p>
 <p className="text-gray-600 dark:text-gray-300 leading-8 mb-8 text-sm md:text-lg">
 {product.description}
 </p>

 {/* DELIVERY + STOCK */}
 <p className="font-semibold text-lg mb-2">Product Details</p>
 <div className="flex flex-col gap-2 mb-8">
 <div className="flex items-center gap-2 justify-between md:justify-start">
 <span className="text-md font-semibold text-gray-700">Delivery:</span>
 <span className="text-gray-500 text-sm">{product.deliveryTime}</span>
 </div>

 <div className="flex items-center gap-2 justify-between md:justify-start">
 <span className="font-semibold text-gray-700 text-base">Stock:</span>
 <span
 className={`
 font-semibold
 text-sm
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

 <div className="flex items-center gap-2 justify-between md:justify-start">
 <span className="font-semibold text-gray-700">Unit:</span>
 <span className="text-gray-500 text-sm">{product.unit}</span>
 </div>
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
 </motion.div>

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




{/* FIXED ACTION BUTTONS */}
<motion.div
 initial={{ opacity: 0, y: 60 }}
animate={{ opacity: 1, y: 0 }}
transition={{
  duration: 0.7,
  delay: 1.5 + (product.images?.length ?? 0) * 0.15 + 0.6,
  ease: "easeOut",
}}
className="

  fixed
  bottom-0
  left-0
  w-full
  z-50
   rounded-t-[1.5rem]
  bg-white
  dark:bg-zinc-950
  border-t
  border-gray-200
  dark:border-zinc-800
  shadow-lg
  px-4
  py-3
  md:px-8
  lg:px-16
">

  <div className="
    flex
    items-center
    gap-3
    max-w-7xl
    mx-auto
    md:justify-end
  ">

    {/* ADD TO CART */}
    <div className="flex-1 md:flex-none md:w-64">
       <button
      onClick={() => handleWishlist(product.id)}
      className="
        flex
        flex-2
        md:flex-none
        md:w-64
        justify-center
        items-center
        gap-2
        whitespace-nowrap
        border
        border-gray-300
        dark:border-zinc-700
        px-4
        py-2
        rounded-full
        text-sm
        font-semibold
        cursor-pointer
        bg-green-600
        text-white
        dark:bg-zinc-900
      "
    >
      Add to cart

     <AddToCartButton product={product} />
    </button>
      
    </div>


    {/* FAVOURITE */}
    <button
      onClick={() => handleWishlist(product.id)}
      className="
        flex
        flex-1
        md:flex-none
        md:w-64
        justify-center
        items-center
        gap-2
        border
        border-gray-300
        dark:border-zinc-700
        px-4
        py-4
        rounded-full
        text-sm
        font-semibold
        cursor-pointer
        bg-gray-50
        dark:bg-zinc-900
      "
    >
   

      {liked ? (
        <FaHeart className="text-red-500 text-xl" />
      ) : (
        <FaRegHeart className="text-xl" />
      )}
    </button>

  </div>
</motion.div>


 </div>
 );
}