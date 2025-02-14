import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const flavors = [
  { name: "SABOR AZUL", image: "/sabores/blue.png", color: "bg-blue-200" },
  { name: "SABOR SANDÍA", image: "/sabores/watermelon.png", color: "bg-red-200" },
  { name: "SABOR GREEN APPLE", image: "/sabores/green.png", color: "bg-green-200" },
  { name: "SABOR CÍTRICO", image: "/sabores/gold.png", color: "bg-yellow-200" },
  { name: "SABOR CÓCTEL", image: "/sabores/purple.png", color: "bg-violet-600" },
  { name: "SABOR LIMONADA ROSA", image: "/sabores/rose.png", color: "bg-pink-300" },
  { name: "SABOR PONCHE DE FRUTAS", image: "/sabores/frutas.png", color: "bg-red-300" },
];

const getGradientClass = (color) => {
  const gradients = {
    "bg-blue-200": "bg-gradient-to-br from-blue-200 to-cyan-500",
    "bg-red-200": "bg-gradient-to-br from-red-200 to-pink-500",
    "bg-green-200": "bg-gradient-to-br from-green-200 to-emerald-500",
    "bg-yellow-200": "bg-gradient-to-br from-yellow-200 to-amber-500",
    "bg-violet-600": "bg-gradient-to-br from-violet-600 to-purple-500",
    "bg-pink-300": "bg-gradient-to-br from-pink-300 to-fuchsia-500",
    "bg-red-300": "bg-gradient-to-br from-red-300 to-orange-500",
  };
  return gradients[color] || "bg-gray-200";
};

const NextArrow = ({ onClick }) => (
  <div className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer text-2xl z-10" onClick={onClick} aria-label="Next">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
    </svg>
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div className="absolute left-2 top-1/2 transform -translate-y-1/2 cursor-pointer text-2xl z-10" onClick={onClick} aria-label="Previous">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
    </svg>
  </div>
);

const FourLokoCarousel = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow onClick={() => sliderRef.current?.slickNext()} />,
    prevArrow: <PrevArrow onClick={() => sliderRef.current?.slickPrev()} />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="max-w-4xl mx-auto py-8 relative bg-white p-4 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-4">Sabores disponibles de Four Loko</h2>
      <Slider ref={sliderRef} {...settings}>
        {flavors.map((flavor, index) => (
          <div key={index} className="px-2">
            <div className={`p-4 rounded-lg shadow-md flex flex-col items-center ${getGradientClass(flavor.color)}`}>
              <img src={flavor.image} alt={flavor.name} className="h-40 object-contain" />
              <p className="mt-2 font-bold">{flavor.name}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default FourLokoCarousel;