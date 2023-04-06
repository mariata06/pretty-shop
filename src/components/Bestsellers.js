import React from 'react';
import styled from 'styled-components';
import { useProductsContext } from '../context/products_context'
import Error from './Error'
import Loading from './Loading'
import Product from './Product'

const Bestsellers = () => {
    const {
        products_loading: loading,
        products_error: error,
        bestsellers: featured,
    } = useProductsContext();

    if (loading) {
        return <Loading />
    }

    if (error) {
        return <Error />
    }

    return <Wrapper className='section'>
        <div className='title'>
            <h2>Our Bestsellers</h2>
            <div className="underline"></div>
        </div>
        <div className='section-center bestsellers'>
            {featured.map((product) => {
                return <Product key={product.id} {...product}/>
            })}
        </div>
    </Wrapper>
}

const Wrapper = styled.section`
    padding: 5rem 0;
    background: var(--color-grey-10);
    .bestsellers {
        margin: 4rem auto;
        display: grid;
        gap: 2.5rem;
        img {
            height: 225px;
        }

        @media (min-width: 1023px) {
            grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
        }
    }

    h2 {
        text-align: center;
    }

    @media screen and (min-width: 1023px) {
        h2 {
            font-size: 2rem;
        }
    }
        
`

export default Bestsellers;