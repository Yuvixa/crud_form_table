/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import axios from "axios"

function Detalle() {

    const {id} = useParams()
    const [Data, setdata] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:5000/pets/'+id)
        .then(res => setdata(res.data))
        .catch(err => console.log(err))
    }, [])

  return (
<div className="container ">
    <div className="card w-50 m-auto mt-5">
        <div className="card-header h3">Detalle</div>
        <div className="card-body ">
            <div className="fila d-flex justify-content-around">
            <label><b>ID :</b></label><span className="card-text">{Data.id}</span>
            </div>
            <div className="fila d-flex justify-content-around">
                <label><b>Nombre :</b></label><span>{Data.nombre}</span>
            </div>
            <div className="fila d-flex justify-content-around">
                <label><b>Apellido :</b></label><span>{Data.apellido}</span>
            </div>
            <div className="fila d-flex justify-content-around">
                <label><b>Sexo :</b></label><span>{Data.sexo}</span>
            </div>
            <div className="fila d-flex justify-content-around">
                <label><b>Especie :</b></label><span>{Data.especie}</span>
            </div>
            <div className="fila d-flex justify-content-around">
                <label><b>Raza :</b></label><span>{Data.raza}</span>
            </div>
            <div className="fila d-flex justify-content-around">
                <label><b>Fecha Nacimiento</b></label><span>{Data.fecha}</span>
            </div>
            <div className="fila d-flex justify-content-around">
                <label><b>Dueño :</b></label><span>{Data.usuario}</span>
            </div>
            <a href="/" className="btn btn-primary">Regresar</a>
        </div>
    </div>
</div>

    

   
  )
}

export default Detalle