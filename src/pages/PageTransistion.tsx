import { motion } from "framer-motion";
import type { ReactNode } from "react";

const PageTransition = ({ children }: { children: ReactNode }) => (
 <motion.div
 initial={{ opacity: 0, x: -60 }}
 animate={{ opacity: 1, x: 0 }}
 exit={{ opacity: 0, x: 60 }}
 transition={{ duration: 0.6, ease: "easeOut" }}
 >
 {children}
 </motion.div>
);

export default PageTransition;