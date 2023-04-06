import React from 'react';
import styled from 'styled-components';
import { useFilterContext } from '../context/filter_context';
import { FaCheck } from 'react-icons/fa';

const Filters = () => {
  const { filters: {text, category, company, color, min_price, price, max_price, shipping }, updateFilters, clearFilters, all_products} = useFilterContext();
  
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
        <div className="form-control">
          <h5>Company</h5>
          <select name="company" value={company} onChange={updateFilters} className='company'>
            {companies.map((item, index) => {
              return <option key={index} value={item}>{item}</option>
            })}
          </select>
        </div>
        <div className="form-control">
          <h5>Colors</h5>
          <div className='colors'>
            {
              colors.map((item, index) => {
                if(item === 'all') {
                  return <button key="index" name="color" onClick={updateFilters} data-color="all" className={`${color === 'all' ? 'all-btn active' : 'all-btn'}`}>all</button>
                }
                return <button key={index} name="color" style={{background: item}} className={`${color === item ? 'color-btn active' : 'color-btn'}`} data-color={item} onClick={updateFilters}>
                {color === item ? <FaCheck /> : null}
                </button>
              })
            }
          </div>
        </div>
        <div className="form-control">
          <h5>Price</h5>
          <p className='price'>${price / 100}</p>
          <input type="range" name="price" onChange={updateFilters} min={min_price} max={max_price} value={price}/>
        </div>
        <div className="form-control shipping">
          <label htmlFor="shipping">Free Shipping</label>
          <input type="checkbox" name='shipping' id="shipping" onChange={updateFilters} checked={shipping}/>
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
      text-align: left;
    }
    .search-input {
      padding: 0.5rem;
      width: 100%;
      height: 24px;
      /* border: none; */
      border-color: transparent;
      background-color: var(--color-grey-10);
      border-radius: var(--radius);
      outline: none;
    }
    .company {
      background: var(--color-grey-10);
      border-radius: var(--radius);
      border-color: transparent;
      /* padding: 0.25rem; */
      padding: 0.5rem;
      width: 50%;
      outline: none;
    }
    .colors {
      display: flex;
      align-items: center;
    }
    .color-btn {
      display: inline-block;
      width: 1rem;
      height: 1rem;
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
        font-size: 0.5rem;
        color: var(--color-white);
      }
      &.active {
        opacity: 1;
      }
    }
    .all-btn {
      display: flex;
      align-items: center;
      margin-right: 0.5rem;
    }
  }
  .shipping {
    display: flex;
    align-items: center;

    input {
      margin: 0;
      margin-left: 5px;
    }
  }
  .shipping label {
    letter-spacing: var(--spacing);
    line-height: 1.25;
    text-transform: capitalize;
  }
`

export default Filters;