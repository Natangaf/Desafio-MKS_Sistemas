import styled, { keyframes } from "styled-components";

const SkeletonLoading = keyframes`
    from    { background-color: #a3b8c2; }
    to      { background-color: #f0f3f5; }
`;

export const CardSkeleton = styled.div`
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.13);
    background-color: var(--bg-color-01);
    border-radius: 8px;
    position: relative;
    overflow: hidden;
    max-width: 270px;

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

export const CardSkeletonContent = styled.div`
    padding: 1em;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const CardSkeletonImageContainer = styled.div`
    opacity: .7;
    animation: ${SkeletonLoading} 1s linear infinite alternate;

    display: flex;
    align-items: center;
    justify-content: center;
    
    margin-bottom: 1em;
    border-radius: 8px;
    height: 140px;
    width: 100%;
`;

export const CardSkeletonProductInfo = styled.div`
    display: flex;
    align-items: start;
    justify-content: space-between;
    margin-bottom: .5em;
    gap: .25em;

    div
    {
        display: flex;
        flex-direction: column;
        width: 100%;
    }
`;

export const SkeletonLine = styled.div`
    animation: ${SkeletonLoading} 1s linear infinite alternate;
    border-radius: 2px;
    margin: .125rem;
    height: 20px;
    width: 100%;
`;

export const CardSkeletonProductDescription = styled.p`
    animation: ${SkeletonLoading} 1s linear infinite alternate;
    border-radius: 2px;
    user-select: none;
    min-width: 268px;
    height: 36px;
`;

export const CardSkeletonButton = styled.button`
    background-color: var(--blue-color-01);
    padding: 1.625em 1em;
    border: none;
    width: 100%;
    bottom: 0;
`;