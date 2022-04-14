import menu from "../assets/menu.svg";
import cart from "../assets/cart.svg";
import search from "../assets/search.svg";
import { Link } from "react-router-dom";
import Links from "./Links";

const Navbar = ({ cartLength }) => {
  return (
    <>
      <div className='relative h-[70px] flex justify-between items-center px-2'>
        <div className='flex items-center'>
          <img
            src={menu}
            alt='menu icon'
            className='w-auto h-8 mr-2 md:hidden'
          />
          <Link to='/' className='text-lg font-bold'>
            Logo
          </Link>
        </div>
        <div className='flex flex-1 justify-center'>
          <Links />
        </div>
        <div className='flex items-center justify-between'>
          <div className='flex items-baseline'>
            <input
              type='text'
              id='search'
              className='border-b-2 border-orange-500 outline-none'
            />
            <label htmlFor='search'>
              <img
                src={search}
                alt='search product'
                className='w-auto h-8 md:mr-2'
              />
            </label>
          </div>
          <span className='flex items-center relative'>
            <Link to='cart'>
              <img src={cart} alt='my cart' className='w-auto h-10' />
              <span className='absolute left-4 -top-0.5 bg-yellow-400 w-5 h-5 text-white rounded-full flex justify-center items-center'>
                {cartLength}
              </span>
            </Link>
          </span>
        </div>
      </div>

      {/* <div className='h-[70px] flex items-center justify-between px-2 md:hidden'>
        <div className='flex items-center'>
          <img src={menu} alt='menu icon' className='w-auto h-8 mr-2' />
          <Link to='/' className='text-lg font-bold'>
            Logo
          </Link>
        </div>
        <div className='flex items-baseline'>
          <input
            type='text'
            id='search'
            className='border-b-2 border-orange-500'
          />
          <label htmlFor='search'>
            <img src={search} alt='search product' className='w-auto h-8' />
          </label>
        </div>
        <span className='flex items-center relative'>
          <Link to='cart'>
            <img src={cart} alt='my cart' className='w-auto h-10' />
          </Link>
          <span className='absolute left-4 -top-0.5 bg-yellow-400 w-5 h-5 text-white rounded-full flex justify-center items-center'>
            {cartLength}
          </span>
        </span>
      </div>


      <div className='hidden md:flex justify-between font-semibold m-6 text-xl'>
        <Link to='/'>
          <p>Logo</p>
        </Link>
        <nav>
          <ul className='flex space-x-6'>
            <Link to='/'>Home</Link>
            <Link to='/shop/'>Shop</Link>
            <li className='flex dropdown' style={{ cursor: "pointer" }}>
              <Links />
            </li>
            <Link to='/blogs'>Blogs</Link>
            <Link to='/contact'>Contact</Link>
          </ul>
        </nav>
        <nav>
          <ul className='flex space-x-4 text-orange-500'>
            <Link to='/signin'>SignIn</Link>
            <Link to='signup'>SignUp</Link>
          </ul>
        </nav>
      </div> */}
    </>
  );
};

export default Navbar;
