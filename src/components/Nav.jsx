import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import "../App.css";

export default function Navegation() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/">Tutolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/primerbeso">Tutorial de como liarse por primera vez</Nav.Link>
            <NavDropdown title="Tipos de besos" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
              <Nav.Link className="black" href="/primerbeso">Primer beso</Nav.Link>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
              <Nav.Link className="black" href="/besoconlengua">Beso con Lengua</Nav.Link>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                <Nav.Link className="black" href="/besarconaparato">Beso con Braquets</Nav.Link>
                </NavDropdown.Item>
            </NavDropdown>


            <NavDropdown title="Besar para expertos" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
              <Nav.Link className="black" href="/tipsbesarcomoprofesional">Tips para besar como un profesional</Nav.Link>

              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
              <Nav.Link className="black" href="/tipsbesarcomoprofesional">Besos para enamorar</Nav.Link>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                <Nav.Link className="black" href="/besarconpiercing">Beso con Piercing</Nav.Link>
                </NavDropdown.Item>
             
            </NavDropdown>
            <Nav.Link href="tutorialbesarconlamano"> Como aprender a besar con la mano</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
