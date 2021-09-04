import React from 'react'

import {
    Container,
    Wrapper
} from './styles'

interface Props{
    title: string;
    price: number;
    description: string;
    qtd: number;
    
}

const BoxInfo:React.FC<Props> = ({ title, price, description, qtd }) => {

    return (
        <Container>
            <Wrapper qtdValue={qtd}>
                <div className='info-header'>
                    <h1>{title}</h1>
                    <p>Pledge ${price} or more</p>
                </div>
                <div className='info-text'>
                    <p>
                        {description}.
                    </p>
                </div>
                <div className='info-button'>
                    <p>{qtd} <span>left</span></p>
                    <button type="button">{qtd > 0 ? 'Select Reward' : 'Out of stock'}</button>
                </div>
            </Wrapper>
        </Container>
    )
}

export default BoxInfo