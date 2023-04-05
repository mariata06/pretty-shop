import React from 'react';
import styled from 'styled-components';
import { useFilterContext } from '../context/filter_context';
import { BsFillGridFill, BsList } from 'react-icons/bs';

const Sort = () => {
  const { filtered_products: products, grid_view, setGridView, setListView, sort, updateSort} = useFilterContext(); 
  return (
    <Wrapper className='content'>
      <div className='btn-container'>
        <button type='button' className={`${grid_view ? 'active' : null}`} onClick={setGridView}>
          <BsFillGridFill />
        </button>
        <button type='button' className={`${!grid_view ? 'active' : null}`} onClick={setListView}>
          <BsList />
        </button>
      </div>
      <p>{products.length} products found</p>
      <hr/>
      <form>
        <label htmlFor="sort">Sort By</label>
        <select name="sort" id="sort" className='sort-input' value={sort} onChange={updateSort}>
          <option value="price-lowest">Price (lowest)</option>
          <option value="price-highest">price (highest)</option>
          <option value="name-a">name (a-z)</option>
          <option value="name-z">name (z-a)</option>
        </select>
      </form>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: auto auto 1fr auto;
  align-items: center;
  margin-bottom: 2rem;
  column-gap: 2rem;

  select, label, option {
    text-transform: capitalize;
    font-weight: bold;
    border: none;
  }

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    row-gap: 0.75rem;
    .btn-container {
      width: 50px;
    }
    label {
      display: inline-block;
      margin-right: 0.5rem;
    }
   column-gap: 2rem;
  }

  p {
    text-transform: capitalize;
    margin-bottom: 0;
    margin-top: 0;
  }

  .btn-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 0.5rem;
  }
  button {
    background: transparent;
    border: 1px solid var(--color-black-2);
    color: var(--color-black-2);
    width: 1.5rem;
    border-radius: var(--radius);
    height: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    svg {
      font-size: 1rem;
    }
  }
  .active {
    background: var(--color-black);
    color: var(--color-white);
  }
  hr {
    width: 100%;
  }
`

export default Sort; 