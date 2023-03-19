import React from 'react';
import styled from 'styled-components';
import { services } from '../utils/data' 

const Services = () => {
    return (
        <Wrapper>
            <div className='section-center'>
                <article className='header'>
                    <h3>
                        custom furniture <br />
                        built only for you
                    </h3>
                    <p>
                        Etiam efficitur magna vitae fermentum tincidunt. Nullam semper viverra convallis. Proin aliquam, augue id rhoncus dapibus, dolor elit rutrum magna, a feugiat dui enim vitae orci. Curabitur maximus imperdiet purus.
                    </p>
                </article>
                <div className='services-center'>
                    {services.map((item) => {
                        const { id, icon, title, text } = item;
                        return <article key={id} className='service'>
                            <span className='icon'>
                                {icon}
                            </span>
                            <h4>{title}</h4>
                            <p>{text}</p>
                        </article>
                    })}
                </div>
            </div>
        </Wrapper>  
    )          
}

const Wrapper = styled.section`
    h3,
    h4 {
        color: var(--color-dark-brown);
    }
    padding: 5rem 0;

    background: var(--color-lightest-beige);

    .header h3 {
        margin-bottom: 2rem;
        text-align: left;
    }

    p {
        margin-bottom: 0;
        line-height: 1.8;
        color: var(--color-medium-brown);
        text-align: left;
    }
    .services-center {
        margin-top: 4rem;
        display: grid;
        gap: 2.5rem;
    }
    .service {
        background: var(--color-medium2-brown);
        text-align: center;
        padding: 2.5rem 2rem;
        border-radius: var(--radius);
        p {
            color: var(--color-dark2-brown);
        }
    }
    span {
        width: 4rem;
        height: 4rem;
        display: grid;
        margin: 0 auto;
        place-items: center;
        margin-bottom: 1rem;
        border-radius: 50%;
        background: var(--color-lightest-beige);
        color: var(--color-dark-brown);
        svg {
            font-size: 2rem;
        }
    }
    @media (min-width: 1023px) {
        .header {
            display: grid;
            grid-template-columns: 1fr 1fr;
        }
    }
    @media (min-width: 767px) {
        .services-center {
            grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
        }
    }
    @media (min-width: 1280px) {
        padding: 0;
        .section-center {
            transform: translateY(5rem);
        }
    }
`

export default Services;