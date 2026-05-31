
import { useCart } from "../../hooks/useCart";
import { motion } from "framer-motion";
import { FiShoppingCart } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

const MiniCart = () => {
 const {
 cartItems,
 isMiniCartOpen,
 closeMiniCart,
 openCart,
 totalCartItems,

 } = useCart();

 
 return (
 <motion.div
 initial={{ y: 100, opacity: 0 }}
 animate={{ y: isMiniCartOpen ? 0 : 100, opacity: isMiniCartOpen ? 1 : 0 }}
 transition={{ type: "spring", stiffness: 300, damping: 25 }}
 className="fixed bottom-25  md:right-50 h-[100px] md:h-[80px] md:left-50 md:bottom-5 right-10 left-10 bg-[#0d943f] shadow-xl rounded-xl p-4 z-50 flex items-center gap-4"
>
 {/* LEFT: CART ITEMS */}
 {cartItems.length === 0 ? (
 <p className="text-white text-sm">Cart is empty</p>
 ) : (
 <div className="flex items-center  gap-3 overflow-x-scroll overflow-y-hidden flex-1 scrollbar-hide">
 {cartItems.map((item) => (
 <div
 key={item.id}
 className=" flex items-center h-[80px] gap-2 shrink-0"
 >
 {/* IMAGE WRAPPER */}
 <div className="relative w-12 h-12 flex items-center justify-center bg-white rounded-full shrink-0">
 <img
 src={item.image}
 className="w-8 h-8 object-cover rounded-full"
 />

 {/* QUANTITY BADGE */}
 <div className="absolute -top-1 -right-1 bg-red-500 w-5 h-5 flex items-center justify-center rounded-full">
 <p className="text-[10px] text-white">
 {item.quantity}
 </p>
 </div>
 </div>
 </div>
 ))}
 </div>
 )}

 {/* RIGHT: CONTROLS */}
 <div className="flex items-center gap-3 shrink-0 relative">

 {/* CLOSE BUTTON */}

<IoClose
 onClick={closeMiniCart}
 className="text-white text-2xl cursor-pointer"
/>


 {/* VIEW BASKET */}
 <button
 className="text-white cursor-pointer font-bold text-sm hover:underline whitespace-nowrap"
 onClick={openCart}
 >
 View Basket
 </button>

 {/* CART ICON */}
 
<Link to="/cart-page">
 <div className="relative cursor-pointer" > 

 <FiShoppingCart className="text-3xl text-white" />

 {totalCartItems > 0 && (
 <motion.span
 
 initial={{ scale: 0.5 }}
 animate={{ scale: 1 }}
 className="absolute -top-1 left-5 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center"
 >
 {totalCartItems}
 </motion.span>
 )}

 </div>
 </Link>
 </div>
 </motion.div>
 );
};

export default MiniCart;