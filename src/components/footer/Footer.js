import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Image from 'react-bootstrap/Image';
import styles from '@/styles/Footer.module.css';

function FooterGrid() {
  return (
    <Container className={ styles.container}>
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
              <Image  width={40} src="./facebook.png"/>Facebook
            </ListGroup.Item>
            <ListGroup.Item>
              <Image width={40} src="./instagram.png"/>Instagram
            </ListGroup.Item>
            <ListGroup.Item>
              <Image width={40} src="./twitter.png"/>Twitter
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}

export default FooterGrid;
