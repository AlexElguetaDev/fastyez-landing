import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import fastyez from "../assets/fastyez.svg";
import SvgIcon from "./SvgIcon";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollDirection, setScrollDirection] = useState("up");

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }
      lastScrollY = currentScrollY;
      setIsScrolled(currentScrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <AnimatePresence>
      {isScrolled && scrollDirection === "up" && (
        <motion.div
          className="fixed z-50 w-full px-20 py-1 flex justify-between items-center backdrop-blur-md bg-opacity-40 bg-white"
          initial={{ y: "-100%" }}
          animate={{ y: "0%" }}
          exit={{ y: "-100%" }}
        >
          <div className="logo">
            <SvgIcon src={fastyez} width="100" height="100" />
          </div>
          {/* <div className="links flex gap-10">
            {links.map((link, index) => (
              <a
                key={link}
                href={`#${link}`}
                className={`text-lg capitalize font-light ${
                  index === links.length - 1 ? "ml-32" : ""
                }`}
              >
                {link}
              </a>
            ))}
          </div> */}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Navbar;
