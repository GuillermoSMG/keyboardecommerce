import { Container } from "@mui/system";
import Footer from "./components/Footer";
import ItemListContainer from "./components/ItemListContainer";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <>
      <Navbar />
      <Container
        sx={{
          height: "80vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ItemListContainer greeting="¡Bienvenido!" />
      </Container>
      <Footer />
    </>
  );
}
