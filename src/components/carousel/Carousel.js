import Carousel from 'react-bootstrap/Carousel';
import { Button, Form } from 'react-bootstrap';

function firstCarousel() {
  return (
    <Carousel className="m-4" style={{width: "1200px"}}>
      <Carousel.Item>
        <img
          className="d-block img-fluid"
          src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1/800x400?text=First slide&bg=373940"
          alt="Comidas"
        />
        <div className="titulos carousel-caption">
          <h1>¡Pedí lo que quieras!</h1>
          <p>Restaurantes, mercados, farmacias, kioscos y muchos más.</p>
          <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Ingrese su búsqueda..."
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-warning">Buscar</Button>
          </Form>
        </div>
        <Carousel.Caption>
          <h3>Comidas</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 img-fluid"
          src="https://images.pexels.com/photos/1441122/pexels-photo-1441122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1/800x400?text=Second slide&bg=282c34"
          alt="Bebidas"
        />
        <div className="titulos carousel-caption">
          <h1>¡Pedí lo que quieras!</h1>
          <p>Restaurantes, mercados, farmacias, kioscos y muchos más.</p>
          <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Ingrese su búsqueda..."
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-warning">Buscar</Button>
          </Form>
        </div>
        <Carousel.Caption>
          <h3>Bebidas</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 img-fluid max"
          src="https://images.pexels.com/photos/205961/pexels-photo-205961.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1/800x400?text=Third slide&bg=20232a"
          alt="Postres"
        />
        <div className="titulos carousel-caption">
          <h1>¡Pedí lo que quieras!</h1>
          <p>Restaurantes, mercados, farmacias, kioscos y muchos más.</p>
          <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Ingrese su búsqueda..."
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-warning">Buscar</Button>
          </Form>
        </div>
        <Carousel.Caption>
          <h3>Postres</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
{/* <div className="titulos carousel-caption">
    <h1>¡Pedí lo que quieras!
    </h1>
    <p>Restaurantes, mercados, farmacias, kioscos y muchos más.</p>
    <Form className="d-flex">
      <Form.Control
        type="search"
        placeholder="Ingrese su búsqueda..."
        className="me-2"
        aria-label="Search"
      />
      <Button variant="outline-warning">Buscar</Button>
    </Form>
  </div> */}

export default firstCarousel;