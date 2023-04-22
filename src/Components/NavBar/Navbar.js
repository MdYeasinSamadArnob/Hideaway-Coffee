import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar() {
  return (
    <Navbar fixed="top" className='bg-[#FFFFFF] shadow-md fixed top-0 h-20 md:h-16'  expand="md">
       
      <Container >
        <Navbar.Brand href="#home">
            <div className='flex justify-center items-center'>
            <img src="/hide-away-coffee-logo.svg" alt="logo" className="w-20 md:w-24 " />
            <p>Hideaway Coffee</p>
            </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#about-us">About us</Nav.Link>
            <Nav.Link href="#find-us">Find us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
     
    </Navbar>
  );
}

export default NavBar;
