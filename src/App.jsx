import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicio from './components/Inicio'
import Registrar from './components/Registrar'
import Actualizar from './components/Actualizar'
import Detalle from './components/Detalle'
import RegistroUsuario from './components/RegistroUsuario';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<Inicio/>}></Route>
      <Route path='/registrar' element={<Registrar/>}></Route>
      <Route path='/registrarUsuario' element={<RegistroUsuario/>}></Route>
      <Route path='/actualizar/:id' element={<Actualizar/>}></Route>
      <Route path='/detalle/:id' element={<Detalle/>}></Route>
    </Routes>
   </BrowserRouter>
  );
}

export default App;
