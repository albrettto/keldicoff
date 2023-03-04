import React,{useState} from 'react'
import cl from './NavPanel.module.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const NavPanel = () => {
const [fix, setFix] = React.useState(false)

function setFixed() {
    if (window.scrollY > 152) {
        setFix(true)
    } else {
        setFix(false)
    }
  }

  window.addEventListener('scroll', setFixed)

  return (
    <div className={fix ? cl.navPanFixed : cl.navPan}>
        <nav className="container justify-content-between py-3">
            <Row>
                <Col xs={2}><a className={cl.navCof} href="#Горячий кофе">Горячий кофе</a></Col>
                <Col xs={2}><a className={cl.navCof} href="#Холодный кофе">Холодный кофе</a></Col>
                <Col xs={2}><a className={cl.navCof} href="#Горячие напитки">Горячие напитки</a></Col>
                <Col xs={2}><a className={cl.navCof} href="#Холодные напитки">Холодные напитки</a></Col>
                <Col xs={2}><a className={cl.navCof} href="#Горячий чай">Горячий чай</a></Col>
                <Col xs={2}><a className={cl.navCof} href="#Фраппучино">Фраппучино</a></Col>
            </Row>
        </nav>
    </div>
  )
}

export default NavPanel