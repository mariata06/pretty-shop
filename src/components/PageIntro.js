import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const PageIntro = ({ title, product }) => {
    return (
        <Wrapper>
            <div className='section-center'>
                <h3>
                    <Link to='/'>Home</Link>
                    {product && <Link to="/products">/ Products</Link>}/ {title}
                </h3>
            </div>
        </Wrapper>
    )    
}

export default PageIntro;

const Wrapper = styled.section`
    background-color: var(--color-light-beige);
    width: 100%;
    min-height: 19vh;
    display: flex;
    align-items: center;

    color: var(--color-dark-brown);
    a {
        color: var(--color-medium-brown);
        padding: 0.5rem;
        transition: var(--transition);
    }
    a:hover {
        color: var(--color-dark-brown);
    }
    h3 {
        text-align: left;
    }
`