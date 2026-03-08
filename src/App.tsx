import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Multimarca from './pages/Multimarca';
import Mercedes from './pages/Mercedes';
import Nosotros from './pages/Nosotros';
import Contacto from './pages/Contacto';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="multimarca" element={<Multimarca />} />
          <Route path="mercedes" element={<Mercedes />} />
          <Route path="contacto" element={<Contacto />} />
          <Route path="nosotros" element={<Nosotros />} />
          <Route path="*" element={<div className="p-24 text-center text-2xl">Página no encontrada</div>} />
        </Route>
      </Routes>
    </Router>
  );
}
