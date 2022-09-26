import { FC } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Product from "./components/pages/Product";

const App: FC = () => {
 

  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
          <Route path ="/"/>
          <Route path ="/products" element={<Product/>}/> 
          <Route path ="/contacts"/> 
          <Route path ="/about "/> 
        </Routes>
      </Router>
    </div>
  );
};

export default App;
