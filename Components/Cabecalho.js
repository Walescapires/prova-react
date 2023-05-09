import React from 'react'
import { Container, Nav, Navbar, NavDropdown, NavLink } from 'react-bootstrap'

const Cabecalho = () => {
    return (
      <>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/animes/">Animes</Navbar.Brand>
            <Nav className="me-auto">
            <Navbar.Brand href="/animes/">Animes</Navbar.Brand>
              <NavLink href="/genero/">Gênero</NavLink>
              
            </Nav>           
            
        </Container>
        </Navbar>
      </>
    )
  }
  
  export default Cabecalho