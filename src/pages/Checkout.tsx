import { useState } from "react";
import { useCart } from "../hooks/useCart";
import { useToast } from "../hooks/useToast";
import PaymentMethod from "./PaymentMethod";
import { useNavigate } from "react-router-dom";
import ShippingForm from "./ShippingForm";
import type { Order } from "../types/order.types";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
export default function CheckoutPage() {
const location = useLocation();
const navigate = useNavigate();

const step = location.search.includes("step=2") ? 2 : 1;
const { showToast } = useToast();

 const { cartItems, clearCart } = useCart();

 // SHIPPING STATE
 const [form, setForm] = useState({
 fullName: "",
 phone: "",
 address: "",
 city: "",
 notes: "",
 });

 // PAYMENT STATE
 const [paymentMethod, setPaymentMethod] = useState("");
const steps = ["Shipping", "Review", "success"];
 const [cardNumber, setCardNumber] = useState("");
 const [expiry, setExpiry] = useState("");
 const [cvv, setCvv] = useState("");
 const [cardName, setCardName] = useState("");
const validateStep1 = () => {
 // SHIPPING VALIDATION
 if (
 !form.fullName ||
 !form.phone ||
 !form.address ||
 !form.city
 ) {
 return "Please complete shipping details";
 }

 // PAYMENT VALIDATION
 if (!paymentMethod) {
 return "Please select a payment method";
 }

 // CARD VALIDATION (ONLY IF CARD IS SELECTED)
 if (paymentMethod === "card") {
 if (cardNumber.replace(/\s/g, "").length !== 16) {
 return "Invalid card number";
 }

 if (expiry.length !== 5) {
 return "Invalid expiry date";
 }

 if (cvv.length !== 3) {
 return "Invalid CVV";
 }

 if (!cardName) {
 return "Card holder name required";
 }
 }

 return null;
};
const subtotal = cartItems.reduce(
 (sum, item) => sum + item.price * item.quantity,
 0
);
const DELIVERY_FEE = 10;
const total = subtotal + DELIVERY_FEE;

 const nextStep = () => {
const error = validateStep1();

 if (error) {
showToast(error, "error");// later we can replace with toast
 return;
 }

navigate("/checkout?step=2")
};
 const prevStep = () => navigate("/checkout");

 const handlePlaceOrder = () => {
 console.log("payment:", paymentMethod);

 const order: Order = {
 id: Date.now().toString(),
 items: cartItems,
 total,
 status: "processing",
 createdAt: new Date().toISOString(),
 };

 const existingOrders = JSON.parse(localStorage.getItem("orders") || "[]");
 localStorage.setItem("orders", JSON.stringify([order, ...existingOrders]));

 clearCart();
 navigate("/order-success");
};

 return (
    <div className="  flex bg-white md:mt-20 pr-4 pb-10">
<div className="hidden md:flex md:flex-col  mt-10 gap-6 mb-10">

 {steps.map((label, index) => {

 const isCompleted = step > index + 1;
 const isActive = step === index + 1;

 return (
 <div key={label} className=" px-2 flex flex-col items-start">

 {/* STEP ROW */}
 <div className="flex items-center gap-3">

 {/* CIRCLE */}
 <div
 className={`
 w-9 h-9 rounded-full flex items-center justify-center font-bold
 ${
 isCompleted
 ? "bg-green-800 text-white"
 : isActive
 ? "bg-green-600 text-green-200"
 : "bg-gray-200 text-gray-500"
 }
 `}
 >
 {isCompleted ? "✓" : index + 1}
 </div>

 {/* LABEL */}
 <div className="font-medium">
 {label}
 </div>

 </div>

 {/* VERTICAL LINE (ONLY IF NOT LAST ITEM) */}
 {index < steps.length - 1 && (
 <div className="ml-4 h-70 mt-2 mb-2 md:h-70 border-l-2 border-gray-200" />
 )}

 </div>
 );
 })}

</div>



 <div className="flex-1  min-h-screen px-5 py-10">

 {/* STEP 1 */}
 {step === 1 && (
 <div className="space-y-6 ">
<motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
    >
 <ShippingForm form={form} setForm={setForm} />
</motion.div>
 <PaymentMethod
 paymentMethod={paymentMethod}
 setPaymentMethod={setPaymentMethod}
 cardNumber={cardNumber}
 setCardNumber={setCardNumber}
 expiry={expiry}
 setExpiry={setExpiry}
 cvv={cvv}
 setCvv={setCvv}
 cardName={cardName}
 setCardName={setCardName}
 />
<div className="">
 <button
 onClick={nextStep}
 className="w-full  bg-green-600 text-white py-3 cursor-pointer font-semibold rounded-xl"
 >
 Continue to Review
 </button>
</div>
 </div>
 )}



 {/* STEP 2 */}

{cartItems.length === 0 ?(
<div className="text-center mt-20">
 <h2 className="text-xl font-semibold">Your cart is empty shop to see orders</h2>
 <button
 onClick={() => navigate("/products")}
 className="mt-4 bg-green-600 cursor-pointer text-white px-4 py-2 rounded"
 >
 Start Shopping
 </button>
 </div>
):(
step === 2 && (
 <div className="max-w-5xl mx-auto">

 <h2 className="text-2xl md:text-3xl font-bold mb-8">
 Review Your Order
 </h2>

 <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

 {/* LEFT SIDE */}
 <div className="lg:col-span-2 space-y-6">

 {/* SHIPPING */}
 <motion.div
  initial={{ opacity: 0, y: 45 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{ duration: 0.9, ease: "easeOut" }}
 className="bg-white dark:bg-zinc-900 shadow-sm rounded-2xl p-6">

 <h3 className="font-semibold text-lg mb-4">
 Shipping Details
 </h3>

 <div className="space-y-1 text-gray-600 dark:text-gray-300">
 <p><span className="font-medium">Name:</span> {form.fullName}</p>
 <p><span className="font-medium">Phone:</span> {form.phone}</p>
 <p><span className="font-medium">Address:</span> {form.address}</p>
 <p><span className="font-medium">City:</span> {form.city}</p>
 </div>

 </motion.div>

 {/* PAYMENT */}
<motion.div
  initial={{ opacity: 0, y: 45 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{ duration: 0.9, ease: "easeOut" }} className="bg-white dark:bg-zinc-900 shadow-sm rounded-2xl p-6">

 <h3 className="font-semibold text-lg mb-4">
 Payment Method
 </h3>

 <p className="text-gray-600 dark:text-gray-300 capitalize">
 {paymentMethod || "Not selected"}
 </p>

 </motion.div>

 {/* ITEMS */}
 <motion.div
  initial={{ opacity: 0, y: 45 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{ duration: 0.9, ease: "easeOut" }} className="bg-white dark:bg-zinc-900 shadow-sm rounded-2xl p-6">

 <h3 className="font-semibold text-lg mb-4">
 Items in your order
 </h3>

 <div className="space-y-4">

 {cartItems.map((item) => (
 <div
 key={item.id}
 className="flex justify-between items-center pb-3 last:border-b-0"
 >
<div className="flex items-center gap-2">
   <div className="w-10">
      <img src={item.image} alt="" />
   </div>
 <div>
 <p className="font-medium">
 {item.name}
 </p>

 <p className="text-sm text-gray-700">
 Quantity: {item.quantity}
 </p>
 </div>

</div>
<p className="font-semibold">
 ${(item.price * item.quantity).toFixed(2)}
 </p>


 
 </div>
 ))}

 </div>

 </motion.div>

 </div>

 {/* RIGHT SIDE - ORDER SUMMARY */}
 <div className="lg:col-span-1">
 <motion.div
 initial={{ opacity: 0, y: 45 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, amount: 0.2 }}
 transition={{ duration: 0.9, ease: "easeOut" }}
 className="sticky top-20 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-black/5 dark:bg-zinc-900 dark:ring-white/10 md:p-6"
 >
 <h3 className="text-lg font-bold dark:text-white">Order Summary</h3>

 {/* CALCULATION */}
 <div className="mt-5 space-y-3 text-sm text-gray-500 dark:text-gray-400">
 <div className="flex justify-between">
 <p>Subtotal</p>
 <p className="font-medium text-gray-900 dark:text-white">
 ${subtotal.toFixed(2)}
 </p>
 </div>

 <div className="flex justify-between">
 <p>Delivery fee</p>
 <p className="font-medium text-gray-900 dark:text-white">
 ${DELIVERY_FEE.toFixed(2)}
 </p>
 </div>

 <div className="flex justify-between">
 <p>Tax</p>
 <p className="font-medium text-gray-900 dark:text-white">$0.00</p>
 </div>
 </div>

 {/* TOTAL */}
 <div className="mt-5 flex items-center justify-between rounded-xl bg-green-50 px-4 py-3 dark:bg-green-500/10">
 <p className="font-semibold dark:text-white">Total</p>
 <p className="text-xl font-bold text-green-600">${total.toFixed(2)}</p>
 </div>

 {/* BUTTONS */}
 <div className="mt-5 space-y-2">
 <button
 onClick​={handlePlaceOrder}
 className="w-full cursor-pointer rounded-full bg-green-600 py-3.5 font-semibold text-white shadow-lg shadow-green-600/20 transition hover:bg-green-700 active:scale-[0.98]"
 >
 Place Order
 </button>

 <button
 onClick​={prevStep}
 className="w-full cursor-pointer rounded-full py-3 text-sm font-semibold text-gray-600 transition hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-zinc-800"
 >
 Back
 </button>
 </div>

 {/* TRUST NOTE */}
 <p className="mt-4 text-center text-xs text-gray-400">
 🔒 Secure checkout · Delivery within 90 mins
 </p>
 </motion.div>
</div>
 </div>

</div>
 )
)}
 
 </div>
    </div>

 );
}