import React, { useState } from 'react';
import styled from 'styled-components';
import { FaCheck } from 'react-icons/fa';

const AddToCart = ({product}) => {
  const { id, stock, colors } = product

  const [mainColor, setMainColor] = useState(colors[0]);

  return (
    <Wrapper>
      <div className="AddToCart">AddToCart</div>
      <div className="colors">
        <span>colors :</span>
        <div>{
          colors.map((color, index) => {
            return (
              <button 
                style={{background: color}} 
                className={`${mainColor === color?'color-btn active':'color-btn'}`} 
                key={index}
                onClick={() => setMainColor(color)}
            >
              {mainColor === color ? <FaCheck /> : null}
            </button>
            )
          })
        }</div>
      </div>
      <div className="btn-container"></div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  margin-top: 2rem;
  .colors {
    display: grid; 
    grid-template-columns: 125px 1fr;
    align-items: center;
    margin-bottom: 1rem;
  }
  span {
    text-transform: capitalize;
    font-weight: 700;
  }
  div {
    display: flex;
  }
  .color-btn {
    display: inline-block;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    background: #222;
    margin-right: 0.5rem;
    border: none;
    cursor: pointer;
    opacity: 0.5;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 0.75rem;
      color: var(--color-white); 
    }
  }
  .active {
    opacity: 1;
  }
`
export default AddToCart;