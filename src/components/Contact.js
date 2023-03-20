import React from 'react';
import styled from 'styled-components';

const Contact = () => {
    return (
        <Wrapper>
            <div className='section-center'>
                <h3>Join our newsletter and get 20% off</h3>
                <div className='content'>
                    <p>Morbi non purus condimentum nisl elementum maximus at sed odio. Donec rhoncus ligula sapien, a sagittis felis ullamcorper a. Vestibulum ac nulla nec odio consequat tincidunt sit amet eget tortor.</p>
                    <form className='contact-form'>
                        <input type="email" className='form-input' placeholder='enter email'/>
                        <button type='submit' className='submit-btn'>subscribe</button>
                    </form>
                </div>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    padding: 5rem 0;
    h3 {
        text-transform: none;
        text-align: left;
    }
    p {
        line-height: 2;
        max-width: 45rem;
        text-align: left;
        color: var(--color-grey-5);
    }
    .contact-form {
        width: 90vw;
        max-width: 500px;
        display: grid;
        grid-template-columns: 1fr auto;
    }
    @media (max-width: 767px) {
        .contact-form {
            width: 100%;
            max-width: unset;
            grid-template-columns: 2fr 1fr;
        }
        .form-input {
            width: 100%;
        }
    }    
    @media (min-width: 1280px) {
        padding: 15rem 0px;
    }
    .content {
        @media (min-width: 1023px) {
            display: grid;
            grid-template-columns: 1fr 1fr;
            -webkit-box-align: center;
            align-items: center;
            gap: 8rem;
            margin-top: 2rem;
        }
    }
    .submit-btn {
        background: var(--color-medium1-brown);
        text-transform: capitalize;
        letter-spacing: var(--spacing);
        cursor: pointer;
        transition: var(--transition);
        color: var(--color-black);
        border-top-right-radius: var(--radius);
        border-bottom-right-radius: var(--radius);
    }
    .form-input {
        border-right: none;
        color: var(--color-grey-2);
        border-top-left-radius: var(--radius);
        border-bottom-left-radius: var(--radius);
    }
    .form-input,
    .submit-btn {
        font-size: 1rem;
        padding: 0.5rem 1rem;
        border: 2px solid var(--color-black);
    }
`
    
export default Contact;