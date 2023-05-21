import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { NavDropdown } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import { Offcanvas } from 'react-bootstrap';
import styles from '@/styles/Navbar.module.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/utils/firebase';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { useContext } from 'react';
import { maincontextState } from '@/context/maincontextprovider';
import DarkMode from '../darkmode/DarkMode';
import { BsCart4 } from "react-icons/bs";

function Barra() {

  /* ====== CARRITO =====*/
  const cart = useSelector((state) => state.cart);

  const getItemsCount = () => {
    return cart.reduce((accumulator, item) => accumulator + item.quantity, 0);
  };
  /* ====== ======= =====*/

  const [user, setUser] = useAuthState(auth);
  let context = useContext(maincontextState);
  let darkMode = context.darkMode;

  return (
    <>
      {[false, 'sm', 'md', 'lg'].map((expand) => (
        <Navbar key={expand} expand={expand} className={darkMode ? styles.dark : styles.light} fixed="top" variant="light">
          <Container fluid>
            <Navbar.Brand href="#home">
              <a class="nav-link navbar-brand" href="/">
                <img src='pediloya.png' alt="Logo de PediloYa" width={150} />
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
                <Nav className="flex-grow-1 justify-content-around mt-4 me-auto">
                  <Nav.Link href='/comida'>Comidas</Nav.Link>
                  <Nav.Link href='/bebidas'>Bebidas</Nav.Link>
                  <Nav.Link href='/postres'>Postres</Nav.Link>                  
                </Nav>
                
                  {/* ================ CARRITO ================*/}
                  <div>
                  <Link href="/cart">
                    <BsCart4 size={50}> </BsCart4>
                    <h1> ({getItemsCount()})</h1>
                  </Link>
                  </div>
                <Navbar.Text>
                  <DarkMode></DarkMode>             
                  <ul>
                    {!user && (
                      <Link legacyBehavior href={'/auth/login'}>
                        <div className={`${styles.login}`}>
                          <a class="nav-link navbar-brand" href="/">
                            <img src='login.png' alt='login' width='25px' /> Ingresar
                          </a>
                        </div>
                      </Link>
                    )}
                    {user && (
                      <Container className={`${styles.container}`}>
                        <NavDropdown title="Bienvenido a PediloYa " id="basic-nav-dropdown" className='dropdown-menu-left'>
                          <NavDropdown.Item href="#action/3.1">
                            <div>
                              <a>Hola,  {user.displayName}  {user.phoneNumber}</a>
                              <img src={user.photoURL}
                                referrerPolicy='no-referrer'
                                width='40px'
                              />
                            </div>
                          </NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.2">
                            <a className='font-text'>Favoritos</a>
                          </NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.3">
                            <div className="item box-div">
                              <a className='font-text'>Pedidos</a>
                            </div>
                          </NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.4">
                            <div className="item box-div">
                              <a className='font-text'>Cupones</a>
                            </div>
                          </NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.5">
                          </NavDropdown.Item>

                          <NavDropdown.Item href="#action/3.6">
                            <a href={'/dashboard'}>Datos</a>
                          </NavDropdown.Item>
                          <NavDropdown.Divider />

                          <NavDropdown.Item href="#action/3.7">
                            <Link href={'/auth/logout'}>
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={24}><path d="M160 96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96C43 32 0 75 0 128V384c0 53 43 96 96 96h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H96c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32h64zM504.5 273.4c4.8-4.5 7.5-10.8 7.5-17.4s-2.7-12.9-7.5-17.4l-144-136c-7-6.6-17.2-8.4-26-4.6s-14.5 12.5-14.5 22v72H192c-17.7 0-32 14.3-32 32l0 64c0 17.7 14.3 32 32 32H320v72c0 9.6 5.7 18.2 14.5 22s19 2 26-4.6l144-136z" /></svg>
                              <span className="label">Salir</span>
                            </Link>
                          </NavDropdown.Item>

                        </NavDropdown>
                      </Container>
                    )}

                  </ul>
                  
                </Navbar.Text>
              </Offcanvas.Body>
            </Navbar.Offcanvas>

          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Barra;