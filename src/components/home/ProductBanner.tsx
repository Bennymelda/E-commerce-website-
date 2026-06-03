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
 <div className="relative w-full h-[400px] md:h-[600px] overflow-hidden px-2">

 {/* BACKGROUND (NO RE-RENDER FLICKER) */}
 <div
 className="absolute inset-0 bg-cover bg-center transition-all duration-700"
 style={{ backgroundImage: `url(${banner.bgImage})` }}
 />

 {/* DARK OVERLAY */}
 <div className="absolute inset-0 bg-black/40" />

 {/* CONTENT (ONLY THIS ANIMATES) */}
 <motion.div
 key={index}
 initial={{ opacity: 0, x: 50 }}
 animate={{ opacity: 1, x: 0 }}
 exit={{opacity:0, x:-50}}
 transition={{ duration:0.8}}
 className="relative  z-10 h-full flex flex-col justify-center px-10 md:px-10 md:w-[600px] text-white"
 >
 <h2 className="text-3xl md:text-5xl font-bold mb-4">
 {banner.title}
 </h2>

 <p className="text-white/90 text-lg">
 {banner.subtitle}
 </p>

 <Link to="/products">
 <button className="bg-green-600 mt-6 px-6 py-3 rounded-3xl font-semibold w-fit">
 Shop now
 </button>
 </Link>
 </motion.div>

 {/* DESKTOP DOTS */}
 <div className="hidden md:flex absolute bottom-4 left-1/2 -translate-x-1/2 gap-2">
 {banners.map((_, i) => (
 <button
 key={i}
 onClick={() => setIndex(i)}
 className={`w-3 h-3 rounded-full transition ${
 i === index ? "bg-white" : "bg-white/40"
 }`}
 />
 ))}
 </div>

 {/* MOBILE ARROWS */}
 <div className="md:hidden">
 <button
 onClick={prev}
 className="absolute left-3 top-1/2 -translate-y-1/2 text-white text-3xl z-20 cursor-pointer"
>
 <MdNavigateBefore />
</button>

<button
 onClick={next}
 className="absolute right-3 top-1/2 -translate-y-1/2 text-white text-3xl z-20 cursor-pointer"
>
 <MdNavigateNext />
</button>
 </div>
 </div>
 );
};

export default PromoBanner;