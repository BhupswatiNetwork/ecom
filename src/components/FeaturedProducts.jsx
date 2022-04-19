import { useState, useEffect } from "react";
import commerce from "../lib/commerce";
import Product from "../components/Product";

const FeaturedProducts = ({ onAddToCart }) => {
  const [featuredProducts, setFeaturedProducts] = useState([]);

  const fetchFeaturedProducts = async () => {
    const { data } = await commerce.products.list({
      category_slug: ["featured"],
    });
    setFeaturedProducts(data);
  };

  useEffect(() => {
    fetchFeaturedProducts();
  }, []);

  return (
    <div className='grid grid-cols-2 gap-x-2 gap-y-4 md:grid-cols-3 lg:grid-cols-4'>
      {featuredProducts?.map((product) => (
        <Product
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}
          page={true}
        />
      ))}
    </div>
  );
};

export default FeaturedProducts;
