import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { ReactNode } from "react";

// Props interfaces
interface TransitionProps {
  children: ReactNode;
}

interface FadeProps {
  children: ReactNode;
}

// Original Transition component converted to TypeScript
export const Transition = ({ children }: TransitionProps) => {
  const { asPath } = useRouter();
  let transitionKey = "";

  if (!asPath.includes("#")) {
    transitionKey = asPath;
  }

  const variants = {
    out: {
      opacity: 0,
      y: 0,
      transition: {
        duration: 0.0,
      },
    },
    in: {
      y: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
    inactive: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="effect-1">
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={asPath}
          variants={variants}
          initial="in"
          animate="inactive"
          exit="out"
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};