import React from "react";

const CheckOutForm = () => {
  return (
    <div className='mt-12 bg-orange-400 max-w-md mx-auto p-4'>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className='flex gap-4 mb-4'>
          <div>
            <input
              type='text'
              placeholder='First Name'
              className='bg-transparent placeholder:text-slate-200 placeholder:text-sm text-white border-slate-800 px-2 pt-2 outline-none border-x border-y'
            />
          </div>
          <div>
            <input
              type='text'
              placeholder='Last Name'
              className='bg-transparent placeholder:text-slate-200 placeholder:text-sm text-white border-slate-800 px-2 pt-2 outline-none border-x border-y'
            />
          </div>
        </div>
        <div className='mb-4'>
          <div>
            <input
              type='text'
              placeholder='Address Line 1'
              className='bg-transparent placeholder:text-slate-200 placeholder:text-sm text-white border-slate-800 px-2 pt-2 outline-none border-x border-y w-full'
            />
          </div>
        </div>
        <div className='flex gap-4 mb-4'>
          <div>
            <input
              type='text'
              placeholder='Landmark'
              className='bg-transparent placeholder:text-slate-200 placeholder:text-sm text-white border-slate-800 px-2 pt-2 outline-none border-x border-y'
            />
          </div>
          <div>
            <input
              type='text'
              placeholder='Zip code'
              className='bg-transparent placeholder:text-slate-200 placeholder:text-sm border-slate-800 px-2 pt-2 outline-none border-x border-y'
            />
          </div>
        </div>

        <div className='space-x-2'>
          <input
            className='bg-red-500 px-2 py-0.5 text-white hover:shadow-lg shadow-red-600 '
            type='reset'
            value='Reset'
          />
          <input
            className='bg-green-500 px-2 py-0.5 text-white hover:shadow-lg shadow-green-600'
            type='submit'
            value='Proceed to Pay'
          />
        </div>
      </form>
    </div>
  );
};

export default CheckOutForm;
