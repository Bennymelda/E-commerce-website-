
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
const [showOfflineBanner, setShowOfflineBanner] = useState(
 () => !navigator.onLine
);

const [offlineBannerDismissed, setOfflineBannerDismissed] = useState(false);

const [wasOffline, setWasOffline] = useState(
 () => !navigator.onLine
);

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

const handleOnline = useCallback(
 (_event: Event) => {
 setShowOfflineBanner(false);
 setOfflineBannerDismissed(false);
 setWasOffline(false);

 showToast("Welcome back online! ✅", "success");
 },
 [showToast]
);

const handleOffline = useCallback((_event: Event) => {
 setWasOffline(true);
 setOfflineBannerDismissed(false);
 setShowOfflineBanner(true);
}, []);

// Listen to online/offline events
useEffect(() => {
 window.addEventListener("online", handleOnline);
 window.addEventListener("offline", handleOffline);

 return () => {
 window.removeEventListener("online", handleOnline);
 window.removeEventListener("offline", handleOffline);
 };
}, [handleOnline, handleOffline]);

// Initial check and periodic connection check
useEffect(() => {
 const checkConnection = async () => {
 const isOnline = await checkOnline();

 if (isOnline) {
 // We have reconnected
 if (wasOffline) {
 setShowOfflineBanner(false);
 setOfflineBannerDismissed(false);
 setWasOffline(false);
 }
 } else {
 // We are offline
 setWasOffline(true);

 // Only show banner if user hasn't dismissed it
 if (!offlineBannerDismissed) {
 setShowOfflineBanner(true);
 }
 }
 };

 checkConnection();

 const interval = setInterval(checkConnection, 5000);

 return () => clearInterval(interval);
}, [offlineBannerDismissed, wasOffline]);
return (
   <>

 {showOfflineBanner && (
 <div className="fixed top-0 left-0 w-full bg-red-600 text-white text-center py-2 md:py-1 z-[100] flex items-center justify-center gap-3 px-10">
 <span>
 You are offline ⚠️ Some features may not work
 </span>

 <button
 onClick={() => {
 setShowOfflineBanner(false);
 setOfflineBannerDismissed(true);
 }}
 className="
 absolute
 right-3
 top-1/2
 -translate-y-1/2
 text-white
 text-xl
 font-bold
 hover:opacity-70
 transition
 cursor-pointer
 "
 aria-label="Close offline banner"
 >
 ×
 </button>
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

