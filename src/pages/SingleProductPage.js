import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useProductsContext } from '../context/products_context';
import { single_product_url as url } from '../utils/data';
import { Loading, Error, ProductImages, PageIntro, Stars, AddToCart} from '../components';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const SingleProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    single_product_loading: loading,
    single_product_error: error,
    single_product: product, 
    fetchSingleProduct,
  } = useProductsContext()

  useEffect(() => {
    fetchSingleProduct(`${url}${id}`)
  }, [id])

  // useEffect(() => {
  //   fetchSingleProduct(`${url}`)
  // }, [])

  //for checking and rendering unique single product by adding his id to the url
  // useEffect(() => {
  //   fetchSingleProduct(`${url}${id}`)
  // }, [id])
  // console.log(product);

  //if an error - redirect to home page
  useEffect(() => {
    if(error) {
      setTimeout(() => {
        navigate('/')
      }, 3000)
    }
  }, [error])

  if(loading) {
    return <Loading />
  }

  if(error) {
    return <Error />
  }

  const {name, price, description, stock, stars, reviews, id:sku, company, images} = product
  return (
    <Wrapper className="Single Product content">
      <PageIntro title={name} product/>
      <div className='section section-center page'>
        <Link to="/products" className='btn'>
          back to products
        </Link>
        <div className='product-center'>
          <ProductImages images={images}/>
          <section className='content'>
            <h2>{name}</h2>
            <Stars stars={stars} reviews={reviews} />
            <h5 className='price'>{price / 100}</h5>
            <p className='desc'>{description}</p> 
            <p className='info'>
              <span> Available : </span>
              {stock > 0 ? 'In stock' : 'out of stock'}
            </p>
            <p className='info'>
              <span> SKU </span>
              {sku}
            </p>
            <p className='info'>
              <span> Brand : </span>
              {company}
            </p>
            {stock > 0 && <AddToCart product={product} />}
          </section>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  .product-center {
    display: grid;
    gap: 4rem;
    margin-top: 2rem;
    grid-template-columns: 1fr 1fr;
    /* -webkit-box-align: center; */
    /* align-items: center; */
  }

  .price {
    color: var(--color-medium1-brown);
  }

  .section-center {
    text-align: left;
  }

  .content {
    padding: 2rem 0;
    padding: 0;
  }
`

export default SingleProductPage;