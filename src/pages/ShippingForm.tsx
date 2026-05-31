import { useState, useEffect } from "react";

type ShippingFormData = {
 fullName: string;
 phone: string;
 address: string;
 city: string;
 notes: string;
};

type ShippingFormProps = {
 form?: ShippingFormData;
 setForm?: React.Dispatch<React.SetStateAction<ShippingFormData>>;
};

export default function ShippingForm({
 form: controlledForm,
 setForm: setControlledForm,
}: ShippingFormProps) {
 const [internalForm, setInternalForm] = useState<ShippingFormData>(() => {
 const saved = localStorage.getItem("shippingInfo");

 return saved
 ? JSON.parse(saved)
 : {
 fullName: "",
 phone: "",
 address: "",
 city: "",
 notes: "",
 };
 });

 const form = controlledForm ?? internalForm;
 const setForm = setControlledForm ?? setInternalForm;

 const handleChange = (
 e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
 ) => {
 setForm((prev) => ({
 ...prev,
 [e.target.name]: e.target.value,
 }));
 };

 useEffect(() => {
 localStorage.setItem(
 "shippingInfo",
 JSON.stringify(form)
 );
 }, [form]);

 return (
 <div className="bg-white dark:bg-zinc-900 p-6 md:p-8 rounded-3xl shadow-sm">
<h1 className="text-2xl md:text-4xl font-semibold mb-4">Shipping Method</h1>
 <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

 <input
 name="fullName"
 value={form.fullName}
 onChange={handleChange}
 placeholder="Full Name"
 className="w-full px-4 py-3 rounded-full bg-white focus:ring-1 focus:ring-green-600 focus:bg-white focus:border-green-600 focus:outline-none border border-gray-200 shadow-lg"
 />

 <input
 name="phone"
 value={form.phone}
 onChange={handleChange}
 placeholder="Phone Number"
 className="w-full px-4 py-3 rounded-full bg-white focus:ring-1 focus:ring-green-600 focus:bg-white focus:border-green-600 focus:outline-none border border-gray-200 shadow-lg "
 />
 </div>

 <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-4">

 <input
 name="address"
 value={form.address}
 onChange={handleChange}
 placeholder="Address"
  className="w-full px-4 py-3 rounded-full bg-white focus:ring-1 focus:ring-green-600 focus:bg-white focus:border-green-600 focus:outline-none border border-gray-200 shadow-lg"
 />

 <input
 name="city"
 value={form.city}
 onChange={handleChange}
 placeholder="City"
  className="w-full px-4 py-3 rounded-full bg-white focus:ring-1 focus:ring-green-600 focus:bg-white focus:border-green-600 focus:outline-none border border-gray-200 shadow-lg"
 />
 </div>

 <textarea
 name="notes"
 value={form.notes}
 onChange={handleChange}
 placeholder="Notes (optional)"
 rows={4}
  className="w-full px-5 py-3 rounded-2xl md:rounded-4xl bg-white focus:ring-1 focus:ring-green-600 focus:bg-white focus:border-green-600 focus:outline-none mt-4 border border-gray-200 shadow-lg"
 />

 </div>
 );
}