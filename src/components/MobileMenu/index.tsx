import React, { useMemo, useState, useRef, useEffect } from 'react'

import {
    Container
} from './styles'

import { GiHamburgerMenu } from 'react-icons/gi';

import menuData from '../../assets/data/menu'

interface MenuProps{
    id: number;
    title: string;
}


const MobileMenu:React.FC = () => {
    const [menu, setMenu] = useState<MenuProps[]>([])

    const [openMenu, setOpenMenu] = useState(false);

    const ref = useRef(null);

    useEffect(() => {
        const checkIfClickedOutside =( e: MouseEvent) => {

          if (openMenu && ref.current && !(ref.current! as any).contains(e.target)) {
            setOpenMenu(false)
          }
        }
        document.addEventListener("mousedown", checkIfClickedOutside)
        return () => {
          document.removeEventListener("mousedown", checkIfClickedOutside)
        }
    }, [openMenu])

    useMemo(() => {
        setMenu(menuData)
    }, [])

    return (
        <Container openMenu={openMenu} ref={ref}>
            <nav>
                <GiHamburgerMenu 
                    onClick={() => setOpenMenu(!openMenu)}
                />
                <ul>
                    {menu.map(item => (
                        <li key={item.id}>{item.title}</li>
                    ))}
                </ul>
            </nav>
        </Container>
    )
}

export default MobileMenu