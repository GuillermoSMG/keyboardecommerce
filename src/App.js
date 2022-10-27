import { Container } from "@mui/system";
import Footer from "./components/Footer";
import ItemListContainer from "./components/ItemListContainer";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <>
      <Navbar />
      <ItemListContainer greeting="¡Bienvenido!" />
      <Footer />
    </>
  );
}
