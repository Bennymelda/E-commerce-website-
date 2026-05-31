import {
 FaFacebookF,
 FaInstagram,
 FaTwitter,
} from "react-icons/fa";
import { useProducts } from "../../hooks/useProducts";
import { Link } from "react-router-dom";
const Footer = () => {

const { categories, setSelectedCategory } =
 useProducts();
 return (
 <footer className="bg-white mb-20 text-gray-300 mt-20">

 {/* TOP SECTION */}
 <div className="max-w-8xl mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

 {/* BRAND */}
 <div>
 <h2 className="text-3xl font-bold text-green-600">
 ShopEase
 </h2>

 <p className="mt-4 text-sm leading-6 text-gray-700">
 Fresh organic groceries and fruits delivered
 quickly to your doorstep with quality you can trust.
 </p>

 {/* SOCIALS */}
 <div className="flex gap-4 mt-6">
 <div className="w-10 h-10 rounded-full bg-green-600 hover:bg-green-400 transition flex items-center justify-center cursor-pointer">
 <FaFacebookF className="text-white"/>
 </div>

 <div className="w-10 h-10 rounded-full bg-green-600 hover:bg-green-400 transition flex items-center justify-center cursor-pointer">
 <FaInstagram className="text-white"/>
 </div>

 <div className="w-10 h-10 rounded-full bg-green-600 hover:bg-green-400 transition flex items-center justify-center cursor-pointer">
 <FaTwitter className="text-white"/>
 </div>
 </div>
 </div>

 {/* QUICK LINKS */}
 <div>
 <h3 className="text-zinc-800 font-semibold text-lg mb-5">
 Quick Links
 </h3>

 <ul className="space-y-3 text-sm  flex flex-col">
    <Link to="/" >
 <li className="hover:text-green-500 transition cursor-pointer text-zinc-700">
 Home</li>
 </Link>

  <Link to="/products" >
 <li className="hover:text-green-500 transition cursor-pointer text-zinc-700">
 Products</li>
 </Link>

  <Link to="/wishlist" >
 <li className="hover:text-green-500 transition cursor-pointer text-zinc-700">
 Wishlist</li>
 </Link>

 <Link to="/cart-page" >
 <li className="hover:text-green-500 transition cursor-pointer text-zinc-700">
 Cart</li>
 </Link>

 <Link to="/profile" >
 <li className="hover:text-green-500 transition cursor-pointer text-zinc-700">
 Profile</li>
 </Link>
 </ul>
 </div>

 {/* CATEGORIES */}
 <div>
 <h3 className="text-zinc-800 font-semibold text-lg mb-5">
 Categories
 </h3>

 <ul className="space-y-3 text-sm">
<ul className="space-y-3 text-sm">
 {categories.slice(0, 6).map((cat) => (
 <li
 key={cat.id}
 onClick={() => {
 setSelectedCategory(cat.slug);

 // scroll to products
 document
 .getElementById("products-section")
 ?.scrollIntoView({
 behavior: "smooth",
 });
 }}

className="hover:text-green-500 transition cursor-pointer text-zinc-700"

 >
 {cat.name}
 </li>
 ))}
</ul>

 
 </ul>
 </div>

 {/* CONTACT */}
 <div>
 <h3 className="text-zinc-800 font-semibold text-lg mb-5">
 Contact Us
 </h3>

 <div className="space-y-3 text-sm text-gray-800">
 <p>Email: benedicta45@gmail.com</p>

 <p>Phone: +234 903 488 1350</p>

 <p>
 Onitisha, Anambra State,
 Nigeria
 </p>
 </div>


 </div>

 </div>

 {/* BOTTOM */}
 <hr  className="text-gray-200"/>
 <div className=" border-zinc-800 py-5 text-center text-sm text-gray-500">
 © 2026 ShopEase. All rights reserved.
 </div>

 </footer>
 );
};

export default Footer;