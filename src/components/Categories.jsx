import { Link } from "react-router-dom";

const Categories = ({ categories }) => {
  return (
    <div className='flex justify-center gap-2 flex-wrap sm:gap-x-4 md:gap-x-7 lg:gap-x-10'>
      {categories.map(
        (category) =>
          category.assets.length > 0 && (
            <Link to={category.slug} key={category.name}>
              <img
                src={category.assets[0].url}
                alt={category.name}
                className='w-auto h-52 rounded-md hover:opacity-70 sm:h-60 md:h-72'
              />
            </Link>
          )
      )}
    </div>
  );
};

export default Categories;
