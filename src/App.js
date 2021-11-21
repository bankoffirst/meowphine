import React , { useState , useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import Dashboard from './components/Dashboard'
import LogIn from './components/Login'
import Signup from './components/SignUp'
import { AuthProvider } from './components/Auth'
import Main from './components/Main'
import { commerce } from './components/lib/commerce';
import Navbar from './components/Navbar/navbar'
import Cart from './components/Carts/Cart'
import Products from './components/Product/Products'
import Checkout from './components/payment/Checkout'
const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [order, setOrder] = useState({});
  const [errorMessage, setErrorMessage] = useState('');

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

  const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    try {
      const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder);

      setOrder(incomingOrder);

      refreshCart();
    } catch (error) {
      setErrorMessage(error.data.error.message);
    }
  };

  useEffect(() => {
      fetchProducts();
      fetchCart();
  },[]);
  return (
    <AuthProvider>
      <Router>
        <div>
          <Switch>
            <Route exact path = "/"><Main/></Route>
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/login" component={LogIn} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/home" component={Home} />
            <div >
            <Navbar totalItems={cart.total_items}/>
            <Switch>
                <Route exact path="/cart">
                  <Cart 
                  cart ={cart}
                  handleUpdateCartQty={handleUpdateCartQty}
                  handleRemoveFromCart={handleRemoveFromCart}
                  handleEmptyCart={handleEmptyCart}
                  />
                </Route>
                <Route exact path="/checkout">
                  <Checkout 
                  cart={cart}
                  order={order}
                  onCaptureCheckout={handleCaptureCheckout}
                  error={errorMessage}
                  />
                  </Route>
                <Route exact path="/cat">
                  <Products className="container" products={products} onAddToCart={handleAddToCart} handleUpdateCartQty/></Route>
            </Switch>
            </div>
          </Switch>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
