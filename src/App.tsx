import { Routes, Route } from "react-router-dom"
import { Container } from "react-bootstrap"
import Store from "./pages/Store"
import About from "./pages/About"
import { Navbar } from "./components/NavBar"
import { ShoppingCartProvider } from "./context/ShoppingCartContext"
import ProductsDetails from "./pages/ProductDetails"

function App() {
  return (
    <ShoppingCartProvider>
      <Navbar />
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Store />} />
          <Route path="/about" element={<About />} />
          <Route path="/product/:id" element={<ProductsDetails />} />
        </Routes>
      </Container>
    </ShoppingCartProvider>
  );
}

export default App;
