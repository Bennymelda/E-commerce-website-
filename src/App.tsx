//import Categories from "./components/home/Categories"
//import { ProductProvider } from "./context/ProductContext"
import { Route, Routes } from "react-router"
import Home from "./pages/Home"
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


function App() {
 const location = useLocation();

 const hideNavbarRoutes = [
 "/login",
 "/signin",
 "/reset"
 ];

 const shouldHideNavbar =
 hideNavbarRoutes.includes(location.pathname);


  return (
   <>
 
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
