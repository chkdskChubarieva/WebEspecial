import {useState} from 'react';
import Tarjeta from './Tarjeta';

const ImagenEnTarjeta = ({ images}) => {
  const [imageList, setImageList] = useState(images);
  const [mainImageIndex, setMainImageIndex] = useState(0);

  const handleImageClick = (clickedIndex) => {
      const newImagesList = [...imageList];
      [newImagesList[mainImageIndex], newImagesList[clickedIndex]] = [newImagesList[clickedIndex], newImagesList[mainImageIndex]];
      setImageList(newImagesList);
      setMainImageIndex(clickedIndex);
    
  };
  return (
    <Tarjeta>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
        <div className="flex flex-col gap-2 items-center">
          {imageList.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Foto ${index + 1}`}
              className="w-40 h-40 border border-black rounded-lg cursor-pointer hover:opacity-75"
              onClick={() => handleImageClick(index)}
            />
          ))}
        </div>
        <div className="flex justify-start">
          <img
            src={imageList[mainImageIndex]}
            alt="Imagen principal"
            className="w-full max-h-96 sm:max-h-100 object-contain border border-black rounded-lg"
          />
        </div>
      </div>
    </Tarjeta>
  );
};
export default ImagenEnTarjeta;