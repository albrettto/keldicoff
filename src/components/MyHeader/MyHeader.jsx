import React, {useState} from 'react'
import cl from './MyHeader.module.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {ReactComponent as LogoSVG} from '../../images/KELDICOFF.svg'

const MyHeader = (page) => {

  const [style, setStyle] = useState('navItem');

  if(page.page === 'menu') {
    setStyle('navItem-dark');
  }

  return (
    <header>
      <Row className='justify-content-around mt-5 mb-4'>
        <Col xs={5}>
          <LogoSVG/>
        </Col>
        <Col xs={3} className='justify-content-center mt-4'>
          <span className='mx-4'><a className={style} href="\">ГЛАВНАЯ</a></span>
          <span className='mx-4'><a className={style} href="menu">МЕНЮ</a></span>
          <span className='mx-4'><a className={style} href="about">О НАС</a></span>
        </Col>
      </Row>
    </header>
  )
}

export default MyHeader