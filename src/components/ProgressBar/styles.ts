import styled from 'styled-components'

interface ProgressTrackerProps{
    percentage: number;
}

export const Container = styled.div`
    width: 50%;
    height: 20px;
    margin: 15px auto;
    background: rgb(34,34,34);
    border-radius: 10px;
    box-shadow: inset 0 0 5px #000;
`;

export const ProgressTracker = styled.div<ProgressTrackerProps>`
    width: ${props => props.percentage}%;
    height: 100%;
    background: red;
    border-radius: 10px;
    transition: width .3s ease-in-out;
`;