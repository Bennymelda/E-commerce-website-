import { useEffect, useState } from "react";

import { BsBank } from "react-icons/bs";
import { FaRegCreditCard } from "react-icons/fa6";

type Props = {
 paymentMethod?: string;
 setPaymentMethod?: (value: string) => void;

 cardNumber?: string;
 setCardNumber?: (value: string) => void;

 expiry?: string;
 setExpiry?: (value: string) => void;

 cvv?: string;
 setCvv?: (value: string) => void;

 cardName?: string;
 setCardName?: (value: string) => void;
};

const PaymentMethod = ({
 paymentMethod: controlledPaymentMethod,
 setPaymentMethod: setControlledPaymentMethod,
 cardNumber: controlledCardNumber,
 setCardNumber: setControlledCardNumber,
 expiry: controlledExpiry,
 setExpiry: setControlledExpiry,
 cvv: controlledCvv,
 setCvv: setControlledCvv,
 cardName: controlledCardName,
 setCardName: setControlledCardName,
}: Props) => {
 const [internalPaymentMethod, setInternalPaymentMethod] = useState("");
 const [internalCardNumber, setInternalCardNumber] = useState("");
 const [internalExpiry, setInternalExpiry] = useState("");
 const [internalCvv, setInternalCvv] = useState("");
 const [internalCardName, setInternalCardName] = useState("");

 const paymentMethod = controlledPaymentMethod ?? internalPaymentMethod;
 const setPaymentMethod = setControlledPaymentMethod ?? setInternalPaymentMethod;
 const cardNumber = controlledCardNumber ?? internalCardNumber;
 const setCardNumber = setControlledCardNumber ?? setInternalCardNumber;
 const expiry = controlledExpiry ?? internalExpiry;
 const setExpiry = setControlledExpiry ?? setInternalExpiry;
 const cvv = controlledCvv ?? internalCvv;
 const setCvv = setControlledCvv ?? setInternalCvv;
 const cardName = controlledCardName ?? internalCardName;
 const setCardName = setControlledCardName ?? setInternalCardName;
 useEffect(() => {
 if (paymentMethod) {
 localStorage.setItem(
 "paymentMethod",
 paymentMethod
 );
 }
 }, [paymentMethod]);

 return (
 <div className="bg-white dark:bg-zinc-900 p-6 md:p-8 rounded-3xl shadow-sm">

 <h2 className="text-2xl font-bold mb-6 dark:text-white">
 Payment Method
 </h2>

 <div className="space-y-4">

 {/* CARD PAYMENT */}
 <div
 onClick={() => setPaymentMethod("card")}
 className={`
  rounded-2xl p-5 cursor-pointer transition-all
 ${
 paymentMethod === "card"
 ? "border-green-600 bg-gray-50 dark:bg-green-950/20"
 : "border-gray-200 dark:border-zinc-700"
 }
 `}
 >

 <div className="flex items-center justify-between">

 <div className="flex items-center gap-4">

 {/* RADIO */}
 <div
 className={`
 w-5 h-5 rounded-full border-2 flex items-center justify-center
 ${
 paymentMethod === "card"
 ? "border-green-600"
 : "border-gray-400"
 }
 `}
 >
 {paymentMethod === "card" && (
 <div className="w-2.5 h-2.5 bg-green-600 rounded-full" />
 )}
 </div>

 <div>
 <h3 className="font-semibold dark:text-white">
 Card Payment
 </h3>
 <p className="text-sm text-gray-500">
 Pay securely with your card
 </p>
 </div>

 </div>

 <div className="">
   <FaRegCreditCard className="text-3xl text-green-600"/>

 </div>

 </div>

 {/* CARD FORM */}
 {paymentMethod === "card" && (
 <div className="mt-6 space-y-4">

 {/* CARD NUMBER */}
 <input
 type="text"
 placeholder="Card Number"
 value={cardNumber}
 onChange={(e) => {
 let value = e.target.value
 .replace(/\D/g, "")
 .slice(0, 16);

 value = value.replace(
 /(\d{4})(?=\d)/g,
 "$1 "
 );

 setCardNumber(value);
 }}
 className="w-full px-4 py-3 rounded-full bg-white focus:ring-1 focus:ring-green-600 focus:bg-white focus:border-green-600 focus:outline-none border border-gray-200 shadow-lg"
 />

 {/* EXPIRY + CVV */}
 <div className="grid grid-cols-2 gap-4">

 <input
 type="text"
 placeholder="MM/YY"
 value={expiry}
 onChange={(e) => {
 let value = e.target.value
 .replace(/\D/g, "")
 .slice(0, 4);

 if (value.length >= 3) {
 value =
 value.slice(0, 2) +
 "/" +
 value.slice(2);
 }

 setExpiry(value);
 }}
 className="w-full px-4 py-3 rounded-full bg-white focus:ring-1 focus:ring-green-600 focus:bg-white focus:border-green-600 focus:outline-none border border-gray-200 shadow-lg"
 />

 <input
 type="text"
 placeholder="CVV"
 value={cvv}
 onChange={(e) => {
 const value = e.target.value
 .replace(/\D/g, "")
 .slice(0, 3);

 setCvv(value);
 }}
 className="w-full px-4 py-3 rounded-full bg-white focus:ring-1 focus:ring-green-600 focus:bg-white focus:border-green-600 focus:outline-none border border-gray-200 shadow-lg"
 />

 </div>

 {/* NAME */}
 <input
 type="text"
 placeholder="Card Holder Name"
 value={cardName}
 onChange={(e) =>
 setCardName(e.target.value)
 }
className="w-full px-4 py-3 rounded-full bg-white focus:ring-1 focus:ring-green-600 focus:bg-white focus:border-green-600 focus:outline-none border border-gray-200 shadow-lg"
 />

 </div>
 )}

 </div>

 {/* BANK TRANSFER */}
 <div
 onClick={() => setPaymentMethod("transfer")}
 className={`
  rounded-2xl p-5 cursor-pointer transition-all
 ${
 paymentMethod === "transfer"
 ? "border-green-600 bg-gray-50 dark:bg-green-950/20"
 : "border-gray-200 dark:border-zinc-700"
 }
 `}
 >

 <div className="flex items-center justify-between">

 <div className="flex items-center gap-4">

 {/* RADIO */}
 <div
 className={`
 w-5 h-5 rounded-full border-2 flex items-center justify-center
 ${
 paymentMethod === "transfer"
 ? "border-green-600"
 : "border-gray-400"
 }
 `}
 >
 {paymentMethod === "transfer" && (
 <div className="w-2.5 h-2.5 bg-green-600 rounded-full" />
 )}
 </div>

 <div>
 <h3 className="font-semibold dark:text-white">
 Bank Transfer
 </h3>
 <p className="text-sm text-gray-500">
 Transfer to our account
 </p>
 </div>

 </div>

 <div className="text-3xl">
    <BsBank className="text-green-600"/>
 </div>

 </div>

 {/* BANK INFO */}
 {paymentMethod === "transfer" && (
 <div className="mt-6 bg-gray-50 dark:bg-zinc-800 p-5 rounded-2xl space-y-3">

 <div className="flex justify-between">
 <p>Bank</p>
 <p className="font-semibold">First Bank</p>
 </div>

 <div className="flex justify-between">
 <p>Account Name</p>
 <p className="font-semibold">
 FreshMart
 </p>
 </div>

 <div className="flex justify-between">
 <p>Account No</p>
 <p className="font-semibold text-green-600">
 0123456789
 </p>
 </div>

 </div>
 )}

 </div>

 </div>

 </div>
 );
};

export default PaymentMethod;