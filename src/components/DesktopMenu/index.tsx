import React, { useMemo, useState } from 'react'

import {
    Container
} from './styles'


import menuData from '../../assets/data/menu'

interface MenuProps{
    id: number;
    title: string;
}

const DesktopMenu:React.FC = () => {

    const [menu, setMenu] = useState<MenuProps[]>([])

    useMemo(() => {
        setMenu(menuData)
    }, [])

    return (
        <Container>
            <nav>
                <ul>
                    {menu.map(item => (
                        <li key={item.id}>{item.title}</li>
                    ))}
                </ul>
            </nav>
        </Container>
    )
}

export default DesktopMenu