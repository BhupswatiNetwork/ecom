import { useState, useEffect } from "react";
import commerce from "../lib/commerce";
import Product from "../components/Product";
import Loader from "../components/Loader";

const Women = ({ onAddToCart }) => {
  const [womenProducts, setWomenProducts] = useState([]);

  const fetchWomenProducts = async () => {
    const { data } = await commerce.products.list({
      category_slug: ["women"],
    });
    setWomenProducts(data);
  };

  useEffect(() => {
    fetchWomenProducts();
  }, []);

  if (!womenProducts.length) return <Loader />;

  return (
    <div className='container mx-auto px-2'>
      <h1 className='text-2xl font-semibold my-3'>Women's Clothings</h1>
      <div className='grid grid-cols-2 gap-x-2 gap-y-4 md:grid-cols-3 md:gap-y-6'>
        {womenProducts?.map((product) => (
          <Product
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default Women;
