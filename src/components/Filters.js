import React from 'react';
import styled from 'styled-components';

const Filters = () => {
  return (
    <Wrapper className="section section-center text-center content">
      <h2>Filters are here</h2>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 20%;

  @media (max-width: 767px) {
    width: 100%;
  }
`

export default Filters;