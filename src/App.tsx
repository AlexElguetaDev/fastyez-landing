import { useMediaQuery } from "react-responsive";
import About from "./components/About";
import LandingPage from "./components/LandingPage";
import Marquee from "./components/Marquee";
import Navbar from "./components/Navbar";
import Secret from "./components/Secret";
import Footer from "./components/Footer";
import LocomotiveScroll from "locomotive-scroll";
import { Analytics } from "@vercel/analytics/react";

const App = () => {
  // @ts-expect-error - LocomotiveScroll is not used in this file
  const locomotiveScroll = new LocomotiveScroll();

  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  if (isMobile) {
    return (
      <div className="w-full min-h-screen bg-zinc-100 text-zinc-800 flex items-center justify-center text-center p-4">
        <Analytics />
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h1 className="font-bold text-2xl mb-4">En construcción</h1>
          <p>
            La versión móvil de nuestro sitio web está actualmente en
            construcción. Por favor, visita nuestro sitio en un dispositivo de
            escritorio para la mejor experiencia.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-zinc-100 text-zinc-800">
      <Analytics />
      <Navbar />
      <LandingPage />
      <Marquee />
      <About />
      <Secret />
      <Footer />
    </div>
  );
};

export default App;
