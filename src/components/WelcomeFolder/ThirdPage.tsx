
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
    <section className="flex h-dvh w-full flex-col overflow-hidden bg-white px-5 pt-5 pb-3 sm:px-8 md:px-10 md:py-6">
       <motion.div 
         variants={imageContainerVariants}
  initial="hidden"
  animate="visible"
  onAnimationComplete={() => setImagesComplete(true)}

     className="mx-auto grid w-full max-w-4xl grid-cols-3 gap-3 md:gap-5 lg:max-w-5xl">
  <div className="flex min-w-0 flex-col gap-3">
    <motion.img
    variants={imageVariants}
      src="/image/dry-date-3.jpg"
      alt=""
     className="h-[17vh] min-h-24 max-h-52 w-full rounded-2xl object-cover sm:h-[20vh] md:h-[30vh]"
    />
    <motion.img
    variants={imageVariants}
      src="/image/fruit-grape-2.jpg"
      alt=""
      className="h-[17vh] min-h-24 max-h-52 w-full rounded-2xl object-cover sm:h-[20vh] md:h-[30vh]"
    />
  </div>

  <div className="mt-10 flex min-w-0 flex-col gap-3">
    <motion.img
    variants={imageVariants}
      src="/image/fruit-pineapple-3.jpg"
      alt=""
      className="h-[17vh] min-h-24 max-h-52 w-full rounded-2xl object-cover sm:h-[20vh] md:h-[30vh]"
    />
    <motion.img
    variants={imageVariants}
      src="/image/juice-apple-1.jpg"
      alt=""
      className="h-[17vh] min-h-24 max-h-52 w-full rounded-2xl object-cover sm:h-[20vh] md:h-[30vh]"
    />
  </div>

  <div className="flex min-w-0 flex-col gap-3">
    <motion.img
    variants={imageVariants}
      src="/image/juice-orange-3.webp"
      alt=""
      className="h-[17vh] min-h-24 max-h-52 w-full rounded-2xl object-cover sm:h-[20vh] md:h-[30vh]"
    />
    <motion.img
    variants={imageVariants}
      src="/image/smoothie-blueberry-3.jpg"
      alt=""
      className="h-[17vh] min-h-24 max-h-52 w-full rounded-2xl object-cover sm:h-[20vh] md:h-[30vh]"
    />
  </div>
</motion.div>
      {/* Text Content */}
    <motion.div
   variants={contentContainerVariants}
  initial="hidden"
  animate={imagesComplete ? "visible" : "hidden"}
  className="pt-6 text-center mt-4"
>
  <motion.h1
    variants={textVariants}
    className="text-3xl font-bold text-black sm:text-4xl"
  >
    Freshness You'll{" "}
    <span className="text-green-600">Love.</span>
  </motion.h1>

  <motion.p
    variants={textVariants}
    className="mx-auto mt-3 max-w-lg text-sm leading-6 text-gray-600 sm:text-base"
  >
    From juicy fruits to refreshing drinks, discover delicious
    goodness and make every day a little healthier.
  </motion.p>
</motion.div>

     

      {/* Bottom Navigation */}
      <div className="flex flex-col items-center gap-5 pb-3 ">
        
<div className=" px-6 w-full text-center items-center flex justify-center">
       <motion.button
  variants={textVariants}
  initial="hidden"
  animate={imagesComplete ? "visible" : "hidden"}
  transition={{ delay: 0.9, duration: 0.6 }}
  onClick={onComplete}
  className="mt-6 flex w-full items-center  justify-center gap-4 rounded-full bg-green-600 px-7 py-3 font-semibold text-white shadow-lg shadow-[#408A71]/20 transition-colors hover:bg-green-700"
>
  Explore FreshMart
  <FaArrowRight size={22} />
</motion.button>


       </div> 

       <div className="flex items-center justify-center gap-3">
          {[1, 2, 3].map((page) => (
            <button
              key={page}
              aria-label={`Onboarding page ${page}`}
              className={`h-3 rounded-full transition-all duration-500 ${
                page === 2
                  ? "w-8 bg-green-600"
                  : "w-3 bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>

    </section>
  );
};

export default ThirdWelcomePage;
