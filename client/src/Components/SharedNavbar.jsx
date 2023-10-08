import React, { useContext } from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { TokenContext } from "../Context/TokenContextProvider";

export const SharedNavbar = () => {
  const {isAuth} = useContext(TokenContext);
  return (
    <div>
      <Navbar key={"md"} expand={"md"} fixed="top" variant="dark" bg="dark">
        <Container fluid>
          <Navbar.Brand href="/">Blgsy</Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-sm`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-sm`}
            aria-labelledby={`offcanvasNavbarLabel-expand-sm`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-sm`}>
                Offcanvas
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/add-blog">Add Blog</Nav.Link>
                {isAuth? <Button variant="outline-success">Login</Button>: <Button variant="outline-success">Logout</Button> }
                
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  );
};
