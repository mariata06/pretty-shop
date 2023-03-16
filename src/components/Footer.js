import React from 'react';

//styles
import styled from 'styled-components';

const Footer = () => {
  return (
    <Wrapper className="Footer">
        <h5>&copy; {new Date().getFullYear()}
          <span>&nbsp;Pretty Shop</span>
        </h5>
        <h5>All rights reserved</h5>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  height: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--color-black);
  text-align: center;
  flex: 0 0 auto;
  span {
    color: var(--color-beige);
  }

  h5 {
    color: var(--color-white);
    margin: 0.1rem;
    font-weight: 400;
    text-transform: none;
    line-height: 1.25;

  }
`

export default Footer;
