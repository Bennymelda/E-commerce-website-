
import { Route, Routes } from "react-router"
import Home from "./pages/Home"
import "./index.css"
import CategoryPage from "./pages/CategoryPage"
import WishlistPage from "./pages/Wishlist"
import Navbar from "./pages/Navbar"
import { motion } from "framer-motion"
import CartDrawer from "./components/cart/CartDrawer"
import MiniCart from "./components/cart/MiniCart"
import CartPage from "./components/cart/CartItem"
import ProductPage from "./pages/ProductPage"
import ProductDetails from "./pages/ProductDetails"
import ScrollToTop from "./components/home/scroll"
import CheckoutPage from "./pages/Checkout"
import OrderSuccessPage from "./pages/OrderSuccess"
import ShippingForm from "./pages/ShippingForm"
import PaymentMethod from "./pages/PaymentMethod"
import SigninPage from "./pages/Signup"
import LoginPage from "./pages/Login"
import { useLocation } from "react-router-dom";
import ResetPasswordPage from "./pages/ResetPassword"
import ProfilePage from "./pages/Profile"
import {useState,useEffect, useCallback } from "react"
import { useToast } from "./hooks/useToast"
function App() {
 const location = useLocation();

 const hideNavbarRoutes = [
 "/login",
 "/signin",
 "/reset"
 ];

 const shouldHideNavbar =
 hideNavbarRoutes.includes(location.pathname);
const {showToast} = useToast();
const [showOfflineBanner, setShowOfflineBanner] = useState(() => !navigator.onLine);

const checkOnline = async () => {
 try {
 await fetch("https://www.google.com/favicon.ico", {
 method: "HEAD",
 cache: "no-store",
 mode: "no-cors",
 });
 return true;
 } catch {
 return false;
 }
};

const handleOnline = useCallback((_event: Event) => {
 setShowOfflineBanner(false);
 showToast("Welcome back online! ✅", "success");
}, [showToast]);

const handleOffline = useCallback((_event: Event) => {
 setShowOfflineBanner(true);

}, []);

// Listen to online/offline events
useEffect(() => {
 window.addEventListener("online", handleOnline as EventListener);
 window.addEventListener("offline", handleOffline as EventListener);

 return () => {
 window.removeEventListener("online", handleOnline as EventListener);
 window.removeEventListener("offline", handleOffline as EventListener);
 };
}, [handleOnline, handleOffline]);

// Initial check on mount and periodic check for desktop reliability
useEffect(() => {
 const checkConnection = async () => {
 const isOnline = await checkOnline();
 setShowOfflineBanner(!isOnline);
 };

 checkConnection();
 
 // Periodic check every 5 seconds for desktop
 const interval = setInterval(checkConnection, 5000);

 return () => clearInterval(interval);
}, []);
return (
   <>

{showOfflineBanner && (
 <div className="fixed top-0 left-0 w-full bg-red-600 text-white text-center py-2 md:py-1 z-[100]">
 You are offline ⚠️ Some features may not work
 </div>
)}


 

 
   <motion.div
 initial={{ opacity: 0 }}
 animate={{ opacity: 1 }}
 exit={{ opacity: 0 }}
>
   {!shouldHideNavbar && <Navbar />}
  <ScrollToTop />
   <Routes>
   <Route path="/" element={<Home />} />
   <Route path="/category/:slug" element={<CategoryPage />} />
   <Route path="/wishlist" element={<WishlistPage />} />
   <Route path="/cart" element={<CartDrawer />} />
   <Route path="/cart-page" element={<CartPage />} />
   <Route path="/products" element={<ProductPage />} />
    <Route path="/product/:id" element={<ProductDetails />} />
   <Route path="/checkout" element={<CheckoutPage />} />
   <Route path="/order-success" element={<OrderSuccessPage />} />
   <Route path="/shipping" element={<ShippingForm/>} />
   <Route path="/payment" element={<PaymentMethod />} />
    <Route path="/signin" element={<SigninPage />} />
    <Route path="/login" element={<LoginPage/>} />
   <Route path="/reset" element={<ResetPasswordPage/>} />
   <Route path="/profile" element={<ProfilePage/>} />
   
   </Routes>
 
   <div id="cart-icon">

   </div>

 
  
    </motion.div>
    <CartDrawer />
    
    <MiniCart />
   </>
  )
}

export default App

