import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useProductsContext } from '../context/products_context';
import { single_product_url as url } from '../utils/data';
import { Loading, Error, ProductImages, PageHero } from '../components';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const SingleProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    single_product_loading: loading,
    single_product_error: error,
    single_product: product, fetchSingleProduct
  } = useProductsContext()

  useEffect(() => {
    fetchSingleProduct(`${url}`)
  }, [])

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

  return (
    <Wrapper className="Single Product content">
      <h4>Single Product Page</h4>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  .product-center {
    display: grid;
    gap: 4rem;
    margin-top: 2rem;
  }
  .price {
    color: var(--color-medium1-brown);
  }
`

export default SingleProductPage;