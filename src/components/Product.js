import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa'

const Product = ({ image, name, price, id }) => {
  return (
    <Wrapper className='article'>
        <div className="container text-center">
            <img src={image} alt={name} />
            <Link to={`/products/${id}`} className="link">
                <FaSearch />
            </Link>
        </div>
        <footer>
            <h5>{name}</h5>
            {/* format price */}
            <p>${price / 100}</p>
        </footer>
    </Wrapper>
  );
}

const Wrapper = styled.article`
    .container {
        position: relative;
        background: var(--color-black-2);
        border-radius: var(--radius);
    }
    img {
        width: 100%;
        display: block;
        object-fit: cover;
        border-radius: var(--radius);
        transition: var(--transition);

        @media (min-width: 1023px) {
            margin: 0 auto;
        }
    }

    .container:hover img {
        opacity: 0.5;

    }
    .container:hover .link {
        opacity: 1;
    }

    .link {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        opacity: 0;
        width: 2.5rem;
        height: 2.5rem;
        border-radius: 100%;
        transition: opacity 0.3s ease-out;
        background-color: var(--color-medium1-brown);
        display: flex;
        align-items: center;
        justify-content: center;
        svg {
            color: var(--color-white);
            width: 20px;
            height: 20px;
        }
    }

    /* @media (max-width: 767px) {
        width: 100%;
    } */
`

export default Product;