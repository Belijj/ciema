import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './home/home.jsx';
import Header from './header/header.jsx';
import Catalog from './catalog/catalog.jsx';
import Banketi from './banketi/banketi.jsx';



function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/banketi" element={<Banketi />} />
        <Route path="/piragi" element={<Catalog />} />
        <Route path="/tortes" element={<Catalog />} />
        <Route path="/kucinas" element={<Catalog />} />
        <Route path="/maizites" element={<Catalog />} />
        <Route path="/cepumi" element={<Catalog />} />
      </Routes>
    </Router>
  );
}

export default App;