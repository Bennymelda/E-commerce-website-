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
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
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
/*
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
*/
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
 <div className="
 min-h-screen
 bg-gray-50
 dark:bg-black
 flex
 items-center
 justify-center
 px-4
 py-8
 md:px-8
 ">

 <div className="
 w-full
 max-w-7xl
 flex
 overflow-hidden
 rounded-3xl
 bg-white
 dark:bg-zinc-900
 shadow-xl
 ">

 {/* LEFT SIDE */}
 <div className="
 hidden
 md:flex
 w-1/2
 relative
 min-h-[650px]
 overflow-hidden
 ">

 <img
 src="/image/demo.jpg"
 alt="Fresh groceries"
 className="
 absolute
 inset-0
 w-full
 h-full
 object-cover
 "
 />

 {/* OVERLAY */}
 <div className="
 absolute
 inset-0
 bg-gradient-to-b
 from-black/80
 via-black/40
 to-black/70
 " />

 {/* CONTENT */}
 <div className="
 relative
 z-10
 h-full
 w-full
 p-10
 text-white
 flex
 flex-col
 justify-between
 ">

 {/* TOP */}
 <div>
 <p className="
 text-green-300
 text-sm
 font-semibold
 tracking-wide
 uppercase
 ">
 Fresh groceries. Made simple.
 </p>
 </div>


 {/* CENTER */}
 <div>
 <h2 className="
 text-3xl
 lg:text-4xl
 font-bold
 leading-tight
 max-w-md
 ">
 Eat better.

 Shop fresher.
 </h2>

 <p className="
 text-white/80
 leading-relaxed
 max-w-md
 mt-4
 ">
 Get fresh produce and everyday essentials delivered
 straight to your door, without the hassle.
 </p>
 </div>


 {/* BOTTOM */}
 <div className="
 flex
 items-center
 gap-6
 text-sm
 text-white/90
 ">
 <span>✓ Fresh produce</span>
 <span>✓ Fast delivery</span>
 </div>

 </div>
 </div>


 {/* SIGNUP FORM */}
 <div className="
 w-full
 md:w-1/2
 p-6
 sm:p-8
 md:p-10
 lg:p-12
 flex
 flex-col
 justify-center
 ">

 {/* HEADER */}
 <div className="mb-7">

 <h1 className="
 text-3xl
 md:text-4xl
 font-bold
 text-gray-900
 dark:text-white
 ">
 Create an account
 </h1>

 <p className="
 text-gray-500
 dark:text-gray-400
 mt-2
 ">
 Join us and make fresh shopping easier.
 </p>

 </div>


 {/* FORM */}
 <form
 onSubmit={handleSubmit}
 className="space-y-4"
 >

 {/* NAME */}
 <div>
 <label className="
 block
 font-medium
 text-sm
 text-gray-700
 dark:text-gray-300
 mb-2
 ">
 Full name
 </label>

 <input
 type="text"
 value={name}
 onChange={(e) => setName(e.target.value)}
 placeholder="Your full name"
 className="
 w-full
 border
 border-gray-200
 rounded-xl
 px-4
 py-3
 bg-gray-50
 focus:outline-none
 focus:ring-2
 focus:ring-green-600
 dark:bg-zinc-800
 dark:border-zinc-700
 dark:text-white
 "
 />
 </div>


 {/* EMAIL */}
 <div>
 <label className="
 block
 font-medium
 text-sm
 text-gray-700
 dark:text-gray-300
 mb-2
 ">
 Email address
 </label>

 <input
 type="email"
 value={email}
 onChange={(e) => setEmail(e.target.value)}
 placeholder="you@example.com"
 className="
 w-full
 border
 border-gray-200
 rounded-xl
 px-4
 py-3
 bg-gray-50
 focus:outline-none
 focus:ring-2
 focus:ring-green-600
 dark:bg-zinc-800
 dark:border-zinc-700
 dark:text-white
 "
 />
 </div>


 {/* PASSWORD */}
 <div className="relative">

 <label className="
 block
 font-medium
 text-sm
 text-gray-700
 dark:text-gray-300
 mb-2
 ">
 Password
 </label>

 <input
 type={showPassword ? "text" : "password"}
 value={password}
 onChange={(e) => setPassword(e.target.value)}
 placeholder="Create a password"
 className="
 w-full
 border
 border-gray-200
 rounded-xl
 px-4
 py-3
 pr-12
 bg-gray-50
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
 onClick={() => setShowPassword(!showPassword)}
 className="
 cursor-pointer
 absolute
 right-4
 bottom-3
 text-gray-500
 "
 >
 {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
 </button>

 </div>


 {/* CONFIRM PASSWORD */}
 <div className="relative">

 <label className="
 block
 font-medium
 text-sm
 text-gray-700
 dark:text-gray-300
 mb-2
 ">
 Confirm password
 </label>

 <input
 type={showConfirmPassword ? "text" : "password"}
 value={confirmPassword}
 onChange={(e) => setConfirmPassword(e.target.value)}
 placeholder="Confirm your password"
 className="
 w-full
 border
 border-gray-200
 rounded-xl
 px-4
 py-3
 pr-12
 bg-gray-50
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
 setShowConfirmPassword(!showConfirmPassword)
 }
 className="
 cursor-pointer
 absolute
 right-4
 bottom-3
 text-gray-500
 "
 >
 {showConfirmPassword ? <FaRegEye /> : <FaRegEyeSlash />}
 </button>

 </div>


 {/* TERMS */}
 <label className="
 flex
 items-start
 gap-3
 cursor-pointer
 pt-1
 ">

 <input
 type="checkbox"
 checked={agreed}
 onChange={() => setAgreed(!agreed)}
 className="mt-1 accent-green-600"
 />

 <span className="
 text-sm
 text-gray-600
 dark:text-gray-400
 leading-relaxed
 ">
 I agree to the Terms of Service and Privacy Policy.
 </span>

 </label>


 {/* BUTTON */}
 <button
 type="submit"
 disabled={loading}
 className="
 w-full
 bg-green-600
 hover:bg-green-700
 disabled:bg-gray-300
 disabled:cursor-not-allowed
 text-white
 py-3
 mt-3
 rounded-full
 font-semibold
 flex
 items-center
 justify-center
 gap-2
 cursor-pointer
 transition
 "
 >

 {loading && (
 <div className="
 w-4
 h-4
 border-2
 border-white
 border-t-transparent
 rounded-full
 animate-spin
 " />
 )}

 {loading
 ? "Creating Account..."
 : "Create Account"}

 </button>

 </form>


 {/* SIGN IN */}
 <div className="
 flex
 items-center
 justify-center
 gap-1
 mt-7
 text-sm
 ">
 <p className="text-gray-500">
 Already have an account?
 </p>

 <Link
 to="/login"
 className="
 text-green-600
 font-semibold
 hover:underline
 cursor-pointer
 "
 >
 Sign in
 </Link>
 </div>

 </div>

 </div>
 </div>
);
}