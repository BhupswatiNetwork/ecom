import { Link } from "react-router-dom";

const SubLinksModal = () => {
  return (
    <>
      <div className='ml-3 mt-2 flex flex-col gap-y-2 z-20 md:absolute md:w-[150px] md:ml-0 md:p-3 md:bg-slate-200 md:border-2 rounded-lg'>
        <Link className='w-full' to='men'>
          Men
        </Link>
        <Link className='w-full' to='women'>
          Women
        </Link>
        <Link className='w-full' to='kids'>
          Kids
        </Link>
      </div>
    </>
  );
};

export default SubLinksModal;
