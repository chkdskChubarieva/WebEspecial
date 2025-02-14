import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const Animacion = ({ text, speed = 100 }) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayedText(text.substring(0, index + 1)); // Mostramos solo la parte válida del texto
        index++;
      } else {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <div className="pl-2 font-mono text-xl border-l-4 border-[#c4add8]">
      {displayedText}
      <span className="animate-blink">|</span>
    </div>
  );
};

// Estilos CSS para la animación de parpadeo
const styles = `
  @keyframes blink {
    50% { opacity: 0; }
  }
  .animate-blink {
    animation: blink 0.8s infinite;
  }
`;

// Insertamos la animación en el documento
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

// Validación de props con PropTypes
Animacion.propTypes = {
  text: PropTypes.string.isRequired,
  speed: PropTypes.number,
};

export default Animacion;
