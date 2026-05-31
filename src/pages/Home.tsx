import Categories from "../components/home/Categories";
import CategorySection from "../components/home/CategorySection";
import TrendingSection from "../components/home/TrendingProducts";
import { useProducts } from "../hooks/useProducts";
import ProductGrid from "../components/product/ProductGrid";
import { useSearch } from "../context/SearchContext";
import { useMemo,useState } from "react";
import { products } from "../data/products";
import PromoBanner from "../components/home/ProductBanner";
import { CiCircleCheck } from "react-icons/ci";
import { GrFormCalendar } from "react-icons/gr";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { BsLightningCharge } from "react-icons/bs";
import Footer from "../components/layout/Footer";
import { useToast } from "../hooks/useToast";
import { Link } from "react-router-dom";
export default function Home() {
 const { orderedCategories, selectedCategory } = useProducts();
 const { search, setSearch } = useSearch();
const [email, setEmail] = useState("");

 const { showToast } = useToast();

 const handleSubscribe = () => {

 // EMPTY CHECK
 if (!email.trim()) {
 showToast("Please enter your email", "error");
 return;
 }

 // SIMPLE EMAIL VALIDATION
 const emailRegex =
 /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

 if (!emailRegex.test(email)) {
 showToast("Enter a valid email", "error");
 return;
 }

 // SUCCESS
 showToast(
 "Successfully subscribed 🎉",
 "success"
 );

 // CLEAR INPUT
 setEmail("");
 };
 const matchedProducts = useMemo(() => {
 const query = search.toLowerCase();

 if (!query) return [];

 return products.filter((p) =>
 p.name.toLowerCase().includes(query)
 );
 }, [search]);
const activeCategory =
 orderedCategories.find(
 (cat) => cat.slug === selectedCategory
 ) || orderedCategories[0];
 return (
 <div className=" ">
 

<PromoBanner />
 {/* 🏠 NORMAL CONTENT (ALWAYS VISIBLE) */}
 <div className="flex px-5 items-center justify-center mt-10 mb-15">
<input
 value={search}
 onChange={(e) => setSearch(e.target.value)}
 placeholder="Search fruits..."
 className="w-full md:w-[80%] focus:ring-1 focus:ring-green-600 focus:bg-white focus:border-green-600 focus:outline-none px-4 bg-gray-100 py-3 rounded-full border border-gray-200 shadow-xm"
 />
 
 </div>
{/* 🔍 SEARCH RESULTS (TOP SECTION) */}
 <div className="mb-5">

 {search && matchedProducts.length === 0 ? (

 <div className="flex flex-col border border-dashed border-gray-400 rounded-2xl mx-4 items-center justify-center py-20 text-center">
<p className="text-4xl">🔍</p>
 

 <h2 className="text-2xl font-bold mt-5">
 No products found
 </h2>

 <p className="text-gray-500 mt-2 max-w-md">
 We couldn't find any product matching "
 {search}"
 </p>

 </div>

 ) : (

 <ProductGrid products={matchedProducts} />

 )}

</div>
 
 <TrendingSection />

 <Categories />

<div id="products-section">
 <CategorySection category={activeCategory} />
</div>

 <div className="flex gap-5 mx-5 flex-col-reverse md:flex-row justify-between rounded-2xl mb-10 items-center py-10 px-5 md:mx-10 bg-gray-100 shadow-sm border-gray-100 border md:mt-20">
    <div>
        <h1 className="text-3xl mt-4 lg:text-5xl font-bold text-green-700">
            Get up to 20% offer Organic Bundles
        </h1>
         

        <p className="text-gray-500 mb-5 mt-1">Fuel your week with our curated selection of essentials</p>
        
       <Link to="/products" className="bg-green-600 cursor-pointer font-bold text-lg text-white py-2 px-8 rounded-4xl">
        Shop now
       </Link>
    </div>
    <div className="lg:w-[600px] w-full">
        <img src="/image/banner-4.png" alt="" className="w-full h-[300px] rounded-lg object-cover"/>
    </div>
 </div>
 {/* 8. WHY CHOOSE US */}
<section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-5 flex-col mb-15 px-5 py-5 rounded-xl bg-gray-50 mt-20 md:flex-row gap-5">
    <div className="bg-white shadow-sm flex md:justify-center rounded-2xl md:items-center py-5 px-5 md:px-10 flex-col">
        <div className="bg-green-600 w-fit px-4 py-4 rounded-xl">
           <BsLightningCharge className=" text-2xl text-white"/>

        </div>
        <h3 className="text-2xl md:text-2xl font-semibold mb-1 mt-4">Fast Delivery</h3>
        <p className="text-md md:text-lg md:text-center">Delivered to your doorstep within 90 minutes.</p>
    </div>

    <div className="bg-white shadow-sm flex md:justify-center rounded-2xl md:items-center py-5 px-5 md:px-10 flex-col">
        <div className="bg-green-600 w-fit px-4 py-4 rounded-xl">
            <CiCircleCheck className="text-2xl text-white"/>
        </div>
        <h3 className="text-2xl md:text-2xl font-semibold mb-1 mt-4">100% Organic</h3>
        <p className="text-md md:text-lg md:text-center">Certified organic produce from trusted farms.</p>
    </div>

    <div className="bg-white shadow-sm flex md:justify-center rounded-2xl md:items-center py-5 px-5 md:px-10 flex-col">
        <div className="bg-green-600 w-fit px-4 py-4 rounded-xl">
            <GrFormCalendar className="text-2xl text-white"/>
        </div>
        <h3 className="text-2xl md:text-2xl font-semibold mb-1 mt-4">Fresh Daily</h3>
        <p className="text-md md:text-lg md:text-center">Harvested and stocked every single morning.</p>
    </div>

    <div className="bg-white  shadow-sm flex md:justify-center rounded-2xl md:items-center py-5 px-5 md:px-10 flex-col">
        <div className="bg-green-600 w-fit px-4 py-4 rounded-xl">
            <VscWorkspaceTrusted className="text-2xl text-white"/>
        </div>
        <h3 className="text-2xl md:text-2xl font-semibold mb-1 mt-4">Secure Checkout</h3>
        <p className="text-md md:text-lg md:text-center">Multiple safe payment options available.</p>
    </div>
</section>
<section className="mb-10 mx-5 flex rounded-3xl flex-col justify-center  bg-green-50  py-10 px-5">
    <h2 className="font-bold mb-2 text-2xl md:text-5xl text-center">Get Fresh Deals Weekly</h2>
    <p className="text-lg mb-10 md:text-xl text-center font-semibold text-gray-600">join our community of conscious eaters and get exclusive offer and halthy recipes</p>
    
    <div className=" flex justify-center items-center gap-2">
        <input  value={email} onChange={(e)=> setEmail(e.target.value)} type="text" placeholder="enter your email" className="focus:outline-none focus:ring-green-600  focus:ring border-gray-300 py-2 md:py-3 px-4 w-[50%] border rounded-4xl"/>
        <button onClick={handleSubscribe} className="flex font-semibold  bg-green-600 py-2 px-4 md:px-6  rounded-4xl text-white md:text-lg cursor-pointer">Subscribe</button>
    </div>
</section>
<Footer />
 </div>
 );
}