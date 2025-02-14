
import f2 from "../assets/img/f2.png";

const Footer = () => {


  return (
    <footer className="bg-[#c4add8] text-white py-8 relative">
      {/* Logo centrado arriba de las columnas */}
      <div className="absolute top-0 pb-5 transform -translate-x-1/2 -translate-y-1/2 left-1/2">
        <img
          src={f2}
          alt="AntojitosLogo"
          className="w-32"
        />
      </div>

      <div className="mt-3 font-serif text-lg italic text-center text-gray-800 sm:text-xl">
        Con mucho cariño, para Griss, te quiero mucho!
      </div>

      {/* Texto al final del footer */}
      <div className="mt-6 text-xs text-center text-gray-800">
        Todos los derechos reservados de tu corazón ❤️ ® | 2025
      </div>
    </footer>
  );
};

export default Footer;