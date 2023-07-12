import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './nav.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 

function Navbars() {
  return (
    <Navbar expand="lg" className="nav">
      <Container>
      <Navbar href="" className='title'>
        {/* <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" /> */}
        <input placeholder='Search store' className='searchStore'></input>
      </Navbar>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="" className='tabOC'>Discover</Nav.Link>
            <Nav.Link href="" className='tabOC'>Browse</Nav.Link>
            <Nav.Link href="" className='tabOC'>News</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbars;