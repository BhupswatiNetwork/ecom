const Loader = () => {
  return (
    <div className='absolute z-5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12'>
      <div className='loader grid grid-cols-2 font-bold text-lg'>
        <p>B</p>
        <p>N</p>
        <p>P</p>
        <p>L</p>
      </div>
    </div>
  );
};

export default Loader;
