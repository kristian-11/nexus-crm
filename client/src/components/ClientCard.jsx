import './ClientCard.css';

function ClientCard({cliente}) {
    return (
        <div className="client-card">
            <h3 className="client-name">{cliente.nombre}</h3>
            <p className="client-info">Email: {cliente.email}</p>
            <p className={`badge badge-${cliente.estado}`}>Estado: {cliente.estado}</p>
            <p className="client-info">Empresa: {cliente.empresa}</p>
        </div> 
    );
}

export default ClientCard;


