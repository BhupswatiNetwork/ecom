import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import Loader from "../components/Loader";

const Cart = ({ cart, onUpdateCartQty, onRemoveFromCart, onEmptyCart }) => {
  console.log(cart);

  if (!cart.line_items) return <Loader />;

  return (
    <div className='container mx-auto px-2 md:px-4 lg:px-8'>
      <div>
        {cart.line_items.length > 0 ? (
          <div>
            <h1 className='text-2xl font-bold my-3'>My Cart</h1>
            <div className='flex flex-col items-stretch gap-3 md:grid md:grid-cols-2 md:gap-x-4 md:gap-y-4 lg:grid-cols-3 lg:gap-y-6'>
              {cart.line_items.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  onUpdateCartQty={onUpdateCartQty}
                  onRemoveFromCart={onRemoveFromCart}
                />
              ))}
            </div>
            <div className='mt-4'>
              <h4 className='text-lg font-semibold mb-2'>
                Sub Total {cart.subtotal.formatted_with_symbol}
              </h4>
              <div className='space-x-4'>
                <button
                  className='bg-red-600 px-1 py-0.5 text-white rounded active:scale-75'
                  onClick={onEmptyCart}
                >
                  Empty Cart
                </button>
                <Link
                  to='/checkout'
                  className='bg-green-600 px-1 py-0.5 text-white rounded active:scale-75'
                >
                  Checkout
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <h2 className='font-semibold text-lg'>Cart is Empty</h2>
            <Link to='/shop' className='text-orange-500 '>
              Continue Shopping
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
