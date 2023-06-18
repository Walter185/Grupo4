import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Image from 'react-bootstrap/Image';
import styles from '@/styles/Footer.module.css';
import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { maincontextState } from '@/context/maincontextprovider';

function FooterGrid() {
  let context = useContext(maincontextState);
    let darkMode = context.darkMode;


  /* ===== traductor ===== */
  const [ t, i18n ] = useTranslation ("traduccion");

  return (
    <>
    <Container className={ styles.container}>
      <Row className={styles.foot}>
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
          <ListGroup>
          {t("redes.sociales")}
            <ListGroup.Item className={styles.ListGroup}>
              <Image  width={20} src="./facebook.png"/>     Facebook
            </ListGroup.Item >
            <ListGroup.Item className={styles.ListGroup}>
              <Image width={20} src="./instagram.jpg"/>     Instagram
            </ListGroup.Item>
            <ListGroup.Item className={styles.ListGroup}>
              <Image width={20} src="./twitter.jpg"/>     Twitter
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
    </>    
  );
}

export default FooterGrid;
