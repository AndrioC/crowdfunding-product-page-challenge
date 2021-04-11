import React from 'react'

import {
    Container,
    Wrapper
} from './styles'

const BoxInfo:React.FC = () => {

    const qtd = 0

    return (
        <Container>
            <Wrapper qtdValue={qtd}>
                <div className='info-header'>
                    <h1>Bamboo Stand</h1>
                    <p>Pledge $25 or more</p>
                </div>
                <div className='info-text'>
                    <p>
                        You get an ergonomic stand made of natural bamboo. You've helped us launch <br />
                        our promotional campaign, and you'll be added to a special Backer member list.
                    </p>
                </div>
                <div className='info-button'>
                    <p>{qtd} <span>left</span></p>
                    <button type="button">Select Reward</button>
                </div>
            </Wrapper>
        </Container>
    )
}

export default BoxInfo