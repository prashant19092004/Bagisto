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
    <Navbar expand="lg" className="bg-body-light px-5 position-fixed top-0 left-0 navbar">
      <Container fluid>
        <Navbar.Brand href="#"><img src="https://demo.bagisto.com/bagisto-common/themes/shop/default/build/assets/logo-942157c2.svg" alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link className='text-dark p-3 py-4 nav-link position-relative' href="#action1">
              MEN
              <div className='nav-drop position-absolute'>
                <ul className='nav-drop-list list-unstyled'>
                  <li className='drop-list'>Formal Wear</li>
                  <li className='drop-list'>Active Wear</li>
                  <li className='drop-list'>Foot Wear</li>
                  <li className='drop-list'>Casual Wear</li>
                </ul>
              </div>
            </Nav.Link>
            <Nav.Link className='text-dark p-3 py-4 nav-link position-relative' href="#action2">
              WOMEN
              <div className='nav-drop position-absolute'>
                <ul className='nav-drop-list list-unstyled'>
                  <li className='drop-list'>Formal Wear</li>
                  <li className='drop-list'>Active Wear</li>
                  <li className='drop-list'>Foot Wear</li>
                  <li className='drop-list'>Casual Wear</li>
                </ul>
              </div>
            </Nav.Link>
            <Nav.Link className='text-dark p-3 py-4 nav-link position-relative' href="#action2">
              KIDS
              <div className='nav-drop position-absolute'>
                <ul className='nav-drop-list list-unstyled'>
                  <li className='drop-list'>Girls Clothing</li>
                  <li className='drop-list'>Boys Clothing</li>
                  <li className='drop-list'>Girls Footwear</li>
                  <li className='drop-list'>Boys Footwear</li>
                </ul>
              </div>  
            </Nav.Link>
            <Nav.Link className='text-dark p-3 py-4 nav-link position-relative' href="#action2">
              WELLNESS
              <div className='nav-drop position-absolute'>
                <ul className='nav-drop-list list-unstyled'>
                  <li className='drop-list'>Downloadable Yoga Tutorial</li>
                  <li className='drop-list'>Movie Pass</li>
                  <li className='drop-list'>E-Books</li>
                </ul>
              </div>  
            </Nav.Link>
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