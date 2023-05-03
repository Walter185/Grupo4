import Card from 'react-bootstrap/Card';

function WithHeaderAndQuoteExample() {
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
            Sede central: Av. Siempreviva 742, Buenos Aires.<br/>
            Since 2014
          </h6>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default WithHeaderAndQuoteExample;