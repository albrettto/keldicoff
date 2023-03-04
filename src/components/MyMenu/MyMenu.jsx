import React, { useState } from 'react'
import cl from './MyMenu.module.css'
import Row from 'react-bootstrap/Row';
import CoffeeCard from '../CoffeeCard/CoffeeCard';
import Container from 'react-bootstrap/Container';

const Menu = (coffee) => {

  function menu(cof){
    console.log(cof[0][0])
    return (
      <>
        <div className='pt-5'></div>
        <a name={cof[0][0].category}></a>

        <p className={cl.title}>{cof[0][0].category}</p>
        {cof.map((co) => (
          <>
            <p className={cl.subtitle}>{co[0].type}</p>
            <Row className='row-cols-5'>
              {co.map((c) => (
                <CoffeeCard coffee={c} key={c.id}/>
              ))}
            </Row>
          </>
        ))}
      </>
    )
  }

  return (
    <Container className='pb-5'>
      {coffee.coffee.map((cof)=>menu(cof))}
    </Container>
  )
}

export default Menu