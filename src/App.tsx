import { Routes, Route } from 'react-router-dom';
import { useUser } from '@clerk/clerk-react'; // Importe useUser
import Shop from './pages/Shop/Shop';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import Checkout from './pages/Checkout/Checkout';
import Cart from './pages/Cart/Cart';
import SingleProduct from './pages/SingleProduct/SingleProduct';
import LoginPage from './pages/Login/Login';
import SignupPage from './pages/Signup/Signup';
import AccessDenied from './pages/Page403/Page403';

// Componente de rota protegida customizado
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { isSignedIn } = useUser(); // Use o hook do Clerk

  if (!isSignedIn) {
    return <AccessDenied />;
  }
  return <>{children}</>;
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} index />
      <Route path="/Home" element={<Home />} />
      <Route path="/Shop" element={<Shop />} />
      <Route path="/Cart" element={<Cart />} />
      <Route 
        path="/Checkout" 
        element={
          <ProtectedRoute>
            <Checkout />
          </ProtectedRoute>
        } 
      />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/product/:productId" element={<SingleProduct />} />
      <Route path="/Login" element={<LoginPage />} />
      <Route path="/Signup" element={<SignupPage />} />
      <Route path="/access-denied" element={<AccessDenied />} />
    </Routes>
  );
}

export default App;