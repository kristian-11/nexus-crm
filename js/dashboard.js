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
];

function renderClients() {
  let htmlCompleto = "";

  clientes.forEach(function (cliente) {
    htmlCompleto += `
      <div class="client-card">
        <h3>${cliente.nombre}</h3>
        <p>${cliente.email}</p>
        <p>${cliente.estado}</p>
        <p>${cliente.empresa}</p>
      </div>
    `;
  });

  document.querySelector("#clientsList").innerHTML = htmlCompleto;
}

renderClients();
