import { useState } from 'react';
import './App.css';
import NavBar from './components/navbar/NavBar.jsx';
import ItemListContainer from './components/navbar/ItemListContainer.jsx';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* Integración de NavBar */}
      <NavBar />

      {/* Integración de ItemListContainer con el mensaje de bienvenida */}
      <ItemListContainer greeting="¡Bienvenido a nuestra tienda!" />
    </>
  );
}

export default App;

