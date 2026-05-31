//import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../hooks/useCart";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { IoClose } from "react-icons/io5";
const CartDrawer = () => {
 const { isCartOpen, closeCart,increaseQuantity,closeMiniCart, decreaseQuantity, cartItems,totalPrice } = useCart();
 const navigate=useNavigate()
const goToCart = () => {
 closeMiniCart();
 closeCart();
 navigate("/cart-page");
};

useEffect(() => {
 if (isCartOpen) {
 document.body.style.overflow = "hidden";
 } else {
 document.body.style.overflow = "auto";
 }

 return () => {
 document.body.style.overflow = "auto";
 };
}, [isCartOpen]);

 return (
 <>
 
 {/* BACKDROP */}
 {isCartOpen && (
 <div
 onClick={closeCart}
 className="fixed inset-0 bg-black/50 z-40"
 />
 )}

 {/* DRAWER */}
<motion.div
 initial={{ y: "100%" }}
 animate={{ y: isCartOpen ? 0 : "100%" }}
 transition={{ type: "spring", stiffness: 300, damping: 30 }}
 drag="y"
 dragConstraints={{ top: 0, bottom: 300 }}
 dragElastic={0.2}
 onDragEnd={(_, info) => {
 if (info.offset.y > 120) {
 closeCart();
 }
 }}
 className="fixed touch-none bg-white shadow-2xl z-100 flex flex-col bottom-0 left-0 rounded-2xl md:rounded-lg w-full lg:w-[400px] lg:top-0 lg:left-auto lg:right-0 h-[80vh] lg:h-full"
>
   <div className="w-full flex justify-center py-2 lg:hidden">
 <div className="w-12 h-1 bg-gray-300 rounded-full" />
</div> 
 <div className="p-4  flex justify-between">
 
<IoClose onClick={closeCart} className="text-2xl cursor-pointer" />
 </div>

 <div className="p-4  space-y-4 overflow-y-auto flex-1">
 {cartItems.length === 0 ? (
 <p className="text-gray-500">Cart is empty</p>
 ) : (
 cartItems.map((item) => (
 <div
 key={item.id}
 className="flex justify-between items-center  pb-2"
 >
 
 {/* LEFT SIDE */}
 <div className="flex items-center gap-3">
 <img
 src={item.image}
 className="w-15 h-15 object-cover rounded"
 />

 <div>
 <p className="font-semibold text-md md:text-lg">
 {item.name}
 </p>

 <p className="text-sm md:text-md text-gray-500">
 ${item.price}
 </p>
 </div>
 </div>

 {/* RIGHT SIDE - QUANTITY CONTROLS */}
 <div className="flex items-center gap-2 bg-white shadow-sm rounded-4xl py-1">
 <button
 onClick={() => decreaseQuantity(item.id)}
 className="w-7 h-7 cursor-pointer flex items-center justify-center  rounded"
 >
 -
 </button>

 <span className="w-6 text-center">
 {item.quantity}
 </span>

 <button
 onClick={() => increaseQuantity(item.id)}
 className="w-7 cursor-pointer h-7 flex items-center justify-center rounded"
 >
 +
 </button>
 </div>
 </div>
 ))
 )}
 
 </div>

<div onClick={goToCart} className="bg-green-700 cursor-pointer rounded-xl flex mb-5 justify-center items-center gap-2 py-3 mx-4">
<p  className=" font-semibold text-lg text-white ">
Go to Cart
</p>
<p className="font-bold text-white text-lg">$({totalPrice.toFixed(2)})</p>
</div>
 
 </motion.div>
 </>
 );
};

export default CartDrawer;