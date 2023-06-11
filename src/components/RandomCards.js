import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import React from 'react';
import { useTranslation } from 'react-i18next';


function RandomCards() {
  /* ===== traductor ===== */
  const [ t, i18n ] = useTranslation ("traduccion");

  return (
    <CardGroup className="m-4 p-4 text-dark" >
      <Card className="m-4 p-4 " border="light">
        <Card.Img variant="top" src="https://www.pierandrei.com.ar/wp-content/uploads/2021/02/PAGO-EFECTIVO.png" />
        <Card.Body>
          <Card.Title>{t("randomcards.miercoles")}</Card.Title>
          <Card.Text>
            {t("randomcards.promo")}
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="m-4 p-4 " border="light">
        <Card.Img variant="top" src="https://us.123rf.com/450wm/pepj/pepj1303/pepj130300008/18338417-promoci%C3%B3n-2x1-sello-de-grunge-en-idioma-espa%C3%B1ol.jpg" />
        <Card.Body className="mt-4">
          <Card.Title>15% OFF!!</Card.Title>
          <Card.Text>
          {t("randomcards.promo2")}
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="m-4 p-4" border="light">
        <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIXMTOjt5i0Z7r_vK3CatU8p_Iu2cdqsAOhOJnpjwPFE7AKBKHLfZgW8tKh1quAN1ct4c&usqp=CAU" />
        <Card.Body>
          <Card.Title>{t("randomcards.domingo")}</Card.Title>
          <Card.Text>
          {t("randomcards.promo3")}
          </Card.Text>
        </Card.Body>
      </Card>
    </CardGroup>
  );
}

export default RandomCards;