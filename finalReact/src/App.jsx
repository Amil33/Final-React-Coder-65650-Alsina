import { useState } from 'react';
import './App.css';
import NavBar from './components/layout/navbar/NavBar.jsx';
import ItemListContainer from './components/common/itemListcontainer/ItemListContainer.jsx';

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

