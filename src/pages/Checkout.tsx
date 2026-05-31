import { useState } from "react";
import { useCart } from "../hooks/useCart";
import { useToast } from "../hooks/useToast";
import PaymentMethod from "./PaymentMethod";
import { useNavigate } from "react-router-dom";
import ShippingForm from "./ShippingForm";
import type { Order } from "../types/order.types";

export default function CheckoutPage() {
 const [step, setStep] = useState(1);
const { showToast } = useToast();
 const navigate = useNavigate();

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

 setStep((prev) => prev + 1);
};
 const prevStep = () => setStep((prev) => prev - 1);

 const handlePlaceOrder = () => {
 if (!paymentMethod) return;

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
    <div className="flex md:mt-20 pr-4 mb-10">
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
 <div className="space-y-6">

 <ShippingForm form={form} setForm={setForm} />

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

 <button
 onClick={nextStep}
 className="w-full bg-green-600 text-white py-3 cursor-pointer font-semibold rounded-xl"
 >
 Continue to Review
 </button>

 </div>
 )}



 {/* STEP 2 */}
 {step === 2 && (
 <div className="max-w-5xl mx-auto">

 <h2 className="text-2xl md:text-3xl font-bold mb-8">
 Review Your Order
 </h2>

 <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

 {/* LEFT SIDE */}
 <div className="lg:col-span-2 space-y-6">

 {/* SHIPPING */}
 <div className="bg-white dark:bg-zinc-900 shadow-sm rounded-2xl p-6">

 <h3 className="font-semibold text-lg mb-4">
 Shipping Details
 </h3>

 <div className="space-y-1 text-gray-600 dark:text-gray-300">
 <p><span className="font-medium">Name:</span> {form.fullName}</p>
 <p><span className="font-medium">Phone:</span> {form.phone}</p>
 <p><span className="font-medium">Address:</span> {form.address}</p>
 <p><span className="font-medium">City:</span> {form.city}</p>
 </div>

 </div>

 {/* PAYMENT */}
 <div className="bg-white dark:bg-zinc-900 shadow-sm rounded-2xl p-6">

 <h3 className="font-semibold text-lg mb-4">
 Payment Method
 </h3>

 <p className="text-gray-600 dark:text-gray-300 capitalize">
 {paymentMethod || "Not selected"}
 </p>

 </div>

 {/* ITEMS */}
 <div className="bg-white dark:bg-zinc-900 shadow-sm rounded-2xl p-6">

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

 </div>

 </div>

 {/* RIGHT SIDE - ORDER SUMMARY */}
 <div className="lg:col-span-1">

 <div className="bg-white dark:bg-zinc-900 shadow-md rounded-2xl p-6 sticky top-20">

 <h3 className="text-lg font-bold mb-6">
 Order Summary
 </h3>

 {/* CALCULATION */}
 <div className="space-y-3 text-gray-600 dark:text-gray-300">

 <div className="flex justify-between">
 <p>Subtotal</p>
 <p>${subtotal.toFixed(2)}</p>
 </div>

 <div className="flex justify-between">
 <p>Delivery Fee</p>
 <p className="text-green-600">
 ${DELIVERY_FEE.toFixed(2)}
 </p>
 </div>

 <div className="flex justify-between">
 <p>Tax</p>
 <p>$0.00</p>
 </div>

</div>

<hr className="my-5 text-gray-200" />

<div className="flex justify-between font-bold text-lg">
 <p>Total</p>
 <p className="text-green-600">${total.toFixed(2)}</p>
</div>

 <hr className="my-5  text-gray-200" />



 {/* BUTTONS */}
 <div className="mt-6 gap-3 flex items-center">

 <button
 onClick={handlePlaceOrder}
 className="w-full cursor-pointer hover:bg-white bg-green-600 text-white py-3 rounded-xl font-semibold  transition hover:text-black shadow-sm"
 >
 Place Order
 </button>

 <button
 onClick={prevStep}
 className="w-full hover:bg-green-600 shadow-sm hover:text-white cursor-pointer py-3  rounded-xl font-semibold "
 >
 Back
 </button>

 </div>

 </div>

 </div>

 </div>

</div>
 )}

 </div>
    </div>

 );
}