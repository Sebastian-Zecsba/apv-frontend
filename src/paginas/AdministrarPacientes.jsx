import Formulario from "../components/Formulario"
import ListadoPacientes from "../components/ListadoPacientes"
import {useState} from 'react'

const AdministrarPacientes = () => {

  const [mostratFormulario, setMostratFormulario] = useState(false)

  return (
    <div className="flex flex-col md:flex-row">
        <button 
          type="button"
          className="bg-indigo-600 text-white font-bold uppercase mx-10 p-3 rounded-md mb-10 md:hidden"
          onClick={() => setMostratFormulario(!mostratFormulario)}
        >{mostratFormulario ? 'Ocultar formulario' : 'Mostrar Formulario'}</button>
      <div className={`${mostratFormulario ? 'block' : 'hidden'} md:block md:w-1/2 lg:2/5`}>
        <Formulario />
      </div>

      <div className="md:w-1/2 lg:3/5">
        <ListadoPacientes />
      </div>

    </div>
  )
}

export default AdministrarPacientes