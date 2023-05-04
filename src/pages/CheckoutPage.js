import React from 'react';
import styled from 'styled-components';
import { PageIntro } from '../components';


const CheckoutPage = () => {
  return (
    // <div className="Checkout content">
    //     <h4>Checkout Page</h4>
    // </div>
    <main>
      <PageIntro title='Checkout' />
      <Wrapper className='page'>
        <div className="section-center content"></div>
      </Wrapper> 
    </main>
  );
}

const Wrapper = styled.main`
  min-height: 60vh;
  .empty {
    text-align: center;
    h2 {
      margin-bottom: 1rem;
      text-transform: none;
    }
  }
`

export default CheckoutPage;

