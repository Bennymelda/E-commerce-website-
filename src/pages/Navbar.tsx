import { Link, NavLink } from "react-router-dom";
import { useCart } from "../hooks/useCart";
import { motion } from "framer-motion";
import { logout } from "../hooks/auth";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import {  MdOutlineHome } from "react-icons/md";

import { BsCart3 } from "react-icons/bs";
import { FiGrid, FiHeart, FiUser } from "react-icons/fi";
import { useHomeAnimation } from "./HomeAnimationContext";

const Navbar = () => {
 const { totalCartItems } = useCart();
const location = useLocation();

const isProductDetailsPage = location.pathname.startsWith("/product/");
const bottomNavControls = useHomeAnimation();
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
 {!isProductDetailsPage && (
   <>
  
  
{/*
 <div className="lg:hidden flex justify-between items-center py-4 px-4 rounded shadow-2xl bg-white dark:bg-black ">


 <div>
    <img src="/FreshMart-192.png" className="w-30 object-cover h-10" alt="logo design" />
 </div>


 <div className="flex items-center gap-4">


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
 */}
  </>
)}
 {/* ================= MOBILE BOTTOM NAV ================= */}
  

<motion.div
  initial={{
    opacity: 0,
    y: 80,
  }}
  animate={bottomNavControls}
  variants={{
    hidden: {
      opacity: 0,
      y: 80,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }}
  className="
    md:hidden fixed bottom-5 left-4 right-4
    bg-white/90 dark:bg-zinc-900/90
    backdrop-blur-xl
    border border-gray-200/60 dark:border-zinc-700/60
    shadow-2xl rounded-4xl
    flex justify-around items-center
    py-3 z-50
  "
>
    {/* HOME */}
    <NavLink to="/" className="flex items-center justify-center">
      {({ isActive }) => (
        <span className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
          isActive ? "bg-green-600" : "bg-transparent"
        }`}>
          <MdOutlineHome className={`text-2xl ${
            isActive ? "text-white" : "text-gray-500"
          }`} />
        </span>
      )}
    </NavLink>

    {/* PRODUCTS */}
    <NavLink to="/products" className="flex items-center justify-center">
      {({ isActive }) => (
        <span className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
          isActive ? "bg-green-600" : "bg-transparent"
        }`}>
          <FiGrid className={`text-2xl ${
            isActive ? "text-white" : "text-gray-500"
          }`} />
        </span>
      )}
    </NavLink>

    {/* FAVOURITE */}
    <NavLink to="/wishlist" className="flex items-center justify-center">
      {({ isActive }) => (
        <span className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
          isActive ? "bg-green-600" : "bg-transparent"
        }`}>
          <FiHeart className={`text-2xl ${
            isActive ? "text-white" : "text-gray-500"
          }`} />
        </span>
      )}
    </NavLink>

    {/* PROFILE */}
    <NavLink to="/profile" className="flex items-center justify-center">
      {({ isActive }) => (
        <span className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
          isActive ? "bg-green-600" : "bg-transparent"
        }`}>
          <FiUser className={`text-2xl ${
            isActive ? "text-white" : "text-gray-500"
          }`} />
        </span>
      )}
    </NavLink>

  </motion.div>

 </>
 );
};

export default Navbar;