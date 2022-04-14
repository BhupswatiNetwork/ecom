import eye from "../assets/eye.svg";
import addToCart from "../assets/add-to-cart.svg";
import { Link } from "react-router-dom";

const Product = ({ product, onAddToCart }) => {
  // const handleAddToCart = () => onAddToCart(product.id, 1);
  return (
    <div className='flex flex-col items-center'>
      <div className='content'>
        <img
          src={product.image.url}
          alt={product.name}
          className='w-auto h-52 rounded-md hover:opacity-70 md:h-64'
        />
        <div className='overlay'>
          <div className='overlay-content flex space-x-3'>
            <Link to='/'>
              <img src={eye} alt='view product' className='h-8 w-auto' />
            </Link>
            <div
              onClick={() => onAddToCart(product.id, 1)}
              className='cursor-pointer'
            >
              <img
                src={addToCart}
                alt='add product to cart'
                className='h-8 w-auto'
              />
            </div>
          </div>
        </div>
      </div>
      <h3 className='font-bold'>{product.name}</h3>
      <h3>{product.price.formatted_with_symbol}</h3>
    </div>
  );
};

export default Product;
