import { Routes, Route } from 'react-router-dom';
import Shop from './pages/Shop';
import Home from './pages/Home';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} index />
        <Route path="/shop" element={<Shop />} />
      </Routes>
  );
}

export default App;