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
import { motion } from "framer-motion";
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

const benefits = [
 {
 icon: BsLightningCharge,
 title: "Groceries at Your Door in 90 Minutes",
 description:
 "Need groceries now? We pick, pack, and deliver your order fast, so you can spend less time waiting and more time getting things done.",
 },
 {
 icon: CiCircleCheck,
 title: "Fresh, Organic & Carefully Selected",
 description:
 "We source quality produce from trusted farms and choose every item with freshness and quality in mind.",
 },
 {
 icon: GrFormCalendar,
 title: "Fresh Stock, Every Single Day",
 description:
 "Our shelves are restocked daily with fresh produce, so you get groceries that are fresh, not items that have been sitting around for days.",
 },
 {
 icon: VscWorkspaceTrusted,
 title: "Checkout With Confidence",
 description:
 "Your payment is protected with secure checkout and convenient payment options designed to make ordering simple and worry-free.",
 },
];






 return (
 <div className=" ">
 

<PromoBanner />
 {/* 🏠 NORMAL CONTENT (ALWAYS VISIBLE) */}
 <div className="flex px-5 items-center justify-center mt-10 mb-5">
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

 <motion.div
  initial={{
    opacity: 0,
    y: 80,
  }}
  whileInView={{
    opacity: 1,
    y: 0,
  }}
  viewport={{
    once: true,
    amount: 0.2,
  }}
  transition={{
    duration: 0.8,
    ease: "easeOut",
  }}
  className="
    flex
    gap-8
    mx-5
    flex-col-reverse
    md:flex-row
    justify-between
    rounded-2xl
    mb-10
    items-center
    py-8
    px-5
    md:px-10
    bg-gray-100
    shadow-sm
    border
    border-gray-100
    md:mt-20
  "
>
  <div className="w-full md:max-w-xl">
    <p className="text-green-600 font-semibold text-sm md:text-base mb-2">
      SAVE MORE ON YOUR EVERYDAY ESSENTIALS
    </p>

    <h1
      className="
        text-3xl
        lg:text-5xl
        font-bold
        leading-tight
        text-green-700
      "
    >
      Stock Up on Fresh Organic Favorites & Save 20%
    </h1>

    <p
      className="
        text-gray-600
        text-base
        md:text-lg
        leading-relaxed
        mt-3
        mb-6
        max-w-lg
      "
    >
      From fresh produce to everyday essentials, get more of what you love
      without stretching your budget.
    </p>

    <Link
      to="/products"
      className="
        inline-block
        bg-green-600
        hover:bg-green-700
        cursor-pointer
        font-semibold
        text-base
        md:text-lg
        text-white
        py-3
        px-8
        rounded-full
        transition
        duration-200
        hover:-translate-y-1
      "
    >
      Shop the Offer
    </Link>
  </div>

  <div className="lg:w-[600px] w-full">
    <img
      src="/image/banner-4.png"
      alt="Fresh organic groceries"
      className="
        w-full
        h-[250px]
        md:h-[300px]
        rounded-lg
        object-cover
      "
    />
  </div>
</motion.div>
 {/* 8. WHY CHOOSE US */}
 <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-5 mb-15 px-5 py-5 rounded-xl bg-gray-50 mt-20 gap-5">
  {benefits.map((benefit, index) => {
    const Icon = benefit.icon;

    return (
      <motion.div
        key={index}
        initial={{
          opacity: 0,
          y: 80,
          scale: 0.95,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        viewport={{
          once: true,
          amount: 0.2,
        }}
        transition={{
          duration: 0.7,
          delay: index * 0.15,
          ease: "easeOut",
        }}
        className="
          bg-white
          shadow-sm
          flex
          md:justify-center
          rounded-2xl
          md:items-center
          py-7
          px-5
          md:px-8
          flex-col
        "
      >
        <div className="bg-green-600 w-fit px-4 py-4 rounded-xl">
          <Icon className="text-xl text-white" />
        </div>

        <h3 className="text-lg md:text-center text-start md:text-xl font-semibold mb-2 mt-4">
          {benefit.title}
        </h3>

        <p className="text-sm md:text-md md:text-center leading-relaxed text-gray-600">
          {benefit.description}
        </p>
      </motion.div>
    );
  })}
</section>


<motion.section
  initial={{
    opacity: 0,
    x: -80,
  }}
  whileInView={{
    opacity: 1,
    x: 0,
  }}
  viewport={{
    once: true,
    amount: 0.2,
  }}
  transition={{
    duration: 0.8,
    ease: "easeOut",
  }}
  className="mb-10 mx-5 flex rounded-3xl flex-col justify-center bg-green-50 py-10 px-5"
>
  <h2 className="font-bold mb-2 text-2xl md:text-4xl text-center">
    Get Fresh Deals Weekly
  </h2>

  <p className="text-lg mb-10 md:text-xl text-center text-gray-600">
    Join our community of conscious eaters and get exclusive offers and
    healthy recipes
  </p>

  <div className="flex justify-center items-center gap-2">
    <input
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      type="text"
      placeholder="Enter your email"
      className="
        focus:outline-none
        focus:ring-green-600
        focus:ring
        border-gray-300
        py-2
        md:py-3
        px-4
        w-[50%]
        border
        rounded-4xl
      "
    />

    <motion.button
      onClick={handleSubscribe}
      whileHover={{
        scale: 1.05,
        y: -2,
      }}
      whileTap={{
        scale: 0.95,
      }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 15,
      }}
      className="
        flex
        font-semibold
        bg-green-600
        hover:bg-green-700
        py-2
        px-4
        md:px-6
        rounded-4xl
        text-white
        md:text-lg
        cursor-pointer
        transition-colors
        duration-200
      "
    >
      Subscribe
    </motion.button>
  </div>
</motion.section>
<Footer />
 </div>
 );
}