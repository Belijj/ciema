import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './home/home.jsx';
import Header from './header/header.jsx';
import Catalog from './catalog/catalog.jsx';
import Banketi from './banketi/banketi.jsx';
import Piragi from './catalog/piragi/piragi.jsx';
import Tortes from './catalog/tortes/tortes.jsx';
import Kucinas from './catalog/kucinas/kucinas.jsx';
import Maizites from './catalog/maizites/maizites.jsx';
import Cepumi from './catalog/cepumi/cepumi.jsx'


function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/banketi" element={<Banketi />} />
        <Route path="/piragi" element={<Piragi />} />
        <Route path="/tortes" element={<Tortes />} />
        <Route path="/kucinas" element={<Kucinas />} />
        <Route path="/maizites" element={<Maizites />} />
        <Route path="/cepumi" element={<Cepumi />} />
      </Routes>
    </Router>
  );
}

export default App;