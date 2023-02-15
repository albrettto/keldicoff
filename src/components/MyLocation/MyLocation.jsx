import React from 'react'
import cl from './MyLocation.module.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CupOfCoffee from '../../images/cupOfCoffee.png'


const MyLocation = () => {
  return (
    <div className="">
      <p className={cl.weAre}><a name="geoLoc"></a> МЫ НАХОДИМСЯ</p>
      <div className={cl.line}></div>
      <img className={cl.cupOfCoffee} src={CupOfCoffee} alt=""/>
      <div className={cl.addres}>
        <Row>
            <Col xs={4}>
                <p className={cl.info}>ул. Карла Маркса, 12</p>
                <p className={cl.info}>Пн-Пт: 08:00 - 22:00</p>
                <p className={cl.info}>Сб, Вс: 10:00 - 20:00</p>
                <p className={cl.info}>Тел. <a className={cl.phone} href="tel:+79988956777">+7 998 89-56-777</a></p>
            </Col>
            <Col xs={4}>
                <p className={cl.info}>ул. Ленина, 22</p>
                <p className={cl.info}>Пн-Пт: 08:00 - 22:00</p>
                <p className={cl.info}>Сб, Вс: 10:00 - 24:00</p>
                <p className={cl.info}>Тел. <a className={cl.phone} href="tel:+79988956776">+7 998 89-56-776</a></p>
            </Col>
        </Row>

        <Row>
            <Col xs={4}>
                <div className={cl.marg}>
                <p className={cl.info}>ул. Коммунистическая, 49</p>
                <p className={cl.info}>Пн-Пт: 08:00 - 22:00</p>
                <p className={cl.info}>Сб, Вс: 10:00 - 24:00</p>
                <p className={cl.info}>Тел. <a className={cl.phone} href="tel:+79988956775">+7 998 89-56-775</a></p>   
                </div>
            </Col>
            <Col xs={4}>
                <div className={cl.marg}><p className={cl.info}>ул. Гоголя, 56</p>
                <p className={cl.info}>Пн-Пт: 08:00 - 22:00</p>
                <p className={cl.info}>Сб, Вс: 10:00 - 24:00</p>
                <p className={cl.info}>Тел. <a className={cl.phone} href="tel:+79988956774">+7 998 89-56-774</a></p>
                </div>
            </Col>
        </Row>
      </div>
    </div>
  )
}

export default MyLocation