
import { useEffect } from "react";
import { motion } from "framer-motion";

type WelcomeProps = {
  onComplete: () => void;
};

const Welcome = ({ onComplete }: WelcomeProps) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete?.();
    }, 6000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  const stars = [
    { x: -175, y: -115, delay: 0 },
    { x: 175, y: -115, delay: 0.2 },
    { x: -185, y: 110, delay: 0.4 },
    { x: 185, y: 110, delay: 0.1 },
    { x: 0, y: -185, delay: 0.3 },
    { x: 0, y: 185, delay: 0.4 },
  ];

  return (
    
<motion.div
  initial={{ opacity: 1, y: 0 }}
  exit={{ y: "-100%" }}
  transition={{
    duration: 0.8,
    ease: [0.76, 0, 0.24, 1],
  }}
  className="fixed inset-0 z-50  flex items-center justify-center bg-black overflow-hidden"
>
      <div className="relative md:px-40 flex items-center justify-center">

        {/* Circle */}
        <motion.svg
          viewBox="0 0 500 500"
className="absolute w-[260px] h-[260px] sm:w-[430px] sm:h-[430px]"
          initial={{ rotate: -90 }}
        >
          <motion.circle
            cx="250"
            cy="250"
            r="235"
            fill="none"
            stroke="#1de66a"
            strokeWidth="5"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 2.8,
              ease: "easeInOut",
            }}
          />
        </motion.svg>

        {/* FreshMart Logo */}
        <motion.img
          src="/FreshMart-512-removebg-preview.png"
          alt="FreshMart"
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative z-10 w-[280px] h-auto sm:w-[360px] object-contain"
        />

        {/* Stars */}
        {stars.map((star, index) => (
          <motion.svg
            key={index}
            viewBox="0 0 24 24"
            className="absolute z-20 w-6 h-6 sm:w-8 sm:h-8"
            style={{ x: star.x, y: star.y }}
            fill="#408A71"
            initial={{ opacity: 0, scale: 0, rotate: 0 }}
            animate={{
              opacity: [0, 1, 1, 0],
              scale: [0, 1.3, 1.3, 0],
              rotate: [0, 90, 180],
            }}
            transition={{
              delay: 2.8 + star.delay,
              duration: 2.2,
              times: [0, 0.2, 0.8, 1],
              ease: "easeInOut",
            }}
          >
            <path d="M12 0L14.8 9.2L24 12L14.8 14.8L12 24L9.2 14.8L0 12L9.2 9.2Z" />
          </motion.svg>
        ))}

      </div>
    </motion.div>
  );
};

export default Welcome;
