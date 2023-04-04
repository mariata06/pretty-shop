import React, { useState } from 'react';
import styled from 'styled-components';
import Product from './Product';
import { Link } from 'react-router-dom'; 

const ListView = ({ products }) => {
    return (
        <Wrapper>
            {products.map((product) => {
                const {id, image, name, price, description} = product;
                return <article key={id}>
                    <img src={image} alt={name} />
                    <div>
                        <h4>{name}</h4>
                        <h5 className='price'>{price}</h5>
                        <p>{description.substring(0, 150)}...</p>
                        <Link to={`/products/${id}`} className='btn'>
                            Details
                        </Link>
                    </div>
                </article>
            })}
        </Wrapper>
    )
}

const Wrapper = styled.section`
  display: grid;
  justify-content: center;

  img {
    display: block;
    width: 300px;
    height: 200px;
    object-fit: cover;
    border-radius: var(--radius);
    margin-bottom: 1rem;
  }
  h4 {
    margin-bottom: 0.5rem;
  }

  article {
    width: 800px;
    display: flex;
    /* flex-direction: column; */
    justify-content: space-around;
    align-content: center;
  }

  div {
    width: 400px;
    text-align: left;
  }
`

export default ListView;