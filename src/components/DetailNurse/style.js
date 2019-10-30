import styled from 'styled-components';


const Title = styled.h2`
    text-transform: uppercase;
    color: var(--color-highlight);
    font-size: 1.5em;
    letter-spacing: 2px;
    font-weight: 600;
    font-family: 'Poppins', sans-serif;
`;

const CardHeader = styled.div`
    display: flex;
    align-items: center;
`

const Subtitle = styled.h3`

`

const Description = styled.p`
    margin: 40px 0;
    color: #888;
`

const List = styled.dl`
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 15px 2px;
    margin-top: 50px;
`

const ListTitle = styled.dt`
    color: #666;
`

const ListItem = styled.dd`
    font-weight: 600;
`

const Tag = styled.span`
    background: #ccc;
    padding: 5px 15px;
    border-radius: 15px;
    display: inline-block;
    margin: 0 15px;
    letter-spacing: 1px;
    font-size: .95em;
`

const CardFooter = styled.div`
    text-align: center;
    margin-top: 60px;

    .button { 
        font-size: 1.15em;
        font-family: 'Poppins',sans-serif;
        font-weight: 600;
        text-transform: uppercase;
        color: var(--color-highlight);
        border-radius: 10px;
        cursor: pointer;
        -webkit-letter-spacing: 1px;
        -moz-letter-spacing: 1px;
        -ms-letter-spacing: 1px;
        letter-spacing: 1px;
    }
`

export {
    Title,
    Tag,
    CardHeader,
    CardFooter,
    Description,
    List,
    ListTitle,
    ListItem
}