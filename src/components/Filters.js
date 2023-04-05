import React from 'react';
import styled from 'styled-components';
import { useFilterContext } from '../context/filter_context';
import { FaCheck } from 'react-icons/fa';

const Filters = () => {
  const { filters: {text, category, company, color, min_price, max_price, shipping }, updateFilters, clearFilters, all_products} = useFilterContext();
  
  const getUniqueValues = (data, type) => {
    let unique = data.map((item) => item[type])
    // console.log(unique);
    if(type === 'colors') {
      unique = unique.flat();
    }
    return ['all', ...new Set(unique)]
  }

  const categories = getUniqueValues(all_products, 'category')
  const companies = getUniqueValues(all_products, 'company')
  const colors = getUniqueValues(all_products, 'colors')

  // console.log(categories);
  // console.log(companies);
  // console.log(colors);
  
  return (
    <Wrapper className="content">
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="form-control">
          <input type="text" name="text" placeholder='Search' className='search-input' value={text} onChange={updateFilters}/>
        </div>
        <div className="form-control">
          <h5>Category</h5>
          <div>
            {categories.map((item, index) => {
              return <button key={index} onClick={updateFilters} name='category' type='button' className={`${category === item.toLowerCase() ? 'active' : null }`}>{item}</button>
            })}
          </div>
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

  button {
    display: block;
    margin: 0.25rem 0;
    padding: 0.25rem 0;
    text-transform: capitalize;
    background: transparent;
    border: none;
    border-bottom: 1px solid transparent;
    letter-spacing: var(--spacing);
    color: var(--color-grey-5);
    cursor: pointer;
  }

  .active {
    border-color: var(--color-grey-5);
  }

  .form-control {
    margin-bottom: 1.25rem;
    h5 {
      margin-bottom: 0.5rem;
    }
    .search-input {
      padding: 0.5rem;
      width: 100%;
      height: 24px;
      /* border: none; */
      border-color: transparent;
      background-color: var(--color-grey-10);
      border-radius: var(--radius);
    }
  }
`

export default Filters;