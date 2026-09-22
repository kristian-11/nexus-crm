import ClientCard from './components/ClientCard';

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
  return (
    <>
      {clientes.map((cliente) => (
        <ClientCard key={cliente.email} cliente={cliente} />
      ))}
    </>
  );
}

export default App