import React from 'react';
import styled from 'styled-components';

const Error = () => {
  return (
    <Wrapper className="section section-center text-center content">
        <h2>there was an error...</h2>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5rem 0;
`

export default Error;