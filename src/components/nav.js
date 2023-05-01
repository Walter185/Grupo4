import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import styles from '@/styles/Home.module.css';
import Link from 'next/link';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../utils/firebase';


const Barra = () => {

  const [ user, loading ] = useAuthState(auth);
     
    return (
      <Navbar bg="light" expand="lg">
        <Container className={`${styles.container}`}>

        <Navbar.Brand href="/">
          <div>
          <img src='pediloya.png' className={`${styles.logo}`}/> 
          </div>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {/* <Nav className="me-auto"  navbarScroll>
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action
          </NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">
              Another action
          </NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">
              Something
          </NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">
              Separated link
          </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown.Divider />
          </Nav> */}
              
          </Navbar.Collapse>
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
            <ul>
                  {!user && (
                      <Link legacyBehavior href={'/auth/login'}>
                          <a >
                              Ingresar
                          </a>
                      </Link>
                  )}
                  {user && (
                      <div className={`${styles.user}`} >
                          <Link href={'/dashboard'}>
                            <a>{user.displayName}</a>
                              <img src={user.photoURL} 
                              alt="avatar" 
                              referrerPolicy='no-referrer'
                              width='50px'
                              />
                          </Link>
                          <Link legacyBehavior href={'/auth/logout'}>
                          <a >
                              Salir
                          </a>
                      </Link>
                      </div>
                  )}
              </ul>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
  
    </Navbar>
    )
}

export default Barra;