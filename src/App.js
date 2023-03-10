import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/Navbar";
import ContextContainer from "./components/ContextContainer";
import Checkout from "./components/Checkout";
import ExitoCompra from "./components/ExitoCompra";
import Brief from "./components/Brief";

export default function App() {
  return (
    <>
      <ContextContainer>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/Checkout" element={<Checkout />} />
            <Route
              path="/categoria/:idcategoria"
              element={<ItemListContainer />}
            />
            {<Route path="/item/:iditem" element={<ItemDetailContainer />} />}
            <Route path="/GraciasPorSuCompra" element={<ExitoCompra />} />
            <Route path="/pedidos" element={<Brief />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </ContextContainer>
    </>
  );
}
