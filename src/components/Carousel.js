import Carousel from 'react-bootstrap/Carousel';
import { Button, Form } from 'react-bootstrap';
import React from 'react';
import { useTranslation } from 'react-i18next';

function FirstCarousel() {
  /* ===== traductor ===== */
  const [ t, i18n ] = useTranslation ("traduccion");


  return (
    <Carousel className="m-4" style={{width: "1200px"}}>
      <Carousel.Item>
        <img
          className="d-block img-fluid"
          src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1/800x400?text=First slide&bg=373940"
          alt="Comidas"
        />
        <div className="titulos carousel-caption position-absolute top-50">
          <h1>{t("carrusel.encabezado")}</h1>
          <p>{t("carrusel.categoria")}</p>
          <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder={t("carrusel.ibusqueda")}
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-warning">{t("carrusel.buscar")}</Button>
          </Form>
        </div>
        <Carousel.Caption>
          <h3>{t("navbar.comida")}</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 img-fluid"
          src="https://images.pexels.com/photos/1441122/pexels-photo-1441122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1/800x400?text=Second slide&bg=282c34"
          alt="Bebidas"
        />
        <div className="titulos carousel-caption position-absolute top-50">
          <h1>{t("carrusel.encabezado")}</h1>
          <p>{t("carrusel.categoria")}</p>
          <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder={t("carrusel.ibusqueda")}
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-warning">{t("carrusel.buscar")}</Button>
          </Form>
        </div>
        <Carousel.Caption>
          <h3>{t("navbar.bebida")}</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 img-fluid max"
          src="https://images.pexels.com/photos/205961/pexels-photo-205961.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1/800x400?text=Third slide&bg=20232a"
          alt="Postres"
        />
        <div className="titulos carousel-caption position-absolute top-50">
          <h1>{t("carrusel.encabezado")}</h1>
          <p>{t("carrusel.categoria")}</p>
          <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder={t("carrusel.ibusqueda")}
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-warning">{t("carrusel.buscar")}</Button>
          </Form>
        </div>
        <Carousel.Caption>
          <h3>{t("navbar.postre")}</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}


export default FirstCarousel;