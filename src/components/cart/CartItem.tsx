import { Link } from "react-router-dom";

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

 return (
 <div className="min-h-screen md:mt-10 mb-20 bg-gray-50 dark:bg-black px-5 md:px-10 py-10">

 {/* PAGE HEADER */}
 <div className="mb-10">
 <h1 className="text-2xl md:text-4xl font-bold dark:text-white">
 Shopping Cart
 </h1>

 <p className="text-gray-500 mt-2">
 {totalCartItems} Items in your cart
 </p>
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

 {/* CLEAR CART */}
 <div className="flex justify-end mb-5 px-2">
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

 {/* CART ITEMS */}
 <div className="space-y-5">

 {cartItems.map((item) => (

 <div
 key={item.id}
 className="
 bg-white
 dark:bg-zinc-900
 rounded-3xl
 p-4
 md:p-5
 shadow-sm
 flex
 flex-col
 md:flex-row
 gap-2
 "
 >

{/* IMAGE */}
 <div className="w-[140px] md:w-[150px] md:h-[150px] rounded-2xl overflow-hidden bg-gray-100">
 <img
 src={item.image}
 alt={item.name}
 className="
 w-full
 h-full
 object-cover
 "
 />
 </div>

 {/* CONTENT */}
 <div className="flex-1 flex flex-col justify-between">

 {/* TOP */}
 <div>

 <div className="flex justify-between gap-4">

 <div>
 <h2 className="text-xl md:text-2xl font-bold dark:text-white">
 {item.name}
 </h2>

 <p className="text-gray-500 mt-2">
 {item.unit}
 </p>
 </div>

 {/* REMOVE */}
 <button
 onClick={() =>
 removeFromCart(item.id)
 }
 className="
 text-red-500
 text-xl
 cursor-pointer
 h-fit
 "
 >
 <MdDelete />
 </button>

 </div>

 {/* PRICE */}
 <div className="mt-5 flex items-center gap-3">

 <h3 className="text-2xl font-bold text-green-600">
 ${item.price}
 </h3>

 {item.oldPrice && (
 <p className="text-gray-400 line-through">
 ${item.oldPrice}
 </p>
 )}

 </div>

 </div>

 {/* BOTTOM */}
 <div className="flex flex-col md:flex-row md:items-center justify-between mt-6 gap-5">

 {/* QUANTITY */}
 <div className="
 flex
 items-center
 gap-5
 bg-gray-100
 dark:bg-zinc-800
 rounded-full
 px-5
 py-3
 w-fit
 ">

 <button
 onClick={() =>
 decreaseQuantity(item.id)
 }
 className="
 text-xl
 font-bold
 cursor-pointer
 "
 >
 -
 </button>

 <span className="font-semibold text-lg">
 {item.quantity}
 </span>

 <button
 onClick={() =>
 increaseQuantity(item.id)
 }
 className="
 text-xl
 font-bold
 cursor-pointer
 "
 >
 +
 </button>

 </div>

 {/* SUBTOTAL */}
 <div>

 <p className="text-gray-500 text-sm">
 Subtotal
 </p>

 <h3 className="text-2xl font-bold dark:text-white">
 $
 {(
 item.price *
 item.quantity
 ).toFixed(2)}
 </h3>

 </div>

 </div>

 </div>

 </div>

 ))}

 </div>

 </div>

 {/* RIGHT SIDE */}
 <div>

 <div className="
 bg-white
 dark:bg-zinc-900
 rounded-3xl
 p-6
 shadow-sm
 sticky
 top-25
 ">

 <h2 className="text-2xl font-bold mb-8 dark:text-white">
 Order Summary
 </h2>

 {/* SUMMARY ROWS */}
 <div className="space-y-5">

 <div className="flex justify-between">
 <p className="text-gray-500">
 Subtotal
 </p>

 <p className="font-semibold dark:text-white">
 ${subtotal.toFixed(2)}
 </p>
 </div>

 <div className="flex justify-between">
 <p className="text-gray-500">
 Delivery
 </p>

 <p className="font-semibold dark:text-white">
 ${deliveryFee.toFixed(2)}
 </p>
 </div>

 <div className="border-t pt-5 flex justify-between">

 <h3 className="text-xl font-bold dark:text-white">
 Total
 </h3>

 <h3 className="text-2xl font-bold text-green-600">
 ${total.toFixed(2)}
 </h3>

 </div>

 </div>

 {/* CHECKOUT BUTTON */}
 <button
 className="
 mt-8
 w-full
 bg-green-600
 hover:bg-green-700
 transition
 text-white
 py-4
 rounded-full
 font-semibold
 text-lg
 cursor-pointer
 "
 >
    <Link to="/checkout">
    Proceed To Checkout
    </Link>
 
 </button>

 {/* TRUST BADGES */}
 <div className="mt-8 space-y-4">

 <div className="flex items-center gap-3">
 <FaCheck className="text-2xl text-green-600"/>
 <p className="text-gray-500 text-sm">
 Secure checkout
 </p>
 </div>

 <div className="flex items-center gap-3">
 <span>🚚</span>
 <p className="text-gray-500 text-sm">
 Fast delivery within 90 mins
 </p>
 </div>

 <div className="flex items-center gap-3">
 <span>🌱</span>
 <p className="text-gray-500 text-sm">
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