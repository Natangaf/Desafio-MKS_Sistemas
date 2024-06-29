import styled from "styled-components";

export const Card = styled.div`    
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.13);
    background-color: var(--bg-color-01);
    border-radius: 8px;
    position: relative;
    overflow: hidden;
    max-width: 300px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    h3, p
    {
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }
`;

export const CardContent = styled.div`
    padding: 1em;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const CardImageContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    
    margin-bottom: 1em;
    min-height: 140px;
    width: 100%;

    img
    {
        height: 140px;
        object-fit: cover;
    }
`;

export const CardProductInfo = styled.div`
    display: flex;
    align-items: start;
    justify-content: space-between;
    margin-bottom: .5em;
    gap: .25em;
`;

export const CardTitle = styled.h3`
    font-weight: 500;
    min-height: 48px;
    font-size: 16px;
`;

export const CardProductDescription = styled.p`
    font-size: 12px;
`;

export const CardButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .5em;

    background-color: var(--blue-color-01);
    font-family: "Montserrat", sans-serif;
    padding: .75em 1em;
    cursor: pointer;
    border: none;
    width: 100%;
    bottom: 0;
    
    text-transform: uppercase;
    font-weight: 600;
    font-size: 14px;
    color: #fff;

    &:hover
    {
        background-color: var(--blue-color-02);
    }

    &:active
    {
        background-color: #3e8e41;
    }
`;