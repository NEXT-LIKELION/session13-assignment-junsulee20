
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import ProductPage from "./pages/ProductPage";

// import { useCartStore } from "store/CartStore";

// const { cart, setCart } = useCartStore();


function App() {


  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/product/:id"
          element={<ProductPage />}
        />
        <Route
          path="/cart"
          element={<CartPage />}
        />
      </Routes>
    </Router>
  );
}

export default App;
