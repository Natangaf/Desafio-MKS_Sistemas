import styled from "styled-components";

export const Header = styled.header`    
    background-color: var(--blue-color-01);
    color: #fff;
`;

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: ease-out .05s;

    max-width: 1824px;
    padding: 1em;
    margin: auto;

    @media screen and (max-width: 800px)
    {
        padding: .25em 1em;
    }
`;

export const Logo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    user-select: none;
    gap: .5em;

    h1
    {
        transition: .05s;
        font-weight: 600;
        font-size: 40px;
    }
    
    span
    {
        transform: translateY(3px);
        transition: .05s;
        font-weight: 300;
        font-size: 20px;
    }

    @media screen and (max-width: 800px)
    {
        h1      { font-size: 32px; }
        span    { font-size: 16px; }
    }
`;