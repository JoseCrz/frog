import styled, { keyframes } from 'styled-components'

export const LoadingChase = keyframes`
    100% {
        transform: rotate(360deg);
    }
`

export const LoadingChaseDot = keyframes`
    80%, 100% {
        transform: rotate(360deg);
    }
`

export const ChaseDotBefore = keyframes`
    50% {
    transform: scale(0.4);
    }

    100%, 0% {
    transform: scale(1.0);
    }

`

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`

export const Chase = styled.div`
    margin: 50px 0;
    width: 50px;
    height: 50px;
    position: relative;
    animation: ${LoadingChase} 2.5s infinite linear both;
`

export const ChaseDot = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    animation: ${LoadingChaseDot} 2.0s infinite ease-in-out both;

    &:before {
        content: '';
        display: block;
        width: 20%;
        height: 20%;
        background-color: var(--text-color);
        border-radius: 100%;
        animation: ${ChaseDotBefore} 2.0s infinite ease-in-out both;
    }

    &:nth-child(1) { animation-delay: -1.1s; }
    &:nth-child(2) { animation-delay: -1.0s; }
    &:nth-child(3) { animation-delay: -0.9s; }
    &:nth-child(4) { animation-delay: -0.8s; }
    &:nth-child(5) { animation-delay: -0.7s; }
    &:nth-child(6) { animation-delay: -0.6s; }
    &:nth-child(1)
        &:before { animation-delay: -1.1s; }
    &:nth-child(2)
        &:before { animation-delay: -1.0s; }
    &:nth-child(3)
        &:before { animation-delay: -0.9s; }
    &:nth-child(4)
        &:before { animation-delay: -0.8s; }
    &:nth-child(5)
        &:before { animation-delay: -0.7s; }
    &:nth-child(6)
        &:before { animation-delay: -0.6s; }
`
