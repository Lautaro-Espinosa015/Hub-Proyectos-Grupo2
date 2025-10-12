import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import '../Css/HubStyles.css';

function SidebarNav() {
  const navLinkClassName = ({ isActive }) => 
    isActive ? 'sidebar-link active' : 'sidebar-link';

  return (
    <div className="sidebar-container">
      <Nav className="flex-column">
        <NavLink to="/" end className={navLinkClassName}>
          <i className="bi bi-house-door me-2"></i>Inicio
        </NavLink>
        <NavLink to="/games" className={navLinkClassName}>
          <i className="bi bi-collection me-2"></i>Proyectos
        </NavLink>
        <NavLink to="/view/html-project" className={navLinkClassName}>
          <i className="bi bi-code-square me-2"></i>Proyecto HTML
        </NavLink>
        <NavLink to="/view/react-project" className={navLinkClassName}>
          <i className="bi bi-code-slash me-2"></i>Proyecto React
        </NavLink>
         <NavLink to="/proyecto2" className={navLinkClassName}>
          <i className="bi bi-paw me-2"></i>Proyecto 2
        </NavLink>
        <NavLink to="/pet-registry" className={navLinkClassName}>
          <i className="bi bi-paw me-2"></i>Registro de Mascotas
        </NavLink>
        <NavLink to="/aboutus" className={navLinkClassName}>
          <i className="bi bi-people me-2"></i>Sobre Nosotros
        </NavLink>

        <NavLink to="/proyecto4" className={navLinkClassName}>
          <i className="bi bi-joystick me-2"></i>Proyecto 4
        </NavLink>
       
        
      </Nav>
    </div>
  );
}

export default SidebarNav;