import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import HomeScreen from "./Screens/HomeScreen";
import ProductScreen from "./Screens/ProductScreen";
import Cart from "./Components/Cart";
import Signin from "./Components/Signin";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" exact element={<HomeScreen/>} />
          <Route path='product/:id' exact element={<ProductScreen/>}/>
          <Route path='/cart' exact element={<Cart/>}/>
          <Route path='/signin' exact element={<Signin/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
