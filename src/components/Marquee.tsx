import { motion } from "framer-motion";

const Marquee = () => {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed=".001"
      className="w-full py-10 rounded-tl-3xl bg-[#facc15]"
    >
      <div className="text text-zinc-100 flex overflow-hidden whitespace-nowrap uppercase">
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 10 }}
          className="text-[22vw] leading-none font-semibold"
        >
          somos fastyez-
        </motion.h1>
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 10 }}
          className="text-[22vw] leading-none font-semibold"
        >
          somos fastyez-
        </motion.h1>
      </div>
    </div>
  );
};

export default Marquee;
