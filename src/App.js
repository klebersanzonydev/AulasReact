import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Empresa from './pages/Empresa';
import Home from './pages/Home';
import Produto from './pages/Produto';
import Error from './pages/Error';
import SingleProduct from './pages/SingleProduct';
import NavBar from './navBar/NavBar';

export default function App() {
  return (
    <Router>
      {<NavBar />}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Produto" element={<Produto />}></Route>
        <Route path="/Produto/:id" element={<SingleProduct />}></Route>
        <Route path="/Empresa" element={<Empresa />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </Router>
  );
}
