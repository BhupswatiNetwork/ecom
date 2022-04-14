import { useState, useEffect } from "react";
import commerce from "../lib/commerce";
import Categories from "../components/Categories";
import FeaturedProducts from "../components/FeaturedProducts";
import hero from "../assets/hero.png";
import banner from "../assets/banner.png";
import Loader from "../components/Loader";

const Home = ({ onAddToCart }) => {
  const [categories, setCategories] = useState([]);

  const fetchCategories = async () => {
    const { data } = await commerce.categories.list();

    setCategories(data);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  if (!categories.length) return <Loader />;

  return (
    <div className='relative'>
      <main>
        <img
          src={hero}
          alt='hero section'
          className='w-full max-h-[90vh] object-cover'
        />
      </main>

      <section className='container mx-auto px-4 mt-16'>
        <Categories categories={categories} />
      </section>

      <section className='conatiner mx-auto my-16 px-4'>
        <h1 className='text-2xl font-bold mb-4'>Featured Products</h1>
        <FeaturedProducts onAddToCart={onAddToCart} />
      </section>

      <div>
        <img
          src={banner}
          alt='Banner for 20% sale'
          className='w-full max-h-48'
        />
      </div>
    </div>
  );
};

export default Home;
