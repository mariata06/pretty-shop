import React from 'react';
import styled from 'styled-components';
import { FaPlus, FaMinus } from 'react-icons/fa';

const AmountButtons = ({increase, decrease, amount}) => {
    return (
        <Wrapper className='amount-btns'>
            <button type='button' className='amount-btn' onClick={decrease}><FaMinus /></button>
            <h2 className='amount'>{amount}</h2>
            <button type='button' className='amount-btn' onClick={increase}><FaPlus /></button>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    width: 164px;
    /* justify-items: center; */
    /* grid-template-columns: repeat(3, 1fr); */
    align-items: center;
    justify-content: center;
    h2 {
        width: 33%;
        font-size: 2.5rem;
        line-height: 1;
        margin-top: 0;
        margin-bottom: 0;
        /* padding: 1rem 0; */
        text-align: center;
    }
    button {
        width: 33%;
        background: transparent;
        border-color: transparent;
        cursor: pointer;
        padding: 1.1rem 0;
        width: 2rem;
        height: 1rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`

export default AmountButtons;