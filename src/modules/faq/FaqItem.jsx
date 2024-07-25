import PropTypes from "prop-types";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FaqItem = (props) => {
  const { question, answer } = props;
  const [isOpen, setIsOpen] = useState(false);

  const handleOnClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        className="w-full flex gap-2 justify-between items-center p-5 relative mb-2 cursor-pointer"
        onClick={handleOnClick}
      >
        <div className="absolute inset-0 w-full h-full bg-neutral-600 opacity-50" />
        <h1 className="text-lg lg:text-2xl z-10">{question}</h1>
        <div className="z-10 cursor-pointer">
          <p className="text-3xl">{isOpen ? "x" : "+"}</p>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: -10 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="w-full p-5 mt-1 relative mb-1"
          >
            <div className="absolute inset-0 w-full h-full bg-neutral-600 opacity-50" />
            <p className="relative z-10 text-lg lg:text-2xl whitespace-pre-line">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

FaqItem.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
};

export default FaqItem;
