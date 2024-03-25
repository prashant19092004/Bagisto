import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../style.css'
import { MdOutlineCameraAlt } from "react-icons/md";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { FaShoppingBag } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";

function MyNavbar() {
  return (
    <Navbar expand="lg" className="bg-body-light px-5">
      <Container fluid>
        <Navbar.Brand href="#"><img src="https://demo.bagisto.com/bagisto-common/themes/shop/default/build/assets/logo-942157c2.svg" alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link className='text-dark p-3 nav-link' href="#action1">MEN</Nav.Link>
            <Nav.Link className='text-dark p-3 nav-link' href="#action2">WOMEN</Nav.Link>
            <Nav.Link className='text-dark p-3 nav-link' href="#action2">KIDS</Nav.Link>
            <Nav.Link className='text-dark p-3 nav-link' href="#action2">WELLNESS</Nav.Link>
          </Nav>
          <Nav className='d-flex align-items-center gap-4'>
              <div className='d-flex gap-3 align-items-center p-2 px-3 rounded-2 bg-body-tertiary'>
                <i class="fa-solid fa-magnifying-glass"></i>
                <input type='text' className='border-0 bg-transparent' placeholder='Search Productd Here' />
                <MdOutlineCameraAlt />
              </div>
              <FaArrowRightArrowLeft />
              <FaShoppingBag />
              <IoPerson />
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;