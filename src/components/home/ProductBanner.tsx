import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import { Link } from "react-router-dom";

const banners = [
 {
 title: "   Hand-Picked Organic Apples",
 subtitle: "cripsy,sweet and delivered fresh from our orchard to your door within 24hours.",
 bgImage: "/image/banner-1.png",
 },
 {
 title: "Pure Nature in Every Taste",
 subtitle: "100% cold-pressed juice with zero additives, vitality in a bottle.",
 bgImage: "/image/banner-2.png",
 },
 {
 title: "Berry Bliss",
 subtitle: "Antioxidant rich organic berries nested at the peak of ripeness",
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

 // auto slide
 useEffect(() => {
 const interval = setInterval(next, 5000);
 return () => clearInterval(interval);
 }, []);

 const banner = banners[index];

 return (
 <div className="relative w-full">

 {/* SLIDE */}
 <AnimatePresence mode="wait">
 <motion.div
 key={index}
 initial={{ opacity: 0, x: 50 }}
 animate={{ opacity: 1, x: 0 }}
 exit={{ opacity: 0, x: -50 }}
 transition={{ duration: 0.6 }}
 className=" p-10 text-white h-[400px] md:h-[600px] flex flex-col justify-center relative overflow-hidden"
 >

 {/* BACKGROUND IMAGE */}
 <div
 className="absolute inset-0 bg-no-repeat bg-cover bg-center"
 style={{ backgroundImage: `url(${banner.bgImage})` }}
 />

 {/* DARK OVERLAY */}
 <div className="absolute inset-0 bg-black/40" />

 {/* CONTENT */}
 <div className="relative z-10 md:w-[500px]">
 <h2 className="text-4xl md:text-5xl mb-5 font-bold">
 {banner.title}
 </h2>

 <p className="mt-2 text-white/90 text-lg ">
 {banner.subtitle}
 </p>
 
 
 <button
 
 className="bg-green-600 mt-4 text-lg 
 font-semibold px-8 md:py-3 py-2 rounded-4xl
  cursor-pointer">
<Link to='/products'
 
 >Shop now</Link>

  </button>
 </div>
 </motion.div>
 </AnimatePresence>

 {/* DESKTOP DOTS */}
 <div className="hidden md:flex absolute bottom-4 left-1/2 -translate-x-1/2 gap-2 z-20">
 {banners.map((_, i) => (
 <button
 key={i}
 onClick={() => setIndex(i)}
 className={`w-3 h-3 cursor-pointer rounded-full transition ${
 i === index ? "bg-white" : "bg-white/40"
 }`}
 />
 ))}
</div>

 {/* MOBILE ARROWS */}

<div className="md:hidden">

 <button
 onClick={prev}
 className="absolute left-3 cursor-pointer top-1/2 -translate-y-1/2 text-white text-3xl z-20"
 >
 <MdNavigateBefore />
 </button>

 <button
 onClick={next}
 className="absolute right-3 cursor-pointer top-1/2 -translate-y-1/2 text-white text-3xl z-20"
 >
 <MdNavigateNext />
 </button>
</div>

 </div>
 );
};

export default PromoBanner;