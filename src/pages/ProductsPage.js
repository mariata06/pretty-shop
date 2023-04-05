import React from 'react';
import styled from 'styled-components';
import { Filters, ProductList, Sort, PageIntro } from '../components';

const ProductsPage = () => {
  return (
    <main>
      <PageIntro title="products" />
      <Wrapper className="page">
        <div className='product-center section-center'>
          <Filters />
          <div className='sort-container'>
            <Sort />
            <ProductList />
          </div>
        </div>
      </Wrapper>
    </main>
  );
}

const Wrapper = styled.div`
  .products {
    display: grid;
    gap: 3rem 1.5rem;
    margin: 4rem auto;
  }

  @media (max-width: 767px) {
    .products {
      grid-template-columns: 200px 1fr;
    }
  }

  .product-center {
    display: flex;

    @media (max-width: 767px) {
    flex-direction: column;
    }
  }

  .sort-container {
    width: 75%;
  }
` 

export default ProductsPage;
