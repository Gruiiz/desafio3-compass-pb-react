import { Routes, Route } from 'react-router-dom';
import { SignedIn, RedirectToSignIn } from '@clerk/clerk-react';
import Shop from './pages/Shop/Shop';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import Checkout from './pages/Checkout/Checkout';
import Cart from './pages/Cart/Cart';
import SingleProduct from './pages/SingleProduct/SingleProduct';
import LoginPage from './pages/Login/Login';
import SignupPage from './pages/Signup/Signup';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} index />
      <Route path="/Home" element={<Home />} index />
      <Route path="/Shop" element={<Shop />} />
      <Route path="/Cart" element={<Cart />} />
      <Route path="/Checkout" element={
        <SignedIn>
          <Checkout />
        </SignedIn>
      } />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/product/:productId" element={<SingleProduct />} />
      <Route path="/Login" element={<LoginPage />} />
      <Route path="/Signup" element={<SignupPage />} />
      <Route path="/sign-in" element={<RedirectToSignIn />} />
    </Routes>
  );
}

export default App;
