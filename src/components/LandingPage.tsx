import { motion } from "framer-motion";
import { FaArrowDownLong } from "react-icons/fa6";

const LandingPage = () => {
  motion;
  const texts = ["Eficiencia", "Velocidad", "Colaboración"];
  const phrases = [
    "Vamos más allá de simplemente facilitar transacciones comerciales. Nos esforzamos por construir puentes entre compradores y vendedores, fomentando una mejor comprensión y colaboración mutua. Acompañamos a las empresas en una amplia gama de actividades de marketing, desde la investigación de mercado hasta la implementación de estrategias innovadoras. Creemos firmemente en la importancia de cultivar relaciones sólidas y armoniosas entre los negocios y sus clientes. Este enfoque integral beneficia tanto a empresas B2C como B2B, creando un entorno propicio para el crecimiento y el éxito a largo plazo.",
  ];

  const handleScroll = () => {
    window.scrollBy({ top: 1000, behavior: "smooth" });
  };

  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.3"
      className="w-full h-full xl:h-screen bg-zinc-100 pt-1"
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
              <p className="text-xl font-light tracking-tighter leading-none">
                {phrase}
              </p>
            </div>
          ))}
        </div>
      </div>
      <motion.div className="start flex justify-center items-center gap-5">
        <motion.div
          className="px-5 py-2 font-light text-md uppercase rounded-full cursor-pointer"
          whileHover={{ backgroundColor: "#facc15" }}
          onClick={handleScroll}
        >
          <FaArrowDownLong className="inline-block" /> Scroll{" "}
          <FaArrowDownLong className="inline-block" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default LandingPage;
