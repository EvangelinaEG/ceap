import React from 'react';
import { Navbar, BImg, Nav, Collapse } from 'bootstrap-4-react';
import { CartWidget } from '../CartWidget.js'
import './NavBar.css';

export const NavBar = (logo) => {

    return <>
    <Navbar ldark bg="dark">
        <React.Fragment>
        <Navbar expand="lg" dark bg="dark" mb="3" >
        <Navbar.Brand href="#">
          <BImg
            src={logo.logo}
            width="30"
            height="30"
            display="inline-block"
            align="top"
            mr="1"
          />
          Giomara
        </Navbar.Brand>
          <Navbar.Toggler target="#navbarColor1" />
          <Collapse navbar id="navbarColor1">
            <Navbar.Nav mr="auto" className='bg-faded' >
              <Nav.ItemLink href="#" active>Hombres</Nav.ItemLink>
              <Nav.ItemLink href="#">Mujeres</Nav.ItemLink>
              <Nav.ItemLink href="#">Niños</Nav.ItemLink>
              <Nav.ItemLink href="#">Bebés</Nav.ItemLink>
            </Navbar.Nav>
            <CartWidget />
          </Collapse>
        </Navbar>
      </React.Fragment>
      </Navbar>
    </>
}