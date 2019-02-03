import React from 'react';

import {
  Navbar, NavbarBrand, NavbarStart, NavbarEnd,
  NavbarItem, Container,
} from 'bloomer';

import './Appbar.sass';

const Appbar = () => (
  <Navbar id="appbar">
    <Container>
      <NavbarBrand>
        <NavbarItem href="#">hackOverflow</NavbarItem>
      </NavbarBrand>
      <NavbarStart>
        <NavbarItem href="#">QUEUE</NavbarItem>
        <NavbarItem href="#">TOPICS</NavbarItem>
        <NavbarItem href="#">MENTORS</NavbarItem>
      </NavbarStart>
      <NavbarEnd>
        <NavbarItem href="#">LOGIN</NavbarItem>
      </NavbarEnd>
    </Container>
  </Navbar>
);

export default Appbar;
