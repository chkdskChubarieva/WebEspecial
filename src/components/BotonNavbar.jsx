/* eslint-disable react/prop-types */

const BotonHeader = ({ hrefBoton, nombreBoton }) => {
  return (
    <a
      href={hrefBoton}
      className="block p-2 transition-all transform bg-white rounded bg-opacity-5 hover:bg-opacity-30 hover:bg-white hover:scale-105 active:scale-95"
    >
      {nombreBoton}
    </a>
  );
};

export default BotonHeader;
