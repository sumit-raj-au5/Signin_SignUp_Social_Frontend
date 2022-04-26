import React from 'react'
import {Navbar, Container, Nav} from 'react-bootstrap';
import {Avatar} from '@mui/material'

function NavbarTop({ user }) {

  function stringToColor(string) {
    let hash = 0;
    let i;
    console.log(user);
    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }
  
    let color = '#';
  
    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */
  
    return color;
  }
  
  function stringAvatar(name) {
    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
  }

  const logout = () => {
    window.open(`${process.env.REACT_APP_BACKEND_URL}/auth/logout`, "_self");
  };

  return (
    <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="/" >My-Logo</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ms-auto">
    {user && <><Avatar {...stringAvatar(user.displayName)} /> <Nav.Link onClick={logout}>Signout</Nav.Link></>}
     {!user && <><Nav.Link href="/signin">Signin</Nav.Link> <Nav.Link href="/signup">Signup</Nav.Link></> } 
      
      
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
  )
}

export default NavbarTop;