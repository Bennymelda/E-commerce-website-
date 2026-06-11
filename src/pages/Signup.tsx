import { useState, type FormEvent } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { useToast } from "../hooks/useToast";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

type StoredUser = {
  name?: string;
  email: string;
  password: string;
  [key: string]: unknown;
};

export default function SigninPage() {
 const [name, setName] = useState("");
 const [email, setEmail] = useState("");

 const [password, setPassword] = useState("");
 const [confirmPassword, setConfirmPassword] =
 useState("");
const [loading, setIsLoading]=useState(false)
 const [showPassword, setShowPassword] =
 useState(false);

 const [
 showConfirmPassword,
 setShowConfirmPassword,
 ] = useState(false);

 const [agreed, setAgreed] = useState(false);
const navigate=useNavigate()
 const { showToast } = useToast();

const handleSubmit = async (
 e: FormEvent
) => {
 e.preventDefault();

 if (!name.trim()) {
 showToast("Name is required", "error");
 return;
 }

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

 if (!agreed) {
 showToast(
 "Please agree to the terms and conditions",
 "error"
 );
 return;
 }
const users = JSON.parse(
 localStorage.getItem("users") || "[]"
 ) as StoredUser[];

// check if user already exists
const userExists = users.find((user) => user.email === email);

if (userExists) {
 showToast("User already exists", "error");
 return;
}

const newUser = {
 name,
 email,
 password,
 createdAt:new Date().toISOString()
};

users.push(newUser);

localStorage.setItem(
 "users",
 JSON.stringify(users)
);

localStorage.setItem(
 "currentUser",
 JSON.stringify(newUser)
);
setIsLoading(true);

try {
 await new Promise((resolve) =>
 setTimeout(resolve, 2000)
 );

 const newUser = {
 name,
 email,
 password,
 createdAt: new Date().toISOString(),
 };

 users.push(newUser);

 localStorage.setItem("users", JSON.stringify(users));
 localStorage.setItem("currentUser", JSON.stringify(newUser));

 showToast("Account created successfully 🎉", "success");

 navigate("/login"); // ✅ move here

 setName("");
 setEmail("");
 setPassword("");
 setConfirmPassword("");
 setAgreed(false);

} catch (error) {
    console.error(error)
 showToast("Something went wrong", "error");
} finally {
 setIsLoading(false);
}
};
 return (
 <div className=" md:rounded-3xl rounded-none  bg-gray-50 dark:bg-black flex  px-5 py-10 justify-center">
<div className="hidden md:block w-100 relative">
 <img
 className="w-full h-full object-cover md:rounded-tl-3xl md:rounded-bl-3xl"
 src="/image/demo.jpg"
 />

 <div className="absolute inset-0 bg-black/50 md:rounded-tl-3xl md:rounded-bl-3xl" />
</div>
 <div className="w-full max-w-md rounded-3xl md:rounded-none bg-white dark:bg-zinc-900 md:rounded-tr-3xl md:rounded-br-3xl  shadow-sm p-6 md:p-8 md:pl-12 flex flex-col justify-center">

 {/* HEADER */}
 <div className=" mb-8">
 <h1 className="text-3xl md:text-4xl font-bold dark:text-white">
 Create an account
 </h1>

 <p className="text-gray-600 mt-2">
 Start your fresh lifestyle
 today.
 </p>
 </div>

 {/* FORM */}
 <form
 onSubmit={handleSubmit}
 className="space-y-5"
 >

 {/* NAME */}
 <label className="font-semibold text-gray-700 ">Full Name</label>
 <input
 type="text"
 value={name}
 onChange={(e) =>
 setName(
 e.target.value
 )
 }
 placeholder="Full Name"
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

 {/* EMAIL */}
 <label className="font-semibold text-gray-700 ">Email Address</label>
 <input
 type="email"
 value={email}
 onChange={(e) =>
 setEmail(
 e.target.value
 )
 }
 placeholder="Email Address"
 className="
 w-full
 border
 border-gray-200
 rounded-xl
 px-4 py-3
 mt-2
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
<label className="font-semibold text-gray-700 ">Password</label>
 <input
 type={
 showPassword
 ? "text"
 : "password"
 }
 value={password}
 onChange={(e) =>
 setPassword(
 e.target.value
 )
 }
 placeholder="Password"
 className="
 w-full
 mt-2
 border
 border-gray-200
 rounded-xl
 px-4 py-3 pr-12
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
 className="cursor-pointer absolute right-4 top-2/3 -translate-y-1/2"
 >
 {showPassword ? (
  <FaRegEye className="text-gray-600" />
 ) : (
 <FaRegEyeSlash className="text-gray-600"/>
 )}
 </button>

 </div>

 {/* CONFIRM PASSWORD */}
 <div className="relative">
<label className="font-semibold text-gray-700 ">Confirm Password</label>
 <input
 type={
 showConfirmPassword
 ? "text"
 : "password"
 }
 value={
 confirmPassword
 }
 onChange={(e) =>
 setConfirmPassword(
 e.target.value
 )
 }
 placeholder="Confirm Password"
 className="
 w-full
 mt-2

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

 <button
 type="button"
 onClick={() =>
 setShowConfirmPassword(
 !showConfirmPassword
 )
 }
 className="cursor-pointer absolute right-4 top-2/3 -translate-y-1/2"
 >
 {showConfirmPassword ? (
 <FaRegEye className="text-gray-600" />
 ) : (
 <FaRegEyeSlash className="text-gray-600"/>
 )}
 </button>

 </div>

 {/* TERMS */}
 <label className="flex items-start gap-3 cursor-pointer">

 <input
 type="checkbox"
 checked={agreed}
 onChange={() =>
 setAgreed(
 !agreed
 )
 }
 className="mt-1 accent-green-600"
 />

 <span className="text-sm text-gray-600 dark:text-gray-400">
 I agree to the Terms of service 
  and Privacy policy.</span>



 </label>

 {/* BUTTON */}

 <button
 type="submit"
 
 className="
 w-full
 bg-green-600
 hover:bg-green-700
 disabled:bg-gray-300
 disabled:cursor-not-allowed
 text-white
 py-3
 rounded-4xl
 font-semibold
 flex items-center
 justify-center
 gap-2
  cursor-pointer
 "
>
 {loading && (
 <div
 className="
 w-4 h-4
 border-2
 border-white
 border-t-transparent
 rounded-full
 animate-spin
 "
 />
 )}

 {loading
 ? "Creating Account..."
 : "Create Account"}
</button>

 </form>

<div className="flex items-center justify-center gap-1 mt-10">
<p className="text-sm text-center  ">Already have an account ? </p> 
    <Link to="/login" className="text-green-600 text-sm cursor-pointer">Sign in</Link>
</div>

 </div>


 </div>
 );
}