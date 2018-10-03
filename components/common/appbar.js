import React from 'react';

import {
  Navbar, NavbarBrand, NavbarStart, NavbarEnd,
  NavbarItem, Container,
} from 'bloomer';

const Appbar = () => (
  <Navbar>
    <Container>
      <NavbarBrand>
        <NavbarItem>hackOverflow</NavbarItem>
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
