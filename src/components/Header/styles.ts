import styled from 'styled-components'

import backgroundDesktopImg from '../../assets/images/image-hero-desktop.svg'

export const Container = styled.header`
    background: url(${backgroundDesktopImg}) no-repeat;
    height: 400px;
    background-size: 100%;
    width: 100%;
`;

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 48px 166px;
`;