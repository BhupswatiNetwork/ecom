import { useState, useEffect } from "react";
import commerce from "../lib/commerce";
import Product from "../components/Product";
import Loader from "../components/Loader";

const Kids = ({ onAddToCart }) => {
  const [kidsProducts, setKidsProducts] = useState([]);

  const fetchKidsProducts = async () => {
    const { data } = await commerce.products.list({
      category_slug: ["kids"],
    });
    setKidsProducts(data);
  };

  useEffect(() => {
    fetchKidsProducts();
  }, []);

  if (!kidsProducts.length) return <Loader />;

  return (
    <div className='container mx-auto px-2'>
      <h1 className='text-2xl font-semibold my-3'>Kids' Clothings</h1>
      <div className='grid grid-cols-2 gap-x-2 gap-y-4 md:grid-cols-3 md:gap-y-6'>
        {kidsProducts?.map((product) => (
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

export default Kids;
