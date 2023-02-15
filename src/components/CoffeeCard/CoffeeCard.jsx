import React from 'react'
import cl from './CoffeeCard.module.css'
import Col from 'react-bootstrap/Col';

const CoffeeCard = (coffee) => {
  return (
    <Col className='p-0 mt-5 mx-3'>
        <div className={cl.coffeeCard}>
            <img className={cl.coffeePict} src={coffee.coffee.image}/>
            <p className={cl.coffeeName}>{coffee.coffee.name}</p>
            <p className={cl.coffeePrice}>{coffee.coffee.price} ₽</p>
        </div>
    </Col>
  )
}

export default CoffeeCard