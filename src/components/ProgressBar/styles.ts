import styled from 'styled-components'

interface ProgressTrackerProps{
    percentage: number;
}

export const Container = styled.div`
    width: 633px;
    height: 12px;
    margin: 15px auto;
    background: var(--grey-10);
    border-radius: 10px;
    
`;

export const ProgressTracker = styled.div<ProgressTrackerProps>`
    width: ${props => props.percentage}%;
    height: 100%;
    background: var(--green-50);
    border-radius: 10px;
    transition: width .3s ease-in-out;
`;