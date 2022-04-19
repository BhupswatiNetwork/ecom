import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Loader from "../components/Loader";
import commerce from "../lib/commerce";
import ImageGallery from "../components/ImageGallery";

const ProductDetail = ({ onAddToCart }) => {
  const params = useParams();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await commerce.products.retrieve(params.id);
        setProduct(res);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProduct();
  }, []);

  if (!product) return <Loader />;
  return (
    <div className='flex space-x-4 max-w-5xl mx-auto'>
      {console.log(product)}
      <div className='w-2/5'>
        <ImageGallery images={product.assets} />
      </div>
      <div className='w-3/5'>
        <h2 className='text-3xl font-semibold'>{product.name}</h2>
        <p>{product.categories[0].name}</p>
        <h4 className='text-xl font-bold'>Description</h4>
        <h4 className='text-xl'>{product.description}</h4>
        <h4>{product.price.formatted_with_symbol}</h4>
        <button
          className='border-2 border-orange-500 px-1.5 py-0.5 rounded'
          onClick={() => onAddToCart(product.id)}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
