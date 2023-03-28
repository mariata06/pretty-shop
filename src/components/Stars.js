import React from 'react';
import styled from 'styled-components';
import {BsStarFill, BsStarHalf, BsStar} from 'react-icons/bs'

const Stars = ({stars, reviews}) => {
  // console.log(stars, reviews);
  return (
    <Wrapper>
      <div className="stars">
        {/* { 1st star } */}
        <span>
          {stars >= 1 ? <BsStarFill /> : stars >= 0.5 ? <BsStarHalf /> : <BsStar />}
        </span>
        {/* { 2nd star } */}
        <span>
          {stars >= 2 ? <BsStarFill /> : stars >= 1.5 ? <BsStarHalf /> : <BsStar />}
        </span>
        {/* { 3d star } */}
        <span>
          {stars >= 3 ? <BsStarFill /> : stars >= 2.5 ? <BsStarHalf /> : <BsStar />}
        </span>
        {/* { 4th star } */}
        <span>
          {stars >= 4 ? <BsStarFill /> : stars >= 3.5 ? <BsStarHalf /> : <BsStar />}
        </span>
        {/* { 5th star } */}
        <span>
          {stars === 5 ? <BsStarFill /> : stars >= 4.5 ? <BsStarHalf /> : <BsStar />}
        </span>
      </div>
      <p className='reviews'>({reviews} customer reviews)</p>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  span {
    color: var(--color-selective-yellow);
    font-size: 1rem;
    margin-right: 0.25rem;
  }
  p {
    margin-top: 0.5rem;
    margin-left: 0.5rem;
    margin-bottom: 0.5rem;
  }
  margin-bottom: 0.5rem;
`

export default Stars;