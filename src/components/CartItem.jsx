const CartItem = ({ item, onUpdateCartQty, onRemoveFromCart }) => {
  const handleCartSubQty = () => {
    if (item.quantity > 1) {
      onUpdateCartQty(item.id, item.quantity - 1);
    } else {
      onRemoveFromCart(item.id);
    }
  };

  return (
    <div className='flex gap-2'>
      <div>
        <img
          src={item.image.url}
          alt={item.name}
          className='w-auto h-52 rounded-md hover:opacity-70'
        />
      </div>
      <div className='w-1/2'>
        <h3 className='font-semibold text-lg mb-2'>{item.name}</h3>
        <div className='flex justify-between mb-4 items-center'>
          <p className='font-semibold'>
            Price {item.price.formatted_with_symbol}
          </p>
          <div className='flex space-x-2 items-center justify-center'>
            <button
              className='text-2xl font-semibold active:scale-75'
              onClick={handleCartSubQty}
            >
              -
            </button>
            <p className='font-bold bg-orange-200 px-2'>{item.quantity}</p>
            <button
              className='text-2xl font-semibold active:scale-75'
              onClick={() => onUpdateCartQty(item.id, item.quantity + 1)}
            >
              +
            </button>
          </div>
        </div>
        <button
          className='bg-red-600 px-1 py-0.5 text-white rounded active:scale-75'
          onClick={() => onRemoveFromCart(item.id)}
        >
          Remove item
        </button>
      </div>
    </div>
  );
};

export default CartItem;
