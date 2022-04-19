import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import commerce from "./lib/commerce";
import Navbar from "./components/Navbar";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Home from "./pages/Home";
import Men from "./pages/Men";
import Women from "./pages/Women";
import Kids from "./pages/Kids";
import ProductDetail from "./pages/ProductDetail";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState(null);
  const [order, setOrder] = useState({});
  const [errorMessage, setErrorMessage] = useState("");

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  };

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);

    setCart(item.cart);
  };

  // const handleAddToCart = async (productId, quantity) => {
  //   try {
  //     const myProduct = products.find((product) => product.id === productId);
  //     const myCartProduct = cart.line_items.find(
  //       (item) => item.product_id === productId
  //     );
  //     if (myProduct.inventory.available > myCartProduct.quantity) {
  //       const item = await commerce.cart.add(productId, quantity);
  //       setCart(item.cart);
  //     }
  //   } catch (error) {
  //     console.log("Product Out of Stock", error);
  //   }
  // };

  const handleUpdateCartQty = async (lineItemId, quantity) => {
    const response = await commerce.cart.update(lineItemId, { quantity });

    setCart(response.cart);
  };

  const handleRemoveFromCart = async (lineItemId) => {
    const response = await commerce.cart.remove(lineItemId);

    setCart(response.cart);
  };

  const handleEmptyCart = async () => {
    const response = await commerce.cart.empty();

    setCart(response.cart);
  };

  const refreshCart = async () => {
    const newCart = await commerce.cart.refresh();

    setCart(newCart);
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  return (
    <div className='App'>
      <Navbar cartLength={!cart ? 0 : cart.line_items.length} />

      <Routes>
        <Route
          path='/'
          element={<Home onAddToCart={handleAddToCart} products={products} />}
        />
        <Route path='/men' element={<Men onAddToCart={handleAddToCart} />} />
        <Route
          path='/women'
          element={<Women onAddToCart={handleAddToCart} />}
        />
        <Route path='/kids' element={<Kids onAddToCart={handleAddToCart} />} />
        <Route
          path='/shop'
          element={<Shop products={products} onAddToCart={handleAddToCart} />}
        />
        <Route
          path='/:id'
          element={<ProductDetail onAddToCart={handleAddToCart} />}
        />
        <Route
          path='/cart'
          element={
            <Cart
              cart={cart}
              onUpdateCartQty={handleUpdateCartQty}
              onRemoveFromCart={handleRemoveFromCart}
              onEmptyCart={handleEmptyCart}
            />
          }
        />
        <Route
          path='/checkout'
          element={<Checkout cart={cart} order={order} error={errorMessage} />}
        />
      </Routes>
    </div>
  );
}

export default App;
