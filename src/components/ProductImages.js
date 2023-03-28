import React, {useState} from 'react';
import styled from 'styled-components';

const ProductImages = ({images = [{url: ''}]}) => {
  const [main, setMain] = useState(images[0]);
  // console.log(images);
  console.log(main);
  return (
    <Wrapper>
      <img src={main.url} alt="main image" className='main'/>
      <div className="gallery">
        {images.map((image, index) => {
          return (
            <img 
              src={image.url} 
              alt={image.filename} 
              key={index} 
              onClick={() => setMain(images[index])} 
              className={`${image.url === main.url ? 'active' : null}`}
            /> 
          )
        })}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  .main {
    height: 600px;
    object-fit: contain;
  }
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    /* object-fit: cover;
    object-fit: contain; */
  }
  .gallery {
    margin-top: 1rem;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    column-gap: 1rem;
    img {
      height: 150px;
    }
  }
` 

export default ProductImages;