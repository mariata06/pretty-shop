import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useCartContext } from '../context/cart_context';

const CartFooter = () => {
    const { total_amount, shipping_fee} = useCartContext();
    return (
        <Wrapper>
            <div className='cart-wrapper'>
                <article>
                    <h5>subtotal : <span>${total_amount / 100}</span> </h5>
                    <p>Sheeping fee : <span>${shipping_fee / 100}</span> </p>
                    <hr />
                    <h4>order total : {' '}
                    <span>${(total_amount + shipping_fee) / 100}</span> </h4>
                </article>
                <Link to='/checkout' className='btn'>
                    proceed to checkout
                </Link>
            </div>
        </Wrapper>
    );
}

const Wrapper = styled.section`
    margin-top: 3rem;
    display: flex;
    justify-content: center;
    .cart-wrapper {
        width: 300px;

        @media (max-width: 320px) {
            width: 100%;
        }

        article {
            /* width: 300px; */
            border: 1px solid var(--color-grey-30);
            border-radius: var(--radius);
            margin: 0;
            padding: 1.5rem 3rem;
        }

        h5, h4, p {
            display: grid;
            grid-template-columns: 4fr 1fr;
        }

        .btn {
            /* width: 100%; */
            margin-top: 20px;
            display: block;
            display: flex;
            justify-content: center;
        }
    } 
`
export default CartFooter;    