
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import Card from 'react-bootstrap/Card';

function App() {
  return (
    <div className="App">

    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Link</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    {/* Trois cartes */}
    <Container>
        <div className="row">
          <div className="col-md-4">
            <Card>
              <Card.Img variant="top" src="https://contents.mediadecathlon.com/p1792852/k$ebfc70bac8b821247ae951bae47847d1/sq/Chaussure+de+football+adulte+terrains+secs+Agility+900+Mesh+MiD+FG+bleu.jpg" />
              <Card.Body>
                <Card.Title>Carte 1</Card.Title>
                <Card.Text>Description de la carte 1.</Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4">
            <Card>
              <Card.Img variant="top" src="https://th.bing.com/th/id/R.2f86f63859c05dfe7e5627fea1cafa50?rik=ohhbGUYYI0GTGA&pid=ImgRaw&r=0" />
              <Card.Body>
                <Card.Title>Carte 2</Card.Title>
                <Card.Text>Description de la carte 2.</Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4">
            <Card>
              <Card.Img variant="top" src="https://www.outletskecherusa.com/images/large/outletskecherusa/Skechers_GO_RUN_Swirl_Tech_Speed_Athleti-6381-INWGD_ZOOM.jpg" />
              <Card.Body>
                <Card.Title>Carte 3</Card.Title>
                <Card.Text>Description de la carte 3.</Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </Container>

    </div>
);
}

export default App;
