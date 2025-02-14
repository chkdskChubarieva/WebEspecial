import React from 'react';

const Tarjeta = ({ children, className }) => {
  return (
    <div className={`bg-gradient-to-b from-red-200 to-white rounded-lg  p-8 border-2 border-red-200 ${className}`}>
      {children}
    </div>
  );
};

export default Tarjeta;