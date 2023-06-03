/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react"
import axios from "axios";
import { useNavigate,useParams } from "react-router-dom";
import Navbar from "./Navbar";

function Actualizar() {

    const {id} = useParams();

    const [inputData, setInputData] = useState({

        nombre:'',
        apellido:'',
        sexo:'',
        especie:'',
        raza:'',
        fecha:'',
        usuario:''
    })

    const navigate = useNavigate();

    useEffect(()=>{
        axios.get('http://localhost:5000/pets/'+id)
        .then(res => setInputData(res.data))
        .catch(err => console.log(err))
    },[])

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.put('http://localhost:5000/pets/'+id,inputData)
        .then(res => {
            alert("Datos Actualizados exitosamente !!!")
            navigate('/')
        })
    }

  return (
    <div className="contenedor">
    <Navbar/>

   
    <div className=" d-flex w-100 vh-100 jusfify-content-center align-items-center">
        <div className="container w-50 border bg-secondary text-white p-5">
            <form onSubmit={handleSubmit}>
                <h1>Actualizar Mascota</h1>
                <div>
                    <label htmlFor="id">ID</label>
                    <input type="number" disabled name="id" className="form-control" value={inputData.id}
                     />
                </div>
                <div>
                    <label htmlFor="nombre">Nombre</label>
                    <input type="text" name="nombre" className="form-control" value={inputData.nombre}
                    onChange={e => setInputData({...inputData, nombre: e.target.value})} />
                </div>
                <div>
                    <label htmlFor="apellido">Apellido</label>
                    <input type="text" name="apellido" className="form-control" value={inputData.apellido}
                    onChange={e => setInputData({...inputData, apellido: e.target.value})} />
                </div>
                <div>
                    <label htmlFor="sexo">Sexo</label>
                    <input type="text" name="sexo" className="form-control" value={inputData.sexo}
                    onChange={e => setInputData({...inputData, sexo: e.target.value})} />
                </div>
                <div>
                    <label htmlFor="especie">Especie</label>
                    <input type="text" name="especie" className="form-control" value={inputData.especie}
                    onChange={e => setInputData({...inputData, especie: e.target.value})} />
                </div>
                <div>
                    <label htmlFor="raza">Raza</label>
                    <input type="text" name="raza" className="form-control" value={inputData.raza}
                    onChange={e => setInputData({...inputData, raza: e.target.value})} />
                </div>
                <div>
                    <label htmlFor="fecha">Fecha Nacimiento</label>
                    <input type="text" name="fecha" className="form-control" value={inputData.fecha}
                    onChange={e => setInputData({...inputData, fecha: e.target.value})} />
                </div>
                <div>
                    <label htmlFor="dueño">Dueño</label>
                    <input type="text" name="usuario" className="form-control" value={inputData.usuario}
                    onChange={e => setInputData({...inputData, usuario: e.target.value})} />
                </div><br/>
                <button className="btn btn-info">Actualizar</button>
            </form>
        </div>
    </div>

    </div>
  )
}

export default Actualizar