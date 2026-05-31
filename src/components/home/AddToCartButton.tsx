
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
 whileTap={{ scale: 0.95 }}
 onClick={handleAdd}
 className=" bg-white  flex items-center justify-center w-10 h-10  text-white py-2 rounded-full"
 >
<FaPlus className="text-black cursor-pointer font-bold"></FaPlus>
 </motion.button>
 ) : (
 <motion.div
 key="qty"
 initial={{ opacity: 0, scale: 0.8 }}
 animate={{ opacity: 1, scale: 1 }}
 exit={{ opacity: 0, scale: 0.8 }}
 className="flex items-center justify-between bg-white gap-4 text-white px-4 py-2 rounded-full"
 >
 
    <div onClick={handleDecrease} className="cursor-pointer bg-black flex hover:bg-gray-700 items-center justify-center w-5 h-5  text-white py-2 rounded-full" >
    <button  className="text-white cursor-pointer ">-</button>

    </div>
 
 <motion.span
 key={quantity}
 initial={{ scale: 1.4 }}
 animate={{ scale: 1 }}
 className="text-black"
 >
 {quantity}
 </motion.span>
<div onClick={() => {
 increaseQuantity(product.id);
 
 }} className=" bg-black cursor-pointer hover:bg-gray-700  flex items-center justify-center w-5 h-5  text-white py-2 rounded-full">
 <button
 
className="cursor-pointer"
 >
 +
 </button>
</div>

 </motion.div>
 )}
 </AnimatePresence>
);
};

export default AddToCartButton;