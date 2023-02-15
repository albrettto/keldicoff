import React from 'react'
import cl from './MyMenu.module.css'
import Row from 'react-bootstrap/Row';
import CoffeeCard from '../CoffeeCard/CoffeeCard';
import Container from 'react-bootstrap/Container';

const Menu = (coffee) => {

  return (
    <Container>
        <p className={cl.subtitle}>Мокка</p>
        <Row className='row-cols-5'>
            {coffee.coffee.map((cof) => <CoffeeCard coffee={cof}/> )}
        </Row>
    </Container>
  )
}

export default Menu