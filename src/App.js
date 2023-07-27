import { Provider } from 'react-redux';
import './App.css';
import { store } from './store/store';
import Login from './componentes/Login';
import Clima from './componentes/Clima';
import Contacto from './componentes/Contacto';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NoEncontrado from './componentes/NoEncontrado';
import Contenedor from './componentes/Contenedor';

let App = () => {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Contenedor />}>

            <Route path="/" element={<Login />} />
            <Route path="/clima" element={<Clima />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="*" element={<NoEncontrado />} />

          </Route>

        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

/*
- todas las etiquetas cierran
- devolver un nodo padre o Fragment
- class -> className - for -> htmlFor
*/

/*
import Cuenta from './componentes/Cuenta';
import Botones from './componentes/Botones';
import Contenido from './componentes/Contenido';
import Menu from './componentes/Menu';
      <Menu />
      <Contenido />
      <Cuenta />
      <Botones />
*/

/*
import Contador from './componentes/Contador';
import Personas from './componentes/Personas';
import Texto from './componentes/Texto';

<h1>Bienvenida/o</h1>
      <Contador />
      <hr/>
      <Texto />
      <hr/>
      <Personas />

 return (
    <div className="App">
      <h1>Bienvenida/o</h1>
      <p>Hola {nombre}!</p>
      <Titulo />
      <Titulo />
      <Persona nombre="Juan" apellido="Perez" />
      <Persona nombre="Pedro" apellido="Gonzalez" />
      <hr />
      {nombres.map((nombre, i) => <p key={i}>{nombre}</p>)}
      <hr />
      <h2>Personas</h2>
      {personas.map(persona => <Persona key={persona.id} nombre={persona.nombre} apellido={persona.apellido} />)}
      {personas.map(persona => <Persona key={persona.id} {...persona} />)}
    </div>

  );
*/