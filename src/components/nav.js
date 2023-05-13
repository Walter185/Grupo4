import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import styles from '@/styles/Home.module.css';


function navBarResponsive() {
  return (
    <>
      {[false, 'sm', 'md', 'lg'].map((expand) => (
        <Navbar key={expand} bg="light" expand={expand} className="mb-3" fixed="top" variant="light">
          <Container fluid>
            <Navbar.Brand href="#home">
              <a class="nav-link navbar-brand" href="#">
                <img src='pediloya.png' alt="Logo de PediloYa" className={`${styles.logo}`}/>
              </a>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  PediloYa
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="flex-grow-1 pe-3 me-auto">
                  <Nav.Link href="#action1">Comidas</Nav.Link>
                  <Nav.Link href="#action2">Bebidas</Nav.Link>
                  <Nav.Link href="#action3">Postres</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>
               <a href="#login">Ingresar</a>
              </Navbar.Text>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default navBarResponsive;