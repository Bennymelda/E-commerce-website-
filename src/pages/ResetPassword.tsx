import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "../hooks/useToast";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
export default function ResetPasswordPage() {

 const navigate = useNavigate();
 const { showToast } = useToast();
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [confirmPassword, setConfirmPassword] =
 useState("");
const [showPassword, setShowPassword] = useState(false);
const [showConfirmPassword, setShowConfirmPassword] = useState(false);

const handleReset = (e: React.FormEvent) => {
 e.preventDefault();

 if (!email.trim()) {
 showToast("Email is required", "error");
 return;
 }

 const emailRegex =
 /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

 if (!emailRegex.test(email)) {
 showToast(
 "Please enter a valid email address",
 "error"
 );
 return;
 }

 if (password.length < 8) {
 showToast(
 "Password must be at least 8 characters",
 "error"
 );
 return;
 }

 if (password !== confirmPassword) {
 showToast(
 "Passwords do not match",
 "error"
 );
 return;
 }

 const users = JSON.parse(
 localStorage.getItem("users") || "[]"
 );

 const existingUser = users.find(
 (user: any) =>
 user.email.toLowerCase() ===
 email.toLowerCase()
 );

 if (!existingUser) {
 showToast("User not found", "error");
 return;
 }

 const updatedUsers = users.map(
 (user: any) =>
 user.email.toLowerCase() ===
 email.toLowerCase()
 ? {
 ...user,
 password,
 }
 : user
 );

 localStorage.setItem(
 "users",
 JSON.stringify(updatedUsers)
 );

 showToast(
 "Password reset successful 🎉",
 "success"
 );

 navigate("/login");
};

 return (
 <div className="min-h-screen flex items-center justify-center px-5">
 <form
 onSubmit={handleReset}
 className="w-full max-w-md bg-white p-6 rounded-2xl shadow"
 >
 <h1 className="text-2xl font-bold mb-6">
 Reset Password
 </h1>
 <label className="font-semibold text-gray-700 ">Email</label>
<input
 type="email"
 placeholder="Email Address"
 value={email}
 onChange={(e) =>
 setEmail(e.target.value)
 }
 className="
 w-full
 mt-2
 mb-4

 border
 border-gray-200
 rounded-xl
 bg-gray-100
 px-4 py-3 pr-12
 focus:outline-none
 focus:ring-2
 focus:ring-green-600
 dark:bg-zinc-800
 dark:border-zinc-700
 dark:text-white
 "
/>

<label className="font-semibold text-gray-700 "> Password</label>
 
<div className="relative">
 <input
 type={showPassword ? "text" : "password"}
 value={password}
 onChange={(e) => setPassword(e.target.value)}
 placeholder="New Password"
 className="
 w-full mt-2 mb-4
 border border-gray-200
 rounded-xl
 bg-gray-100
 px-4 py-3 pr-12
 focus:outline-none
 focus:ring-2
 focus:ring-green-600
 "
 />

 <button
 type="button"
 onClick={() => setShowPassword(!showPassword)}
 className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
 >
 {showPassword ? (
 <FaRegEyeSlash />
 ) : (
 <FaRegEye />
 )}
 </button>
</div>
 
 <label className="font-semibold text-gray-700">
 Confirm Password
</label>

<div className="relative">
 <input
 type={
 showConfirmPassword
 ? "text"
 : "password"
 }
 value={confirmPassword}
 onChange={(e) =>
 setConfirmPassword(e.target.value)
 }
 placeholder="Confirm Password"
 className="
 w-full mt-2 mb-6
 border border-gray-200
 rounded-xl
 bg-gray-100
 px-4 py-3 pr-12
 focus:outline-none
 focus:ring-2
 focus:ring-green-600
 "
 />

 <button
 type="button"
 onClick={() =>
 setShowConfirmPassword(
 !showConfirmPassword
 )
 }
 className="absolute right-4 top-2/6 -translate-y-1/2 text-gray-500"
 >
 {showConfirmPassword ? (
 <FaRegEyeSlash />
 ) : (
 <FaRegEye />
 )}
 </button>
</div>



 <button
 type="submit"
 className="
 font-semibold
 cursor-pointer
 w-full bg-green-600 text-white py-3 rounded-4xl"
 >
 Reset Password
 </button>
 </form>
 </div>
 );
}