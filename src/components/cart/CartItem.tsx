import { Link } from "react-router-dom";
import { motion, type Variants } from "framer-motion";
import { useCart } from "../../hooks/useCart";
import { FaCheck } from "react-icons/fa6";

import { MdDelete } from "react-icons/md";
const CartPage = () => {
 const {
 cartItems,
 increaseQuantity,
 decreaseQuantity,
 totalCartItems,
 removeFromCart,
 clearCart,
 } = useCart();

 const subtotal = cartItems.reduce(
 (sum, item) =>
 sum + item.price * item.quantity,
 0
 );

 const deliveryFee =
 cartItems.length > 0 ? 10 : 0;

 const total = subtotal + deliveryFee;

const cartVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

 return (
 <div className="min-h-screen md:pt-10 pb-20 bg-gray-50 dark:bg-black px-5 md:px-10 py-10">

 <div className="mb-10 flex justify-between items-center" >
 <div >
 <h1 className="text-2xl md:text-4xl font-bold dark:text-white">
 Shopping Cart
 </h1>

 <p className="text-gray-500 mt-2">
 {totalCartItems} Items in your cart
 </p>
 </div>

 {/* CLEAR CART */}
 <div className="">
 <button
 onClick={clearCart}
 className="
 text-red-500
 font-bold
 cursor-pointer
 "
 >
 Clear Cart
 </button>
 </div>
</div>
 {cartItems.length === 0 ? (

 /* EMPTY STATE */
 <div className="flex flex-col items-center justify-center py-30 text-center">

 <div className="text-7xl mb-5">
 🛒
 </div>

 <h2 className="text-3xl font-bold mb-3 dark:text-white">
 Your cart is empty
 </h2>

 <p className="text-gray-500 mb-8">
 Looks like you haven’t added anything yet
 </p>

 <Link
 to="/products"
 className="
 bg-green-600
 hover:bg-green-700
 transition
 text-white
 px-8 py-4
 rounded-full
 font-semibold
 "
 >
 Continue Shopping
 </Link>

 </div>

 ) : (

 <div className="grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-10">

 {/* LEFT SIDE */}
 <div>

 

 {/* CART ITEMS */}
<motion.div
 variants={cartVariants}
 initial="hidden"
 animate="visible" 
 className="space-y-5">

 {cartItems.map((item) => (
 <motion.div
 key={item.id}
 variants={itemVariants}
 className="flex gap-4 rounded-2xl bg-white p-3 shadow-sm ring-1 ring-black/5 dark:bg-zinc-900 dark:ring-white/10 md:p-4"
 >
 {/* IMAGE */}
 <div className="h-24 w-24 shrink-0 overflow-hidden rounded-xl bg-gray-100 md:h-32 md:w-32">
 <img
 src={item.image}
 alt={item.name}
 className="h-full w-full object-cover"
 />
 </div>

 {/* CONTENT */}
 <div className="flex min-w-0 flex-1 flex-col justify-between">
 {/* Name, price, delete */}
 <div className="flex items-start justify-between gap-2">
 <div className="min-w-0">
 <h2 className="truncate text-base font-semibold dark:text-white md:text-lg">
 {item.name}
 </h2>
 <div className="mt-1 flex items-baseline gap-2">
 <span className="text-sm font-bold text-green-600 md:text-base">
 ${item.price}
 </span>
 {item.oldPrice && (
 <span className="text-xs text-gray-400 line-through">
 ${item.oldPrice}
 </span>
 )}
 </div>
 </div>

 <button
 onClick​={() => removeFromCart(item.id)}
 aria-label="Remove item"
 className="rounded-full p-2 text-lg text-gray-400 transition-colors hover:bg-red-50 hover:text-red-500 dark:hover:bg-red-500/10"
 >
 <MdDelete />
 </button>
 </div>

 {/* Stepper + subtotal */}
 <div className="mt-3 flex items-center justify-between gap-3">
 <div className="inline-flex items-center gap-1 rounded-full bg-gray-100 p-1 dark:bg-zinc-800">
 <button
 onClick={() => decreaseQuantity(item.id)}
 aria-label="Decrease quantity"
 className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-base font-bold shadow-sm active:scale-90 dark:bg-zinc-700 dark:text-white"
 >
 −
 </button>
 <span className="min-w-6 text-center text-sm font-semibold dark:text-white">
 {item.quantity}
 </span>
 <button
 onClick={() => increaseQuantity(item.id)}
 aria-label="Increase quantity"
 className="flex h-7 w-7 items-center justify-center rounded-full bg-green-600 text-base font-bold text-white shadow-sm active:scale-90"
 >
 +
 </button>
 </div>

 <div className="text-right">
 <p className="text-[10px] uppercase tracking-wide text-gray-400">
 Subtotal
 </p>
 <p className="text-base font-bold dark:text-white md:text-lg">
 ${(item.price * item.quantity).toFixed(2)}
 </p>
 </div>
 </div>
 </div>
 </motion.div>
))}

 </motion.div>

 </div>

 {/* RIGHT SIDE */}
 <div>

 <div className="sticky top-24 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-black/5 dark:bg-zinc-900 dark:ring-white/10 md:p-6 mb-5">
 <h2 className="text-lg font-bold dark:text-white">Order Summary</h2>

 {/* SUMMARY ROWS */}
 <div className="mt-5 space-y-3 text-sm text-gray-500 dark:text-gray-400">
 <div className="flex justify-between">
 <p>Subtotal</p>
 <p className="font-medium text-gray-900 dark:text-white">
 ${subtotal.toFixed(2)}
 </p>
 </div>

 <div className="flex justify-between">
 <p>Delivery</p>
 <p className="font-medium text-gray-900 dark:text-white">
 ${deliveryFee.toFixed(2)}
 </p>
 </div>
 </div>

 {/* TOTAL */}
 <div className="mt-5 flex items-center justify-between rounded-xl bg-green-50 px-4 py-3 dark:bg-green-500/10">
 <p className="font-semibold dark:text-white">Total</p>
 <p className="text-xl font-bold text-green-600">${total.toFixed(2)}</p>
 </div>

 {/* CHECKOUT BUTTON */}
 <Link
 to="/checkout"
 className="mt-5 block w-full rounded-full bg-green-600 py-3.5 text-center font-semibold text-white shadow-lg shadow-green-600/20 transition hover:bg-green-700 active:scale-[0.98]"
 >
 Proceed to Checkout
 </Link>

 {/* TRUST BADGES */}
 <div className="mt-5 space-y-3 border-t border-gray-100 pt-5 dark:border-zinc-800">
 <div className="flex items-center gap-3">
 <FaCheck className="shrink-0 text-sm text-green-600" />
 <p className="text-xs text-gray-500 dark:text-gray-400">Secure checkout</p>
 </div>

 <div className="flex items-center gap-3">
 <span className="w-3.5 shrink-0 text-center text-sm">🚚</span>
 <p className="text-xs text-gray-500 dark:text-gray-400">
 Fast delivery within 90 mins
 </p>
 </div>

 <div className="flex items-center gap-3">
 <span className="w-3.5 shrink-0 text-center text-sm">🌱</span>
 <p className="text-xs text-gray-500 dark:text-gray-400">
 100% organic guarantee
 </p>
 </div>
 </div>
</div>
 </div>

 </div>

 )}

 </div>
 );
};

export default CartPage;