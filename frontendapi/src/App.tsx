import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MangaForm from "./components/Mangas/MangaForm";
import Mangasindex from "./components/Mangas/Mangasindex";
import HeaderApp from "./components/Layout/HeaderApp";
import FooterApp from "./components/Layout/FooterApp";
import NavbarApp from "./components/Layout/NavbarApp";
import Bienvenida from "./pages/Bienvenida";
import Nosotros from "./pages/Nosotros";
import ilu from "./assets/images/ilustracion.jpg";

function App() {
  return (
    <Router>
      <HeaderApp/>
      <NavbarApp/>
      <main 
        className="relative h-screen flex items-center justify-center text-white bg-cover bg-center"
        style={{ backgroundImage: `url(${ilu})` }}
      >
        <div className="relative z-10 w-full mx-8">
          <Routes>
            <Route path="/inicio" element={<Bienvenida />} />
            <Route path="/productos" element={<Mangasindex />} />
            <Route path="/productos/nuevo" element={<MangaForm />} />
            <Route path="/nosotros" element={<Nosotros />} />
          </Routes>
        </div>

      </main>
      <FooterApp/>
      
    </Router>
  );
}
export default App;
