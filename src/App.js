import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/Navbar";
import ContextContainer from "./components/ContextContainer";
import Contacto from "./components/Contacto";

export default function App() {
  return (
    <>
      <ContextContainer>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route
              path="/categoria/:idcategoria"
              element={<ItemListContainer />}
            />
            {<Route path="/item/:iditem" element={<ItemDetailContainer />} />}
          </Routes>
          <Footer />
        </BrowserRouter>
      </ContextContainer>
    </>
  );
}
