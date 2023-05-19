import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function RandomCards() {
  return (
    <CardGroup className="m-4 p-4" >
      <Card className="m-4 p-4" border="light">
        <Card.Img variant="top" src="https://www.pierandrei.com.ar/wp-content/uploads/2021/02/PAGO-EFECTIVO.png" />
        <Card.Body>
          <Card.Title>Miércoles de 2x1!</Card.Title>
          <Card.Text>
            Todos los miércoles 2x1 en postres...
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="m-4 p-4" border="light">
        <Card.Img variant="top" src="https://us.123rf.com/450wm/pepj/pepj1303/pepj130300008/18338417-promoci%C3%B3n-2x1-sello-de-grunge-en-idioma-espa%C3%B1ol.jpg" />
        <Card.Body className="mt-4">
          <Card.Title>15% OFF!!</Card.Title>
          <Card.Text>
            Todos los jueves y viernes 15% OFF en envíos de 20 a 23hs!!
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="m-4 p-4" border="light">
        <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIXMTOjt5i0Z7r_vK3CatU8p_Iu2cdqsAOhOJnpjwPFE7AKBKHLfZgW8tKh1quAN1ct4c&usqp=CAU" />
        <Card.Body>
          <Card.Title>Domingo Turbo</Card.Title>
          <Card.Text>
            Los domingos podes hacer tu pedido con la opción turbo y que llegue mas rápido!
          </Card.Text>
        </Card.Body>
      </Card>
    </CardGroup>
  );
}

export default RandomCards;