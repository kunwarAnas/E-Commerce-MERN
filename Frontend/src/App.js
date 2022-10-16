import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import HomeScreen from "./Screens/HomeScreen";
import ProductScreen from "./Screens/ProductScreen";
import Cart from "./Screens/CartScreen";
import Signin from "./Components/Signin";
import { Container } from "react-bootstrap";
const App = () => {
  return (
     <>
      
      <BrowserRouter>
        <Header />
        <Container>
        <Routes>
          <Route path="/" exact element={<HomeScreen/>} />
          <Route path='product/:id' exact element={<ProductScreen/>}/>
          <Route path='/cart'  element={<Cart/>}>
            <Route path=":id" element={<Cart/>}/>
          </Route>
          <Route path='/signin' exact element={<Signin/>}/>
        </Routes>
        </Container>
        <Footer />
      </BrowserRouter>
      
    </>
  );
};

export default App;
