import { Routes, Route } from 'react-router-dom';
import Shop from './pages/Shop';
import Home from './pages/Home';
import Contact from './pages/Contact/Contact';
import Checkout from './pages/Checkout/Checkout';
import Cart from './pages/Cart/Cart';
import SingleProduct from './pages/SingleProduct/SingleProduct';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} index />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Checkout" element={<Checkout />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/SingleProduct" element={<SingleProduct />} />

      </Routes>
  );
}

export default App;