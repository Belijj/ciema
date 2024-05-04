import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './home/home.jsx';
import Header from './header/header.jsx';
import Catalog from './catalog/catalog.jsx';
import Banketi from './banketi/banketi.jsx';
import Lokacijas from './lokacijas/lok.jsx';
import Pasutijums from './pasutijumi/pasutijums.jsx';


function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/banketi" element={<Banketi />} />
        <Route path="/lokacijas" element={<Lokacijas />} />
        <Route path="/pasutijumi" element={<Pasutijums />} />
      </Routes>
    </Router>
  );
}

export default App;