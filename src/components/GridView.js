import React, { useState } from 'react';
import styled from 'styled-components';
import Product from './Product';

const GridView = ({ products }) => {
    return (
        <Wrapper>
            <div className='products-container'>
                {products.map((product) => {
                    return <Product key={product.id} {...product}/>
                })}
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
  img {
    height: 175px;
  }

  .products-container {
    display: grid;
    gap: 2rem 1.5rem;
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 1280px) {
    .products-container {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 767px) {
    .products-container {
      grid-template-columns: repeat(1, 1fr);
    }
  }
` 

export default GridView;