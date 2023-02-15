import React from 'react'
import cl from './MyFooter.module.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {ReactComponent as LogoSVG} from '../../images/logoFooter.svg'

const MyFooter = () => {
  return (
    <footer>
        <Row className='justify-content-center align-content-center'>
            <Col xs={1} className='pt-5 mt-5 mx-4'>
                <LogoSVG/>
            </Col>
            <Col xs={4} className='pt-5 mt-5'>
                <Row>
                    <Col><img src="" alt=""/></Col>
                    <Col><img src="" alt=""/></Col>
                    <Col><img src="" alt=""/></Col>
                </Row>
                <p className={cl.callFoot}>ПОЗВОНИТЕ НАМ: <a className={cl.telFoot} href="tel:+78983423433">+7 898 34-23-433</a></p>
                <a className={cl.mailFoot} href="mailto:KELDICOFFFB@GMAIL.COM">KELDICOFFFB@GMAIL.COM</a>
            </Col>
            <Col xs={1} className='pt-5 mt-5'>
                <a className={cl.linkFoot} href="\">ГЛАВНАЯ</a><br/>
                <a className={cl.linkFoot} href="menu">МЕНЮ</a><br/>
                <a className={cl.linkFoot} href="about">О НАС</a>
            </Col>
        </Row>
        <span className='text-center mt-5'><p className={cl.copyright}>COPYRIGHT © KELDICOFF 2023</p></span>
        
    </footer>
  )
}

export default MyFooter