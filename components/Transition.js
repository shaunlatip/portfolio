import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';


const Transition = ({ children }) => {

  const { asPath } = useRouter();

  const variants = {
    out: {
      opacity: 0,
      y: 0,
      transition: {
        duration: 0.25
      }
    },
    in: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0
      }
    }
  };

  return (
		<div className="effect-1">
			<AnimatePresence
	      initial={false}
	      exitBeforeEnter
	    >
      <motion.div
        key={asPath}
        variants={variants}
        animate="in"
        initial="out"
        exit="out"
      >
        {children}
      </motion.div>
	    </AnimatePresence>
		</div>
	);
};

export default Transition;