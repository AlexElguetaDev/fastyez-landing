import { motion } from "framer-motion";
import { FaArrowUpLong } from "react-icons/fa6";

const LandingPage = () => {
  motion;
  const texts = ["comodidad", "fácil", "desarrollo"];
  const phrases = [
    "Ofrecemos servicios no únicamente de intermediario en las ventas, sino que también le damos un valor agregado de acompañar a los negocios en algunas actividades relacionadas al marketing de la empresa (no únicamente publicidad). Todo esto tanto para empresas de tipo B2C como también de tipo B2B.",
  ];
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.3"
      className="w-full h-full xl:h-screen  bg-zinc-100 pt-1"
    >
      <div className="textstructure mt-44 px-20">
        {texts.map((text, index) => (
          <div key={index} className="masker overflow-hidden">
            <div className="w-fit flex pt-[1vw]">
              {index === 1 && (
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "9vw" }}
                  transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                  className="w-[9vw] h-auto relative rounded-md bg-[#facc15]"
                ></motion.div>
              )}
              <h1 className="text-[9vw] flex items-center h-full uppercase leading-[7vw] tracking-tighter font-extrabold">
                {text}
              </h1>
            </div>
          </div>
        ))}
      </div>
      <div className="border-t-[1px] border-zinc-700 mt-44 flex justify-between items-center py-5 px-20">
        <div>
          <h1 className="text-2xl font-semibold mb-2">¿Qué ofrecemos?</h1>
          {phrases.map((phrase, index) => (
            <div key={index} className="masker">
              <p className="text-xl w-[70vw] font-light tracking-tighter leading-none">
                {phrase}
              </p>
            </div>
          ))}
        </div>

        {/* <motion.div className="start flex items-center gap-5">
          <motion.div
            className="px-5 py-2 border-[1px] border-zinc-400 font-light text-md uppercase rounded-full"
            whileHover={{ backgroundColor: "#facc15" }}
          >
            Lorem ipsum
          </motion.div>
          <motion.div
            className="w-10 h-10 flex items-center justify-center rounded-full border-[1px] border-zinc-400"
            whileHover={{ rotate: 45, backgroundColor: "#facc15" }}
          >
            <span className="">
              <FaArrowUpLong />
            </span>
          </motion.div>
        </motion.div> */}
      </div>
    </div>
  );
};

export default LandingPage;
