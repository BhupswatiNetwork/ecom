import Product from "../components/Product";
import Loader from "../components/Loader";

const shop = ({ products, onAddToCart }) => {
  if (!products.length) return <Loader />;

  return (
    <main className='px-2 container mx-auto'>
      <h1 className='text-2xl font-semibold my-3'>All Products</h1>
      <div className='grid grid-cols-2 gap-x-2 gap-y-4 md:grid-cols-3 md:gap-y-6'>
        {products?.map((product) => (
          <Product
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </main>
  );
};

export default shop;
