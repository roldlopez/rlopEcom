import  '../Sidebar/Sidebar.css';

function Sidebar() {
    return (
    <div className="re-sidebar">
        <div className="re-sidebar-content">
            <p className="re-sidebar-title">Modalidad</p>
            <button className="re-sidebar-filter active">Pago con tarjeta</button>
            <button className="re-sidebar-filter">Pago con efectivo</button>
            <button className="re-sidebar-filter">Pago con transferencia</button>
        </div>
        <div className="re-sidebar-content">
            <p className="re-sidebar-title">Marcas</p>
            <button className="re-sidebar-filter active">Apple</button>
            <button className="re-sidebar-filter">Samsung</button>
            <button className="re-sidebar-filter">Motorola</button>
        </div>
      </div>
    );
  }
  
  export default Sidebar;
