import toast, { Toaster } from "react-hot-toast";

const Footer = () => {
  const notify = (event: { preventDefault: () => void }, email: string) => {
    event.preventDefault();
    if (!email) {
      toast.error("Por favor, completa el campo de correo electrónico.");
      return;
    }
    toast.success("¡Gracias por suscribirte a nuestro newsletter!");
  };

  return (
    <div className="w-full h-screen bg-zinc-800 p-20 flex gap-5 text-zinc-100">
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          className: "",
          duration: 5000,
          style: {
            background: "#363636",
            color: "#fff",
          },
          success: {
            duration: 3000,
          },
        }}
      />
      <div className="w-4/5 flex flex-col h-full justify-between">
        <div className="heading">
          <h1 className="text-[4vw] font-semibold uppercase leading-none ">
            Somos
            <span className="text-[#facc15]"> Fastyez </span>y llegamos para
            hacer que tus compras sean
            <span className="text-[#facc15]"> rápidas</span>,
            <span className="text-[#facc15]"> fáciles</span> y convertirnos en
            un <span className="text-[#facc15]">aliado estratégico </span>
            para <span className="text-[#facc15]">tu </span>
            negocio más cercano.
          </h1>
        </div>
        <div>
          <div className="dets mt-10">
            <a className="block text-4xl font-light" href="#">
              Linkedin
            </a>
            <a
              className="block text-4xl font-light"
              href="#"
              style={{
                textDecoration: "line-through",
                textDecorationColor: "#facc15",
                color: "white",
              }}
            >
              Facebook
            </a>
            <a
              className="block text-4xl font-light"
              href="#"
              style={{
                textDecoration: "line-through",
                textDecorationColor: "#facc15",
                color: "white",
              }}
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
      <div className="w-1/2 flex flex-col justify-end">
        <div className="newsletter mt-10">
          <h2 className="text-4xl font-semibold">
            Suscríbete a nuestro newsletter
          </h2>
          <form
            onSubmit={(e) =>
              notify(
                e,
                (document?.getElementById("email") as HTMLInputElement)?.value
              )
            }
          >
            <input
              id="email"
              type="email"
              className="mt-2 p-2 w-full text-black"
              placeholder="Tu correo electrónico"
            />
            <button
              type="submit"
              className="mt-2 p-2 w-full bg-[#facc15] text-zinc-800"
            >
              Suscribirse
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Footer;
