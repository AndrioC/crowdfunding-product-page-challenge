import React, { useState } from 'react'

import backthisproject from '../../assets/data/backthisproject'

import {
    BoxInfo,
    BoxWrapper,
    BoxWrapperSelect,
} from './styles'

import ModalThanks from '../../components/ModalThanks'

const BackThisProjectInfo: React.FC = () => {

    const [idChange, setIdChange] = useState(0);

    const [openModalThanks, setOpenModalThanks] = useState(false);

    return (
        <>
        {backthisproject.map((project, index) => (
            <BoxInfo>
                <BoxWrapper qtdValue={project.qtd ? project.qtd : 0} idChange={idChange} indexValue={index}>
                    <BoxWrapperSelect idChange={idChange} indexValue={index} onClick={() => setIdChange(project.id)}>
                        <button type="button">
                            <div>
                                <div></div>
                            </div>
                        </button>
                    </BoxWrapperSelect>

                    <div className="box-wrapper-info">
                        <div className="box-wrapper-title">
                            <div className="box-wrapper-title-and-price">
                                <span>{project.title}</span>
                                {project.price ? <span style={{color: "#3CB3AB"}}>Pledge ${project.price} or more</span> : ""}                            
                            </div>
                            <div className="box-wrapper-qtd">
                                {project.qtd && project.qtd >= 0? <p>{project.qtd} <span>left</span></p> : ""}
                            </div>
                        </div>
                        <div className="box-wrapper-text">
                            <p>
                                {project.description}
                            </p>
                        </div>
                        <div className="box-wrapper-enter-pledge">
                            <div className="box-wrapper-enter-pledge-title">
                                <p>Enter your pledge</p>
                            </div>
                            <div className="box-wrapper-enter-pledge-button">
                                <div className="box-wrapper-enter-pledge-button-input-pledge">
                                    <p>$</p>
                                    <input type="number" max="99" name="value" id="value" />
                                </div>
                                <button type="button" onClick={() => setOpenModalThanks(true)}>Continue</button>
                            </div>
                        </div>
                    </div>
                </BoxWrapper>
                <ModalThanks 
                    openModalThanks={openModalThanks}
                    setOpenModalThanks={setOpenModalThanks}    
                />
            </BoxInfo>  
        ))}
        </>        
    )
}

export default BackThisProjectInfo