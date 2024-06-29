import styled, { keyframes } from "styled-components";

const OpenDrawerAnimation = keyframes`
    from
    { 
        width: 0px;
        opacity: 0; 
    }

    to
    {
        opacity: 1;
    }
`;

export const CartDrawer = styled.div`
    animation: ${OpenDrawerAnimation} 225ms cubic-bezier(0.4, 0, 0.2, 1);
    position: fixed;
    z-index: 10;
    right: 0;
    top: 0;
    
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    box-shadow: -5px 0px 6px rgba(0, 0, 0, 0.13);
    background-color: var(--blue-color-01);
    max-height: 100%;
    height: 100vh;
    width: 480px;

    @media screen and (max-width: 800px) 
    {
        max-width: 480px;
        width: 90%;
    }
`;

export const CartDrawerContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1em 2em;
    flex: 1;

    @media screen and (max-width: 800px) 
    {
        padding: 1em;
    }
`;

export const CartDrawerHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1em 2em;

    div
    {
        display: flex;
        flex-direction: column;
        transition: ease-out .1s;

        font-weight: 700;
        font-size: 28px;
        color: #fff;
    }

    @media screen and (max-width: 800px) 
    {
        div
        {
            font-size: 22px;
        }
    }
`;

export const CartDrawerCloseButton = styled.button`
    background-color: #000;
    border-radius: 50%;
    font-size: 24px;
    padding: .5em;
    border: none;
    color: #fff;
    
    display: flex;
    align-items: center;
    justify-content: center;
    user-select: none;
    height: 42px;
    width: 42px;
    
    &:hover
    {
        background-color: #262626;
        cursor: pointer;
    }
`;

export const CartDrawerListItems = styled.div`
    overflow-y: auto;
    max-height: 70vh;
    padding: .75em 0;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
    gap: 1em;
    flex: 1;
    
    &::-webkit-scrollbar 
    {
        height: .75em;
        width: .5em;
    }

    &::-webkit-scrollbar-track
    {
        border-radius: 8px;
    }
    
    &::-webkit-scrollbar-thumb 
    {
        border-radius: 8px;
    }
`;

export const CartDrawerTotal = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 1em;
    gap: 1em;

    font-size: 24px;
    font-weight: 700;

    @media screen and (max-width: 800px) 
    {
        font-size: 18px;
    }
`;

export const CartDrawerBuyButton = styled.button`
    display: inline-block;
    font-weight: 700;
    font-size: 24px;
    color: #fff;

    background-color: #000;
    padding: 1em;
    border: none;
    width: 100%;
    bottom: 0;

    &:hover
    {
        background-color: #262626;
        cursor: pointer;
    }

    @media screen and (max-width: 800px) 
    {   
        font-size: 20px;
    }
`;