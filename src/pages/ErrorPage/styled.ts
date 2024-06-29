import { Link } from "react-router-dom";
import styled from "styled-components";

export const ErrorPage = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    background-color: var(--bg-color-02);
    text-align: center;
    height: 100svh;

    h1
    {
        background-color: var(--gray-color-01);
        color: var(--bg-color-01);
        font-size: 28px;
        margin-bottom: .25em;
        border-radius: 8px;
        padding: .25em 1em;
    }
`;

export const HomeButton = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .5em;

    background-color: var(--blue-color-01);
    color: var(--bg-color-01);
    text-decoration: none;
    padding: .25em 1em;
    border-radius: 8px;
    font-weight: 600;
    font-size: 22px;
    margin-top: 1em;

    &:hover
    {
        background-color: var(--blue-color-02);
    }
`;