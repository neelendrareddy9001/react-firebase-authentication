import {BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import {Navbar, container, Row, Col, Container} from 'react-bootstrap'
import AddBooks from './Components/AddBooks';
import BookList from './Components/BookList';

function App() {
  return (
    <>
      <Navbar bg='dark' variant='dark' className='header'>
        <Container>
          <Navbar.Brand href='#home'>Library - Firebase</Navbar.Brand>
        </Container>
      </Navbar>
      <Container style={{width: "400px"}}>
        <Row>
          <Col>
            <AddBooks />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <BookList />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
