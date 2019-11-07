import styled from 'styled-components';

export const Card = styled.article`
    width: 100%;
    padding: 25px;
    margin: 30px auto;
    border-radius: 4px;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    box-shadow: -5px 5px 5px -5px rgba(0, 0, 0, .25);
    
    .button {
        background-color: var(--color-highlight);
        /* text-transform: uppercase; */
        color: #fff;
        font-family: 'Poppins',sans-serif;
        font-weight: 600;
        letter-spacing: 2px;
        font-size: 1.15em;
        border-radius: 3px;
        text-decoration: none;
        padding: 10px 15px;

        transition: background-color .25s;

        &:hover {
            background-color: #424f69;
        }
    }
`;

export const Title = styled.h2`
    text-transform: uppercase;
    color: var(--color-highlight);
    font-size: 1.4em;
    letter-spacing: 2px;
    font-weight: 600;
    font-family: 'Poppins',sans-serif;

`;


export const Detail = styled.p`
    width: 100%;
    text-transform: uppercase;
    font-size: 1em;
    min-width: 400px;
    margin-top: 10px;
    color: var(--color-font);
`;



