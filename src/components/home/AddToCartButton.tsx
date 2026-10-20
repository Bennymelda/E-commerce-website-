
import { useCart } from "../../hooks/useCart";
//import { triggerFlyCart } from "../../hooks/useFlyingCart";
import { useToast } from "../../hooks/useToast";
import type { Product } from "../../types/product.types";
import { motion, AnimatePresence } from "framer-motion";
import {FaPlus} from "react-icons/fa6"
const AddToCartButton = ({ product}: { product: Product; }) => {
 const {
 addToCart,
 increaseQuantity,
 decreaseQuantity,
 getQuantity,
openMiniCart
 } = useCart();


 const { showToast } = useToast();

 const quantity = getQuantity(product.id);
/*
 const handleAdd = () => {
 addToCart(product);
 openMiniCart();
 showToast(`${product.name} added to cart`, "success");
 };

const handleAdd = () => {
 const img = imageRef.current;

 addToCart(product);
 openMiniCart();
 showToast(`${product.name} added to cart`, "success");

 if (img) {
 triggerFlyCart({ image: img });
 }
};
*/

const handleAdd = () => {
 addToCart(product);
 openMiniCart();
 showToast(`${product.name} added to cart`, "success");


};
 const handleDecrease = () => {
 decreaseQuantity(product.id);

 if (quantity === 1) {
 showToast(`${product.name} removed from cart`, "error");
 }
 };

 return (
 <AnimatePresence mode="wait">
 {quantity === 0 ? (
 <motion.button
  key="add"
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  exit={{ opacity: 0, scale: 0.8 }}
  whileHover={{ scale: 1.15 }}
  whileTap={{ scale: 0.9 }}
  onClick={handleAdd}
  transition={{
    type: "spring",
    stiffness: 400,
    damping: 15,
  }}
  className="
    bg-white
    hover:bg-black
    text-black
    hover:text-white
    flex
    items-center
    justify-center
    w-8 h-8
    md:w-10 md:h-10
    shadow-sm
    rounded-full
    transition-colors
    duration-200
  "
>
  <FaPlus className="cursor-pointer font-bold" />
</motion.button>
 ) : (
<motion.div
  key="qty"
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  exit={{ opacity: 0, scale: 0.8 }}
  className="
    flex
    items-center
    justify-between
    bg-white
    gap-4
    px-4
    py-2
    rounded-full
    shadow-sm
  "
>

  {/* DECREASE */}
  <motion.button
    onClick={handleDecrease}
    whileHover={{ scale: 1.15 }}
    whileTap={{ scale: 0.9 }}
    transition={{
      type: "spring",
      stiffness: 400,
      damping: 15,
    }}
    className="
      cursor-pointer
      bg-black
      hover:bg-gray-700
      flex
      items-center
      justify-center
      w-5
      h-5
      text-white
      rounded-full
      transition-colors
      duration-200
    "
  >
    -
  </motion.button>


  {/* QUANTITY */}
  <motion.span
    key={quantity}
    initial={{ scale: 1.4 }}
    animate={{ scale: 1 }}
    transition={{
      type: "spring",
      stiffness: 400,
      damping: 15,
    }}
    className="text-black font-semibold"
  >
    {quantity}
  </motion.span>


  {/* INCREASE */}
  <motion.button
    onClick={() => {
      increaseQuantity(product.id);
    }}
    whileHover={{ scale: 1.15 }}
    whileTap={{ scale: 0.9 }}
    transition={{
      type: "spring",
      stiffness: 400,
      damping: 15,
    }}
    className="
      cursor-pointer
      bg-black
      hover:bg-gray-700
      flex
      items-center
      justify-center
      w-5
      h-5
      text-white
      rounded-full
      transition-colors
      duration-200
    "
  >
    +
  </motion.button>

</motion.div>
 )}
 </AnimatePresence>
);
};

export default AddToCartButton;