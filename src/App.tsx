import { Routes, Route } from 'react-router-dom';
import Shop from './pages/Shop/Shop';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import Checkout from './pages/Checkout/Checkout';
import Cart from './pages/Cart/Cart';
import SingleProduct from './pages/SingleProduct/SingleProduct';
import LoginPage from './pages/Login/Login';
import SignupPage from './pages/Signup/Singup';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} index />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Checkout" element={<Checkout />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/SingleProduct" element={<SingleProduct />} />
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/Signup" element={<SignupPage />} />

      </Routes>
  );
}

export default App;