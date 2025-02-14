import "./App.css";
import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Animacion from "../components/Animacion";

// Importación de imágenes
import imagenFeliz from "../assets/img/happy.gif";
import imagenTriste from "../assets/img/cat.gif";

export default function PageHome() {
  const botonesNavbar = [
    { nombreBoton: "Sorpresa!", hrefBoton: "#caracteristicas" },
    { nombreBoton: "Dedicatoria", hrefBoton: "#contacto" },
  ];

  const [mensaje, setMensaje] = useState("Quieres ser mi San Valentín? 👀");
  const [mostrarImagen, setMostrarImagen] = useState(null);
  const [mostrarBotonNo, setMostrarBotonNo] = useState(true);

  const handleSiClick = () => {
    setMensaje("Sabía que dirías que siii!❤️ Este sabado estás invitada 😁, no te lo puedes perder!");
    setMostrarImagen(imagenFeliz);
    setMostrarBotonNo(false);
  };

  const handleNoClick = (e) => {
    const btn = e.target;
    const x = Math.random() * (window.innerWidth - btn.offsetWidth);
    const y = Math.random() * (window.innerHeight - btn.offsetHeight);
    btn.style.position = "absolute";
    btn.style.left = `${x}px`;
    btn.style.top = `${y}px`;
    setMensaje("Vamos Griisss, se que quieres 😬");
    setMostrarImagen(imagenTriste);
  };

  return (
    <>
      <Header botones={botonesNavbar} />
      <main id="home" className="relative w-full top-20 background">
        {/* Sección de características */}
        <section className="flex flex-col items-center justify-center h-screen text-white bg-zinc-900" id="caracteristicas">
          <Animacion text={mensaje} speed={100} />
          {mostrarImagen && <img src={mostrarImagen} alt="Reacción" className="w-40 h-40 mt-9" />}
          <div className="flex mt-6 space-x-4">
            <button 
              onClick={handleSiClick} 
              className="px-6 py-2 text-lg font-bold text-white transition-transform transform bg-green-500 rounded active:scale-90"
            >
              Sí
            </button>
            {mostrarBotonNo && (
              <button 
                onClick={handleNoClick} 
                className="px-6 py-2 text-lg font-bold text-white transition-transform transform bg-red-500 rounded active:scale-90"
              >
                No
              </button>
            )}
          </div>
        </section>

        {/* Footer */}
        <div id="contacto">
          <Footer />
        </div>
      </main>
    </>
  );
}
