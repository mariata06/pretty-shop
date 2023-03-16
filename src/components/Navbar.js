import React from 'react';

import { FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import { links } from '../utils/data';

//styles
import styled from 'styled-components';
import CartButtons from './CartButtons';

const Navbar = () => {
  return (
    <NavContainer className="Navbar">
      <div className='nav-center'>
        <div className='nav-header'>
          <Link to="/">
            <div className='logo'>Pretty<span>&nbsp;Shop&nbsp;</span></div>
          </Link>
          <button type="button" className='nav-toggle'>
            <FaBars />
          </button>
        </div>
        <ul className='nav-links'>
          {
            links.map((link) => {
              const { id, text, url } = link;
              return (
                <li key={id}>
                  <Link to={url}>{text}</Link>
                </li>
              )
            })
          }
        </ul>
        <CartButtons />
      </div>
    </NavContainer>
  );
}

export default Navbar;

const NavContainer = styled.nav`
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  .nav-center {
    width: 90vw;
    margin: 0 auto;
    max-width: var(--max-width);
  }

  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .nav-toggle {
    background-color: transparent;
    border: transparent;
    color: var(--color-beige);
    cursor: pointer;
    svg {
      font-size: 2rem;
    }
  }

  .nav-links {
    display: none;
  }

  .cart-tn-wrapper {
    display: none;
  }

  .logo {
    font-size: 2.5rem;
    font-family: "Lobster", cursive;
    font-weight: lighter;
    color: var(--color-black);

    span {
      color: var(--color-beige);
    }
  }

  @media (min-width: 767px) {
    .nav-toggle {
      display: none;
    }

    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
    }

    .nav-links {
      list-style: none;
      display: flex;
      justify-content: center;
      li {
        margin: 0 0.5rem;
      }
      a {
        color: var(--color-grey-50);
        font-size: 1rem;
        font-weight: bold;
        text-transform: capitalize;
        letter-spacing: var(--spacing);
        padding: 0.5rem;
        &:hover {
          border-bottom: 2px solid var(--color-beige);
        }
      }
    }
  }
`