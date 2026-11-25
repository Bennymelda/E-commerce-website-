
import { motion, type Variants } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { useState } from "react";

type ThirdWelcomePageProps = {
  onComplete: () => void;
};

const ThirdWelcomePage = ({ onComplete }: ThirdWelcomePageProps) => {

const imageContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const imageVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const contentContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.3,
    },
  },
};

const textVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};
const [imagesComplete, setImagesComplete] = useState(false);
 return (
 <section className="flex h-dvh w-full flex-col overflow-hidden bg-white px-5 pt-[max(1.25rem,env(safe-area-inset-top))] pb-[max(0.75rem,env(safe-area-inset-bottom))] sm:px-8 md:px-10">
 {/* Image grid: takes all leftover height */}
 <motion.div
 variants={imageContainerVariants}
 initial="hidden"
 animate="visible"
 onAnimationComplete={() => setImagesComplete(true)}
 className="mx-auto grid min-h-0 w-full max-w-4xl flex-1 grid-cols-3 gap-3 md:gap-5"
 >
 {/* Left column (shifted up) */}
 <div className="flex min-h-0 min-w-0 flex-col gap-3 pb-6">
 <motion.img variants={imageVariants} src="/image/dry-date-3.jpg" alt=""
 className="h-0 w-full flex-1 rounded-2xl object-cover" />
 <motion.img variants={imageVariants} src="/image/fruit-grape-2.jpg" alt=""
 className="h-0 w-full flex-1 rounded-2xl object-cover" />
 </div>

 {/* Middle column (shifted down) */}
 <div className="flex min-h-0 min-w-0 flex-col gap-3 pt-6">
 <motion.img variants={imageVariants} src="/image/fruit-pineapple-3.jpg" alt=""
 className="h-0 w-full flex-1 rounded-2xl object-cover" />
 <motion.img variants={imageVariants} src="/image/juice-apple-1.jpg" alt=""
 className="h-0 w-full flex-1 rounded-2xl object-cover" />
 </div>

 {/* Right column (shifted up) */}
 <div className="flex min-h-0 min-w-0 flex-col gap-3 pb-6">
 <motion.img variants={imageVariants} src="/image/juice-orange-3.webp" alt=""
 className="h-0 w-full flex-1 rounded-2xl object-cover" />
 <motion.img variants={imageVariants} src="/image/smoothie-blueberry-3.jpg" alt=""
 className="h-0 w-full flex-1 rounded-2xl object-cover" />
 </div>
 </motion.div>

 {/* Text: natural height */}
 <motion.div
 variants={contentContainerVariants}
 initial="hidden"
 animate={imagesComplete ? "visible" : "hidden"}
 className="shrink-0 pt-5 text-center"
 >
 <motion.h1 variants={textVariants}
 className="text-2xl font-bold text-black sm:text-4xl">
 Freshness You'll <span className="text-green-600">Love.</span>
 </motion.h1>

 <motion.p variants={textVariants}
 className="mx-auto mt-2 max-w-lg text-sm leading-5 text-gray-600 sm:text-base">
 From juicy fruits to refreshing drinks, discover delicious
 goodness and make every day a little healthier.
 </motion.p>
 </motion.div>

 {/* Button + dots */}
 <div className="shrink-0">
 <motion.button
 variants={textVariants}
 initial="hidden"
 animate={imagesComplete ? "visible" : "hidden"}
 transition={{ delay: 0.9, duration: 0.6 }}
 onClick={onComplete}
 className="mx-auto mt-5 flex w-full max-w-xl items-center justify-center gap-3 rounded-full bg-green-600 px-7 py-4 font-semibold text-white shadow-lg shadow-[#408A71]/20 transition-colors hover:bg-green-700"
 >
 Explore FreshMart
 <FaArrowRight size={20} />
 </motion.button>

 <div className="mt-4 flex items-center justify-center gap-3">
 {[1, 2, 3].map((page) => (
 <button
 key={page}
 aria-label={`Onboarding page ${page}`}
 className={`h-3 rounded-full transition-all duration-500 ${
 page === 2 ? "w-8 bg-green-600" : "w-3 bg-gray-400"
 }`}
 />
 ))}
 </div>
 </div>
 </section>
);
};

export default ThirdWelcomePage;
