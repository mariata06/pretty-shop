import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import homeIntroImg from '../assets/home-intro-main.jpg'
import homeIntroImg2 from '../assets/home-intro-small2.jpeg'

const HomeIntro = () => {
    return <Wrapper className='section-center'>
        <article className='content'>
            <h1>Design your <br/>
            comfort zone
            </h1>
            <p>
                Nam condimentum ligula ut dui rutrum eleifend. Proin ullamcorper convallis ex eget tincidunt. Nulla ac ornare nibh, eget consectetur nisl. Integer pretium, mauris sit amet auctor ullamcorper, quam massa interdum.
            </p>
            <Link to='/products' className='btn intro-btn'>
                shop now
            </Link>
        </article>
        <article className='img-container'>
            <img src={homeIntroImg} alt="nice interior" className='main-img' />
            <img src={homeIntroImg2} alt="nice interior" className='small-img' />
        </article>
    </Wrapper>
}

const Wrapper = styled.section`
    min-height: 60vh;
    display: grid;
    place-items: center;
    .img-container {
        display: none;
    }

    p {
        line-height: 2;
        max-width: 45em;
        margin-bottom: 2rem;
        color: var(--color-grey-5);
        font-size: 1rem;
    }

    .content {
        text-align: left;
    }
    @media (min-width: 1023px) {
        height: calc(100vh - 5rem);
        grid-template-columns: 1fr 1fr;
        gap: 8rem;
        h1 {
            margin-bottom: 2rem;
        }
        p {
            font-size: 1.25rem;
        }
        .intro-btn {
            padding: 0.75rem 1.5rem;
            font-size: 1rem;
        }
        .img-container {
            display: block;
            position: relative;
        }
        .main-img {
            width: 100%;
            height: 550px;
            position: relative;
            border-radius: var(--radius);
            display: block;
            object-fit: cover;
        }
        .small-img {
            position: absolute;
            /* bottom: 0; */
            top: 0;
            left: 0;
            width: 250px;
            transform: translateX(-50%);
            border-radius: var(--radius);
        }
        .img-container::before {
            content: '';
            position: absolute;
            width: 10%;
            height: 80%;
            background: var(--color-light-brown);
            /* bottom: 0%; */
            top: 0%;
            left: -8%;
            border-radius: var(--radius);
        }
    }
`

export default HomeIntro;