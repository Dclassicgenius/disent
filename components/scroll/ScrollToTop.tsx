"use client";

import {
  Variants,
  motion,
  useAnimationControls,
  useScroll,
} from "framer-motion";
import ArrowUp from "./ArrowUp";
import { useEffect } from "react";

const ScrollToTopVariants: Variants = {
  hide: { opacity: 0, y: 100 },
  show: { opacity: 1, y: 0 },
};

const ScrollToTop = () => {
  const { scrollYProgress } = useScroll();
  const controls = useAnimationControls();
  const isBrowser = typeof window !== "undefined";

  const scrollToTop = () => {
    if (!isBrowser) return;
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    return scrollYProgress.on("change", (latest) => {
      if (latest > 0.05) {
        controls.start("show");
      } else {
        controls.start("hide");
      }
    });
  });
  return (
    <motion.button
      className="fixed bottom-0 right-0 p-4"
      initial="hide"
      animate={controls}
      variants={ScrollToTopVariants}
      onClick={scrollToTop}
    >
      <ArrowUp />
    </motion.button>
  );
};

export default ScrollToTop;
