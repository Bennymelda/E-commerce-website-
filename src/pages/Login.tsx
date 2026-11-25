

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
type LoginPageProps = {
  onLogin: () => void;
};

export default function LoginPage({ onLogin }: LoginPageProps) {
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

 navigate("/");
onLogin();
 navigate("/"); // ✅ ONLY HERE
 } catch (error) {
 console.error(error);
 showToast("Something went wrong", "error");
 } finally {
 setLoading(false); // ✅ ONLY cleanup
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
 max-w-6xl
 flex
 overflow-hidden
 rounded-3xl
 bg-white
 dark:bg-zinc-900
 shadow-lg
 ">

 {/* LEFT SIDE */}
<div className="
 hidden
 md:flex
 w-1/2
 relative
 min-h-[600px]
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
 Everything you need,
 <br />
 delivered fresh.
 </h2>
 </div>


 {/* BOTTOM */}
 <div>
 <p className="
 text-white/80
 leading-relaxed
 max-w-md
 mb-6
 ">
 Shop fresh produce, everyday essentials and quality
 groceries from the comfort of your home.
 </p>

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
</div>

 {/* LOGIN FORM */}
 <div className="
 w-full
 md:w-1/2
 p-6
 sm:p-8
 md:p-10
 lg:p-14
 flex
 flex-col
 justify-center
 ">

 {/* TITLE */}
 <div className="mb-8">

 <h1 className="
 text-3xl
 md:text-4xl
 font-bold
 text-gray-900
 dark:text-white
 mb-2
 ">
 Welcome back
 </h1>

 <p className="text-gray-500 dark:text-gray-400">
 Sign in to continue shopping.
 </p>

 </div>


 {/* FORM */}
 <form onSubmit={handleLogin} className="space-y-5">

 {/* EMAIL */}
 <div>
 <label className="
 block
 text-sm
 font-medium
 text-gray-700
 dark:text-gray-300
 mb-2
 ">
 Email address
 </label>

 <input
 type="email"
 placeholder="you@example.com"
 value={email}
 onChange={(e) => setEmail(e.target.value)}
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
 <div>

 <label className="
 block
 text-sm
 font-medium
 text-gray-700
 dark:text-gray-300
 mb-2
 ">
 Password
 </label>

 <div className="relative">

 <input
 type={showPassword ? "text" : "password"}
 placeholder="Enter your password"
 value={password}
 onChange={(e) => setPassword(e.target.value)}
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
 absolute
 right-4
 top-1/2
 -translate-y-1/2
 text-gray-500
 hover:text-gray-700
 cursor-pointer
 "
 >
 {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
 </button>

 </div>
 </div>


 {/* REMEMBER + FORGOT */}
 <div className="
 flex
 items-center
 justify-between
 text-sm
 ">

 <label className="
 flex
 items-center
 gap-2
 text-gray-600
 dark:text-gray-300
 ">
 <input
 type="checkbox"
 checked={remember}
 onChange={() => setRemember(!remember)}
 className="accent-green-600"
 />
 Remember me
 </label>

 <Link
 to="/reset"
 className="
 text-green-600
 font-semibold
 hover:underline
 "
 >
 Forgot password?
 </Link>

 </div>


 {/* BUTTON */}
 <button
 type="submit"
 disabled={loading}
 className="
 w-full
 cursor-pointer
 bg-green-600
 hover:bg-green-700
 disabled:bg-gray-300
 disabled:cursor-not-allowed
 text-white
 py-3
 mt-6
 rounded-full
 font-semibold
 flex
 items-center
 justify-center
 gap-2
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

 {loading ? "Logging in..." : "Login"}

 </button>

 </form>


 {/* SIGN UP */}
 <div className="
 flex
 items-center
 justify-center
 gap-1
 mt-8
 text-sm
 ">
 <p className="text-gray-500 text-sm">
 Don't have an account?
 </p>

 <Link
 to="/signin"
 className="
 text-sm
 text-green-600
 font-semibold
 hover:underline
 "
 >
 Sign up
 </Link>
 </div>

 </div>

 </div>

 </div>
);
}