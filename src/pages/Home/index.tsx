import React from 'react'
import Header from '../../components/Header'
import { 
    Container,
    Content,
    MasterCraftContent,
    ContributionInfo,
    AboutProjectInfo,
} from './styles'

import logoMastercraft from '../../assets/images/logo-mastercraft.svg'
import iconBookMark from '../../assets/images/icon-bookmark.svg'
import ProgressBar from '../../components/ProgressBar'
import BoxInfo from '../../components/BoxInfo'

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

                <section>
                    <ContributionInfo>
                        <div className='wrapper-info'>
                            <div className='wrapper-info-value'>
                                <h1>$89,914</h1>
                                <p>of $100,000 backed</p>
                            </div>
                            <div className='wrapper-info-value'>
                                <h1>5,007</h1>
                                <p>total backers</p>
                            </div>
                            <div className='wrapper-info-value'>
                                <h1>56</h1>
                                <p>days left</p>
                            </div>
                        </div>
                        <ProgressBar />
                    </ContributionInfo>  
                </section>

                <section>
                    <AboutProjectInfo>
                        <div className='project-info'>
                            <h1>About this project</h1>
                            <p>
                                The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates <br />
                                your screen to a more comfortable viewing height. Placing your monitor at eye level has <br />
                                the potential to improve your posture and make you more comfortable white at work, <br />
                                helping you stay focused on the task at hand.

                                <br />
                                <br />
                                Featuring artisan craftsmanship, the simplicity of design creates extra desk space below <br />
                                your computer to allow notepads, pens, and USB sticks to be stored under the stand.
                            </p>
                        </div>

                        <BoxInfo />
                    </AboutProjectInfo>
                </section>
            </Content>
        </Container>
    )
}

export default Home