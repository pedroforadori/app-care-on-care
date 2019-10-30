import styled from 'styled-components';

export const Header = styled.header `
    background-color: var(--color-first);
    padding: 10px 30px;
    position: sticky;
    top: 0;
    z-index: 10;
`;

export const LogoImgStyle = styled.img `
    width: 50px;
    vertical-align: middle;
    margin-right: 10px;
`;

export const LogoTextStyle = styled.img `
    width: 150px;
    vertical-align: middle;
`;

export const HeaderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    .login-button {
        color: #fff;
        font-size: 1.1em;
        font-weight: 600;
        letter-spacing: 1px;
        text-decoration: none;
        appearance: none;
        background: none;
        border: none;
        font-family: inherit;
        margin-left: auto;

        &.link {
            /* margin-right: 20px; */
            &:hover { color: #ccc; }
        }

    }
`