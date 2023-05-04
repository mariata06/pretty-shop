import React from 'react';
import styled from 'styled-components';

const CartHeading = () => {
    return (
        <Wrapper>
            <div className='content'>
                <h5>item</h5>
                <h5>price</h5>
                <h5>quantity</h5>
                <h5>subtotal</h5>
                <span></span>
            </div>
            <hr />
        </Wrapper>
    );
}

const Wrapper = styled.div`
    .content {
        padding: 0 0 4rem;
        display: grid;
        grid-template-columns: 316px 1fr 1fr 1fr auto;
        justify-items: center;
        column-gap: 1rem;
        h5 {
            color: var(--color-grey-5);
            font-weight: 400;
        } 
    }

	@media (max-width: 767px) {
        display: none;
	}
`

export default CartHeading;
