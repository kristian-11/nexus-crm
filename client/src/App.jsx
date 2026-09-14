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
        <div key={cliente.email}>
          <h3>{cliente.nombre}</h3>
          <p>Email: {cliente.email}</p>
          <p>Estado: {cliente.estado}</p>
          <p>Empresa: {cliente.empresa}</p>
        </div>
      ))}
    </>
  );
}

export default App