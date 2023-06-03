/* eslint-disable no-unused-vars */
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';


function Registrar() {
  const [inputData, setInputData] = useState({
    nombre: '',
    apellido: '',
    sexo: '',
    especie: '',
    raza: '',
    fecha: '',
    usuario: '',
  });

  const navigate = useNavigate();

  const  handleSubmit  = (event) => {
    event.preventDefault();
    axios.post('http://localhost:5000/pets', inputData).then(() => {
      alert('Datos enviados exitosamente !!!');
      navigate('/');
    });
  };


  return (
    <div className=" container">
      <Navbar></Navbar>

      <div className=" d-flex w-100 jusfify-content-center align-items-center">
        <div className="container w-50 border bg-secondary text-white p-5">
          <form onSubmit={handleSubmit} id='form'>
            <h1>Registro de Mascota</h1>
            <div>
              <label htmlFor="nombre">Nombre</label>
              <input
                id='named'
                type="text"
                name="nombre"
                className="form-control"
                onChange={(e) =>
                  setInputData({ ...inputData, nombre: e.target.value })
                }
              />
            </div>
            <div>
              <label htmlFor="apellido">Apellido</label>
              <input
                type="text"
                name="apellido"
                className="form-control"
                onChange={(e) =>
                  setInputData({ ...inputData, apellido: e.target.value })
                }
              />
            </div>
            <div>
              <label htmlFor="sexo">Sexo</label>
              <input
                type="text"
                name="sexo"
                className="form-control"
                onChange={(e) =>
                  setInputData({ ...inputData, sexo: e.target.value })
                }
              />
            </div>
            <div>
              <label htmlFor="especie">Especie</label>
              <input
                type="text"
                name="especie"
                className="form-control"
                onChange={(e) =>
                  setInputData({ ...inputData, especie: e.target.value })
                }
              />
            </div>
            <div>
              <label htmlFor="raza">Raza</label>
              <input
                type="text"
                name="raza"
                className="form-control"
                onChange={(e) =>
                  setInputData({ ...inputData, raza: e.target.value })
                }
              />
            </div>
            <div>
              <label htmlFor="fecha">Fecha Nacimiento</label>
              <input
                type="text"
                name="fecha"
                className="form-control"
                onChange={(e) =>
                  setInputData({ ...inputData, fecha: e.target.value })
                }
              />
            </div>
            <div>
              <label htmlFor="dueño">Dueño</label>
              <input
                type="text"
                name="usuario"
                className="form-control"
                onChange={(e) =>
                  setInputData({ ...inputData, usuario: e.target.value })
                }
              />
            </div>
            <br />
            <button className="btn btn-info" type="submit" >Enviar</button>
            <p className='warning' id='warnings'></p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Registrar;
