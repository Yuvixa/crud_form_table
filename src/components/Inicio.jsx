/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";//una vez se genere componente carga esta funcion
import axios from "axios";
import { useNavigate } from "react-router-dom";
import '../css/estilo.css'
import Navbar from "./Navbar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function Inicio () {

const [data, setData] = useState([])
const [tablaUsuarios, setTablaUsuarios]= useState([]);
const [busqueda, setBusqueda]= useState("");

const navigate = useNavigate()

const peticionGet=async()=>{
    await axios.get("http://localhost:5000/pets")
    .then(response=>{
      setData(response.data);
      setTablaUsuarios(response.data);
    }).catch(error=>{
      console.log(error);
    })
  }

  const handleChange=e=>{
    setBusqueda(e.target.value);
    filtrar(e.target.value);
  }
  
  const filtrar=(terminoBusqueda)=>{
    var resultadosBusqueda=tablaUsuarios.filter((elemento)=>{
      if(elemento.nombre.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
      || elemento.raza.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
      || elemento.especie.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
      || elemento.sexo.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
      || elemento.fecha.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
      ){
        return elemento;
      }
    });
    setData(resultadosBusqueda);
  }
  
  useEffect(()=>{
  peticionGet();
  },[])


    return (
       <div className="container">
        
       <Navbar/>
        
       <div className="filtro d-flex justify-content-end">
            <span><b>Buscar :</b></span>
            <input className="inputBuscar" name="nombre" placeholder="nombre mascota,especie,raza,sexo,fecha nacimiento" 
                    value={busqueda} onChange={handleChange}/> 
            <button className="btn btn-success">
                <FontAwesomeIcon icon={faSearch}/>
            </button>     
       </div>
     
        <h2>Crud Mascotas</h2>        
        
        <table className="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Sexo</th>
                    <th>Especie</th>
                    <th>Raza</th>
                    <th>Fecha Nacimiento</th>
                    <th>Dueño</th>
                    <th>Acciones</th>

                </tr>
            </thead>
            <tbody>
                {data.map((d,i)=>
                    <tr key={i}>
                        <td>{d.id}</td>
                        <td>{d.nombre}</td>
                        <td>{d.apellido}</td>
                        <td>{d.sexo}</td>
                        <td>{d.especie}</td>
                        <td>{d.raza}</td>
                        <td>{d.fecha}</td>
                        <td>{d.usuario}</td>
                        <td>
                            <div className="botonesCrud">
                                <a className=" btn btn-warning" href={`/actualizar/${d.id}`}>Actualizar</a>
                                <button className="btn btn-danger" onClick={e => handleDelete(d.id)}>Eliminar</button>
                                <a className=" btn btn-primary" href={`/detalle/${d.id}`}>Detalle</a>
                            </div>
                        </td>
                    </tr>
                )}
            </tbody>
        </table>
       </div>
    )
    function handleDelete(id) {
        const confirm = window.confirm("Seguro q quieres esta mascota eliminar?");
        if(confirm) {
            axios.delete('http://localhost:5000/pets/'+id)
            .then(res => {
                alert("Elimnación hecha");
                navigate('/');
            })         
        }
    }
}

export default Inicio;