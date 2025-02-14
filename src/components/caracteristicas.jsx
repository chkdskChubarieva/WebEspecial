import ProductoEnTarjeta from './ProductoTarjeta';
import ImagenEnTarjeta from './ImagenTarjeta';
import logoGomilokos from "/src/assets/img/LogoGomilokos.png";
import green from "/src/assets/img/green.jpg";
import black from "/src/assets/img/black.jpg";
import summer from "/src/assets/img/summer.jpg";
import gold from "/src/assets/img/gold.jpg";

const Caracteristicas = () => {
  
  const images = [green, black, summer, gold];

  return (
    <section id="caracteristicas" className="px-6 py-10 bg-white sm:px-12">
      <img
        src={logoGomilokos}
        alt="Gomilokos"
        className="object-contain h-40 mx-auto mb-10 sm:h-44 md:h-48 lg:h-56"
      />

      <p className="mt-2">Un mix único de gomitas y Four Loko para una explosión de sabor y energía.</p>
      <br />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <ImagenEnTarjeta
          images={images}
        />
        <div className="mt-4">

        <ProductoEnTarjeta
          titulo="Gomitas de Four Loko - 3.5% Vol."
          descripcion="Bebida alcohólica gelificada con distintos sabores de Four Loko."
          tamanios={["50 g - 1.76 oz", "150 g - 5.3 oz"]}
          advertencia="Tomar bebidas alcohólicas en exceso es dañino para la salud."
          buttonText="COMPRA AHORA"
        />
        </div>
      </div>
    </section>
  );
};

export default Caracteristicas;