import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Image from 'react-bootstrap/Image';

const styles={
  logo:{
      width: "60px",
      padding: "15px",
  }
}

function FooterGrid() {
  return (
    <Container className='p-3 m-0 bg-light justify-content-center flex-column'>
      <Row>
        <Col className='flex-column justify-content-center'>
          <h5>
            {' '}
            PediloYa
            {' '}
          </h5>
          <p>
            Sede central: Av. Siempreviva 742, Buenos Aires.<br/>
            Since 2014
          </p>
        </Col>
        <Col>
          <ListGroup className='rounded-0'>
            Nuestras redes sociales:
            <ListGroup.Item>
              <Image style={styles.logo} src="./facebook.png"/>Facebook
            </ListGroup.Item>
            <ListGroup.Item>
              <Image style={styles.logo} src="./instagram.png"/>Instagram
            </ListGroup.Item>
            <ListGroup.Item>
              <Image style={styles.logo} src="./twitter.png"/>Twitter
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}

export default FooterGrid;


/* import Card from 'react-bootstrap/Card';

function Footer() {
  return (
    <Card className='rounded-0  bg-secondary text-white'>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <h5>
            {' '}
            PediloYa{' '}
          </h5>
          <h6>
            Estamos para facilitarte las cosas. Lo que quieras, desde donde quieras y donde vos quieras.
          </h6>
          <h6>
            
          </h6>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default Footer; */