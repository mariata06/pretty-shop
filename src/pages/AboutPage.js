import React from 'react';
import styled from 'styled-components'
import aboutImg from '../assets/intro-img.jpg'
import { PageIntro } from '../components'

const AboutPage = () => {
  return (
    <main>
      <PageIntro title="about"/>
      <Wrapper className="page section section-center content">
        <img src={aboutImg} alt="nice interior design" />
        <article>
          <div className='title'>
            <h2>Our Story</h2>
            <div className='underline'></div>
          </div>
          <p>Quisque et risus volutpat ligula ullamcorper tincidunt ac nec enim. Morbi tempor luctus varius. Vestibulum viverra mattis dolor nec condimentum. Ut tristique enim nec justo efficitur pharetra. Pellentesque pulvinar posuere.</p>
          <p>
            Aenean vitae ornare orci, eu feugiat mauris. Nulla sodales odio leo, sed tempor ex ultrices vitae. Nam viverra libero eu massa sollicitudin, vel tempor libero sodales. Mauris vitae malesuada dui.
          </p>
        </article>
      </Wrapper>
    </main>
  );
}

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 2rem auto 0;
    margin-top: 2rem;
    color: var(--color-grey-5);
    text-align: left;
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 1023px) {
    grid-template-columns: 1fr 1fr;
  }
`

export default AboutPage;
