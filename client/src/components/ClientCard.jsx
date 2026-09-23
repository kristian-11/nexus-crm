function ClientCard({cliente}) {
    return (
        <div>
            <h3>{cliente.nombre}</h3>
            <p>Email: {cliente.email}</p>
            <p>Estado: {cliente.estado}</p>
            <p>Empresa: {cliente.empresa}</p>
        </div> 
    );
}

export default ClientCard;


