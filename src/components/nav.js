import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import styles from '@/styles/Home.module.css';
import Link from 'next/link';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../utils/firebase';
import { AddressComponent } from './addressComponent';


const Barra = () => {

  const [ user, setUser ] = useAuthState(auth);
     
    return (
      <Navbar bg="light" expand="lg">
        <Container className={`${styles.container}`}>

        <Navbar.Brand href="/">
          <div>
          <img src='pediloya.png' alt='logo' className={`${styles.logo}`}/> 
          </div>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        <Navbar.Collapse id="basic-navbar-nav">
                       
          </Navbar.Collapse>
          <Navbar.Collapse className="justify-content-end">
          <Nav.Link href="addressInput"></Nav.Link>
          <ul>{user && (<AddressComponent />)}</ul>
          <Navbar.Text>
            <ul>
        
                  {!user && (
                    <Link legacyBehavior href={'/auth/login'}>
                        <div className={`${styles.login}`}>
                            <img src='login.png' alt='login' width='30px' />
                            <a>    Ingresar</a>
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
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={24}><path d="M160 96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96C43 32 0 75 0 128V384c0 53 43 96 96 96h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H96c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32h64zM504.5 273.4c4.8-4.5 7.5-10.8 7.5-17.4s-2.7-12.9-7.5-17.4l-144-136c-7-6.6-17.2-8.4-26-4.6s-14.5 12.5-14.5 22v72H192c-17.7 0-32 14.3-32 32l0 64c0 17.7 14.3 32 32 32H320v72c0 9.6 5.7 18.2 14.5 22s19 2 26-4.6l144-136z"/></svg>
                                <span className="label">Salir</span>
                          </Link>
                          </NavDropdown.Item>
                         
                       </NavDropdown>
                          </Container>
                  )}
                  
              </ul>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
  
    </Navbar>
    )
}

export default Barra;