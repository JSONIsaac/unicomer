import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>ToDo list</h1>
      <div className='contenedor'>
        <div className='boton'>
          <button>Ver usuarios</button>
        </div>
        <div className='boton'>
            <button>Crear Tarea</button>
        </div>
      </div>

    </>
  )
}

export default App
