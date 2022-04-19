import { useState } from "react";

const ImageGallery = ({ images }) => {
  const [imageNumber, setImageNumber] = useState(0);

  const imageChangeHandler = (e) => {
    setImageNumber(e.target.id);
  };

  return (
    <div>
      <div>
        <img src={images[imageNumber].url} alt='' className='h-auto w-full' />
      </div>
      <div className='h-14 flex justify-center space-x-2  w-auto mx-auto'>
        {images.map((image, id) => (
          <img
            key={images.id}
            id={id}
            src={image.url}
            className='h-12 w-auto border-2 border-orange-500'
            onClick={imageChangeHandler}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
