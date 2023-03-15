import React from 'react';

//styles
import styled from 'styled-components';

const Navbar = () => {
  return (
    <Nav className="Navbar">
        <h4>Navbar</h4>
        <div className='logo'>Pretty<span>&nbsp;Shop&nbsp;</span></div>
    </Nav>
  );
}

export default Navbar;

const Nav = styled.nav`
    .logo {
        font-size: 1.5rem;
        font-family: "Lobster", cursive;
        font-weight: lighter;

        span {
            color: var(--color-beige);
        }
    }
`
