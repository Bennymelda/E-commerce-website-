import { useMemo, useState, useEffect } from "react";
import ProductGrid from "../components/product/ProductGrid";
import { products } from "../data/products";
import { IoMdClose } from "react-icons/io";
import Footer from "../components/layout/Footer";

export default function ProductPage() {
 const [search, setSearch] = useState(() => {
 return localStorage.getItem("productSearch") || "";
});
 const [selectedCategory, setSelectedCategory] =
 useState(() => {
 return (
 localStorage.getItem("selectedCategory") ||
 "All"
 );
 });
const [minRating, setMinRating] =
 useState(() => {
 return Number(
 localStorage.getItem("minRating")
 ) || 0;
 });

useEffect(() => {
 localStorage.setItem(
 "minRating",
 String(minRating)
 );
}, [minRating]);
const [trendingOnly, setTrendingOnly] =
 useState(() => {
 return (
 localStorage.getItem("trendingOnly") ===
 "true"
 );
 });
useEffect(() => {
 localStorage.setItem(
 "trendingOnly",
 String(trendingOnly)
 );
}, [trendingOnly]);
 const [maxPrice, setMaxPrice] =
 useState(() => {
 return Number(
 localStorage.getItem("maxPrice")
 ) || 100;
 });
 const [isFilterOpen, setIsFilterOpen] = useState(false);
const [sortBy, setSortBy] =
 useState(() => {
 return (
 localStorage.getItem("sortBy") ||
 "newest"
 );
 });
 const [organicOnly, setOrganicOnly] =
 useState(() => {
 return (
 localStorage.getItem("organicOnly") ===
 "true"
 );
 });

useEffect(() => {
 localStorage.setItem(
 "organicOnly",
 String(organicOnly)
 );
}, [organicOnly]);
const sortOptions = [
 { label: "Newest", value: "newest" },
 { label: "Price: Low to High", value: "price-low" },
 { label: "Price: High to Low", value: "price-high" },
 { label: "Top Rated", value: "rating" },
 { label: "Name A-Z", value: "name" },
];
useEffect(() => {
 localStorage.setItem(
 "productSearch",
 search
 );
}, [search]);
useEffect(() => {
 localStorage.setItem("sortBy", sortBy);
}, [sortBy]);
useEffect(() => {
 localStorage.setItem(
 "maxPrice",
 String(maxPrice)
 );
}, [maxPrice]);
useEffect(() => {
 localStorage.setItem(
 "selectedCategory",
 selectedCategory
 );
}, [selectedCategory]);

 // UNIQUE CATEGORIES
 const categories = [
 "All",
 ...new Set(products.map((p) => p.category)),
 ];

 // FILTER + SORT LOGIC
 const filteredProducts = useMemo(() => {
 let filtered = [...products];

 // CATEGORY FILTER
 if (selectedCategory !== "All") {
 filtered = filtered.filter(
 (p) => p.category === selectedCategory
 );
 }

 // SEARCH FILTER
 if (search.trim()) {
 filtered = filtered.filter((p) =>
 p.name
 .toLowerCase()
 .includes(search.toLowerCase())
 );
 }

 // PRICE FILTER
 filtered = filtered.filter(
 (p) => p.price <= maxPrice
 );

 // ORGANIC FILTER
 if (organicOnly) {
 filtered = filtered.filter(
 (p) => p.organic
 );
 }
if (trendingOnly) {
 filtered = filtered.filter(
 (p) => p.trending
 );
}
filtered = filtered.filter((p) => {
 const rating = p.rating || 0;

 if (minRating === 4) {
 return rating >= 4 && rating < 5;
 }

 if (minRating === 3) {
 return rating >= 3 && rating < 4;
 }

 if (minRating === 2) {
 return rating >= 2 && rating < 3;
 }

 return true;
});

 // SORTING
 switch (sortBy) {
 case "price-low":
 filtered.sort(
 (a, b) => a.price - b.price
 );
 break;

 case "price-high":
 filtered.sort(
 (a, b) => b.price - a.price
 );
 break;

 case "rating":
 filtered.sort(
 (a, b) =>
 (b.rating || 0) -
 (a.rating || 0)
 );
 break;

 case "name":
 filtered.sort((a, b) =>
 a.name.localeCompare(b.name)
 );
 break;

 default:
 break;
 }

 return filtered;
 }, [
 search,
 selectedCategory,
 sortBy,
 maxPrice,
 organicOnly,
 minRating,
 trendingOnly,
 ]);
const percent = (maxPrice / 100) * 100;


 return (
 <div className="px-5 md:py-10 min-h-screen ">

 {/* PAGE TITLE */}
 <div className="mb-10 ">
    
    <div className="relative h-[350px] md:h-[400px] rounded-2xl overflow-hidden flex items-center px-5 md:px-10 text-white bg-[url('/image/new.jpg')] bg-cover bg-center md:bg-bottom">

 <div className="absolute inset-0 bg-black/40" />

 <div className="relative z-10">
 <h1 className="text-3xl  font-bold mb-2 md:text-4xl md:mb-3">
 Organic Fruits Delivered Fast
 </h1>

 <p className="mb-5 text-gray-200">
 Fresh, healthy & affordable
 </p>

 </div>
</div>
 <div className="flex items-center my-8">
 <div className="flex-1 border-t border-gray-300 dark:border-zinc-700" />

 <span className="px-4 text-2xl font-bold text-green-600 uppercase tracking-wider">
 Product
 </span>

 <div className="flex-1 border-t border-gray-300 dark:border-zinc-700" />
</div>
 </div>

 <div className="flex flex-col lg:flex-row gap-10">
<aside className="lg:w-[280px] hidden lg:block pb-30   w-full bg-white scrollbar-hide  dark:bg-zinc-900  dark:border-zinc-800 rounded-3xl p-5 ">

 {/* SEARCH */}
 <div className="mb-8">
 <h3 className="font-semibold mb-3">
 Search
 </h3>

 <input
 type="text"
 value={search}
 onChange={(e) =>
 setSearch(e.target.value)
 }
 placeholder="Search products..."
 className="
 w-full
 border
 border-gray-200
 dark:border-zinc-700
 rounded-full
 px-4 py-3
 focus:outline-none
 focus:ring-2
 focus:ring-green-600
 bg-white
 dark:bg-zinc-800
 "
 />
 </div>


 

 {/* CATEGORIES */}
 <div className="mb-8">
 <h3 className="font-semibold mb-4">
By Categories
 </h3>

 <div className="flex flex-wrap flex-col gap-3">
 {categories.map((cat) => (
 <button
 key={cat}
 onClick={() =>

 {
    setSelectedCategory(cat)
   setIsFilterOpen(false)
 }
 }
 className={`
  text-sm transition font-semibold text-left cursor-pointer
 ${
 selectedCategory === cat
 ? "text-green-600"
 : " dark:bg-zinc-800"
 }
 `}
 >
 {cat}
 </button>
 ))}
 </div>
 </div>

 {/* PRICE FILTER */}
 <div className="mb-8">
 <div className="flex justify-between mb-3">
 <h3 className="font-semibold ">
 Max Price
 </h3>

 <p className="font-bold text-green-600">
 ${maxPrice}
 </p>
 </div>

 <input
 type="range"
 min="1"
 max="100"
 value={maxPrice}
 onChange={(e) =>
 setMaxPrice(Number(e.target.value))
 }
 style={{ "--value": `${percent}%` } as React.CSSProperties}
 className="price-slider"
/>
 </div>

 {/* ORGANIC */}
 <div className="mb-8">
 <label className="flex items-center gap-3 cursor-pointer">

 <input
 type="checkbox"
 checked={organicOnly}
 onChange={() =>
 setOrganicOnly(
 !organicOnly
 )
 }
 className="w-5 h-5 accent-green-600 cursor-pointer"
 />

 <span>
 Organic Only
 </span>

 </label>
 </div>
<div className="mb-8">
 <label className="flex items-center gap-3 cursor-pointer">

 <input
 type="checkbox"
 checked={trendingOnly}
 onChange={() =>
 setTrendingOnly(!trendingOnly)
 }
 className="w-5 h-5 accent-green-600 cursor-pointer"
 />

 <span>
 Trending Only
 </span>

 </label>
</div>
<div className="mb-8">
 <h3 className="font-semibold mb-3">
 Rating
 </h3>

 <div className="flex flex-col gap-2">
 


 <button
 onClick={() => setMinRating(4)}
 className={`text-left px-3 cursor-pointer  py-2 rounded-lg ${
 minRating == 4
 ? "text-green-600 "
 : "text-amber-400"
 }`}
 >
 ★★★★☆ 4+
 </button>

 <button
 onClick={() => setMinRating(3)}
 className={`text-left cursor-pointer px-3 py-2 rounded-lg ${
 minRating == 3
 ? "text-green-600 "
 : "text-amber-400"
 }`}
 >
 ★★★☆☆ 3+
 </button>

 <button
 onClick={() => setMinRating(2)}
 className={`text-left px-3 py-2 cursor-pointer rounded-lg ${
 minRating === 2
 ? "text-green-600"
 : "text-amber-400"
 }`}
 >
 ★★☆☆☆ 2+
 </button>

 </div>
</div>


 {/* SORT */}
 <div className="mb-8">
 <h3 className="font-semibold mb-3 ">
 Sort By
 </h3>

 <div className="space-y-2">
 {sortOptions.map((option) => (
 <div
 key={option.value}
 onClick={() =>{
   setSortBy(option.value)
   
 } 
   
 }
 className={`
 px-2 py-2 rounded-lg cursor-pointer transition
 border
 ${
 sortBy === option.value
 ? "bg-green-600 text-white border-green-600"
 : "bg-white dark:bg-zinc-800 border-gray-200 dark:border-zinc-700"
 }
 hover:scale-[1.02]
 `}
 >
 {option.label}
 </div>
 ))}
 </div>
</div>

 </aside>

{isFilterOpen && (
 <div className=" fixed inset-0  bg-black/50 z-50 lg:hidden">
 <div className="absolute left-0 top-0 w-[85%] h-full  bg-white p-5 overflow-y-auto scrollbar-hide">
 
 <div className="flex justify-end mb-2 ">
<button className="cursor-pointer" onClick={() => setIsFilterOpen(false)}>
<IoMdClose />
 </button>
 </div>
 

 {/* 👇 MOVE YOUR ENTIRE SIDEBAR CONTENT HERE */}
  {/* SIDEBAR */}
 <aside className="lg:w-[280px]  pb-30  h-full overflow-y-auto w-full bg-white scrollbar-hide  dark:bg-zinc-900  dark:border-zinc-800 rounded-3xl p-5 ">

 {/* SEARCH */}
 <div className="mb-8">
 <h3 className="font-semibold mb-3">
 Search
 </h3>

 <input
 type="text"
 value={search}
 onChange={(e) =>
 setSearch(e.target.value)
 }
 placeholder="Search products..."
 className="
 w-full
 border
 border-gray-200
 dark:border-zinc-700
 rounded-full
 px-4 py-3
 focus:outline-none
 focus:ring-2
 focus:ring-green-600
 bg-white
 dark:bg-zinc-800
 "
 />
 </div>


 

 {/* CATEGORIES */}
 <div className="mb-8">
 <h3 className="font-semibold mb-4">
By Categories
 </h3>

 <div className="flex flex-wrap flex-col gap-3">
 {categories.map((cat) => (
 <button
 key={cat}
 onClick={() =>
 setSelectedCategory(cat)
 }
 className={`
  text-sm transition font-semibold text-left cursor-pointer
 ${
 selectedCategory === cat
 ? "text-green-600"
 : " dark:bg-zinc-800"
 }
 `}
 >
 {cat}
 </button>
 ))}
 </div>
 </div>

 {/* PRICE FILTER */}
 <div className="mb-8">
 <div className="flex justify-between mb-3">
 <h3 className="font-semibold ">
 Max Price
 </h3>

 <p className="font-bold text-green-600">
 ${maxPrice}
 </p>
 </div>

 <input
 type="range"
 min="1"
 max="100"
 value={maxPrice}
 onChange={(e) =>
 setMaxPrice(Number(e.target.value))
 }
 style={{ "--value": `${percent}%` } as React.CSSProperties}
 className="price-slider"
/>
 </div>

 {/* ORGANIC */}
 <div className="mb-8">
 <label className="flex items-center gap-3 cursor-pointer">

 <input
 type="checkbox"
 checked={organicOnly}
 onChange={() =>
 setOrganicOnly(
 !organicOnly
 )
 }
 className="w-5 h-5 accent-green-600 cursor-pointer"
 />

 <span>
 Organic Only
 </span>

 </label>
 </div>
<div className="mb-8">
 <label className="flex items-center gap-3 cursor-pointer">

 <input
 type="checkbox"
 checked={trendingOnly}
 onChange={() =>
 setTrendingOnly(!trendingOnly)
 }
 className="w-5 h-5 accent-green-600 cursor-pointer"
 />

 <span>
 Trending Only
 </span>

 </label>
</div>
<div className="mb-8">
 <h3 className="font-semibold mb-3">
 Rating
 </h3>

 <div className="flex flex-col gap-2">
 


 <button
 onClick={() => setMinRating(4)}
 className={`text-left px-3  py-2 rounded-lg ${
 minRating === 4
 ? "text-green-600 "
 : "text-amber-400"
 }`}
 >
 ★★★★☆ 4+
 </button>

 <button
 onClick={() => setMinRating(3)}
 className={`text-left px-3 py-2 rounded-lg ${
 minRating === 3
 ? "text-green-600 "
 : "text-amber-400"
 }`}
 >
 ★★★☆☆ 3+
 </button>

 <button
 onClick={() => setMinRating(2)}
 className={`text-left px-3 py-2 rounded-lg ${
 minRating === 2
 ? "text-green-600"
 : "text-amber-400"
 }`}
 >
 ★★☆☆☆ 2+
 </button>

 </div>
</div>


 {/* SORT */}
 <div className="mb-8">
 <h3 className="font-semibold mb-3 ">
 Sort By
 </h3>

 <div className="space-y-2">
 {sortOptions.map((option) => (
 <div
 key={option.value}
 onClick={() => setSortBy(option.value)}
 className={`
 px-2 py-2 rounded-lg cursor-pointer transition
 border
 ${
 sortBy === option.value
 ? "bg-green-600 text-white border-green-600"
 : "bg-white dark:bg-zinc-800 border-gray-200 dark:border-zinc-700"
 }
 hover:scale-[1.02]
 `}
 >
 {option.label}
 </div>
 ))}
 </div>
</div>

 </aside>
 </div>
 </div>
)}




 {/* PRODUCTS SECTION */}
 <section className="flex-1 ">

 {/* PRODUCT COUNT */}
 <div className="flex justify-between items-center mb-6">
<button
 onClick={() => setIsFilterOpen(true)}
 className="lg:hidden cursor-pointer bg-green-600 text-white px-6 py-2 font-semibold rounded-4xl"
>
 Filters
</button>
 <p className="text-gray-700 font-semibold mt-5 dark:text-gray-300">
 {filteredProducts.length} Products
 </p>

 </div>

 {/* EMPTY STATE */}
 {filteredProducts.length === 0 ? (

 <div className="flex flex-col items-center justify-center py-25 text-center">

 <div className="text-6xl">
 🔍
 </div>

 <h2 className="text-3xl font-bold mt-5">
 No products found
 </h2>

 <p className="text-gray-500 mt-3">
 Try adjusting your filters
 </p>

 </div>

 ) : (

 <ProductGrid
 products={filteredProducts}
 />

 )}

 </section>

 </div>
<Footer />

 </div>
 );
}