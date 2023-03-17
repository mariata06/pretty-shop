import React from 'react';

import { FaShoppingCart, FaUserMinus, FaUserPlus } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import { useProductsContext } from '../context/products_context';

//styles
import styled from 'styled-components';

const CartButtons = () => {
    const {closeSidebar} = useProductsContext();

    return (
        <Wrapper className='cart-btn-wrapper'>
        <Link to="/cart" className='cart-btn' onClick={closeSidebar}>
            Cart
            <span className='cart-container'>
                <FaShoppingCart />
                <span className='cart-value'>
                    12
                </span>
            </span>
        </Link>
        <button type='button' className='auth-btn'>
            Login <FaUserPlus/>
        </button>
        </Wrapper>   
    )
}

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    width: 225px;

    .cart-btn {
        color: var(--color-black);
        font-size: 1.5rem;
        letter-spacing: var(--spacing);
        display: flex;
        align-items: center;
    }

    .cart-btn-wrapper {
        display: none;
    }

    .cart-container {
        display: flex;
        align-items: center;
        position: relative;
        svg {
            height: 1.6rem;
            margin-left: 5px;
            color: var(--color-grey-50);
        }
    }

    .cart-value {
        position: absolute;
        top: -10px;
        right: -16px;
        background: var(--color-beige);
        width: 16px;
        height: 16px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        font-size: 0.75rem;
        color: var(--color-white);
        padding: 5px;
    }

    .auth-btn {
        display: flex;
        align-items: center;
        background: transparent;
        border-color: transparent;
        font-size: 1.5rem;
        cursor: pointer;
        color: var(--color-grey-50);
        letter-spacing: var(--spacing);
    }

    @media (max-width: 1023px) {
    display: none;
}

`


export default CartButtons;