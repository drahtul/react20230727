import { Outlet } from "react-router-dom"

const Contenedor = () => {
  return (
    <div>
        <header>
            <h1>El Clima</h1>
            <nav>Navegación</nav>
            <hr/>
        </header>
        <main>
            <Outlet />
        </main>
    </div>
  )
}

export default Contenedor