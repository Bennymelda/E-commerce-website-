import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import { Link } from "react-router-dom";

const banners = [
 {
 title: "Hand-Picked Organic Apples",
 subtitle:
 "Crispy, sweet and delivered fresh from our orchard to your door within 24 hours.",
 bgImage: "/image/banner-1.png",
 },
 {
 title: "Pure Nature in Every Taste",
 subtitle:
 "100% cold-pressed juice with zero additives, vitality in a bottle.",
 bgImage: "/image/banner-2.png",
 },
 {
 title: "Berry Bliss",
 subtitle:
 "Antioxidant rich organic berries nested at the peak of ripeness.",
 bgImage: "/image/banner-3.png",
 },
];

const PromoBanner = () => {
 const [index, setIndex] = useState(0);

 const next = () => {
 setIndex((prev) => (prev + 1) % banners.length);
 };

 const prev = () => {
 setIndex((prev) =>
 prev === 0 ? banners.length - 1 : prev - 1
 );
 };

 // AUTO SLIDE
 useEffect(() => {
 const interval = setInterval(next, 5000);
 return () => clearInterval(interval);
 }, []);

 const banner = banners[index];

 return (
 <div className="relative w-full h-[400px] md:h-[600px] overflow-hidden">

 {/* BACKGROUND */}
 <div
 className="absolute inset-0 bg-cover bg-center transition-all duration-700"
 style={{ backgroundImage: `url(${banner.bgImage})` }}
 />

 {/* GRADIENT OVERLAY */}
 <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/10" />

 {/* CONTENT */}
 <motion.div
 key={index}
 initial={{ opacity: 0, x: 40 }}
 animate={{ opacity: 1, x: 0 }}
 exit={{ opacity: 0, x: -40 }}
 transition={{ duration: 0.7 }}
 className="
 relative
 z-10
 h-full
 flex
 flex-col
 justify-center
 px-6
 md:px-12
 lg:px-20
 text-white
 max-w-3xl
 "
 >
 <span className="
 text-sm
 md:text-base
 font-semibold
 tracking-wide
 text-green-300
 mb-3
 ">
 FRESH. SIMPLE. DELIVERED.
 </span>

 <h2 className="
 text-3xl
 sm:text-3xl
 md:text-5xl
 font-bold
 leading-tight
 mb-3
 max-w-2xl
 ">
 {banner.title}
 </h2>

 <p className="
 text-base
 md:text-lg
 lg:text-xl
 text-white/90
 leading-relaxed
 max-w-xl
 ">
 {banner.subtitle}
 </p>

 <Link
 to="/products"
 className="
 mt-7
 inline-flex
 items-center
 justify-center
 bg-green-600
 hover:bg-green-700
 text-white
 font-semibold
 px-7
 py-3
 rounded-full
 w-fit
 transition
 duration-200
 "
 >
 Shop fresh groceries
 </Link>
 </motion.div>

 {/* DESKTOP DOTS */}
 <div className="
 hidden
 md:flex
 absolute
 bottom-6
 left-1/2
 -translate-x-1/2
 gap-2
 z-20
 ">
 {banners.map((_, i) => (
 <button
 key={i}
 onClick={() => setIndex(i)}
 aria-label={`Go to slide ${i + 1}`}
 className={`
 h-2
 rounded-full
 transition-all
 duration-300
 ${
 i === index
 ? "w-8 bg-white"
 : "w-2 bg-white/50"
 }
 `}
 />
 ))}
 </div>

 {/* MOBILE ARROWS */}
 <div className="md:hidden">
 <button
 onClick={prev}
 aria-label="Previous banner"
 className="
 absolute
 left-3
 top-1/2
 -translate-y-1/2
 text-white
 text-3xl
 z-20
 cursor-pointer
 bg-black/20
 hover:bg-black/40
 rounded-full
 p-1
 transition
 "
 >
 <MdNavigateBefore />
 </button>

 <button
 onClick={next}
 aria-label="Next banner"
 className="
 absolute
 right-3
 top-1/2
 -translate-y-1/2
 text-white
 text-3xl
 z-20
 cursor-pointer
 bg-black/20
 hover:bg-black/40
 rounded-full
 p-1
 transition
 "
 >
 <MdNavigateNext />
 </button>
 </div>

 </div>
);
};

export default PromoBanner;