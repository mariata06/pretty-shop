import React from 'react';

import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import CartButtons from './CartButtons';
import { links } from '../utils/data';

//styles
import styled from 'styled-components';

const Sidebar = () => {
    const isOpen = false;
    return (
        <SidebarContainer>
            <aside className={`${isOpen ? 'sidebar show-sidebar':'sidebar'}`}>
                <div className='sidebar-header'>
                    <div className='logo'>Pretty<span>&nbsp;Shop&nbsp;</span></div>
                    <button type='button' className='close-btn'>
                        <FaTimes />
                    </button>
                </div>
                <ul className='links'>
                    {links.map((link) => {
                        const { id, text, url } = link;
                        return (
                            <li key={id}>
                                <Link to={url}>{text}</Link>
                            </li>
                        )
                    })}
                    <li>
                        <Link to='/checkout'>checkout</Link>    
                    </li>
                </ul>
                <CartButtons />
            </aside>
        </SidebarContainer> 
    );
};

const SidebarContainer = styled.div`
    text-align: center;
    .sidebar-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem 1.5rem;
    }
    .close-btn {
        font-size: 2rem;
        background: transparent;
        border-color: transparent;
        color: var(--color-red-dark);
        transition: var(--transition);
        cursor: pointer;
        margin-top: 0.2rem;
    }
    .close-btn:hover {
        color: var(--color-red-light);
    }
    .logo {
        justify-self: center;
        height: 45px;
        color: var(--color-black);
        font-size: 2.5rem;
        font-family: "Lobster", cursive;
        font-weight: lighter;

        span {
            color: var(--color-beige);
        }
    }
    .links {
        margin-bottom: 2rem;
        list-style: none;
        padding-left: 0;
    }
    .links a {
        display: block;
        text-align: left;
        font-size: 1rem;
        text-transform: capitalize;
        padding: 1rem 1.5rem;
        color: var(--color-grey-50);
        transition: var(--transition);
        letter-spacing: var(--spacing);
    }
    .links a:hover {
        padding: 1rem 1.5rem;
        padding-left: 2rem;
        background: var(--color-grey-50);
        color: var(--color-grey-20);
    }
    .sidebar {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: var(--color-white);
        transition: var(--transition);
        transform: translate(-100%);
        z-index: -1;
    }
    .show-sidebar {
        transform: translate(0);
        z-index: 1000;
    }
    .cart-btn-wrapper {
        margin: 2rem auto;
    }
    .cart-btn-wrapper {
        display: flex;
        width: 225px;
        justify-content: space-between;
    }
`

export default Sidebar;