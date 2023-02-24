import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";

const App = () => {
  return (
    <div className="mx-auto w-screen">
      <div className="mx-auto w-screen overflow-hidden">
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetails />} />
          </Routes>
          <Sidebar />
        </Router>
      </div>
    </div>
  );
};

export default App;