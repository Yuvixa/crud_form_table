/* eslint-disable no-unused-vars */
import { useState } from "react"
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

function RegistrarUsuario() {

    const [inputData, setInputData] = useState({
        usuario:'',
        apellido:'',
        email:'',
        dni:''
    })

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:5000/pets',inputData)
        .then( () => {
            alert("Datos enviados exitosamente !!!")
            navigate('/')
        })
    }

  return (
    
    <div className=" container">
        <Navbar/>
    
    <div className=" d-flex w-100 jusfify-content-center align-items-center">
        <div className="container w-50 border bg-secondary text-white p-5">
            <form onSubmit={handleSubmit}>
                <h1>Registro de Usuario</h1>
                <div>
                    <label htmlFor="usuario">Nombre</label>
                    <input type="text" name="usuario" className="form-control"
                    onChange={e => setInputData({...inputData, usuario: e.target.value})} />
                </div>
                <div>
                    <label htmlFor="apellido">Apellido</label>
                    <input type="text" name="apellido" className="form-control"
                    onChange={e => setInputData({...inputData, apellido: e.target.value})} />
                </div>
                <div>
                    <label htmlFor="email">Correo</label>
                    <input type="text" name="email" className="form-control"
                    onChange={e => setInputData({...inputData, email: e.target.value})} />
                </div>
                <div>
                    <label htmlFor="dni">DNI</label>
                    <input type="text" name="dni" className="form-control"
                    onChange={e => setInputData({...inputData, dni: e.target.value})} />
                </div>
                <br/>
                <button className="btn btn-info">Enviar</button>
            </form>
        </div>
    </div>

    </div>
  )
}

export default RegistrarUsuario