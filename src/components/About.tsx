import { motion } from "framer-motion";

const About = () => {
  /* const [isOpenTomas, setIsOpenTomas] = useState(false);
  const [isOpenAlex, setIsOpenAlex] = useState(false);

  const { height: heightTomas, opacity: opacityTomas } = useSpring({
    from: { height: 0, opacity: 0 },
    to: {
      height: isOpenTomas ? 100 : 0,
      opacity: isOpenTomas ? 1 : 0,
    },
  });

  const { height: heightAlex, opacity: opacityAlex } = useSpring({
    from: { height: 0, opacity: 0 },
    to: {
      height: isOpenAlex ? 100 : 0,
      opacity: isOpenAlex ? 1 : 0,
    },
  }); */
  return (
    <div className="w-full p-20 bg-zinc-800 rounded-tl-3xl text-white">
      <div className="">
        <h1 className="text-[4vw] font-bold leading-none mb-2 text-[#facc15]">
          Misión
        </h1>
        <p className="font-normal text-[2vw] pl-10 leading-none tracking-tight">
          Conectar cualquier negocio desde pequeños comercios hasta grandes
          empresas con sus clientes, proporcionando soluciones personalizadas
          tanto para compradores como para negocios locales.
        </p>
        <h1 className="text-[4vw] font-bold leading-none mt-10 mb-2 text-[#facc15]">
          Visión
        </h1>
        <p className="font-normal text-[2vw] pl-10 leading-none tracking-tight">
          Ser el principal socio estratégico de negocios locales y empresas
          grandes a nivel nacional e internacional, como también ser la
          preferida por los clientes pertenecientes al mercado.
        </p>
      </div>
      <div className="w-full flex gap-5 border-t-[1px] pt-10 mt-20 border-white">
        <div className="w-1/2">
          <h1 className="text-7xl mt-5 uppercase">Co-founder's</h1>
          <motion.button
            whileHover={{ backgroundColor: "#facc15" }}
            onClick={() =>
              window.open("https://www.alexelgueta.dev/blog/fastyez/", "_blank")
            }
            className="flex uppercase gap-10 items-center px-10 py-6 bg-zinc-100 mt-10 rounded-full text-zinc-800"
          >
            ¿Quiénes somos?
            <motion.div
              whileHover={{ scale: 5 }}
              className="w-2 h-2 bg-zinc-800 rounded-full"
            ></motion.div>
          </motion.button>
        </div>
        <div className="w-full flex flex-col gap-10">
          <motion.div className="w-full h-auto rounded-3xl flex flex-col cursor-pointer">
            <div className="flex items-center justify-between border-b-[1px]">
              <div className="flex flex-col ">
                <h2 className="text-4xl">Tomás Antonio Rebolledo Marín</h2>
                <p className="text-xl">Co-CEO & COO</p>
              </div>
              <img
                src="https://media.licdn.com/dms/image/D4D03AQF33sOrVcqfIA/profile-displayphoto-shrink_800_800/0/1665270658693?e=1721260800&v=beta&t=LVvI4h7rHdERVIV1t6JrOGC6eiICmuxLlaDPBIgOi-8"
                alt="Co-CEO 1"
                className="w-[5vw] rounded-full mb-5"
              />
            </div>
            {/* <animated.div
              style={{
                height: heightTomas,
                opacity: opacityTomas,
                overflow: "hidden",
              }}
            >
              <p className="mt-5"></p>
            </animated.div> */}
          </motion.div>
          <motion.div className="w-full h-auto rounded-3xl  flex flex-col cursor-pointer">
            <div className="flex items-center justify-between border-b-[1px]">
              <div className="flex flex-col">
                <h2 className="text-4xl">Alex Damian Elgueta Rivas</h2>
                <p className="text-xl">Co-CEO & CTO</p>
              </div>
              <img
                src="https://media.licdn.com/dms/image/D4E03AQFoTa1AxBK6EQ/profile-displayphoto-shrink_800_800/0/1694699539380?e=1721260800&v=beta&t=3F1kvF6eGRtbClzJbkG-8pTHDP4wTOQIKmakAZjS-zo"
                alt="Co-CEO 1"
                className="w-[5vw] rounded-full mb-5"
              />
            </div>
            {/* <animated.div
              style={{
                height: heightAlex,
                opacity: opacityAlex,
                overflow: "hidden",
              }}
            >
              <p className="mt-5"></p>
            </animated.div> */}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
