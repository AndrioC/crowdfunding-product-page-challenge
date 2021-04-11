import React from 'react'
import DesktopMenu from '../DesktopMenu'
import { 
    Container,
    Content
}
 from './styles'

import logoImg from '../../assets/images/logo.svg'

const Header:React.FC = () => {
    return (
        <Container>
            <Content>
                <img src={logoImg} alt="logo"/> 
                <DesktopMenu />
            </Content>
        </Container>
    )
}

export default Header