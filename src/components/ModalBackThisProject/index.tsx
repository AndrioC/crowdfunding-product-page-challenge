import React from 'react'
import Modal from 'react-modal'
import { IoMdClose } from 'react-icons/io'
import { 
    Container,
    Header,
 } from './styles'

import BackThisProjectInfo from '../BackThisProjectInfo'

interface Props{
    openModal: boolean;
    setOpenModal(e: boolean): void;
}

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: 730,
        height: 906,
    },
  };

const ModalBackThisProject: React.FC<Props> = ({ openModal, setOpenModal }) => {

    return (
        <Container>
            <Modal
                isOpen={openModal}
                onRequestClose={() => setOpenModal(false)}
                contentLabel="Example Modal"
                style={customStyles}
            >
                <Header>
                    <div className="header-title">
                        <h1>Back this project</h1>
                        <p>Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?</p>
                    </div>
                    <div className="header-close-button">
                        <IoMdClose size={36} onClick={() => setOpenModal(false)}/>
                    </div>
                </Header>        
                <BackThisProjectInfo />
            </Modal>
        </Container>
    )
}

export default ModalBackThisProject