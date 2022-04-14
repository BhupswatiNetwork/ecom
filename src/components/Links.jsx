import { Link } from "react-router-dom";
import { useState } from "react";
import SubLinksModal from "./SubLinksModal";
import downArrow from "../assets/down-arrow.svg";

const Links = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <nav className='absolute z-20 top-[70px] left-0 bg-orange-300 w-1/2 md:relative md:top-0 md:left-0 md:bg-transparent'>
      <ul className='flex justify-center flex-col gap-y-3 p-3 md:flex-row md:gap-x-4'>
        <Link className='w-full md:w-auto' to='/'>
          Home
        </Link>
        <Link className='w-full md:w-auto' to='shop'>
          Shop
        </Link>
        <li
          className='w-full md:w-auto cursor-pointer'
          onClick={() => setShowModal(!showModal)}
        >
          <p className='flex items-center'>
            Categories{" "}
            <span className='ml-1'>
              <img src={downArrow} alt='v' className='w-auto h-3' />
            </span>
          </p>
          {showModal && <SubLinksModal />}
        </li>

        <Link className='w-full md:w-auto' to='/'>
          Blog
        </Link>
        <Link className='w-full md:w-auto' to='/'>
          Contact
        </Link>
      </ul>
    </nav>
  );
};

export default Links;
