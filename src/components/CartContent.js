import React from 'react';
import styled from 'styled-components';
import { useCartContext } from '../context/cart_context';
import { Link } from 'react-router-dom';
import CartHeading from './CartHeading';

const CartContent = () => {
  const { cart } = useCartContext();
  return (
    <Wrapper className="section section-center content">
      <h2>your cart here...</h2>
      <CartHeading />
      {
        cart.map((item) => {
          return <div key={item.id} {...item}>
            <h5>Cart Item</h5>
          </div>
        })
      }
      <hr />
      <div className='link-container'>
        <Link to='/products' className='link-btn'>
          continue shopping
        </Link>
        <button type='button' className='link-btn clear-btn'>
          clear shopping cart
        </button>
      </div>
      <div>Cart Total</div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  .link-container {
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
  }
  .link-btn {
    background: transparent;
    border-color: transparent;
    text-transform: capitalize;
    padding: 0.25rem 0.5rem;
    background: var(--color-medium-beige);
    color: var(--color-white);
    border-radius: var(--radius);
    letter-spacing: var(--spacing);
    font-weight: 400;
    cursor: pointer;
  }
  .clear-btn {
    background: var(--color-black);
  }
`

export default CartContent;