import React, {useState} from 'react'
import './MyHeader.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const MyHeader = () => {

  const [style, setStyle] = useState('navItem');
  const [logo, setLogo] = useState('logo');

  if(window.location.pathname === '/menu' && style != 'navItem-dark') {
    setStyle('navItem-dark');
    setLogo('logo-dark')
  }

  if(window.location.pathname === '/about' && style != 'navItem-about') {
    setStyle('navItem-about');
  }

  return (
    <header>
      <Row className='justify-content-around pt-5 mb-4'>
        <Col xs={5}>
          <a href="\"><div className={logo}></div></a>
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