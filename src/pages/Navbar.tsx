import { Link, NavLink } from "react-router-dom";
import { useCart } from "../hooks/useCart";
import { motion } from "framer-motion";
import { logout } from "../hooks/auth";
import { useNavigate } from "react-router-dom";

import { MdHomeFilled } from "react-icons/md";
import { FaRegHeart, FaRegUser, FaStore } from "react-icons/fa6";
import { BsCart3 } from "react-icons/bs";

const Navbar = () => {
 const { totalCartItems } = useCart();
const user = JSON.parse(
 localStorage.getItem("currentUser") || "null"
);
 const navigate = useNavigate();

 const handleLogout = () => {
 logout(); // removes user from localStorage
 navigate("/login"); // send user to login page
 };
const isLoggedIn = !!user;
 return (
 <>


 {/* ================= DESKTOP NAV ================= */}
 <nav className="fixed top-0 left-0 right-0 bg-white dark:bg-black   z-50  hidden md:flex  items-center justify-between px-4 py-5 shadow-md">

 {/* LOGO */}
 <div>
    <img src="/FreshMart-192.png" className="w-40 object-cover h-10" alt="logo design" />
 </div>

 {/* CENTER LINKS */}
 <div className="flex items-center gap-6 text-sm font-medium">

 <NavLink to="/"
  className={({ isActive }) =>
 isActive ? "text-green-600 text-lg flex flex-col items-center scale-110" : "text-gray-700 text-lg flex flex-col items-center"
 }
>

 {({ isActive }) => (
 <>
 {isActive && (
 <span className="absolute -bottom-2 w-10 h-[3px] bg-green-600 rounded-full" />
 )}

 <p className="font-semibold">Home</p>
 </>
 )}
 </NavLink>

<NavLink
 to="/products"
 className={({ isActive }) =>
 isActive ? "text-green-600  scale-110 flex flex-col items-center" : "text-gray-700 flex flex-col items-center"
 }
 >
{({ isActive }) => (
 <>
 {isActive && (
 <span className="absolute -bottom-2 w-10 h-[3px] bg-green-600 rounded-full" />
 )}

 <p className="font-semibold text-lg">Product</p>
 </>
 )}


 </NavLink>

 <NavLink
 to="/wishlist"
 className={({ isActive }) =>
 isActive ? "text-green-600 scale-110 flex flex-col items-center" : "text-gray-700 flex flex-col items-center"
 }
 >
{({ isActive }) => (
 <>
 {isActive && (
 <span className="absolute -bottom-3 w-10 h-[3px] bg-green-600 rounded-full" />
 )}

 <p className="font-semibold text-lg">Favourite</p>
 </>
 )}
 </NavLink>


 <NavLink
 to="/profile"
 className={({ isActive }) =>
 isActive ? "text-green-600 scale-110 flex flex-col items-center" : "text-gray-700 flex flex-col items-center"
 }
 >
{({ isActive }) => (
 <>
 {isActive && (
 <span className="absolute -bottom-3 w-10 h-[3px] bg-green-600 rounded-full" />
 )}

 <p className="font-semibold text-lg">Profile</p>
 </>
 )}
 </NavLink>

 </div>

 {/* CART */}
<div className="flex items-center gap-4">
 {/* CART ICON */}
  <div className="relative cursor-pointer" >
 <Link to="cart-page">
  <BsCart3 className="text-3xl text-black dark:text-white" />

 </Link>
   
   
    <NavLink
to="/cart-page"
 className={({ isActive }) =>
 isActive ? "text-green-600 scale-110 flex flex-col items-center" : "text-gray-700 flex flex-col items-center"
 }
 >
{({ isActive }) => (
 <>
 {isActive && (
 <span className="absolute top-3 w-10 h-[3px] bg-green-600 rounded-full" />
 )}


 </>
 )}
 </NavLink>
 
 {totalCartItems > 0 && (
 <motion.span
 key={totalCartItems}
 initial={{ scale: 0.5 }}
 animate={{ scale: 1 }}
 className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center"
 >
 {totalCartItems}
 </motion.span>
 )}
 </div>
 {isLoggedIn ? (
 <>
 

 <button
 onClick={handleLogout}
 className="bg-red-500 cursor-pointer text-white px-6 py-2 rounded-lg"
 >
 Logout
 </button>
 </>
 ) : (
 <Link
 to="/login"
 className="bg-green-600 text-white px-4 py-2 rounded-xl"
 >
 Login
 </Link>
 )}


</div>



 </nav>

 {/* ================= MOBILE TOP BAR ================= */}
 <div className="md:hidden flex justify-between items-center py-6 px-4 rounded shadow-2xl bg-white dark:bg-black ">

 {/* LOGO */}
 <div>
    <img src="/FreshMart-192.png" className="w-30 object-cover h-10" alt="logo design" />
 </div>

 {/* CART */}
 <div className="flex items-center gap-4">

 {/* CART ICON */}
  <div className="relative cursor-pointer" >
 <Link to="cart-page">
  <BsCart3 className="text-3xl text-black dark:text-white" />

 </Link>
   
   
    <NavLink
to="/cart-page"
 className={({ isActive }) =>
 isActive ? "text-green-600 scale-110 flex flex-col items-center" : "text-gray-700 flex flex-col items-center"
 }
 >
{({ isActive }) => (
 <>
 {isActive && (
 <span className="absolute top-3 w-10 h-[3px] bg-green-600 rounded-full" />
 )}


 </>
 )}
 </NavLink>
 
 {totalCartItems > 0 && (
 <motion.span
 key={totalCartItems}
 initial={{ scale: 0.5 }}
 animate={{ scale: 1 }}
 className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center"
 >
 {totalCartItems}
 </motion.span>
 )}
 </div>
 {isLoggedIn ? (
 <>


 <button
 onClick={handleLogout}
 className="bg-red-500 text-white px-4 py-2 cursor-pointer rounded-lg"
 >
 Logout
 </button>
 </>
 ) : (
 <Link
 to="/login"
 className="bg-green-600 text-white px-4 py-2 rounded-xl"
 >
 Login
 </Link>
 )}

</div>


 </div>

 {/* ================= MOBILE BOTTOM NAV ================= */}
 <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white dark:bg-black shadow-xl rounded-2xl flex justify-around items-center py-4 z-50">

 <NavLink
 to="/"
 className={({ isActive }) =>
 isActive ? "text-green-600 flex flex-col items-center scale-110" : "text-gray-700 flex flex-col items-center"
 }
 >
{({ isActive }) => (
 <>
 {isActive && (
 <span className="absolute -top-2 w-10 h-0.5 bg-green-600 rounded-full" />
 )}
 <MdHomeFilled  className={isActive ? "text-green-600 text-2xl" : "text-gray-500 text-2xl"} />
 <p className="font-semibold">Home</p>
 </>
 )}

 </NavLink>

 <NavLink
 to="/products"
 className={({ isActive }) =>
 isActive ? "text-green-600 scale-110 flex flex-col items-center" : "text-gray-700 flex flex-col items-center"
 }
 >
{({ isActive }) => (
 <>
 {isActive && (
 <span className="absolute -top-2 w-10 h-0.5 bg-green-600 rounded-full" />
 )}
 <FaStore  className={isActive ? "text-green-600 text-2xl" : "text-gray-500 text-2xl"} />
 <p className="font-semibold">Product</p>
 </>
 )}


 </NavLink>

 <NavLink
 to="/wishlist"
 className={({ isActive }) =>
 isActive ? "text-green-600 scale-110 flex flex-col items-center" : "text-gray-700 flex flex-col items-center"
 }
 >
{({ isActive }) => (
 <>
 {isActive && (
 <span className="absolute -top-2 w-10 h-0.5 bg-green-600 rounded-full" />
 )}
 <FaRegHeart  className={isActive ? "text-green-600 text-2xl" : "text-gray-500 text-2xl"} />
 <p className="font-semibold">Favourite</p>
 </>
 )}
 </NavLink>

 <NavLink
 to="/profile"
 className={({ isActive }) =>
 isActive ? "text-green-600 scale-110 flex flex-col items-center" : "text-gray-700 flex flex-col items-center"
 }
 >
{({ isActive }) => (
 <>
 {isActive && (
 <span className="absolute -top-2 w-10 h-0.5 bg-green-600 rounded-full" />
 )}
 <FaRegUser className={isActive ? "text-green-600 text-2xl" : "text-gray-500 text-2xl"} />
 <p className="font-semibold">Profile</p>
 </>
 )}
 </NavLink>
 

 </div>
 </>
 );
};

export default Navbar;