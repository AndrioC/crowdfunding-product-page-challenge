import React from 'react'
import DesktopMenu from '../DesktopMenu'
import MobileMenu from '../MobileMenu'
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
                <div className="mobile-menu">
                    <MobileMenu />
                </div>
                <div className="desktop-menu">
                    <DesktopMenu />
                </div>
            </Content>
        </Container>
    )
}

export default Header