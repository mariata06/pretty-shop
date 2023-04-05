import React from 'react';
import styled from 'styled-components';
import { useFilterContext } from '../context/filter_context';
import { FaCheck } from 'react-icons/fa';

const Filters = () => {
  const { filters: {text, category, company, color, min_price, max_price, shipping }, updateFilters, clearFilters, all_products} = useFilterContext();
  return (
    <Wrapper className="content">
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="form-control">
          <input type="text" name="text" placeholder='Search' className='search-input' value={text} onChange={updateFilters}/>
        </div>
      </form>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 20%;
  margin-right: 40px;

  @media (max-width: 767px) {
    width: 100%;
  }

  .form-control {
    input {
      padding: 0 10px;
      width: 100%;
      height: 24px;
      border: none;
      background-color: var(--color-grey-10);
      border-radius: var(--radius);
    }
  }
`

export default Filters;