import React from 'react'
import Header from '../../components/Header'
import { 
    Container,
    Content,
    MasterCraftContent
} from './styles'

import logoMastercraft from '../../assets/images/logo-mastercraft.svg'
import iconBookMark from '../../assets/images/icon-bookmark.svg'

const Home:React.FC = () => {
    return (
        <Container>
            <Header />
            <Content>
                {/* First block */}
                <section>
                    <MasterCraftContent>
                        <img src={logoMastercraft} alt="logo-mastercraft"/>
                        <div className='mastercraft-info'>
                            <h1>Mastercraft Bamboo Monitor Riser</h1>
                            <p>A beautiful & handcrafted monitor stand to reduce neck and eye strain.</p>
                        </div>
                        <div className='mastercraft-buttons'>
                            <button className='button-back-this-project'>Back this project</button>
                            <button className='button-bookmark'>
                                <img src={iconBookMark} alt="bookmark-icon"/>      
                            <p>Bookmark</p>
                            </button>
                        </div>
                    </MasterCraftContent>
                </section>    
            </Content>
        </Container>
    )
}

export default Home