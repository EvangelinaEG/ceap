import React from 'react';
import { Navbar, BImg, Collapse } from 'bootstrap-4-react';
import { CartWidget } from '../CartWidget.js'
import './NavBar.scss';
import { Link, NavLink } from 'react-router-dom';

export const NavBar = (logo) => {
  
    return <>
    <Navbar bg="dark">
        <React.Fragment>
        <Navbar expand="lg" dark bg="dark" mb="3" >
        <Navbar.Brand href="/">
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
              <NavLink activeClassName={ 'activeLink' } exact to='/'>Productos</NavLink>
              <NavLink activeClassName={ 'activeLink' } exact to='/productos/hombre'>Hombre</NavLink>
              <NavLink activeClassName={ 'activeLink' } exact to='/productos/mujer'>Mujer</NavLink>
              <NavLink activeClassName={ 'activeLink' } exact to='/productos/infantil'>Niños</NavLink>
              <NavLink activeClassName={ 'activeLink' } exact to='/productos/bebes'>Bebés</NavLink>
            </Navbar.Nav>
            <Link to='/cart'><CartWidget /></Link>
          </Collapse>
        </Navbar>
      </React.Fragment>
      </Navbar>
    </>
}