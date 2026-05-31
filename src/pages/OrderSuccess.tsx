import { useEffect } from "react";
import { Link } from "react-router-dom";
import confetti from "canvas-confetti";
import { FaCheck } from "react-icons/fa6";

const OrderSuccessPage = () => {
 const fakeOrderId = 104256;

 useEffect(() => {

 const duration = 3000;
 const animationEnd = Date.now() + duration;

 const defaults = {
 startVelocity: 30,
 spread: 360,
 ticks: 60,
 zIndex: 9999,
 };

 const interval = setInterval(() => {

 const timeLeft = animationEnd - Date.now();

 if (timeLeft <= 0) {
 clearInterval(interval);
 return;
 }

 const particleCount = 50 * (timeLeft / duration);

 confetti({
 ...defaults,
 particleCount,
 origin: {
 x: Math.random(),
 y: Math.random() - 0.2,
 },
 });

 }, 250);

 return () => clearInterval(interval);

 }, []);

 return (

 <div
 className="
 min-h-screen
 bg-gray-50 dark:bg-black
 px-5 py-10 mb-20 md:mt-10
 flex items-center justify-center
 "
 >

 <div
 className="
 w-full max-w-2xl
 bg-white dark:bg-zinc-900
 rounded-3xl
 shadow-sm
 p-6 md:p-10
 text-center
 "
 >

 {/* SUCCESS ICON */}
 <div
 className="
 w-24 h-24
 mx-auto
 rounded-full
 bg-green-100
 flex items-center justify-center
 text-5xl
 "
 >
 <FaCheck className="text-green-600" />
 </div>

 {/* TITLE */}
 <h1
 className="
 text-3xl md:text-5xl
 font-bold
 mt-8
 dark:text-white
 "
 >
 Order Successful
 </h1>

 {/* TEXT */}
 <p
 className="
 text-gray-500
 mt-4
 text-base md:text-lg
 leading-relaxed
 "
 >
 Your order has been placed successfully.
 Our team is preparing your fresh products.
 </p>

 {/* ORDER CARD */}
 <div
 className="
 mt-10
 bg-gray-50 dark:bg-zinc-800
 rounded-2xl
 p-6
 text-left
 space-y-5
 "
 >

 {/* ORDER ID */}
 <div className="flex justify-between gap-4">
 <p className="text-gray-500">
 Order ID
 </p>

 <p className="font-bold text-green-600">
 #{fakeOrderId}
 </p>
 </div>

 {/* DELIVERY */}
 <div className="flex justify-between gap-4">
 <p className="text-gray-500">
 Estimated Delivery
 </p>

 <p className="font-semibold dark:text-white text-right">
 20 - 30 mins
 </p>
 </div>

 {/* STATUS */}
 <div className="flex justify-between gap-4">
 <p className="text-gray-500">
 Status
 </p>

 <p className="font-semibold text-green-600 text-right">
 Processing
 </p>
 </div>

 {/* PAYMENT */}
 <div className="flex justify-between gap-4">
 <p className="text-gray-500">
 Payment
 </p>

 <p className="font-semibold dark:text-white text-right">
 Paid Successfully
 </p>
 </div>

 </div>

 {/* BUTTONS */}
 <div
 className="
 mt-10
 flex flex-col md:flex-row
 gap-4
 "
 >

 {/* CONTINUE SHOPPING */}
 <Link
 to="/products"
 className="
 flex-1
 bg-green-600
 hover:bg-green-700
 text-white
 py-4
 rounded-4xl
 font-semibold
 transition
 "
 >
 Continue Shopping
 </Link>

 

 </div>

 </div>

 </div>
 );
};

export default OrderSuccessPage;