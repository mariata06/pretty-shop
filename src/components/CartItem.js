import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useCartContext } from '../context/cart_context';
import AmountButtons from './AmountButtons';
import { FaTrash } from 'react-icons/fa';

const CartItem = ({ id, image, name, color, price, amount }) => {
    const { removeItem, toggleAmount} = useCartContext();
    const increase = () => {
        toggleAmount(id, 'inc')
    }

    const descrease = () => {
        toggleAmount(id, 'dec')
    }
    return (
        <Wrapper>
            <div className='title'>
                <img src={image} alt={name} />
                <div>
                    <h5 className='name'>{name}</h5>
                    <p className='color'>Color : <span style={{background : color}}></span> </p>
                    <h5 className='price-small'>{price / 100}</h5>
                </div>
            </div>
            <h5 className='price'>{price / 100}</h5>
            <AmountButtons amount={amount} increase={increase} decrease={descrease}/>
            <h5 className='subtotal'>{(price * amount) / 100}</h5>
            <button type="button" className='remove-btn' onClick={() => removeItem(id)}><FaTrash /></button>
        </Wrapper>
    )
}

const Wrapper = styled.article`
    .subtotal {
        @media (max-width: 767px) {
            display: none;
        }
    }
    .price {
        color: var(--color-medium-beige);
        @media (max-width: 767px) {
            display: none;
        }
    }
    .price-small {
        color: var(--color-medium-beige);
    }
    display: grid;
    grid-template-columns: 316px 1fr 1fr 1fr auto;
    grid-template-rows: 75px;
    gap: 3rem 1rem;
    justify-items: center;
    margin-top: 3rem;
    margin-bottom: 3rem;
    align-items: center;
    @media (max-width: 767px) {
        grid-template-columns: 55% 20% 20%;
    }
    .title {
        height: 100%;
        display: flex;
        /* justify-content: space-between; */
        width: 80%;
        h5, p {
            margin: 0;
            margin-bottom: 10px;
        }
        @media (max-width: 767px) {
            width: 100%;
        }
    }
    img {
        width: 75px;
        height: 75px;
        object-fit: cover;
        margin-right: 10px;
    }
    .color {
        color: var(--color-grey-5);
        display: flex;
        align-items: center;
        span {
            width: 10px;
            height: 10px;
            border-radius: 50%;
            display: block;
            margin-left: 10px;
        }
    }
    .remove-btn {
        cursor: pointer;
        background-color: var(--color-red-dark);
        border: none;
        border-radius: var(--radius);
        width: 25px;
        height: 25px;
        svg {
            color: var(--color-white);
            background-color: var(--color-red-dark);
        }
        transition: opacity 0.3s ease-out;
        &:hover {
            opacity: 0.7;
        }
    }

`

export default CartItem;