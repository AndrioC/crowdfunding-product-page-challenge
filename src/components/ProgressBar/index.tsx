import React, { useState } from 'react'
import { 
    Container,
    ProgressTracker
}
 from './styles'

const ProgressBar:React.FC = () => {

    const [percentageValue, setPercentageValue] = useState(90)

    function limitValue(min: number, value: number, max: number){
        return Math.min(Math.max(min, value), max);
    }

    return (
        <Container>
            <ProgressTracker percentage={limitValue(0, percentageValue, 100)}/>    
        </Container>
    )
}

export default ProgressBar