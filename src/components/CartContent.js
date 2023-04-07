import React from 'react';
import styled from 'styled-components';
import { useCartContext } from '../context/cart_context';
import { Link } from 'react-router-dom';
import CartHeading from './CartHeading';
import CartFooter from './CartFooter';
import CartItem from './CartItem';

const CartContent = () => {
  const { cart, clearCart } = useCartContext();
  return (
    <Wrapper className="section section-center content">
      <CartHeading />
      {
        cart.map((item) => {
          return <CartItem key={item.id} {...item}>
            <h5>Cart Item</h5>
          </CartItem>
        })
      }
      <hr />
      <div className='link-container'>
        <Link to='/products' className='link-btn'>
          continue shopping
        </Link>
        <button type='button' className='link-btn clear-btn' onClick={clearCart}>
          clear shopping cart
        </button>
      </div>
      <CartFooter />
    </Wrapper>
  );
}

const Wrapper = styled.section`
  .link-container {
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;

    @media (max-width: 400px) {
      flex-direction: column;
      /* flex-wrap: wrap; */
    }
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
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
  }
  .clear-btn {
    background: var(--color-black);
  }
  .link-btn,
  .clear-btn {
    transition: opacity 0.3s ease-out;
    &:hover {
      opacity: 0.7;
    }
  }
`

export default CartContent;