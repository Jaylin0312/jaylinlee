import { motion, useCycle } from "framer-motion";
import { useState, useEffect } from "react";

const MenuButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const handleResize = () => {
    if (window.innerWidth > 768) {
      setIsOpen(false);
    }
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <button onClick={toggleMenu} className="flex flex-col justify-around w-5">
      <motion.div
        className="flex flex-col justify-around h-5 w-full"
        initial={false}
        animate={isOpen ? "open" : "closed"}
      >
        <motion.span
          className="block w-full h-1 bg-slate-100"
          variants={{
            closed: { rotate: 0 },
            open: { rotate: 45, translateY: "9px" },
          }}
        />
        <motion.span
          className="block w-full h-1 bg-slate-100"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
        />
        <motion.span
          className="block w-full h-1 bg-slate-100"
          variants={{
            closed: { rotate: 0 },
            open: { rotate: -45, translateY: "-5px" },
          }}
        />
      </motion.div>
    </button>
  );
};

export default MenuButton;
