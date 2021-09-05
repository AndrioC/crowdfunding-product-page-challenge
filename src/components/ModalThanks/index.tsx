import React from 'react'
import Modal from 'react-modal'

import {
    Container,
    Wrapper,
} from './styles'

import iconCheckImage from "../../assets/images/icon-check.svg";

import './modal.css'

interface Props{
    openModalThanks: boolean;
    setOpenModalThanks(e: boolean): void;
}

const ModalThanks: React.FC<Props> = ({ openModalThanks, setOpenModalThanks }) => {
    return (
        <Container>
            <Modal
                isOpen={openModalThanks}
                onRequestClose={() => setOpenModalThanks(false)}
                className="ModalThanks"
                overlayClassName="Overlay"
            >
            <Wrapper>
                <img src={iconCheckImage} alt="confirmation-check"/>
                <div className="text-thanks-support">
                    <h1>Thanks for your support!</h1>
                    <p>
                        Your pledge brings us one step closer to sharing Mastercraft
                        Bamboo Monitor Riser worldwide. You will get an email once our
                        campaign is completed.
                    </p>
                    <button
                        type="button"
                        onClick={() => setOpenModalThanks(false)}>
                            Got it
                    </button>
                </div>   
            </Wrapper>
            </Modal>
        </Container>
    )
}

export default ModalThanks