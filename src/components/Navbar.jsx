import '../css/estilo.css'
import Logo from '../imagenes/logo.jpg'


function Navbar() {
  return (
    <nav className="nav navegacion d-flex justify-content-between">
                  
           <div className="boton d-flex align-items-center">
            <img className='nav-link logo ' src= {Logo} alt='logo' />
            <a className="nav-link" href="/registrarUsuario">Registro Usuario</a>
            <a className="nav-link" href="/registrar">Registro Mascota</a>          
           </div>
              
            <div className="boton d-flex align-items-center">
                <a href='/' >Buscar Mascotas</a>    
            </div>    
                      
    </nav>
  )
}

export default Navbar