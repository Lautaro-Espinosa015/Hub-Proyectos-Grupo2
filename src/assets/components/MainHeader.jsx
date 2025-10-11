import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { PeopleFill } from 'react-bootstrap-icons';
import './HubStyles.css';

function MainHeader() {
  return (
    <Navbar className="main-header" variant="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand as={Link} to="/" className="main-header-brand">
          <PeopleFill className="group-icon" />
          Hub Proyectos Grupo 2
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar-nav" />
        <Navbar.Collapse id="main-navbar-nav">
          <Nav className="w-100">
            <Nav.Link as={Link} to="/" className="main-header-link">Inicio</Nav.Link>
            <Nav.Link as={Link} to="/projects" className="main-header-link">Proyectos</Nav.Link>
            <Nav.Link as={Link} to="/about" className="main-header-link">Sobre Nosotros</Nav.Link>
            <Nav.Link href="#profile" className="main-header-link ms-auto">
              <i className="bi bi-person-circle"></i> Perfil
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MainHeader;