

import { useState, type FormEvent } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { useToast } from "../hooks/useToast";
import { Link, useNavigate } from "react-router-dom";

type StoredUser = {
  name?: string;
  email: string;
  password: string;
  [key: string]: unknown;
};

export default function LoginPage() {
 const [email, setEmail] = useState("");
 const [password, setPassword] = useState("");

 const [showPassword, setShowPassword] = useState(false);
 const [remember, setRemember] = useState(false);
 const [loading, setLoading] = useState(false);
const navigate=useNavigate()
 const { showToast } = useToast();

const handleLogin = async (e: FormEvent) => {
 e.preventDefault();

 if (!email || !password) {
 showToast("Fill all fields", "error");
 return;
 }

 setLoading(true);

 try {
 await new Promise((res) => setTimeout(res, 1500));

 const users = JSON.parse(
 localStorage.getItem("users") || "[]"
 ) as StoredUser[];

 const existingUser = users.find(
 (user) => user.email === email
 );

 if (!existingUser) {
 showToast("User does not exist", "error");
 return;
 }

 if (existingUser.password !== password) {
 showToast("Incorrect password", "error");
 return;
 }

 localStorage.setItem(
 "currentUser",
 JSON.stringify(existingUser)
 );

 showToast(`Welcome ${existingUser.name} 🎉`, "success");

 navigate("/"); // ✅ ONLY HERE
 } catch (error) {
 console.error(error);
 showToast("Something went wrong", "error");
 } finally {
 setLoading(false); // ✅ ONLY cleanup
 }
};

 return (
 <div className="md:mt-20 md:rounded-3xl rounded-none  bg-gray-50 dark:bg-black flex  px-5 py-10 justify-center">
<div className="hidden md:block w-100 relative">
 <img
 className="w-full h-full object-cover md:rounded-tl-3xl md:rounded-bl-3xl"
 src="/image/demo.jpg"
 />

 <div className="absolute inset-0 bg-black/50 md:rounded-tl-3xl md:rounded-bl-3xl" />
</div>
 <div className="w-full max-w-md rounded-3xl md:rounded-none bg-white dark:bg-zinc-900 md:rounded-tr-3xl md:rounded-br-3xl  shadow-sm p-6 md:p-8 md:px-10 flex flex-col justify-center">

 {/* TITLE */}
 <h1 className="text-3xl font-bold mb-2 dark:text-white">
 Welcome Back
 </h1>

 <p className=" text-gray-500 mb-8">
 Login to continue shopping
 </p>

 {/* FORM */}
 <form onSubmit={handleLogin} className="space-y-5">

 {/* EMAIL */}
 <input
 type="email"
 placeholder="Email Address"
 value={email}
 onChange={(e) =>
 setEmail(e.target.value)
 }
className="
 w-full
 border
 border-gray-200
 rounded-xl
 mt-2
 px-4 py-3
 bg-gray-100
 focus:outline-none
 focus:ring-2
 focus:ring-green-600
 dark:bg-zinc-800
 dark:border-zinc-700
 dark:text-white
 "
 />

 {/* PASSWORD */}
 <div className="relative">

 <input
 type={
 showPassword
 ? "text"
 : "password"
 }
 placeholder="Password"
 value={password}
 onChange={(e) =>
 setPassword(e.target.value)
 }
 className="
 w-full
 border
 border-gray-200
 rounded-xl
 mt-2
 px-4 py-3
 bg-gray-100
 focus:outline-none
 focus:ring-2
 focus:ring-green-600
 dark:bg-zinc-800
 dark:border-zinc-700
 dark:text-white
 "
 />

 <button
 type="button"
 onClick={() =>
 setShowPassword(
 !showPassword
 )
 }
 className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
 >
 {showPassword ? (
 <FaRegEyeSlash />
 ) : (
 <FaRegEye />
 )}
 </button>

 </div>

 {/* REMEMBER + FORGOT */}
 <div className="flex items-center justify-between text-sm">

 <label className="flex items-center gap-2">
 <input
 type="checkbox"
 checked={remember}
 onChange={() =>
 setRemember(!remember)
 }
 className="accent-green-600"
 />
 Remember me
 </label>

 <Link to="/reset"
 className="text-green-600 font-semibold hover:underline"
 >
 Forgot password?
 </Link>

 </div>

 {/* BUTTON */}
 <button
 type="submit"
 disabled={loading}
 className="
 w-full cursor-pointer bg-green-600 hover:bg-green-700
 disabled:bg-gray-300 disabled:cursor-not-allowed
 text-white py-3 mt-10 rounded-4xl font-semibold
 flex items-center justify-center gap-2
 "
 >
 {loading && (
 <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
 )}

 {loading ? "Logging in..." : "Login"}
 </button>

 </form>
 <div className="flex items-center justify-center gap-1 mt-10">
<p className="text-sm text-center  ">Already have an account ? </p> 
    <Link to="/signin" className="text-green-600 text-sm cursor-pointer">Sign Up</Link>
</div>
 </div>

 </div>
 );
}