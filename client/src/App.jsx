import { useState } from 'react';
import ClientCard from './components/ClientCard';
import SearchBar from './components/SearchBar';

const clientes = [
  {
    nombre: "Juan Pérez",
    email: "juanperez@nexus.com",
    estado: "activo",
    empresa: "Nexus Solutions",
  },
  {
    nombre: "María López",
    email: "marialopez@nexus.com",
    estado: "inactivo",
    empresa: "groityng",
  },
  {
    nombre: "Carlos García",
    email: "carlosgarcia@nexus.com",
    estado: "activo",
    empresa: "analitycs",
  },
  {
    nombre: "Ana Torres",
    email: "anatorres@nexus.com",
    estado: "inactivo",
    empresa: "jk solutions",
  },
  {
    nombre: "Luis Fernández",
    email: "luisfernandez@nexus.com",
    estado: "activo",
    empresa: "jk Solutions",
  }
];


function App() {
  const [busqueda, setBusqueda] = useState('');
  const filteredClients = clientes.filter((cliente) =>
  cliente.nombre.toLowerCase().includes(busqueda.toLowerCase())
);
  return (
    <>
      <SearchBar searchTerm={busqueda} onSearch={setBusqueda} />
      {filteredClients.length === 0 && <p>No se encontraron clientes.</p>}
      {filteredClients.map((cliente) => (
        <ClientCard key={cliente.email} cliente={cliente} />
      ))}
    </>
  );
}



export default App