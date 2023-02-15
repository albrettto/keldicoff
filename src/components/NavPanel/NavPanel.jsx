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
                <Col xs={2}><a className={cl.navCof} href="#hotCoffee">Горячий кофе</a></Col>
                <Col xs={2}><a className={cl.navCof} href="#coldCoffee">Холодный кофе</a></Col>
                <Col xs={2}><a className={cl.navCof} href="#hotDrink">Горячие напитки</a></Col>
                <Col xs={2}><a className={cl.navCof} href="#coldDrink">Холодные напитки</a></Col>
                <Col xs={2}><a className={cl.navCof} href="#hotTea">Горячий чай</a></Col>
                <Col xs={2}><a className={cl.navCof} href="#frap">Фраппучино</a></Col>
            </Row>
        </nav>
    </div>
  )
}

export default NavPanel