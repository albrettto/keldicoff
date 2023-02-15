import React, { useState }  from 'react'
import cl from './MyModal.module.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import {ReactComponent as CloseSVG} from '../../images/close.svg'

const MyModal = (coffee) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <Modal show={show} onHide={handleClose} animation={false} size="xl" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Body className='p-5 mb-5'>
            <Row className='justify-content-end'>
                <button className={cl.close} onClick={handleClose}><CloseSVG/></button>
            </Row>
            <Row>
                <Col xs={5}>
                    <img src={coffee.coffee.image} alt="" className={cl.pictModal}/>
                </Col>
                <Col xs={6} className='mx-4'>
                    <p className={cl.titleModal}>{coffee.coffee.name}</p>
                    <span className='pt-3'><p className={cl.textModal}>{coffee.coffee.description}</p></span>
                    <span className='pt-5'><p className={cl.infoModal}>{coffee.coffee.info}</p></span>
                    <span className='pb-0'><p className={cl.priceModal}>{coffee.coffee.price} ₽</p></span>
                </Col>
            </Row>
        </Modal.Body>
    </Modal>
  )
}

export default MyModal
