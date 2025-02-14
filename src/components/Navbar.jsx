/* eslint-disable react/prop-types */
import BotonNavbar from "./BotonNavbar";

const Navbar = ({ botones = [] }) => {
  return (
    <div className="fixed z-10 flex items-center justify-center w-full h-12 fila-2 top-20 bg-slate-50">
      <ul className="flex items-center h-full gap-2 font-semibold text-md text-slate-500 sm:gap-4">
        {botones.map((boton, index) => (
          <BotonNavbar
            key={index}
            nombreBoton={boton.nombreBoton}
            hrefBoton={boton.hrefBoton}
          />
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
