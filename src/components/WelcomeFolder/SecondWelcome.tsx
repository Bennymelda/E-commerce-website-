
import { motion, type Variants } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";

type SecondWelcomePageProps = {
  onGetStarted: () => void;
};

const SecondWelcomePage = ({ onGetStarted }: SecondWelcomePageProps) => {

  
const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.8,
      delayChildren: 0.5,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 25,
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


 

  return (
   <section className="h-dvh overflow-hidden bg-zinc-900">
  <div className="mx-auto grid h-full max-w-7xl grid-rows-[minmax(0,1fr)_auto] md:grid-cols-2 md:grid-rows-1 md:items-center md:gap-10 md:px-12">

   {/* Left Image */}
       <motion.div
 initial={{ opacity: 0, scale: 0.9, x: 40 }}
 animate={{ opacity: 1, scale: 1, x: 0 }}
 transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
 className="relative min-h-0 overflow-hidden md:h-[min(75dvh,42rem)]"
>
 <img
 src="/welcome-4.jpg"
 alt="FreshMart fresh produce"
 className="absolute inset-0 h-full w-full rounded-b-[1.7rem] object-cover object-center md:rounded-2xl"
 />
</motion.div>

        {/* Right Content */}
       <motion.div
 variants={containerVariants}
 initial="hidden"
 animate="visible"
 className="flex w-full max-w-xl flex-col px-5 pb-[max(1rem,env(safe-area-inset-bottom))] pt-5 md:mx-auto md:px-0 md:py-0"
>



          {/* Heading */}
          <motion.h1
            variants={itemVariants}
           className="px-4  text-3xl font-semibold leading-[1.1] tracking-tight text-white sm:text-3xl md:text-4xl lg:text-5xl [@media(max-height:_500px)]:text-xl sm:[@media(max-height:_500px)]:text-2xl md:[@media(max-height:_500px)]:text-3xl"
          >
            Fresh Choices,
            <span className="mt-1 block text-[#4ADD82] sm:mt-2">
              Delivered Fresh.
            </span>
          </motion.h1>

          {/* Paragraph */}
          <motion.p
            variants={itemVariants}
           className="mt-2 max-w-lg px-4 text-sm leading-5 text-gray-400 sm:text-base md:mt-5 "
          >
             Enjoy fresh fruits, crisp vegetables, delicious smoothies and naturally
            dried fruits, all in one place.
          </motion.p>

          {/* Get Started Button */}
          <div className="flex items-center justify-center px-4 text-center">
          <motion.button
            variants={itemVariants}
            onClick={onGetStarted}
            whileHover={{
              scale: 1.04,
              x: 5,
            }}
            whileTap={{
              scale: 0.96,
            }}
            className="mt-4 flex w-full py-4 items-center justify-center gap-4 rounded-full bg-[#4ADD82] px-7 py-3 font-semibold text-black shadow-lg shadow-[#408A71]/20 transition-colors hover:bg-[#1de66a] [@media(max-height:_500px)]:mt-2 [@media(max-height:_500px)]:py-2 md:mt-6"
          >
            Get Started
            <FaArrowRight size={22} />
          </motion.button>
</div>

          {/* Onboarding Indicators */}
<motion.div 
variants={itemVariants}
className="mt-3 flex items-center justify-center gap-3 [@media(max-height:_500px)]:mt-2">
  {[1, 2, 3].map((page) => (

       <motion.button
       
                key={page}
                aria-label={`Go to onboarding page ${page}`}
                className={`h-2 rounded-full transition-all duration-500 ${
                  page === 1
                    ? "w-8 bg-[#4ADD82]"
                    : "w-2 bg-gray-500 hover:bg-gray-300"
                }`}
              />
  ))}
</motion.div>

        </motion.div>

      </div>





    </section>
  );
};

export default SecondWelcomePage;
